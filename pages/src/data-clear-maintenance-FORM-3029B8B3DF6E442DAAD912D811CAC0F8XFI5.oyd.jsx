// 武汉愿景土地 CRM - 数据清空维护页

var APP_TYPE = 'APP_LC7BU43GCVLSI0TH8POE';
var BASE_URL = 'https://aplttv.aliwork.com';
var CONFIRM_TEXT = '清空全部业务数据';
var BUSINESS_FORMS = [{
  key: 'album',
  name: '联系人相册',
  formUuid: 'FORM-8810B996367344EABC2BE83EF736CF12O5E8'
}, {
  key: 'privateProfile',
  name: '私密画像信息表',
  formUuid: 'FORM-CF98038EB6324662B420006AA269AE35ACTH'
}, {
  key: 'socialRelation',
  name: '社会关系记录表',
  formUuid: 'FORM-454981908729480982F37D41E98584D3RAXW'
}, {
  key: 'tagConfig',
  name: '标签配置表',
  formUuid: 'FORM-6CAE1527A36B48F68D2FDFB4D6DF1873DTY7'
}, {
  key: 'reminder',
  name: '重要提醒',
  formUuid: 'FORM-320958D6AD8443E68B139C537C452222OGMX'
}, {
  key: 'intel',
  name: '情报线索',
  formUuid: 'FORM-76909065F1B5460E872D3834D95B2DFFK8F0'
}, {
  key: 'relation',
  name: '项目联系人关系',
  formUuid: 'FORM-FB6E6BA777E84128A96E567646E5733DXI0O'
}, {
  key: 'visit',
  name: '拜访记录',
  formUuid: 'FORM-5C9373CB6EA5468FA607352B96908C87WHBW'
}, {
  key: 'career',
  name: '任职履历',
  formUuid: 'FORM-F6F6E0D90D344240B744CB8FF06CC25BGA7K'
}, {
  key: 'project',
  name: '项目档案',
  formUuid: 'FORM-DC58D4D9EB714ACBB421A34ADFB418ABJCVO'
}, {
  key: 'contact',
  name: '关键联系人',
  formUuid: 'FORM-87B25B011DC14AA5ACC39BE4077D520AITQS'
}, {
  key: 'unit',
  name: '单位档案',
  formUuid: 'FORM-A96B2187A20640C68C9F7806CC1FEADDZZZ8'
}];
var _customState = {
  accessDenied: false,
  scanning: false,
  running: false,
  progress: '',
  plan: [],
  result: null,
  confirmText: '',
  lastScanTime: ''
};

export function getCustomState(key) {
  if (key) return _customState[key];
  return _.clone(_customState);
}

export function setCustomState(newState) {
  Object.keys(newState).forEach(key => {
    _customState[key] = newState[key];
  });
  this.forceUpdate();
}

export function forceUpdate() {
  this.setState({
    timestamp: new Date().getTime()
  });
}

export function didMount() {
  if (this.denyNormalEmployeeAccess()) return;
  this.scanData();
}

export function didUnmount() {}

export function getLoginRoleTexts() {
  var values = [];
  var user = typeof window !== 'undefined' && window.loginUser ? window.loginUser : {};
  function collect(value) {
    if (!value) return;
    if (typeof value === 'string') {
      values.push(value);
      return;
    }
    if (Array.isArray(value)) {
      value.forEach(item => collect(item));
      return;
    }
    if (typeof value === 'object') {
      collect(value.name);
      collect(value.title);
      collect(value.roleName);
      collect(value.roleNames);
      collect(value.groupName);
      collect(value.groupNames);
    }
  }
  collect(user.roleName);
  collect(user.roleNames);
  collect(user.roles);
  collect(user.roleList);
  collect(user.roleGroups);
  collect(user.groupName);
  collect(user.groupNames);
  collect(user.groups);
  collect(user.ext);
  return values.join(' ');
}

export function isNormalEmployeeRole() {
  var roleText = this.getLoginRoleTexts();
  return roleText.indexOf('普通员工') >= 0 && roleText.indexOf('总经理办') < 0;
}

