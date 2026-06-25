// 拜访记录 - 自定义页面
var APP_TYPE = 'APP_LC7BU43GCVLSI0TH8POE';
var FORMS = {
  page: 'FORM-02C2269B84C44EFFB83ECF629F05AB94I339',
  visitDetail: 'FORM-6CC5A6BBE39F439CA213B8CC3BD7E429GQW1',
  visit: 'FORM-5C9373CB6EA5468FA607352B96908C87WHBW'
};
var FIELDS = {
  visit: {
    title: 'textField_kyv32ess0',
    contact: 'associationFormField_kyv33bc8s',
    unit: 'associationFormField_2yle119gl',
    project: 'associationFormField_kyv35uxhy',
    people: 'employeeField_kyv36zyqq',
    method: 'selectField_kyv378rc2',
    time: 'dateField_kyv38g8dw',
    place: 'textField_kyv390cmy',
    content: 'textareaField_kyv3acyym',
    nextAction: 'textareaField_0usd1fstw',
    nextDate: 'dateField_kyv3f3sgc',
    auth: 'employeeField_kyv3jcji3',
    attachment: 'attachmentField_kyv3kmuep',
    recorder: 'employeeField_kyv3ln90f',
    recordTime: 'dateField_kyv3mec5i'
  }
};
var METHOD_OPTIONS = ['全部', '上门', '电话', '饭局', '会议', '培训会', '活动', '微信'];
var _customState = {
  loading: true,
  error: '',
  accessDenied: false,
  keyword: '',
  methodFilter: '全部',
  sortBy: 'time',
  currentPage: 1,
  pageSize: 6,
  visits: [],
  totalVisits: 0,
  refreshTimer: null,
  _isComposing: false
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
  _customState.loading = false;
  _customState.error = '';
  this.forceUpdate();
  return true;
}
export function renderAccessDenied() {
  return <div style={{ maxWidth: '680px', margin: '80px auto', padding: '32px 24px', background: '#FFFFFF', border: '1px solid #EAECF0', borderRadius: '8px', textAlign: 'center' }}>
      <div style={{ fontSize: '20px', fontWeight: 750, color: '#1D2939', marginBottom: '8px' }}>暂无查看权限</div>
      <div style={{ fontSize: '14px', color: '#667085', lineHeight: '22px' }}>拜访记录列表仅开放给“市场信息管理 / 总经理办”。普通员工可在普通员工首页提交拜访线索，提交后不可回看。</div>
    </div>;
}
export function didMount() {
  var self = this;
  if (this.denyNormalEmployeeAccess()) return;
  this.loadVisits(true);
  _customState.refreshTimer = setInterval(() => {
    self.loadVisits(false);
  }, 90000);
}
export function didUnmount() {
  if (_customState.refreshTimer) {
    clearInterval(_customState.refreshTimer);
    _customState.refreshTimer = null;
  }
}
export function loadVisits(showLoading) {
  var self = this;
  if (showLoading !== false) {
    _customState.loading = true;
    _customState.error = '';
    this.forceUpdate();
  }
  var order = {};
  order[FIELDS.visit.time] = '-';
  return this.utils.yida.searchFormDatas({
    formUuid: FORMS.visit,
    currentPage: 1,
    pageSize: 100,
    dynamicOrder: JSON.stringify(order)
  }).then(res => {
    var rows = self.normalizeRows(res);
    _customState.visits = rows;
    _customState.totalVisits = self.normalizeTotal(res, rows.length);
    _customState.loading = false;
    _customState.error = '';
    self.forceUpdate();
  }).catch(err => {
    _customState.visits = [];
    _customState.totalVisits = 0;
    _customState.loading = false;
    _customState.error = self.getErrorMessage(err);
    self.forceUpdate();
    self.utils.toast({
      title: '拜访记录加载失败，请稍后重试',
      type: 'error'
    });
  });
}
export function normalizeRows(res) {
  return res && res.data || res && res.content && res.content.data || res && res.content && res.content.list || [];
}
export function normalizeTotal(res, fallback) {
  return res && res.totalCount || res && res.content && res.content.totalCount || fallback || 0;
}
export function getErrorMessage(err) {
  if (!err) return '未知错误';
  return err.message || err.errorMsg || '未知错误';
}
export function getFormData(row) {
  return row && row.formData || {};
}
export function rawValue(row, fieldId) {
  return this.getFormData(row)[fieldId];
}
export function rawAssociation(row, fieldId) {
  var raw = this.rawValue(row, fieldId);
  if (raw !== undefined && raw !== null && raw !== '') return raw;
  return this.rawValue(row, fieldId + '_id');
}
export function getValue(row, fieldId) {
  return this.formatValue(this.rawValue(row, fieldId));
}
export function parseMaybeJson(value) {
  if (typeof value !== 'string') return value;
  var parsed = value.trim();
  if (!parsed) return '';
  for (var i = 0; i < 2; i += 1) {
    if (typeof parsed !== 'string') return parsed;
    var current = parsed.trim();
    if (current.charAt(0) !== '[' && current.charAt(0) !== '{' && current.charAt(0) !== '"') return parsed;
    try {
      parsed = JSON.parse(current);
    } catch (err) {
      return parsed;
    }
  }
  return parsed;
}
export function formatValue(value) {
  var parsed = this.parseMaybeJson(value);
  if (parsed === undefined || parsed === null || parsed === '') return '-';
  if (Array.isArray(parsed)) {
    if (!parsed.length) return '-';
    return parsed.map(item => this.formatValue(item)).join('、');
  }
  if (typeof parsed === 'object') {
    return parsed.name || parsed.label || parsed.title || parsed.text || parsed.value || parsed.displayName || parsed.userName || parsed.nickName || '-';
  }
  return parsed;
}
export function getAssociationText(row, fieldId) {
  return this.formatValue(this.rawAssociation(row, fieldId));
}
export function formatDate(value) {
  if (!value || value === '-') return '-';
  var num = Number(value);
  if (!num) return '-';
  var d = new Date(num);
  var month = d.getMonth() + 1;
  var day = d.getDate();
  var monthText = month < 10 ? '0' + month : '' + month;
  var dayText = day < 10 ? '0' + day : '' + day;
  return d.getFullYear() + '-' + monthText + '-' + dayText;
}
export function getRowId(row) {
  return row && (row.formInstId || row.formInstanceId || row.instanceId || row.id) || '';
}
export function getVisitTime(row) {
  return Number(this.rawValue(row, FIELDS.visit.time)) || Number(this.rawValue(row, FIELDS.visit.recordTime)) || 0;
}
export function getVisitTitle(row) {
  var title = this.getValue(row, FIELDS.visit.title);
  if (title !== '-') return title;
  var method = this.getValue(row, FIELDS.visit.method);
  var date = this.formatDate(this.getVisitTime(row));
  if (method !== '-' && date !== '-') return method + '拜访记录 · ' + date;
  return '未命名拜访记录';
}
export function getSummary(row) {
  var content = this.getValue(row, FIELDS.visit.content);
  if (content !== '-') return content;
  return '暂无内容摘要';
}
export function getSearchText(row) {
  var fields = [FIELDS.visit.title, FIELDS.visit.contact, FIELDS.visit.unit, FIELDS.visit.project, FIELDS.visit.people, FIELDS.visit.method, FIELDS.visit.place, FIELDS.visit.content, FIELDS.visit.nextAction, FIELDS.visit.recorder];
  var self = this;
  var text = fields.map(fieldId => {
    return self.getValue(row, fieldId);
  }).join(' ');
  text += ' ' + this.getAssociationText(row, FIELDS.visit.contact);
  text += ' ' + this.getAssociationText(row, FIELDS.visit.unit);
  text += ' ' + this.getAssociationText(row, FIELDS.visit.project);
  return text.toLowerCase();
}
export function getFilteredVisits() {
  var self = this;
  var keyword = (_customState.keyword || '').trim().toLowerCase();
  var list = _customState.visits.filter(row => {
    var method = self.getValue(row, FIELDS.visit.method);
    var keywordMatched = !keyword || self.getSearchText(row).indexOf(keyword) >= 0;
    var methodMatched = _customState.methodFilter === '全部' || method === _customState.methodFilter;
    return keywordMatched && methodMatched;
  });
  return this.sortVisits(list);
}
export function sortVisits(list) {
  var self = this;
  var sorted = list.slice(0);
  sorted.sort((a, b) => {
    if (_customState.sortBy === 'nextDate') {
      return (Number(self.rawValue(a, FIELDS.visit.nextDate)) || 9999999999999) - (Number(self.rawValue(b, FIELDS.visit.nextDate)) || 9999999999999);
    }
    return self.getVisitTime(b) - self.getVisitTime(a);
  });
  return sorted;
}
export function getTotalPage(total) {
  var page = Math.ceil((total || 0) / _customState.pageSize);
  return page < 1 ? 1 : page;
}
export function getCurrentPageVisits() {
  var list = this.getFilteredVisits();
  var totalPage = this.getTotalPage(list.length);
  if (_customState.currentPage > totalPage) _customState.currentPage = totalPage;
  var start = (_customState.currentPage - 1) * _customState.pageSize;
  return list.slice(start, start + _customState.pageSize);
}
export function handleCompositionStart() {
  _customState._isComposing = true;
}
export function handleCompositionEnd(e) {
  _customState._isComposing = false;
  _customState.keyword = e && e.target ? e.target.value : _customState.keyword;
  _customState.currentPage = 1;
  this.forceUpdate();
}
export function handleSearchChange(e) {
  if (_customState._isComposing) return;
  _customState.keyword = e && e.target ? e.target.value : '';
  _customState.currentPage = 1;
  this.forceUpdate();
}
export function handleSearchKeyDown(e) {
  if (_customState._isComposing) return;
  if (e && e.key === 'Enter') {
    _customState.currentPage = 1;
    this.forceUpdate();
  }
}
export function setMethodFilter(value) {
  _customState.methodFilter = _customState.methodFilter === value ? '全部' : value || '全部';
  _customState.currentPage = 1;
  this.forceUpdate();
}
export function setSortBy(e) {
  _customState.sortBy = e && e.target ? e.target.value : 'time';
  _customState.currentPage = 1;
  this.forceUpdate();
}
export function resetFilters() {
  _customState.keyword = '';
  _customState.methodFilter = '全部';
  _customState.sortBy = 'time';
  _customState.currentPage = 1;
  ['visit-keyword-main', 'visit-keyword-mobile'].forEach(id => {
    var input = document.getElementById(id);
    if (input) input.value = '';
  });
  this.forceUpdate();
}
export function clearKeyword() {
  _customState.keyword = '';
  _customState.currentPage = 1;
  ['visit-keyword-main', 'visit-keyword-mobile'].forEach(id => {
    var input = document.getElementById(id);
    if (input) input.value = '';
  });
  this.forceUpdate();
}
export function goPage(delta) {
  var list = this.getFilteredVisits();
  var totalPage = this.getTotalPage(list.length);
  var next = _customState.currentPage + delta;
  if (next < 1) next = 1;
  if (next > totalPage) next = totalPage;
  _customState.currentPage = next;
  this.forceUpdate();
}
export function refreshData() {
  this.utils.toast({
    title: '正在刷新拜访记录',
    type: 'notice'
  });
  this.loadVisits(true);
}
export function openNativeForm(formUuid) {
  this.utils.router.push(formUuid, {}, false);
}
export function openSubmissionForm(formUuid) {
  var base = typeof window !== 'undefined' && window.location ? window.location.origin : '';
  window.location.href = base + '/' + APP_TYPE + '/submission/' + formUuid;
}
export function recordVisit() {
  this.openSubmissionForm(FORMS.visit);
}
export function openDetail(row) {
  var id = this.getRowId(row);
  if (!id) {
    this.openSubmissionForm(FORMS.visit);
    return;
  }
  this.utils.router.push(FORMS.visitDetail, {
    formInstId: id
  }, false);
}
export function methodTone(method) {
  if (method === '上门') return 'door';
  if (method === '微信') return 'wechat';
  if (method === '电话') return 'default';
  if (method === '饭局' || method === '活动') return 'warning';
  if (method === '会议' || method === '培训会') return 'purple';
  return 'primary';
}
export function getMetricData() {
  var self = this;
  var visits = _customState.visits || [];
  var now = new Date();
  var month = now.getMonth();
  var year = now.getFullYear();
  var thisMonth = visits.filter(row => {
    var time = self.getVisitTime(row);
    if (!time) return false;
    var d = new Date(time);
    return d.getFullYear() === year && d.getMonth() === month;
  }).length;
  var followups = visits.filter(row => {
    return self.getValue(row, FIELDS.visit.nextAction) !== '-';
  }).length;
  var unitCount = visits.filter(row => {
    return self.getAssociationText(row, FIELDS.visit.unit) !== '-';
  }).length;
  return {
    total: _customState.totalVisits || visits.length,
    thisMonth: thisMonth,
    followups: followups,
    unitCount: unitCount
  };
}
export function renderBadge(text, toneName) {
  var colors = {
    primary: {
      bg: '#EAF2FF',
      color: '#155EEF',
      border: '#D6E8FF'
    },
    success: {
      bg: '#ECFDF3',
      color: '#027A48',
      border: '#ABEFC6'
    },
    warning: {
      bg: '#FFF7E6',
      color: '#B54708',
      border: '#FEDF89'
    },
    danger: {
      bg: '#FEF3F2',
      color: '#B42318',
      border: '#FECDCA'
    },
    door: {
      bg: '#FEF3F2',
      color: '#B42318',
      border: '#FECDCA'
    },
    wechat: {
      bg: '#E0F2FE',
      color: '#026AA2',
      border: '#BAE6FD'
    },
    purple: {
      bg: '#F4EBFF',
      color: '#6941C6',
      border: '#E9D7FE'
    },
    default: {
      bg: '#F2F4F7',
      color: '#475467',
      border: '#EAECF0'
    }
  };
  var c = colors[toneName] || colors.default;
  return <span style={Object.assign({}, styles.badge, {
    background: c.bg,
    color: c.color,
    border: '1px solid ' + c.border
  })}>
      {text || '-'}
    </span>;
}
export function renderButton(label, type, onClick) {
  var primary = type === 'primary';
  return <button onClick={e => {
    if (onClick) onClick(e);
  }} style={Object.assign({}, styles.button, primary ? styles.buttonPrimary : styles.buttonDefault)}>
      {label}
    </button>;
}
export function renderTopbar(isMobile) {
  return <div style={isMobile ? styles.topbarMobile : styles.topbar}>
      <div style={styles.topTitle}>拜访记录</div>
    </div>;
}
export function renderHero(isMobile) {
  var filtered = this.getFilteredVisits().length;
  var total = _customState.totalVisits || _customState.visits.length;
  return <div style={isMobile ? styles.heroMobile : styles.hero}>
      <div>
        <div style={styles.pageTitle}>拜访记录</div>
        <div style={styles.pageSub}>共 {total} 条记录{filtered !== total ? '，当前筛选 ' + filtered + ' 条' : ''}</div>
      </div>
      <div style={styles.heroActions}>
        {this.renderButton('+ 记录拜访', 'primary', e => {
        this.recordVisit();
      })}
      </div>
    </div>;
}
export function renderMetrics(isMobile) {
  var data = this.getMetricData();
  var cards = [{
    title: '拜访总数',
    value: data.total,
    sub: '全部记录',
    tone: 'primary'
  }, {
    title: '本月拜访',
    value: data.thisMonth,
    sub: '按拜访时间统计',
    tone: 'success'
  }, {
    title: '有后续动作',
    value: data.followups,
    sub: '需要继续跟进',
    tone: 'warning'
  }, {
    title: '已关联单位',
    value: data.unitCount,
    sub: '按单位关联统计',
    tone: 'primary'
  }];
  return <div style={isMobile ? styles.metricGridMobile : styles.metricGrid}>
      {cards.map(item => <div key={item.title} style={styles.metricCard}>
          <div style={styles.metricLabel}>{item.title}</div>
          <div style={Object.assign({}, styles.metricValue, item.tone === 'success' ? styles.metricGreen : item.tone === 'warning' ? styles.metricOrange : item.tone === 'danger' ? styles.metricRed : styles.metricBlue)}>{item.value}</div>
          <div style={styles.metricSub}>{item.sub}</div>
        </div>)}
    </div>;
}
export function renderFilterBar(isMobile) {
  var self = this;
  return <div style={styles.filterPanel}>
      <div style={styles.mainSearch}>
        <span style={styles.searchIcon}>⌕</span>
        <input id={isMobile ? 'visit-keyword-mobile' : 'visit-keyword-main'} defaultValue={_customState.keyword} placeholder="搜索标题、联系人、摘要、参与人..." onCompositionStart={e => {
        self.handleCompositionStart(e);
      }} onCompositionEnd={e => {
        self.handleCompositionEnd(e);
      }} onChange={e => {
        self.handleSearchChange(e);
      }} onKeyDown={e => {
        self.handleSearchKeyDown(e);
      }} style={styles.filterInput} />
        {_customState.keyword && <button onClick={e => {
        self.clearKeyword();
      }} style={styles.clearSearch}>×</button>}
      </div>
      <div style={styles.filterLine}>
        <span style={styles.filterLabel}>拜访方式：</span>
        {METHOD_OPTIONS.filter(item => item !== '全部').map(item => {
        var active = _customState.methodFilter === item;
        return <button key={item} onClick={e => {
          self.setMethodFilter(item);
        }} style={Object.assign({}, styles.segment, active ? styles.segmentActive : {})}>
              {item}
            </button>;
      })}
        <button onClick={e => {
        self.resetFilters();
      }} style={styles.resetButton}>重置</button>
      </div>
    </div>;
}
export function renderVisitMeta(label, value) {
  return <span style={styles.metaItem}>
      <span style={styles.metaLabel}>{label}</span>{value || '-'}
    </span>;
}
export function renderVisitCard(row, isMobile) {
  var self = this;
  var method = this.getValue(row, FIELDS.visit.method);
  var project = this.getAssociationText(row, FIELDS.visit.project);
  var unit = this.getAssociationText(row, FIELDS.visit.unit);
  var contact = this.getAssociationText(row, FIELDS.visit.contact);
  var people = this.getValue(row, FIELDS.visit.people);
  var recorder = this.getValue(row, FIELDS.visit.recorder);
  var place = this.getValue(row, FIELDS.visit.place);
  var nextAction = this.getValue(row, FIELDS.visit.nextAction);
  var nextDate = this.formatDate(this.rawValue(row, FIELDS.visit.nextDate));
  var participant = people !== '-' ? people : recorder;
  return <div key={this.getRowId(row)} style={styles.visitCard} onClick={e => {
    self.openDetail(row);
  }}>
      <div style={isMobile ? styles.cardHeadMobile : styles.cardHead}>
        <div style={styles.cardTitleWrap}>
          <div style={styles.titleLine}>
            {this.renderBadge(method, this.methodTone(method))}
            <span style={styles.cardTitle}>{this.getVisitTitle(row)}</span>
            {project !== '-' && this.renderBadge(project, 'purple')}
            {unit !== '-' && this.renderBadge(unit, 'default')}
          </div>
          <div style={styles.metaLine}>
            {this.renderVisitMeta('主联系人：', contact)}
            {this.renderVisitMeta('我方：', participant)}
            {this.renderVisitMeta('地点：', place)}
          </div>
        </div>
        <div style={styles.cardRight}>
          <div style={styles.dateText}>{this.formatDate(this.getVisitTime(row))}</div>
        </div>
      </div>
      <div style={styles.summaryText}>{this.getSummary(row)}</div>
      <div style={styles.actionLine}>
        <span style={styles.actionIcon}>○</span>
        <span style={styles.actionText}>后续：{nextAction !== '-' ? nextAction : '暂无后续动作'}</span>
        {nextDate !== '-' && <span style={styles.nextDate}>（{nextDate}）</span>}
      </div>
      <button onClick={e => {
      e.stopPropagation();
      self.openDetail(row);
    }} style={styles.detailButton}>
        详情 ›
      </button>
    </div>;
}
export function renderList(isMobile) {
  var self = this;
  var list = this.getCurrentPageVisits();
  var filtered = this.getFilteredVisits();
  var totalPage = this.getTotalPage(filtered.length);
  return <div>
      {filtered.length === 0 ? this.renderEmpty('暂无匹配拜访记录') : <div style={styles.list}>
          {list.map(item => self.renderVisitCard(item, isMobile))}
        </div>}
      {filtered.length > _customState.pageSize && <div style={styles.pager}>
          <span>第 {_customState.currentPage} / {totalPage} 页，共 {filtered.length} 条</span>
          <div style={styles.pagerActions}>
            <button onClick={e => {
          self.goPage(-1);
        }} style={styles.pagerButton}>上一页</button>
            <button onClick={e => {
          self.goPage(1);
        }} style={styles.pagerButton}>下一页</button>
          </div>
        </div>}
    </div>;
}
export function renderEmpty(text) {
  return <div style={styles.empty}>{text}</div>;
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
  topbar: {
    height: '56px',
    background: '#FFFFFF',
    borderBottom: '1px solid #E5E7EB',
    display: 'flex',
    alignItems: 'center',
    padding: '0 16px',
    boxSizing: 'border-box'
  },
  topbarMobile: {
    background: '#FFFFFF',
    borderBottom: '1px solid #E5E7EB',
    padding: '12px',
    boxSizing: 'border-box'
  },
  topTitle: {
    fontSize: '17px',
    fontWeight: 800,
    color: '#111827'
  },
  content: {
    padding: '24px 32px 36px',
    maxWidth: '1320px',
    margin: '0 auto',
    boxSizing: 'border-box'
  },
  contentMobile: {
    padding: '14px 12px 24px',
    boxSizing: 'border-box'
  },
  hero: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '24px'
  },
  heroMobile: {
    display: 'grid',
    gap: '12px',
    marginBottom: '16px'
  },
  pageTitle: {
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: 800,
    color: '#101828'
  },
  pageSub: {
    color: '#667085',
    fontSize: '14px',
    marginTop: '2px'
  },
  heroActions: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap'
  },
  button: {
    height: '38px',
    borderRadius: '8px',
    padding: '0 16px',
    fontSize: '14px',
    fontWeight: 700,
    cursor: 'pointer',
    outline: 'none',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box'
  },
  buttonPrimary: {
    background: '#155EEF',
    color: '#FFFFFF',
    border: '1px solid #155EEF'
  },
  buttonDefault: {
    background: '#FFFFFF',
    color: '#344054',
    border: '1px solid #D0D5DD'
  },
  notice: {
    padding: '10px 12px',
    borderRadius: '8px',
    marginBottom: '12px',
    fontSize: '13px',
    border: '1px solid #B9D6FF',
    background: '#EFF6FF',
    color: '#155EEF'
  },
  error: {
    padding: '10px 12px',
    borderRadius: '8px',
    marginBottom: '12px',
    fontSize: '13px',
    border: '1px solid #FECDCA',
    background: '#FEF3F2',
    color: '#B42318'
  },
  metricGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
    gap: '14px',
    marginBottom: '16px'
  },
  metricGridMobile: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: '8px',
    marginBottom: '12px'
  },
  metricCard: {
    background: '#FFFFFF',
    border: '1px solid #EAECF0',
    borderRadius: '8px',
    padding: '14px 16px',
    boxSizing: 'border-box'
  },
  metricLabel: {
    fontSize: '13px',
    color: '#667085'
  },
  metricValue: {
    fontSize: '26px',
    lineHeight: '30px',
    fontWeight: 800,
    marginTop: '4px'
  },
  metricBlue: {
    color: '#155EEF'
  },
  metricGreen: {
    color: '#039855'
  },
  metricOrange: {
    color: '#B54708'
  },
  metricRed: {
    color: '#D92D20'
  },
  metricSub: {
    fontSize: '12px',
    color: '#667085',
    marginTop: '2px'
  },
  filterPanel: {
    background: '#FFFFFF',
    border: '1px solid #EAECF0',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '18px',
    boxSizing: 'border-box'
  },
  mainSearch: {
    height: '38px',
    borderRadius: '8px',
    background: '#F8FAFC',
    border: '1px solid #EEF2F6',
    display: 'flex',
    alignItems: 'center',
    padding: '0 12px',
    boxSizing: 'border-box',
    minWidth: 0
  },
  searchIcon: {
    color: '#98A2B3',
    fontSize: '15px',
    marginRight: '8px',
    flexShrink: 0
  },
  filterInput: {
    width: '100%',
    height: '34px',
    border: 'none',
    outline: 'none',
    background: 'transparent',
    fontSize: '14px',
    color: '#344054',
    boxSizing: 'border-box'
  },
  clearSearch: {
    width: '22px',
    height: '22px',
    borderRadius: '50%',
    border: 'none',
    background: 'transparent',
    color: '#98A2B3',
    fontSize: '18px',
    lineHeight: '20px',
    cursor: 'pointer',
    padding: 0,
    flexShrink: 0
  },
  filterLine: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    flexWrap: 'wrap',
    marginTop: '12px'
  },
  filterLabel: {
    fontSize: '13px',
    color: '#667085',
    lineHeight: '30px'
  },
  filterLabelInline: {
    fontSize: '13px',
    color: '#667085',
    lineHeight: '30px',
    marginLeft: '14px'
  },
  segment: {
    height: '30px',
    borderRadius: '8px',
    border: '1px solid #D0D5DD',
    background: '#FFFFFF',
    color: '#344054',
    padding: '0 12px',
    fontSize: '13px',
    cursor: 'pointer',
    boxSizing: 'border-box'
  },
  segmentActive: {
    background: '#EAF2FF',
    color: '#155EEF',
    borderColor: '#B9D6FF',
    fontWeight: 700
  },
  select: {
    height: '32px',
    borderRadius: '8px',
    border: '1px solid #D0D5DD',
    background: '#FFFFFF',
    color: '#344054',
    padding: '0 10px',
    fontSize: '13px',
    outline: 'none',
    boxSizing: 'border-box'
  },
  resetButton: {
    height: '32px',
    border: 'none',
    background: 'transparent',
    color: '#155EEF',
    fontSize: '13px',
    cursor: 'pointer',
    padding: '0 4px'
  },
  list: {
    display: 'grid',
    gap: '14px'
  },
  visitCard: {
    position: 'relative',
    background: '#FFFFFF',
    border: '1px solid #EAECF0',
    borderRadius: '8px',
    padding: '18px 54px 18px 20px',
    boxSizing: 'border-box',
    cursor: 'pointer',
    boxShadow: '0 8px 20px rgba(16,24,40,0.03)'
  },
  cardHead: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '18px',
    alignItems: 'flex-start'
  },
  cardHeadMobile: {
    display: 'grid',
    gap: '10px'
  },
  cardTitleWrap: {
    minWidth: 0,
    flex: 1
  },
  titleLine: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    flexWrap: 'wrap',
    minWidth: 0
  },
  cardTitle: {
    fontSize: '15px',
    lineHeight: '24px',
    fontWeight: 800,
    color: '#101828',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: '860px'
  },
  cardRight: {
    display: 'grid',
    justifyItems: 'end',
    gap: '6px',
    flexShrink: 0
  },
  metaLine: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '14px',
    marginTop: '8px',
    color: '#475467'
  },
  metaItem: {
    fontSize: '12px',
    lineHeight: '18px',
    color: '#475467'
  },
  metaLabel: {
    color: '#667085'
  },
  summaryText: {
    fontSize: '14px',
    lineHeight: '22px',
    color: '#344054',
    marginTop: '12px'
  },
  actionLine: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    flexWrap: 'wrap',
    color: '#155EEF',
    fontSize: '13px',
    lineHeight: '20px',
    marginTop: '10px'
  },
  actionIcon: {
    fontWeight: 800
  },
  actionText: {
    fontWeight: 700
  },
  nextDate: {
    color: '#667085',
    fontWeight: 400
  },
  dateText: {
    fontSize: '12px',
    color: '#667085',
    lineHeight: '18px',
    whiteSpace: 'nowrap'
  },
  detailButton: {
    position: 'absolute',
    right: '18px',
    top: '50%',
    transform: 'translateY(-50%)',
    border: 'none',
    background: 'transparent',
    color: '#155EEF',
    fontSize: '13px',
    fontWeight: 700,
    cursor: 'pointer',
    padding: '0',
    whiteSpace: 'nowrap'
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    minHeight: '22px',
    padding: '1px 8px',
    borderRadius: '8px',
    fontSize: '12px',
    lineHeight: '18px',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box'
  },
  pager: {
    marginTop: '14px',
    background: '#FFFFFF',
    border: '1px solid #EAECF0',
    borderRadius: '8px',
    padding: '10px 12px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '10px',
    color: '#667085',
    fontSize: '13px',
    boxSizing: 'border-box'
  },
  pagerActions: {
    display: 'flex',
    gap: '8px'
  },
  pagerButton: {
    height: '30px',
    borderRadius: '8px',
    border: '1px solid #D0D5DD',
    background: '#FFFFFF',
    color: '#344054',
    padding: '0 10px',
    cursor: 'pointer',
    fontSize: '13px',
    boxSizing: 'border-box'
  },
  empty: {
    background: '#FFFFFF',
    border: '1px solid #EAECF0',
    borderRadius: '8px',
    padding: '42px 12px',
    color: '#98A2B3',
    textAlign: 'center',
    fontSize: '14px'
  }
};
export function renderJsx() {
  var timestamp = this.state && this.state.timestamp;
  var isMobile = this.utils.isMobile();
  if (_customState.accessDenied) {
    return <div style={styles.page}>
        <div style={{ display: 'none' }}>{timestamp}</div>
        {this.renderAccessDenied()}
      </div>;
  }
  return <div style={styles.page}>
      <div style={{
      display: 'none'
    }}>{timestamp}</div>
      {this.renderTopbar(isMobile)}
      <div style={isMobile ? styles.contentMobile : styles.content}>
        {this.renderHero(isMobile)}
        {_customState.loading && <div style={styles.notice}>正在加载数据...</div>}
        {_customState.error && <div style={styles.error}>{_customState.error}</div>}
        {this.renderFilterBar(isMobile)}
        {this.renderList(isMobile)}
      </div>
    </div>;
}