export function denyNormalEmployeeAccess() {
  if (!this.isNormalEmployeeRole()) return false;
  _customState.accessDenied = true;
  _customState.scanning = false;
  _customState.running = false;
  this.forceUpdate();
  return true;
}

export function renderAccessDenied() {
  return <div style={{ maxWidth: '680px', margin: '80px auto', padding: '32px 24px', background: '#FFFFFF', border: '1px solid #EAECF0', borderRadius: '8px', textAlign: 'center' }}>
      <div style={{ fontSize: '20px', fontWeight: 750, color: '#1D2939', marginBottom: '8px' }}>暂无查看权限</div>
      <div style={{ fontSize: '14px', color: '#667085', lineHeight: '22px' }}>数据清空维护仅开放给“市场信息管理 / 总经理办”。</div>
    </div>;
}

export function buildEmptyPlan(statusText) {
  return BUSINESS_FORMS.map(item => {
    return {
      key: item.key,
      name: item.name,
      formUuid: item.formUuid,
      count: 0,
      ids: [],
      deleted: 0,
      failed: 0,
      status: statusText || '待统计'
    };
  });
}

export function scanData() {
  var self = this;
  if (_customState.running || _customState.scanning) return;
  _customState.scanning = true;
  _customState.progress = '正在统计待清空数据...';
  _customState.result = null;
  _customState.plan = this.buildEmptyPlan('待统计');
  this.forceUpdate();

  var chain = Promise.resolve();
  BUSINESS_FORMS.forEach(formItem => {
    chain = chain.then(() => {
      _customState.progress = '正在统计：' + formItem.name;
      self.forceUpdate();
      return self.fetchFormRows(formItem, 1, []).then(rows => {
        var ids = [];
        rows.forEach(row => {
          var id = self.getRowId(row);
          if (id && ids.indexOf(id) < 0) ids.push(id);
        });
        self.updatePlanItem(formItem.formUuid, {
          count: ids.length,
          ids: ids,
          status: ids.length ? '待清空' : '无数据'
        });
        self.forceUpdate();
      });
    });
  });

  return chain.then(() => {
    _customState.scanning = false;
    _customState.lastScanTime = self.formatNow();
    _customState.progress = '统计完成，共 ' + self.getTotalCount() + ' 条业务数据';
    self.forceUpdate();
  }).catch(err => {
    _customState.scanning = false;
    _customState.progress = '统计失败：' + self.getErrorMessage(err);
    self.forceUpdate();
    self.utils.toast({
      title: '统计待清空数据失败',
      type: 'error'
    });
  });
}

export function fetchFormRows(formItem, page, accRows) {
  var self = this;
  var currentPage = page || 1;
  var allRows = accRows || [];
  return self.utils.yida.searchFormDatas({
    formUuid: formItem.formUuid,
    currentPage: currentPage,
    pageSize: 100
  }).then(res => {
    var rows = self.normalizeRows(res);
    var total = self.normalizeTotal(res, 0);
    allRows = allRows.concat(rows);
    if (rows.length >= 100 && (!total || allRows.length < total)) {
      return self.fetchFormRows(formItem, currentPage + 1, allRows);
    }
    return allRows;
  }).catch(err => {
    throw err;
  });
}

export function handleConfirmChange(e) {
  _customState.confirmText = e && e.target ? e.target.value : '';
}

export function startClearData() {
  var total = this.getTotalCount();
  if (_customState.scanning) {
    this.utils.toast({
      title: '正在统计数据，请稍候',
      type: 'notice'
    });
    return;
  }
  if (_customState.running) return;
  if (!total) {
    this.utils.toast({
      title: '当前没有可清空的业务数据',
      type: 'notice'
    });
    return;
  }
  if (_customState.confirmText !== CONFIRM_TEXT) {
    this.utils.toast({
      title: '请输入确认文案后再清空',
      type: 'warning'
    });
    return;
  }
  if (typeof window !== 'undefined' && window.confirm && !window.confirm('确认清空全部业务数据？共 ' + total + ' 条，操作不可恢复。')) {
    return;
  }
  this.executeClearData();
}

export function executeClearData() {
  var self = this;
  var tasks = [];
  (_customState.plan || []).forEach(item => {
    (item.ids || []).forEach(id => {
      tasks.push({
        formName: item.name,
        formUuid: item.formUuid,
        formInstId: id
      });
    });
  });
  if (!tasks.length) {
    this.utils.toast({
      title: '当前没有可清空的业务数据',
      type: 'notice'
    });
    return;
  }

  _customState.running = true;
  _customState.result = null;
  _customState.progress = '开始清空，共 ' + tasks.length + ' 条业务数据';
  (_customState.plan || []).forEach(item => {
    item.deleted = 0;
    item.failed = 0;
    item.status = item.count ? '清空中' : '无数据';
  });
  this.forceUpdate();

  var deleted = 0;
  var failed = 0;
  var failures = [];
  var runNext = index => {
    if (index >= tasks.length) return Promise.resolve();
    var task = tasks[index];
    _customState.progress = '正在删除 ' + (index + 1) + '/' + tasks.length + '：' + task.formName;
    self.forceUpdate();
    return self.deleteFormRecord(task.formInstId).then(() => {
      deleted += 1;
      self.markResult(task.formUuid, true);
      if ((index + 1) % 25 === 0) {
        return self.sleep(300).then(() => runNext(index + 1));
      }
      return runNext(index + 1);
    }).catch(err => {
      failed += 1;
      failures.push({
        formName: task.formName,
        formInstId: task.formInstId,
        message: self.getErrorMessage(err)
      });
      self.markResult(task.formUuid, false);
      return runNext(index + 1);
    });
  };

  return runNext(0).then(() => {
    _customState.running = false;
    _customState.confirmText = '';
    _customState.progress = failed ? '清空完成，存在失败项' : '清空完成';
    _customState.result = {
      total: tasks.length,
      deleted: deleted,
      failed: failed,
      failures: failures
    };
    var input = typeof document !== 'undefined' ? document.getElementById('clear-confirm-input') : null;
    if (input) input.value = '';
    self.forceUpdate();
    self.utils.toast({
      title: failed ? '清空完成，部分数据失败' : '业务数据已清空',
      type: failed ? 'warning' : 'success'
    });
    self.scanData();
  }).catch(err => {
    _customState.running = false;
    _customState.progress = '清空失败：' + self.getErrorMessage(err);
    self.forceUpdate();
    self.utils.toast({
      title: '清空业务数据失败',
      type: 'error'
    });
  });
}

export function deleteFormRecord(formInstId) {
  var csrfToken = window.g_config && window.g_config._csrf_token || '';
  var origin = typeof window !== 'undefined' && window.location && window.location.origin ? window.location.origin : BASE_URL;
  var body = ['_api=nattyFetch', '_mock=false', '_csrf_token=' + encodeURIComponent(csrfToken), '_stamp=' + Date.now(), 'formInstId=' + encodeURIComponent(formInstId)].join('&');
  return fetch(origin + '/dingtalk/web/' + APP_TYPE + '/v1/form/deleteFormData.json', {
    method: 'POST',
    credentials: 'include',
    headers: {
      accept: 'application/json, text/json',
      'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'x-requested-with': 'XMLHttpRequest'
    },
    body: body
  }).then(res => res.json()).then(json => {
    if (!json || json.success !== true) {
      throw new Error(json && (json.errorMsg || json.message) || '删除失败');
    }
    return json;
  }).catch(err => {
    throw err;
  });
}

export function updatePlanItem(formUuid, data) {
  (_customState.plan || []).forEach(item => {
    if (item.formUuid === formUuid) {
      Object.keys(data).forEach(key => {
        item[key] = data[key];
      });
    }
  });
}

export function markResult(formUuid, success) {
  (_customState.plan || []).forEach(item => {
    if (item.formUuid === formUuid) {
      if (success) item.deleted = (item.deleted || 0) + 1;else item.failed = (item.failed || 0) + 1;
      if (item.failed) item.status = '有失败';else if (item.deleted >= item.count) item.status = '已清空';else item.status = '清空中';
    }
  });
}

export function normalizeRows(res) {
  return res && res.data || res && res.content && res.content.data || res && res.content && res.content.list || [];
}

export function normalizeTotal(res, fallback) {
  return res && res.totalCount || res && res.content && res.content.totalCount || fallback || 0;
}

export function getRowId(row) {
  return row && (row.formInstId || row.formInstanceId || row.instanceId || row.id) || '';
}

export function getErrorMessage(err) {
  if (!err) return '未知错误';
  return err.message || err.errorMsg || '未知错误';
}

export function getTotalCount() {
  var total = 0;
  (_customState.plan || []).forEach(item => {
    total += item.count || 0;
  });
  return total;
}

export function getHandledCount() {
  var total = 0;
  (_customState.plan || []).forEach(item => {
    total += (item.deleted || 0) + (item.failed || 0);
  });
  return total;
}

export function formatNow() {
  var date = new Date();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  var monthText = month < 10 ? '0' + month : '' + month;
  var dayText = day < 10 ? '0' + day : '' + day;
  var hourText = hour < 10 ? '0' + hour : '' + hour;
  var minuteText = minute < 10 ? '0' + minute : '' + minute;
  var secondText = second < 10 ? '0' + second : '' + second;
  return date.getFullYear() + '-' + monthText + '-' + dayText + ' ' + hourText + ':' + minuteText + ':' + secondText;
}

export function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms || 0);
  });
}

export function renderPlanRow(item) {
  var handled = (item.deleted || 0) + (item.failed || 0);
  var statusText = handled ? '已删 ' + (item.deleted || 0) + '，失败 ' + (item.failed || 0) : item.status;
  return <div key={item.key} style={styles.planRow}>
      <div style={styles.formName}>{item.name}</div>
      <div style={styles.formUuid}>{item.formUuid}</div>
      <div style={styles.count}>{item.count || 0} 条</div>
      <div style={styles.status}>{statusText}</div>
    </div>;
}

export function renderResult() {
  var result = _customState.result;
  if (!result) return null;
  return <div style={result.failed ? styles.resultWarning : styles.resultSuccess}>
      <div>已处理 {result.total} 条，成功 {result.deleted} 条，失败 {result.failed} 条</div>
      {result.failures && result.failures.length ? <div style={styles.failureList}>
          {result.failures.slice(0, 5).map(item => <div key={item.formInstId}>{item.formName}：{item.message}</div>)}
        </div> : null}
    </div>;
}

export function renderJsx() {
  var self = this;
  var timestamp = this.state && this.state.timestamp;
  var isMobile = this.utils.isMobile();
  if (_customState.accessDenied) {
    return <div style={styles.page}>
        <div style={{ display: 'none' }}>{timestamp}</div>
        {this.renderAccessDenied()}
      </div>;
  }
  var total = this.getTotalCount();
  var handled = this.getHandledCount();
  var disabled = _customState.scanning || _customState.running;
  var canClear = total > 0 && !disabled;
  var contentStyle = isMobile ? styles.contentMobile : styles.content;
  var shellStyle = isMobile ? styles.shellMobile : styles.shell;
  return <div style={styles.page}>
      <div style={{
      display: 'none'
    }}>{timestamp}</div>
      <div style={shellStyle}>
        <div style={styles.header}>
          <div>
            <div style={styles.eyebrow}>武汉愿景土地咨询有限公司</div>
            <div style={isMobile ? styles.titleMobile : styles.title}>数据清空维护</div>
            <div style={styles.subtitle}>清空范围为本应用全部业务表数据，不删除自定义页面、表单结构和应用配置。</div>
          </div>
          <button disabled={disabled} onClick={e => {
          self.scanData();
        }} style={Object.assign({}, styles.secondaryButton, disabled ? styles.buttonDisabled : {})}>重新统计</button>
        </div>

        <div style={contentStyle}>
          <div style={styles.warning}>
            操作不可恢复。请先确认统计清单，输入确认文案后再执行清空。
          </div>

          <div style={isMobile ? styles.summaryGridMobile : styles.summaryGrid}>
            <div style={styles.summaryCard}>
              <div style={styles.summaryLabel}>待清空</div>
              <div style={styles.summaryValue}>{total}</div>
              <div style={styles.summaryHint}>业务数据记录</div>
            </div>
            <div style={styles.summaryCard}>
              <div style={styles.summaryLabel}>已处理</div>
              <div style={styles.summaryValue}>{handled}</div>
              <div style={styles.summaryHint}>当前执行进度</div>
            </div>
            <div style={styles.summaryCard}>
              <div style={styles.summaryLabel}>业务表</div>
              <div style={styles.summaryValue}>{BUSINESS_FORMS.length}</div>
              <div style={styles.summaryHint}>仅 receipt 表</div>
            </div>
          </div>

          {_customState.progress && <div style={styles.progress}>{_customState.progress}</div>}
          {_customState.lastScanTime && <div style={styles.lastScan}>最近统计：{_customState.lastScanTime}</div>}

          <div style={styles.plan}>
            {(_customState.plan || []).map(item => self.renderPlanRow(item))}
          </div>

          <div style={styles.confirmBox}>
            <div style={styles.confirmLabel}>确认文案</div>
            <div style={isMobile ? styles.confirmActionsMobile : styles.confirmActions}>
              <input id="clear-confirm-input" defaultValue="" disabled={disabled} placeholder={'输入“' + CONFIRM_TEXT + '”'} onChange={e => {
              self.handleConfirmChange(e);
            }} style={styles.confirmInput} />
              <button disabled={!canClear} onClick={e => {
              self.startClearData();
            }} style={Object.assign({}, styles.dangerButton, !canClear ? styles.dangerButtonDisabled : {})}>清空全部业务数据</button>
            </div>
          </div>

          {this.renderResult()}
        </div>
      </div>
    </div>;
}

var styles = {
  page: {
    minHeight: '100vh',
    background: '#F5F6F8',
    color: '#101828',
    fontFamily: '-apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", sans-serif',
    borderRadius: '0 !important',
    boxSizing: 'border-box'
  },
  shell: {
    width: 'calc(100% - 96px)',
    maxWidth: '1160px',
    margin: '0 auto',
    padding: '28px 0 42px',
    boxSizing: 'border-box'
  },
  shellMobile: {
    padding: '16px 12px 28px',
    boxSizing: 'border-box'
  },
  header: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: '16px',
    marginBottom: '18px'
  },
  eyebrow: {
    color: '#667085',
    fontSize: '13px',
    lineHeight: '20px',
    marginBottom: '4px'
  },
  title: {
    color: '#101828',
    fontSize: '28px',
    lineHeight: '36px',
    fontWeight: 900
  },
  titleMobile: {
    color: '#101828',
    fontSize: '23px',
    lineHeight: '31px',
    fontWeight: 900
  },
  subtitle: {
    color: '#475467',
    fontSize: '14px',
    lineHeight: '22px',
    marginTop: '6px',
    maxWidth: '760px'
  },
  content: {
    background: '#FFFFFF',
    border: '1px solid #EAECF0',
    borderRadius: '8px',
    padding: '20px',
    boxSizing: 'border-box',
    boxShadow: '0 8px 24px rgba(15, 23, 42, 0.04)'
  },
  contentMobile: {
    background: '#FFFFFF',
    border: '1px solid #EAECF0',
    borderRadius: '8px',
    padding: '14px',
    boxSizing: 'border-box',
    boxShadow: '0 8px 24px rgba(15, 23, 42, 0.04)'
  },
  warning: {
    border: '1px solid #FDA29B',
    background: '#FFFBFA',
    color: '#B42318',
    borderRadius: '8px',
    padding: '11px 12px',
    fontSize: '13px',
    lineHeight: '20px',
    marginBottom: '14px'
  },
  summaryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: '12px',
    marginBottom: '12px'
  },
  summaryGridMobile: {
    display: 'grid',
    gap: '10px',
    marginBottom: '12px'
  },
  summaryCard: {
    minHeight: '92px',
    border: '1px solid #EAECF0',
    borderRadius: '8px',
    background: '#FCFCFD',
    padding: '13px 14px',
    boxSizing: 'border-box'
  },
  summaryLabel: {
    color: '#667085',
    fontSize: '12px',
    lineHeight: '18px'
  },
  summaryValue: {
    color: '#101828',
    fontSize: '28px',
    lineHeight: '34px',
    fontWeight: 900,
    marginTop: '2px'
  },
  summaryHint: {
    color: '#98A2B3',
    fontSize: '12px',
    lineHeight: '18px',
    marginTop: '2px'
  },
  progress: {
    color: '#155EEF',
    fontSize: '13px',
    lineHeight: '20px',
    marginBottom: '4px'
  },
  lastScan: {
    color: '#667085',
    fontSize: '12px',
    lineHeight: '18px',
    marginBottom: '12px'
  },
  plan: {
    display: 'grid',
    gap: '8px'
  },
  planRow: {
    display: 'grid',
    gridTemplateColumns: 'minmax(120px, 1fr) minmax(180px, 1.4fr) 76px 104px',
    alignItems: 'center',
    gap: '10px',
    minHeight: '42px',
    border: '1px solid #F2F4F7',
    borderRadius: '8px',
    background: '#FFFFFF',
    padding: '8px 10px',
    boxSizing: 'border-box'
  },
  formName: {
    color: '#344054',
    fontSize: '13px',
    lineHeight: '18px',
    fontWeight: 700,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  formUuid: {
    color: '#98A2B3',
    fontSize: '12px',
    lineHeight: '18px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  count: {
    color: '#101828',
    fontSize: '13px',
    lineHeight: '18px',
    fontWeight: 800,
    textAlign: 'right'
  },
  status: {
    color: '#667085',
    fontSize: '12px',
    lineHeight: '18px',
    textAlign: 'right',
    whiteSpace: 'nowrap'
  },
  confirmBox: {
    borderTop: '1px solid #EAECF0',
    marginTop: '16px',
    paddingTop: '16px'
  },
  confirmLabel: {
    color: '#344054',
    fontSize: '13px',
    lineHeight: '20px',
    fontWeight: 700,
    marginBottom: '8px'
  },
  confirmActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  confirmActionsMobile: {
    display: 'grid',
    gap: '10px'
  },
  confirmInput: {
    flex: 1,
    minWidth: 0,
    height: '38px',
    borderRadius: '8px',
    border: '1px solid #D0D5DD',
    padding: '0 12px',
    color: '#344054',
    fontSize: '13px',
    outline: 'none',
    boxSizing: 'border-box'
  },
  secondaryButton: {
    height: '36px',
    borderRadius: '8px',
    padding: '0 14px',
    border: '1px solid #D0D5DD',
    background: '#FFFFFF',
    color: '#344054',
    fontSize: '13px',
    fontWeight: 700,
    cursor: 'pointer',
    outline: 'none',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box'
  },
  dangerButton: {
    height: '38px',
    borderRadius: '8px',
    padding: '0 16px',
    border: '1px solid #D92D20',
    background: '#D92D20',
    color: '#FFFFFF',
    fontSize: '14px',
    fontWeight: 800,
    cursor: 'pointer',
    outline: 'none',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box'
  },
  buttonDisabled: {
    opacity: 0.56,
    cursor: 'not-allowed'
  },
  dangerButtonDisabled: {
    opacity: 0.5,
    cursor: 'not-allowed'
  },
  resultSuccess: {
    border: '1px solid #ABEFC6',
    background: '#F6FEF9',
    color: '#027A48',
    borderRadius: '8px',
    padding: '10px 12px',
    fontSize: '13px',
    lineHeight: '20px',
    marginTop: '12px'
  },
  resultWarning: {
    border: '1px solid #FEDF89',
    background: '#FFFCF5',
    color: '#B54708',
    borderRadius: '8px',
    padding: '10px 12px',
    fontSize: '13px',
    lineHeight: '20px',
    marginTop: '12px'
  },
  failureList: {
    marginTop: '6px',
    color: '#667085'
  }
};
