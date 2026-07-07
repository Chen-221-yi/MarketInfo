// 市场信息管理系统 首页工作台

var APP_TYPE = 'APP_LC7BU43GCVLSI0TH8POE';
var BASE_URL = 'https://aplttv.aliwork.com';
var FORMS = {
  contactManage: 'FORM-99CDE5F8732145A29304285F2E0A9B05D5CM',
  contactDetail: 'FORM-89CA116EA0134CACB77EAA0F87AA7AB8MD1C',
  visitManage: 'FORM-02C2269B84C44EFFB83ECF629F05AB94I339',
  visitDetail: 'FORM-6CC5A6BBE39F439CA213B8CC3BD7E429GQW1',
  leadManage: 'FORM-4E927F6C9D1E43EC8226DDB561F31FAC4OF7',
  leadDetail: 'FORM-48EA952D879B4D1D94580C2EA14B7AE43HM9',
  projectManage: 'FORM-CAC6AFFA0A3341B598561F68EE7B4B8BTZGB',
  projectDetail: 'FORM-3367C1CD6BDB4FE995BCA69ECFF03419Q0A4',
  unitManage: 'FORM-CA9908793C7C4EA3997B43B5BF5FAA34KEAC',
  unit: 'FORM-A96B2187A20640C68C9F7806CC1FEADDZZZ8',
  contact: 'FORM-87B25B011DC14AA5ACC39BE4077D520AITQS',
  project: 'FORM-DC58D4D9EB714ACBB421A34ADFB418ABJCVO',
  visit: 'FORM-5C9373CB6EA5468FA607352B96908C87WHBW',
  career: 'FORM-F6F6E0D90D344240B744CB8FF06CC25BGA7K',
  relation: 'FORM-FB6E6BA777E84128A96E567646E5733DXI0O',
  reminder: 'FORM-320958D6AD8443E68B139C537C452222OGMX',
  intel: 'FORM-76909065F1B5460E872D3834D95B2DFFK8F0',
  tagConfig: 'FORM-6CAE1527A36B48F68D2FDFB4D6DF1873DTY7',
  privateProfile: 'FORM-CF98038EB6324662B420006AA269AE35ACTH',
  socialRelation: 'FORM-454981908729480982F37D41E98584D3RAXW',
  album: 'FORM-8810B996367344EABC2BE83EF736CF12O5E8'
};
var CLEAR_DATA_CONFIRM_TEXT = '清空全部业务数据';
var BUSINESS_DATA_FORMS = [{
  key: 'album',
  name: '联系人相册',
  formUuid: FORMS.album
}, {
  key: 'privateProfile',
  name: '私密画像信息表',
  formUuid: FORMS.privateProfile
}, {
  key: 'socialRelation',
  name: '社会关系记录表',
  formUuid: FORMS.socialRelation
}, {
  key: 'tagConfig',
  name: '标签配置表',
  formUuid: FORMS.tagConfig
}, {
  key: 'reminder',
  name: '重要提醒',
  formUuid: FORMS.reminder
}, {
  key: 'intel',
  name: '情报线索',
  formUuid: FORMS.intel
}, {
  key: 'relation',
  name: '项目联系人关系',
  formUuid: FORMS.relation
}, {
  key: 'visit',
  name: '拜访记录',
  formUuid: FORMS.visit
}, {
  key: 'career',
  name: '任职履历',
  formUuid: FORMS.career
}, {
  key: 'project',
  name: '项目档案',
  formUuid: FORMS.project
}, {
  key: 'contact',
  name: '关键联系人',
  formUuid: FORMS.contact
}, {
  key: 'unit',
  name: '单位档案',
  formUuid: FORMS.unit
}];
var FIELDS = {
  unit: {
    name: 'textField_gqbk2dh1r',
    shortName: 'textField_gqbk3q3b8',
    type: 'selectField_gqbk4xyoq',
    system: 'selectField_gqbk5upc2',
    region: 'addressField_mq52xi6b',
    level: 'selectField_gqbk73418',
    business: 'textareaField_gqbk9dwrh'
  },
  contact: {
    name: 'textField_ibw42mevu',
    alias: 'textField_ibw43dvjm',
    star: 'selectField_ibw457hck',
    type: 'selectField_ibw56nd6d',
    status: 'selectField_ibw57natj',
    stage: 'selectField_ibw58zzom',
    unit: 'associationFormField_ibw594k2s',
    department: 'textField_ibw5a32dk',
    position: 'textField_ibw5bqqub',
    level: 'textField_ibw5c8y8r',
    business: 'textareaField_ibw5dggkt',
    region: 'addressField_mq52ftwy',
    office: 'textField_ibw5fovhz',
    workPhone: 'textField_ibw5ggxs1',
    mobile: 'textField_ibw5hxai9',
    wechat: 'textField_ibw5iw2gg',
    tags: 'associationFormField_a5dv128m1',
    familiar: 'employeeField_ibw5k2k03',
    owner: 'employeeField_ibw5l5fgu',
    birthDate: 'dateField_mpp8m6hw',
    lastVisit: 'dateField_ibw5mkmv9',
    nextDue: 'dateField_ibw5nexxj',
    visitStatus: 'selectField_ibw5o8pd5',
    secrecy: 'selectField_ibw5rildh',
    source: 'textareaField_ibw5swzca'
  },
  project: {
    name: 'textField_jpjm21hie',
    shortName: 'textField_jpjm3hpoz',
    region: 'textField_jpjn4z298',
    unit: 'associationFormField_jpjn5lpv8',
    type: 'selectField_jpjn6kai0',
    phase: 'selectField_jpjn73b05',
    star: 'selectField_jpjn8e1tu',
    owner: 'employeeField_jpjn9lyh5',
    members: 'employeeField_jpjna6ksi',
    summary: 'textareaField_jpjnctccb',
    keyProgress: 'textareaField_jpjndkc1w',
    risk: 'textareaField_jpjnf46ew',
    block: 'textareaField_jpjngp2l6',
    nextAction: 'textareaField_jpjnh16i8',
    nextOwner: 'employeeField_jpjniimk7',
    nextDate: 'dateField_jpjnjcxmp',
    recent: 'textareaField_jpjnk9q1c',
    recentDate: 'dateField_jpjnl71j3',
    status: 'selectField_jpjnm9c66',
    sourceLead: 'associationFormField_o8c51p6t3'
  },
  visit: {
    serial: 'serialNumberField_kyv216g78',
    title: 'textField_kyv32ess0',
    contact: 'associationFormField_kyv33bc8s',
    unit: 'associationFormField_2yle119gl',
    project: 'associationFormField_kyv35uxhy',
    lead: 'associationFormField_o2e81pniy',
    people: 'employeeField_kyv36zyqq',
    watchers: 'employeeField_o2e82mhmy',
    handlers: 'employeeField_o2e83lzlv',
    method: 'selectField_kyv378rc2',
    time: 'dateField_kyv38g8dw',
    place: 'textField_kyv390cmy',
    content: 'textareaField_kyv3acyym',
    nextAction: 'textareaField_0usd1fstw',
    nextDate: 'dateField_kyv3f3sgc',
    recorder: 'employeeField_kyv3ln90f',
    recordTime: 'dateField_kyv3mec5i'
  },
  reminder: {
    contact: 'associationFormField_n31w2yat4',
    title: 'textField_n31w37t96',
    type: 'selectField_n31w4pszw',
    date: 'dateField_n31w580q6',
    repeat: 'radioField_n31w6v875',
    days: 'numberField_n31w7uzfi',
    receiver: 'employeeField_n31w8pnkd',
    sourceType: 'selectField_n31wd6knw',
    template: 'textareaField_n31wa8v8n',
    status: 'selectField_n31wb0qv0'
  },
  intel: {
    serial: 'serialNumberField_o5hf11mwc',
    contact: 'associationFormField_o5hf21sgj',
    project: 'associationFormField_o5hf3lnak',
    unit: 'associationFormField_nnet1kq13',
    sourceVisit: 'associationFormField_5szc127yh',
    category: 'selectField_o5hf4u689',
    title: 'textField_o5hf51ir9',
    content: 'textareaField_o5hf6dkbq',
    importance: 'selectField_mq4vrff2',
    date: 'dateField_o5hfgz10c',
    sourceType: 'selectField_o5hf88jri',
    status: 'selectField_o5hfbq4tf',
    permission: 'selectField_o5hfdjolr',
    validUntil: 'dateField_5szd5xzdb',
    remindDate: 'dateField_5szd6vvxq',
    owner: 'employeeField_5szd78u2t',
    handlers: 'employeeField_nnet2xu74',
    watchers: 'employeeField_nnet3hm2v',
    recorder: 'employeeField_o5hff9siq',
    recordTime: 'dateField_o5hfgz10c',
    maturity: 'selectField_nneu896bu',
    nextAction: 'textareaField_5szd8976q'
  },
  career: {
    contact: 'associationFormField_719q2bt3k',
    unit: 'associationFormField_719r37ln3',
    department: 'textField_719r4dpak',
    position: 'textField_719r5dqn6',
    level: 'textField_719r6wjfb',
    business: 'textareaField_719r7pxjz',
    status: 'selectField_719r8snun'
  },
  relation: {
    project: 'associationFormField_m7me25hdh',
    contact: 'associationFormField_m7me3i0ht',
    role: 'selectField_m7me6h495',
    influence: 'selectField_m7me7mn98',
    attitude: 'selectField_m7mf8jeyu',
    familiar: 'selectField_m7mf9bxwf',
    nextAction: 'textareaField_m7mfevfco',
    recordTime: 'dateField_m7mfhqcsa',
    status: 'selectField_3ipp1yq72',
    effectiveDate: 'dateField_3iq32x07p',
    endDate: 'dateField_3iq33ncir',
    changeNote: 'textareaField_3iq34k2ek',
    changeType: 'selectField_3iq35yi6g'
  }
};
var WORK_TABS = [{
  key: 'follow',
  label: '待我跟进'
}, {
  key: 'attention',
  label: '我需关注'
}, {
  key: 'owned',
  label: '我负责的线索'
}, {
  key: 'due',
  label: '即将到期'
}, {
  key: 'latest',
  label: '最新动态'
}];
var WORK_INFO = {
  scope: {
    title: '与我相关数据口径',
    lines: ['本区域只展示与当前登录用户有关的数据。', '主要匹配跟进经办人、关注人/必看人、负责人、记录人、参与人等人员字段。', '不同 Tab 只是筛选视角不同，不代表新增任务流或审批流。']
  },
  follow: {
    title: '待我跟进',
    lines: ['数据来源：市场线索、拜访记录。', '筛选规则：当前登录人在“跟进经办人”中，且事项未关闭、未归档。', '用途说明：用于查看需要我继续推进或反馈的线索和拜访事项。']
  },
  attention: {
    title: '我需关注',
    lines: ['数据来源：市场线索、拜访记录。', '筛选规则：当前登录人在“关注人 / 必看人”中。', '用途说明：用于查看别人指定我需要了解或持续关注的事项，不等同于正式待办。']
  },
  owned: {
    title: '我负责的线索',
    lines: ['数据来源：市场线索。', '筛选规则：当前登录人为线索负责人、跟进经办人，或按当前系统已有逻辑判定为我负责的线索。', '用途说明：用于查看由我主导推进的市场线索。']
  },
  due: {
    title: '即将到期',
    lines: ['数据来源：市场线索、拜访记录、项目档案。', '筛选规则：与当前登录人相关，且提醒日期、有效截止日期或下一步计划日期临近。', '用途说明：用于提醒即将超期或需要尽快处理的事项。']
  },
  latest: {
    title: '最新动态',
    lines: ['数据来源：市场线索、拜访记录、项目档案。', '筛选规则：与当前登录人相关，并按最近创建时间、更新时间、拜访时间或项目更新时间倒序展示。', '用途说明：用于查看最近发生的线索推进、拜访记录和项目变化。']
  }
};
var _customState = {
  loading: true,
  error: '',
  searchKeyword: '',
  activeWorkTab: 'follow',
  activeWorkInfoKey: '',
  contacts: [],
  projects: [],
  visits: [],
  careers: [],
  reminders: [],
  units: [],
  intel: [],
  relations: [],
  totals: {
    contacts: 0,
    projects: 0,
    visits: 0,
    careers: 0,
    reminders: 0,
    units: 0,
    intel: 0,
    relations: 0
  },
  showAllHomeUpdates: false,
  _isComposing: false,
  refreshTimer: null,
  maintenanceOpen: false,
  clearConfirmText: '',
  clearDataRunning: false,
  clearDataScanning: false,
  clearDataProgress: '',
  clearDataPlan: [],
  clearDataResult: null
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
  var self = this;
  this.loadAllData(true);
  _customState.refreshTimer = setInterval(() => {
    self.loadAllData(false);
  }, 90000);
}
export function didUnmount() {
  if (_customState.refreshTimer) {
    clearInterval(_customState.refreshTimer);
    _customState.refreshTimer = null;
  }
}
export function loadAllData(showLoading) {
  var self = this;
  if (showLoading !== false) {
    _customState.loading = true;
    _customState.error = '';
    this.forceUpdate();
  }
  Promise.all([self.loadForm(FORMS.contact, 'contacts', 100), self.loadForm(FORMS.project, 'projects', 80), self.loadForm(FORMS.visit, 'visits', 80, FIELDS.visit.time, '-'), self.loadForm(FORMS.career, 'careers', 100), self.loadForm(FORMS.reminder, 'reminders', 80, FIELDS.reminder.date, '+'), self.loadForm(FORMS.unit, 'units', 80), self.loadForm(FORMS.intel, 'intel', 80, FIELDS.intel.date, '-'), self.loadForm(FORMS.relation, 'relations', 100)]).then(() => {
    _customState.loading = false;
    _customState.error = '';
    self.forceUpdate();
  }).catch(err => {
    _customState.loading = false;
    _customState.error = self.getErrorMessage(err);
    self.forceUpdate();
    self.utils.toast({
      title: '数据加载失败，请稍后重试',
      type: 'error'
    });
  });
}
export function loadForm(formUuid, stateKey, pageSize, orderField, direction) {
  var self = this;
  var safePageSize = Math.min(pageSize || 100, 100);
  if (orderField) {
    var order = {};
    order[orderField] = direction || '-';
    var dynamicOrder = JSON.stringify(order);
  }
  var allRows = [];
  var total = 0;
  var fetchPage = page => {
    var params = {
      formUuid: formUuid,
      currentPage: page,
      pageSize: safePageSize
    };
    if (dynamicOrder) params.dynamicOrder = dynamicOrder;
    return self.utils.yida.searchFormDatas(params).then(res => {
      var rows = self.normalizeRows(res);
      var pageTotal = self.normalizeTotal(res, 0);
      if (pageTotal) total = pageTotal;
      allRows = allRows.concat(rows);
      if (rows.length >= safePageSize && (!total || allRows.length < total)) {
        return fetchPage(page + 1);
      }
      return allRows;
    });
  };
  return fetchPage(1).then(rows => {
    _customState[stateKey] = rows;
    _customState.totals[stateKey] = total || rows.length;
  }).catch(err => {
    this.utils.toast({
      title: '加载数据失败',
      type: 'error'
    });
    throw err;
  });
}
export function openMaintenancePanel() {
  _customState.maintenanceOpen = true;
  _customState.clearConfirmText = '';
  _customState.clearDataResult = null;
  _customState.clearDataProgress = '';
  this.forceUpdate();
  this.scanClearData();
}
export function closeMaintenancePanel() {
  if (_customState.clearDataRunning || _customState.clearDataScanning) {
    this.utils.toast({
      title: '任务处理中，请稍候',
      type: 'notice'
    });
    return;
  }
  _customState.maintenanceOpen = false;
  _customState.clearConfirmText = '';
  this.forceUpdate();
}
export function buildClearPlanPlaceholder(statusText) {
  return BUSINESS_DATA_FORMS.map(item => {
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
export function getClearDataTotal() {
  var total = 0;
  (_customState.clearDataPlan || []).forEach(item => {
    total += item.count || 0;
  });
  return total;
}
export function handleClearConfirmChange(e) {
  _customState.clearConfirmText = e && e.target ? e.target.value : '';
  this.forceUpdate();
}
export function fetchClearFormRows(formItem, page, accRows) {
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
      return self.fetchClearFormRows(formItem, currentPage + 1, allRows);
    }
    return allRows;
  }).catch(err => {
    throw err;
  });
}
export function scanClearData() {
  var self = this;
  if (_customState.clearDataRunning) return;
  _customState.clearDataScanning = true;
  _customState.clearDataProgress = '正在统计待清空数据...';
  _customState.clearDataPlan = this.buildClearPlanPlaceholder('待统计');
  this.forceUpdate();
  var chain = Promise.resolve();
  BUSINESS_DATA_FORMS.forEach(formItem => {
    chain = chain.then(() => {
      _customState.clearDataProgress = '正在统计：' + formItem.name;
      self.forceUpdate();
      return self.fetchClearFormRows(formItem, 1, []).then(rows => {
        var ids = [];
        rows.forEach(row => {
          var id = self.getRowId(row);
          if (id) ids.push(id);
        });
        (_customState.clearDataPlan || []).forEach(item => {
          if (item.formUuid === formItem.formUuid) {
            item.count = ids.length;
            item.ids = ids;
            item.status = ids.length ? '待清空' : '无数据';
          }
        });
        self.forceUpdate();
      });
    });
  });
  return chain.then(() => {
    _customState.clearDataScanning = false;
    _customState.clearDataProgress = '统计完成，共 ' + self.getClearDataTotal() + ' 条业务数据';
    self.forceUpdate();
  }).catch(err => {
    _customState.clearDataScanning = false;
    _customState.clearDataProgress = '统计失败：' + self.getErrorMessage(err);
    self.forceUpdate();
    self.utils.toast({
      title: '统计待清空数据失败',
      type: 'error'
    });
  });
}
export function startClearBusinessData() {
  var total = this.getClearDataTotal();
  if (_customState.clearDataScanning) {
    this.utils.toast({
      title: '正在统计数据，请稍候',
      type: 'notice'
    });
    return;
  }
  if (_customState.clearDataRunning) return;
  if (_customState.clearConfirmText !== CLEAR_DATA_CONFIRM_TEXT) {
    this.utils.toast({
      title: '请输入确认文案后再清空',
      type: 'warning'
    });
    return;
  }
  if (!total) {
    this.utils.toast({
      title: '当前没有可清空的业务数据',
      type: 'notice'
    });
    return;
  }
  if (typeof window !== 'undefined' && window.confirm && !window.confirm('确认清空全部业务数据？共 ' + total + ' 条，操作不可恢复。')) {
    return;
  }
  this.executeClearBusinessData();
}
export function executeClearBusinessData() {
  var self = this;
  var tasks = [];
  (_customState.clearDataPlan || []).forEach(item => {
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
  _customState.clearDataRunning = true;
  _customState.clearDataResult = null;
  _customState.clearDataProgress = '开始清空，共 ' + tasks.length + ' 条业务数据';
  (_customState.clearDataPlan || []).forEach(item => {
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
    _customState.clearDataProgress = '正在删除 ' + (index + 1) + '/' + tasks.length + '：' + task.formName;
    self.forceUpdate();
    return self.deleteFormRecord(task.formInstId).then(() => {
      deleted += 1;
      self.markClearPlanResult(task.formUuid, true);
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
      self.markClearPlanResult(task.formUuid, false);
      return runNext(index + 1);
    });
  };
  return runNext(0).then(() => {
    _customState.clearDataRunning = false;
    _customState.clearConfirmText = '';
    _customState.clearDataProgress = failed ? '清空完成，存在失败项' : '清空完成';
    _customState.clearDataResult = {
      total: tasks.length,
      deleted: deleted,
      failed: failed,
      failures: failures
    };
    var input = typeof document !== 'undefined' ? document.getElementById('clear-data-confirm-input') : null;
    if (input) input.value = '';
    self.forceUpdate();
    self.loadAllData(true);
    self.utils.toast({
      title: failed ? '清空完成，部分数据失败' : '业务数据已清空',
      type: failed ? 'warning' : 'success'
    });
  }).catch(err => {
    _customState.clearDataRunning = false;
    _customState.clearDataProgress = '清空失败：' + self.getErrorMessage(err);
    self.forceUpdate();
    self.utils.toast({
      title: '清空业务数据失败',
      type: 'error'
    });
  });
}
export function markClearPlanResult(formUuid, success) {
  (_customState.clearDataPlan || []).forEach(item => {
    if (item.formUuid === formUuid) {
      if (success) item.deleted = (item.deleted || 0) + 1;else item.failed = (item.failed || 0) + 1;
      if (item.failed) item.status = '有失败';else if (item.deleted >= item.count) item.status = '已清空';else item.status = '清空中';
    }
  });
}
export function deleteFormRecord(formInstId) {
  var csrfToken = window.g_config && window.g_config._csrf_token || '';
  var body = ['_api=nattyFetch', '_mock=false', '_csrf_token=' + encodeURIComponent(csrfToken), '_stamp=' + Date.now(), 'formInstId=' + encodeURIComponent(formInstId)].join('&');
  return fetch(BASE_URL + '/dingtalk/web/' + APP_TYPE + '/v1/form/deleteFormData.json', {
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
export function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms || 0);
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
export function getValue(row, fieldId) {
  var value = this.getFormData(row)[fieldId];
  return this.formatValue(value);
}
export function formatValue(value) {
  var text = this.getReadableText(value);
  return text || '-';
}
export function rawValue(row, fieldId) {
  var data = this.getFormData(row);
  var value = data[fieldId];
  if ((value === undefined || value === null || value === '') && data[fieldId + '_id'] !== undefined) {
    value = data[fieldId + '_id'];
  }
  return this.parseAssociationValue(value);
}
export function parseAssociationValue(value) {
  var result = value;
  for (var i = 0; i < 3; i++) {
    if (typeof result !== 'string') break;
    var text = result.trim();
    if (!text) break;
    if (text.charAt(0) !== '[' && text.charAt(0) !== '{' && text.charAt(0) !== '"') break;
    try {
      result = JSON.parse(text);
    } catch (e) {
      break;
    }
  }
  return result;
}
export function getReadableText(value) {
  var parsed = this.parseAssociationValue(value);
  if (parsed === undefined || parsed === null || parsed === '' || parsed === '-') return '';
  if (Array.isArray(parsed)) {
    var texts = parsed.map(item => this.getReadableText(item)).filter(text => text);
    return texts.join('、');
  }
  if (typeof parsed === 'object') {
    var keys = ['text', 'name', 'label', 'title', 'value', 'displayName', 'userName', 'nickName', 'employeeName'];
    for (var i = 0; i < keys.length; i++) {
      var text = this.getReadableText(parsed[keys[i]]);
      if (text) return text;
    }
    return '';
  }
  var textValue = String(parsed).trim();
  if (!textValue || textValue === '-' || textValue === 'undefined' || textValue === '[object Object]') return '';
  return textValue;
}
export function getFieldText(row, fieldId) {
  return this.getReadableText(this.rawValue(row, fieldId));
}
export function getRowId(row) {
  return row && (row.formInstId || row.formInstanceId || row.instanceId || row.id) || '';
}
export function getAssociationId(value) {
  var item = value;
  if (Array.isArray(value)) item = value[0];
  if (!item || typeof item !== 'object') return '';
  return item.instanceId || item.formInstId || item.formInstanceId || item.id || '';
}
export function getAssociationIds(value) {
  var parsed = this.parseAssociationValue(value);
  var list = Array.isArray(parsed) ? parsed : [parsed];
  return list.map(item => {
    if (!item || typeof item !== 'object') return '';
    return item.instanceId || item.formInstId || item.formInstanceId || item.id || '';
  }).filter(id => id);
}
export function rowMatchesAssociation(row, fieldId, id) {
  if (!id) return false;
  return this.getAssociationIds(this.rawValue(row, fieldId)).indexOf(id) >= 0;
}
export function getUnitNameFromContact(contact) {
  var id = this.getAssociationId(this.rawValue(contact, FIELDS.contact.unit));
  var unit = this.findById(_customState.units, id);
  if (unit) return this.getValue(unit, FIELDS.unit.name);
  var unitName = this.getValue(contact, FIELDS.contact.unit);
  if (unitName !== '-') return unitName;
  var region = this.getValue(contact, FIELDS.contact.region);
  var department = this.getValue(contact, FIELDS.contact.department);
  if (region !== '-' && department !== '-') return region + ' · ' + department;
  if (region !== '-') return region;
  return department;
}
export function getUnitNameFromProject(project) {
  var id = this.getAssociationId(this.rawValue(project, FIELDS.project.unit));
  var unit = this.findById(_customState.units, id);
  if (unit) return this.getValue(unit, FIELDS.unit.name);
  var unitName = this.getValue(project, FIELDS.project.unit);
  if (unitName !== '-') return unitName;
  return this.getValue(project, FIELDS.project.region);
}
export function getProjectRelationCount(project) {
  var id = this.getRowId(project);
  if (!id) return 0;
  return _customState.relations.filter(item => {
    return this.getAssociationId(this.rawValue(item, FIELDS.relation.project)) === id;
  }).length;
}
export function getContactNameFromAssociation(value) {
  var id = this.getAssociationId(value);
  var contact = this.findById(_customState.contacts, id);
  return contact ? this.getValue(contact, FIELDS.contact.name) : this.formatValue(value);
}
export function getProjectNameFromAssociation(value) {
  var id = this.getAssociationId(value);
  var project = this.findById(_customState.projects, id);
  return project ? this.getValue(project, FIELDS.project.name) : this.formatValue(value);
}
export function getAssociationText(row, fieldId) {
  return this.formatValue(this.rawValue(row, fieldId));
}
export function getAssociationItems(value) {
  var parsed = this.parseAssociationValue(value);
  if (!parsed) return [];
  if (Array.isArray(parsed)) return parsed;
  return [parsed];
}
export function employeeContainsCurrentUser(row, fieldId) {
  if (!fieldId) return false;
  var userId = this.getLoginUserId();
  var userName = this.getLoginUserName();
  if (userId === 'default') userId = '';
  if (userName === '当前用户') userName = '';
  var raw = this.rawValue(row, fieldId);
  var text = this.formatValue(raw);
  if (userName && text !== '-' && text.indexOf(userName) >= 0) return true;
  var items = this.getAssociationItems(raw);
  for (var i = 0; i < items.length; i += 1) {
    var item = items[i];
    if (typeof item === 'string') {
      if (userId && item === userId) return true;
      if (userName && item.indexOf(userName) >= 0) return true;
    }
    if (item && typeof item === 'object') {
      var id = item.userId || item.userid || item.employeeId || item.emplId || item.value || item.id || '';
      var name = item.name || item.userName || item.nickName || item.label || item.displayName || item.employeeName || '';
      if (userId && String(id) === String(userId)) return true;
      if (userName && this.formatValue(name).indexOf(userName) >= 0) return true;
    }
  }
  return false;
}
export function findById(list, id) {
  if (!id) return null;
  var matched = list.filter(item => {
    return item.formInstId === id || item.formInstanceId === id || item.instanceId === id || item.id === id;
  });
  return matched[0] || null;
}
export function isFilled(value) {
  var parsed = this.parseAssociationValue(value);
  if (parsed === undefined || parsed === null || parsed === '' || parsed === '-') return false;
  if (Array.isArray(parsed)) {
    return parsed.filter(item => this.isFilled(item)).length > 0;
  }
  if (typeof parsed === 'object') {
    var text = parsed.title || parsed.name || parsed.label || parsed.text || parsed.value || parsed.displayName || parsed.userName;
    return this.isFilled(text);
  }
  if (typeof parsed === 'string') return parsed.trim() !== '' && parsed.trim() !== '-';
  return true;
}
export function hasFieldValue(row, fieldId) {
  return this.isFilled(this.rawValue(row, fieldId));
}
export function getMissingFieldLabels(row, fields) {
  return fields.filter(item => !this.hasFieldValue(row, item.fieldId)).map(item => item.label);
}
export function getRelatedVisits(contact) {
  var id = this.getRowId(contact);
  return _customState.visits.filter(item => this.rowMatchesAssociation(item, FIELDS.visit.contact, id));
}
export function getRelatedCareers(contact) {
  var id = this.getRowId(contact);
  return _customState.careers.filter(item => this.rowMatchesAssociation(item, FIELDS.career.contact, id));
}
export function getRelatedRelations(contact) {
  var id = this.getRowId(contact);
  return _customState.relations.filter(item => this.rowMatchesAssociation(item, FIELDS.relation.contact, id));
}
export function getRelatedReminders(contact) {
  var id = this.getRowId(contact);
  return _customState.reminders.filter(item => this.rowMatchesAssociation(item, FIELDS.reminder.contact, id));
}
export function getRelatedIntel(contact) {
  var id = this.getRowId(contact);
  return _customState.intel.filter(item => {
    return this.rowMatchesAssociation(item, FIELDS.intel.contact, id);
  });
}
export function getCompletenessResult(contact) {
  var score = 0;
  var missing = [];
  var basicMissing = this.getMissingFieldLabels(contact, [{
    label: '姓名',
    fieldId: FIELDS.contact.name
  }, {
    label: '客户星级',
    fieldId: FIELDS.contact.star
  }, {
    label: '客户类型',
    fieldId: FIELDS.contact.type
  }, {
    label: '客户状态',
    fieldId: FIELDS.contact.status
  }, {
    label: '所属地区',
    fieldId: FIELDS.contact.region
  }, {
    label: '出生日期',
    fieldId: FIELDS.contact.birthDate
  }]);
  if (basicMissing.length) missing = missing.concat(basicMissing);else score += 25;
  var positionMissing = this.getMissingFieldLabels(contact, [{
    label: '当前单位',
    fieldId: FIELDS.contact.unit
  }, {
    label: '当前部门',
    fieldId: FIELDS.contact.department
  }, {
    label: '岗位/职务',
    fieldId: FIELDS.contact.position
  }, {
    label: '职级/级别',
    fieldId: FIELDS.contact.level
  }, {
    label: '分管业务',
    fieldId: FIELDS.contact.business
  }]);
  if (positionMissing.length) missing = missing.concat(positionMissing);else score += 20;
  var contactMissing = [];
  var hasContactWay = this.hasFieldValue(contact, FIELDS.contact.workPhone) || this.hasFieldValue(contact, FIELDS.contact.mobile) || this.hasFieldValue(contact, FIELDS.contact.wechat);
  if (!hasContactWay) contactMissing.push('手机号/工作电话/微信号至少一项');
  contactMissing = contactMissing.concat(this.getMissingFieldLabels(contact, [{
    label: '主维护人',
    fieldId: FIELDS.contact.owner
  }, {
    label: '主要熟悉同事',
    fieldId: FIELDS.contact.familiar
  }]));
  if (contactMissing.length) missing = missing.concat(contactMissing);else score += 15;
  if (this.getRelatedCareers(contact).length) score += 10;else missing.push('任职履历');
  if (this.getRelatedVisits(contact).length || this.hasFieldValue(contact, FIELDS.contact.lastVisit)) score += 10;else missing.push('拜访记录');
  if (this.getRelatedIntel(contact).length) score += 10;else missing.push('画像/情报记录');
  if (this.getRelatedRelations(contact).length) score += 5;else missing.push('项目/社会关系');
  if (this.getRelatedReminders(contact).length) score += 5;else missing.push('重要提醒');
  return {
    score: score,
    missing: missing
  };
}
export function getCompletion(contact) {
  return this.getCompletenessResult(contact).score;
}
export function getMissingTips(contact) {
  var result = this.getCompletenessResult(contact);
  return result.missing.length ? '缺少：' + result.missing.join('、') : '资料完整';
}
export function getMissingSummary(contact, limit) {
  var result = this.getCompletenessResult(contact);
  if (!result.missing.length) return '资料完整';
  var count = limit || 3;
  var visible = result.missing.slice(0, count).join('、');
  return '缺少：' + visible + (result.missing.length > count ? '等' : '');
}
export function getVisitDeadline(contact) {
  var deadline = Number(this.rawValue(contact, FIELDS.contact.nextDue)) || 0;
  if (deadline) return deadline;
  var lastVisit = Number(this.rawValue(contact, FIELDS.contact.lastVisit)) || 0;
  if (!lastVisit) return 0;
  var date = new Date(lastVisit);
  date.setMonth(date.getMonth() + 3);
  return date.getTime();
}
export function getVisitRisk(contact) {
  var stored = this.getValue(contact, FIELDS.contact.visitStatus);
  if (stored === '无需提醒') return stored;
  var lastVisit = Number(this.rawValue(contact, FIELDS.contact.lastVisit)) || 0;
  if (!lastVisit) return '待维护';
  var deadline = this.getVisitDeadline(contact);
  var now = new Date();
  var today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  if (deadline < today) return '已超期';
  if (deadline - today <= 7 * 86400000) return '即将超期';
  return '未超期';
}
export function formatDate(value) {
  if (!value || value === '-') return '-';
  var num = Number(value);
  if (!num) return '-';
  var d = new Date(num);
  var m = d.getMonth() + 1;
  var day = d.getDate();
  return d.getFullYear() + '-' + (m < 10 ? '0' + m : m) + '-' + (day < 10 ? '0' + day : day);
}
export function formatTodayCn() {
  var d = new Date();
  return d.getFullYear() + '年' + (d.getMonth() + 1) + '月' + d.getDate() + '日';
}
export function daysUntil(value) {
  var num = Number(value);
  if (!num) return null;
  var today = new Date();
  var start = new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();
  return Math.ceil((num - start) / 86400000);
}
export function compareDate(a, b, fieldId, asc) {
  var av = Number(this.rawValue(a, fieldId)) || 0;
  var bv = Number(this.rawValue(b, fieldId)) || 0;
  return asc ? av - bv : bv - av;
}
export function getOverdueContacts() {
  var list = _customState.contacts.filter(item => {
    var status = this.getVisitRisk(item);
    return status === '已超期' || status === '即将超期';
  });
  list = list.slice(0);
  list.sort((a, b) => this.getVisitDeadline(a) - this.getVisitDeadline(b));
  return list;
}
export function getRecentVisits() {
  return _customState.visits.slice(0, 4);
}
export function getUpcomingReminders() {
  var list = _customState.reminders.filter(item => {
    var status = this.getValue(item, FIELDS.reminder.status);
    return status !== '已处理' && status !== '无需处理';
  });
  list = list.slice(0);
  list.sort((a, b) => this.compareDate(a, b, FIELDS.reminder.date, true));
  return list.slice(0, 3);
}
export function getPendingIntel() {
  var list = _customState.intel.filter(item => {
    var status = this.getValue(item, FIELDS.intel.status);
    return status !== '已转项目' && status !== '已归档';
  });
  list = list.slice(0);
  list.sort((a, b) => {
    var ad = Number(this.rawValue(a, FIELDS.intel.remindDate)) || Number(this.rawValue(a, FIELDS.intel.validUntil)) || Number(this.rawValue(a, FIELDS.intel.date)) || 9999999999999;
    var bd = Number(this.rawValue(b, FIELDS.intel.remindDate)) || Number(this.rawValue(b, FIELDS.intel.validUntil)) || Number(this.rawValue(b, FIELDS.intel.date)) || 9999999999999;
    return ad - bd;
  });
  return list.slice(0, 3);
}
export function isLeadClosed(row) {
  return this.getValue(row, FIELDS.intel.status) === '已关闭';
}
export function isLeadTransferred(row) {
  return this.getValue(row, FIELDS.intel.status) === '已转项目';
}
export function isLeadInProgress(row) {
  var status = this.getValue(row, FIELDS.intel.status);
  return status === '待跟进' || status === '跟进中';
}
export function getLeadTitle(row) {
  var title = this.getFieldText(row, FIELDS.intel.title);
  if (title) return title;
  var unit = this.getAssociationText(row, FIELDS.intel.unit);
  var type = this.getValue(row, FIELDS.intel.category);
  if (unit !== '-' && type !== '-') return unit + ' · ' + type;
  if (unit !== '-') return unit;
  return this.getValue(row, FIELDS.intel.serial);
}
export function getProjectTitle(row) {
  var title = this.getFieldText(row, FIELDS.project.name);
  if (title) return title;
  return this.getFieldText(row, FIELDS.project.shortName) || '未命名项目';
}
export function getUnitNameFromLead(row) {
  var id = this.getAssociationId(this.rawValue(row, FIELDS.intel.unit));
  var unit = this.findById(_customState.units, id);
  if (unit) return this.getValue(unit, FIELDS.unit.name);
  return this.getAssociationText(row, FIELDS.intel.unit);
}
export function getLinkedLeadFromVisit(row) {
  var ids = this.getAssociationIds(this.rawValue(row, FIELDS.visit.lead));
  for (var i = 0; i < ids.length; i += 1) {
    var lead = this.findById(_customState.intel, ids[i]);
    if (lead) return lead;
  }
  return null;
}
export function getSourceLeadFromProject(row) {
  var ids = this.getAssociationIds(this.rawValue(row, FIELDS.project.sourceLead));
  for (var i = 0; i < ids.length; i += 1) {
    var lead = this.findById(_customState.intel, ids[i]);
    if (lead) return lead;
  }
  return null;
}
export function getLeadRelationText(row) {
  var parts = [];
  if (this.employeeContainsCurrentUser(row, FIELDS.intel.owner)) parts.push('线索负责人');
  if (this.employeeContainsCurrentUser(row, FIELDS.intel.handlers)) parts.push('跟进经办人');
  if (this.employeeContainsCurrentUser(row, FIELDS.intel.watchers)) parts.push('关注/必看');
  if (this.employeeContainsCurrentUser(row, FIELDS.intel.recorder)) parts.push('我创建的');
  return parts.join('、');
}
export function getVisitRelationText(row) {
  var parts = [];
  if (this.employeeContainsCurrentUser(row, FIELDS.visit.watchers)) parts.push('关注/必看');
  if (this.employeeContainsCurrentUser(row, FIELDS.visit.handlers)) parts.push('跟进经办人');
  if (this.employeeContainsCurrentUser(row, FIELDS.visit.people)) parts.push('我方参与');
  if (this.employeeContainsCurrentUser(row, FIELDS.visit.recorder)) parts.push('记录人');
  return parts.join('、');
}
export function getProjectRelationText(row) {
  var parts = [];
  if (this.employeeContainsCurrentUser(row, FIELDS.project.owner)) parts.push('项目负责人');
  if (this.employeeContainsCurrentUser(row, FIELDS.project.nextOwner)) parts.push('下一步负责人');
  var lead = this.getSourceLeadFromProject(row);
  if (lead && this.getLeadRelationText(lead)) parts.push('来源线索相关');
  return parts.join('、');
}
export function isLeadRelatedToMe(row) {
  return !!this.getLeadRelationText(row);
}
export function isVisitRelatedToMe(row) {
  return !!this.getVisitRelationText(row);
}
export function isProjectRelatedToMe(row) {
  return !!this.getProjectRelationText(row);
}
export function getNearestUpcomingTime(values) {
  var now = new Date();
  var today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  var end = today + 7 * 86400000;
  var best = 0;
  (values || []).forEach(item => {
    var time = this.normalizeTime(item);
    if (time >= today && time <= end && (!best || time < best)) best = time;
  });
  return best;
}
export function getDueRisk(time) {
  var days = this.daysUntil(time);
  if (days === null) return '';
  if (days <= 0) return '今日到期';
  if (days <= 3) return '高风险';
  return '即将到期';
}
export function getLeadUpdateTime(row) {
  return this.getLatestTime([row && row.gmtModified, row && row.gmtCreate, this.rawValue(row, FIELDS.intel.recordTime), this.rawValue(row, FIELDS.intel.remindDate)]);
}
export function getVisitUpdateTime(row) {
  return this.getLatestTime([row && row.gmtModified, row && row.gmtCreate, this.rawValue(row, FIELDS.visit.time), this.rawValue(row, FIELDS.visit.recordTime)]);
}
export function getProjectUpdateTime(row) {
  return this.getLatestTime([this.rawValue(row, FIELDS.project.recentDate), row && row.gmtModified, row && row.gmtCreate]);
}
export function makeLeadWorkItem(row, relationText) {
  var remindDate = this.rawValue(row, FIELDS.intel.remindDate);
  var validUntil = this.rawValue(row, FIELDS.intel.validUntil);
  var dueTime = this.getNearestUpcomingTime([remindDate, validUntil]);
  return {
    id: 'lead-' + this.getRowId(row),
    type: 'lead',
    typeText: '线索',
    row: row,
    formUuid: FORMS.intel,
    title: this.getLeadTitle(row),
    status: this.getValue(row, FIELDS.intel.status),
    importance: this.getValue(row, FIELDS.intel.importance),
    maturity: this.getValue(row, FIELDS.intel.maturity),
    unit: this.getUnitNameFromLead(row),
    contact: this.getContactNameFromAssociation(this.rawValue(row, FIELDS.intel.contact)),
    handlers: this.getValue(row, FIELDS.intel.handlers),
    watchers: this.getValue(row, FIELDS.intel.watchers),
    remindDate: remindDate,
    validUntil: validUntil,
    nextAction: this.getValue(row, FIELDS.intel.nextAction),
    updatedTime: this.getLeadUpdateTime(row),
    dueTime: dueTime,
    risk: dueTime ? this.getDueRisk(dueTime) : '',
    relationText: relationText || this.getLeadRelationText(row),
    muted: this.isLeadClosed(row) || this.isLeadTransferred(row)
  };
}
export function makeVisitWorkItem(row, relationText) {
  var lead = this.getLinkedLeadFromVisit(row);
  var nextDate = this.rawValue(row, FIELDS.visit.nextDate);
  var dueTime = this.getNearestUpcomingTime([nextDate]);
  var contact = this.getContactNameFromAssociation(this.rawValue(row, FIELDS.visit.contact));
  return {
    id: 'visit-' + this.getRowId(row),
    type: 'visit',
    typeText: '拜访',
    row: row,
    leadRow: lead,
    formUuid: FORMS.visit,
    title: this.getFieldText(row, FIELDS.visit.title) || '未命名拜访',
    status: this.getValue(row, FIELDS.visit.method),
    importance: '-',
    maturity: '-',
    unit: this.getAssociationText(row, FIELDS.visit.unit),
    contact: contact,
    handlers: this.getValue(row, FIELDS.visit.handlers),
    watchers: this.getValue(row, FIELDS.visit.watchers),
    remindDate: nextDate,
    validUntil: '-',
    nextAction: this.getValue(row, FIELDS.visit.nextAction),
    updatedTime: this.getVisitUpdateTime(row),
    dueTime: dueTime,
    risk: dueTime ? this.getDueRisk(dueTime) : '',
    relationText: relationText || this.getVisitRelationText(row),
    muted: false
  };
}
export function makeProjectWorkItem(row, relationText) {
  var sourceLead = this.getSourceLeadFromProject(row);
  var nextDate = this.rawValue(row, FIELDS.project.nextDate);
  var dueTime = this.getNearestUpcomingTime([nextDate]);
  return {
    id: 'project-' + this.getRowId(row),
    type: 'project',
    typeText: '项目',
    row: row,
    leadRow: sourceLead,
    formUuid: FORMS.project,
    title: this.getProjectTitle(row),
    status: this.getValue(row, FIELDS.project.status),
    importance: this.getValue(row, FIELDS.project.star),
    maturity: this.getValue(row, FIELDS.project.phase),
    unit: this.getUnitNameFromProject(row),
    contact: '-',
    handlers: this.getValue(row, FIELDS.project.nextOwner),
    watchers: '-',
    remindDate: nextDate,
    validUntil: '-',
    nextAction: this.getValue(row, FIELDS.project.nextAction),
    updatedTime: this.getProjectUpdateTime(row),
    dueTime: dueTime,
    risk: dueTime ? this.getDueRisk(dueTime) : '',
    relationText: relationText || this.getProjectRelationText(row),
    muted: false
  };
}
export function getLeadStatusRank(status) {
  if (status === '待跟进') return 0;
  if (status === '跟进中') return 1;
  if (status === '已转项目') return 3;
  if (status === '已关闭') return 4;
  return 2;
}
export function sortWorkItems(list, mode) {
  var items = (list || []).slice(0);
  items.sort((a, b) => {
    if (mode === 'due') return (a.dueTime || 0) - (b.dueTime || 0) || (b.updatedTime || 0) - (a.updatedTime || 0);
    if (mode === 'latest') return (b.updatedTime || 0) - (a.updatedTime || 0);
    var rank = this.getLeadStatusRank(a.status) - this.getLeadStatusRank(b.status);
    if (rank) return rank;
    return (a.dueTime || 9999999999999) - (b.dueTime || 9999999999999) || (b.updatedTime || 0) - (a.updatedTime || 0);
  });
  return items.slice(0, 8);
}
export function getMyWorkItems(tabKey) {
  var list = [];
  var leads = _customState.intel || [];
  var visits = _customState.visits || [];
  var projects = _customState.projects || [];
  var key = tabKey || _customState.activeWorkTab || 'follow';
  leads.forEach(row => {
    if (key === 'follow' && !this.isLeadClosed(row) && this.employeeContainsCurrentUser(row, FIELDS.intel.handlers)) list.push(this.makeLeadWorkItem(row, '跟进经办人'));
    if (key === 'attention' && !this.isLeadClosed(row) && this.employeeContainsCurrentUser(row, FIELDS.intel.watchers)) list.push(this.makeLeadWorkItem(row, '关注/必看'));
    if (key === 'owned' && this.employeeContainsCurrentUser(row, FIELDS.intel.owner)) list.push(this.makeLeadWorkItem(row, '线索负责人'));
    if (key === 'due' && !this.isLeadClosed(row) && this.isLeadRelatedToMe(row)) {
      var leadItem = this.makeLeadWorkItem(row);
      if (leadItem.dueTime) list.push(leadItem);
    }
    if (key === 'latest' && this.isLeadRelatedToMe(row)) list.push(this.makeLeadWorkItem(row));
  });
  visits.forEach(row => {
    if (key === 'follow' && this.employeeContainsCurrentUser(row, FIELDS.visit.handlers)) list.push(this.makeVisitWorkItem(row, '跟进经办人'));
    if (key === 'attention' && this.employeeContainsCurrentUser(row, FIELDS.visit.watchers)) list.push(this.makeVisitWorkItem(row, '关注/必看'));
    if (key === 'due' && this.isVisitRelatedToMe(row)) {
      var visitItem = this.makeVisitWorkItem(row);
      if (visitItem.dueTime) list.push(visitItem);
    }
    if (key === 'latest' && this.isVisitRelatedToMe(row)) list.push(this.makeVisitWorkItem(row));
  });
  projects.forEach(row => {
    if (key === 'follow' && this.employeeContainsCurrentUser(row, FIELDS.project.nextOwner)) list.push(this.makeProjectWorkItem(row, '下一步负责人'));
    if (key === 'due' && this.isProjectRelatedToMe(row)) {
      var projectItem = this.makeProjectWorkItem(row);
      if (projectItem.dueTime) list.push(projectItem);
    }
    if (key === 'latest' && this.isProjectRelatedToMe(row)) list.push(this.makeProjectWorkItem(row));
  });
  return this.sortWorkItems(list, key);
}
export function getWorkTabCount(tabKey) {
  return this.getMyWorkItems(tabKey).length;
}
export function getThisMonthVisits() {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth();
  return (_customState.visits || []).filter(row => {
    var time = this.normalizeTime(this.rawValue(row, FIELDS.visit.time));
    if (!time) return false;
    var date = new Date(time);
    return date.getFullYear() === year && date.getMonth() === month;
  });
}
export function normalizeTime(value) {
  if (!value || value === '-') return 0;
  var parsed = this.parseAssociationValue(value);
  if (Array.isArray(parsed)) parsed = parsed[0];
  if (parsed && typeof parsed === 'object') parsed = parsed.value || parsed.time || parsed.date || parsed.timestamp || parsed.gmtModified || parsed.gmtCreate;
  var num = Number(parsed);
  if (num) return num;
  var text = typeof parsed === 'string' ? parsed : '';
  var time = text ? Date.parse(text) : 0;
  return isNaN(time) ? 0 : time;
}
export function getLatestTime(values) {
  var latest = 0;
  (values || []).forEach(item => {
    var time = this.normalizeTime(item);
    if (time > latest) latest = time;
  });
  return latest;
}
export function getRowUpdateUser(row) {
  var user = row && (row.modifyUser || row.modifier || row.originator || row.creator || row.createUser);
  return this.getReadableText(user);
}
export function pushCleanPart(parts, value, prefix) {
  var text = this.getReadableText(value);
  if (!text || text === '-' || text === 'undefined') return;
  var item = prefix ? prefix + text : text;
  if (parts.indexOf(item) < 0) parts.push(item);
}
export function joinSummary(parts) {
  var list = (parts || []).filter(item => item && item !== '-' && item !== 'undefined');
  if (!list.length) return '未设置';
  return list.slice(0, 4).join('；');
}
export function joinUpdateParts(parts) {
  var list = (parts || []).filter(item => item && item !== '-' && item !== 'undefined');
  return list.length ? list.join('｜') : '未设置';
}
export function firstReadableText(values) {
  for (var i = 0; i < (values || []).length; i++) {
    var text = this.getReadableText(values[i]);
    if (text) return text;
  }
  return '';
}
export function simplifyRelationStatus(status) {
  var text = this.getReadableText(status);
  if (text === '当前联系人') return '当前';
  if (text === '已结束联系人') return '已结束';
  return text;
}
export function getVisitUpdateItem(row) {
  var title = this.getFieldText(row, FIELDS.visit.title) || '新增/更新拜访记录';
  var contactName = this.getContactNameFromAssociation(this.rawValue(row, FIELDS.visit.contact));
  if (contactName === '-') contactName = '';
  var parts = [];
  this.pushCleanPart(parts, contactName);
  this.pushCleanPart(parts, this.rawValue(row, FIELDS.visit.method));
  this.pushCleanPart(parts, this.rawValue(row, FIELDS.visit.nextAction));
  return {
    id: 'visit-' + this.getRowId(row),
    type: '拜访记录',
    target: 'visit',
    title: title,
    summary: this.joinUpdateParts(parts),
    time: this.getLatestTime([row && row.gmtModified, row && row.gmtCreate, this.rawValue(row, FIELDS.visit.time), this.rawValue(row, FIELDS.visit.recordTime)]),
    user: this.getRowUpdateUser(row),
    groupKey: 'visit-' + this.getRowId(row),
    row: row
  };
}
export function getProjectUpdateItem(row) {
  var projectName = this.getFieldText(row, FIELDS.project.name) || this.getFieldText(row, FIELDS.project.shortName);
  var title = projectName ? projectName + ' 有新进展' : '项目有新进展';
  var summary = this.firstReadableText([this.rawValue(row, FIELDS.project.recent), this.rawValue(row, FIELDS.project.nextAction), this.rawValue(row, FIELDS.project.block), this.rawValue(row, FIELDS.project.keyProgress)]);
  return {
    id: 'project-' + this.getRowId(row),
    type: '项目更新',
    target: 'project',
    title: title,
    summary: summary || '未设置',
    time: this.getLatestTime([this.rawValue(row, FIELDS.project.recentDate), row && row.gmtModified, row && row.gmtCreate]),
    user: this.getRowUpdateUser(row),
    groupKey: 'project-' + this.getRowId(row),
    row: row
  };
}
export function getRelationUpdateItem(row) {
  var projectName = this.getProjectNameFromAssociation(this.rawValue(row, FIELDS.relation.project));
  var contactName = this.getContactNameFromAssociation(this.rawValue(row, FIELDS.relation.contact));
  if (projectName === '-') projectName = '';
  if (contactName === '-') contactName = '';
  var title = projectName ? projectName.indexOf('联系人变更') >= 0 ? projectName : projectName + ' 联系人变更' : '项目联系人变更';
  var changeType = this.getFieldText(row, FIELDS.relation.changeType);
  var changeNote = this.getFieldText(row, FIELDS.relation.changeNote);
  var status = this.simplifyRelationStatus(this.rawValue(row, FIELDS.relation.status));
  var changeText = changeNote || changeType;
  var parts = [];
  this.pushCleanPart(parts, contactName);
  this.pushCleanPart(parts, status);
  this.pushCleanPart(parts, changeText);
  var projectId = this.getAssociationId(this.rawValue(row, FIELDS.relation.project));
  return {
    id: 'relation-' + this.getRowId(row),
    type: '项目联系人变更',
    target: 'relation',
    title: title,
    summary: this.joinUpdateParts(parts),
    time: this.getLatestTime([this.rawValue(row, FIELDS.relation.endDate), this.rawValue(row, FIELDS.relation.effectiveDate), this.rawValue(row, FIELDS.relation.recordTime), row && row.gmtModified, row && row.gmtCreate]),
    user: this.getRowUpdateUser(row),
    groupKey: 'relation-' + (projectId || this.getRowId(row)),
    row: row
  };
}
export function getHomeUpdates() {
  var updates = [];
  _customState.visits.forEach(item => updates.push(this.getVisitUpdateItem(item)));
  _customState.projects.forEach(item => updates.push(this.getProjectUpdateItem(item)));
  _customState.relations.forEach(item => updates.push(this.getRelationUpdateItem(item)));
  updates = updates.filter(item => item && item.time);
  updates.sort((a, b) => b.time - a.time);
  var seen = {};
  var list = [];
  updates.forEach(item => {
    var key = item.groupKey || item.id;
    if (seen[key]) return;
    seen[key] = true;
    list.push(item);
  });
  return list.slice(0, 8);
}
export function getHomeUpdatesLatestTime(updates) {
  var list = updates || this.getHomeUpdates();
  return list.length ? list[0].time : 0;
}
export function getLoginUserId() {
  var value = '';
  try {
    if (this.utils && this.utils.getLoginUserId) value = this.utils.getLoginUserId();
  } catch (e) {}
  if (value && typeof value !== 'object') return value;
  var user = null;
  try {
    if (this.utils && this.utils.getLoginUser) user = this.utils.getLoginUser();
  } catch (e2) {}
  if (!user && typeof window !== 'undefined') user = window.loginUser || window._loginUser || null;
  return user && (user.userId || user.employeeId || user.userid || user.id || user.name) || 'default';
}
export function getLoginUserName() {
  var value = '';
  try {
    if (this.utils && this.utils.getLoginUserName) value = this.utils.getLoginUserName();
  } catch (e) {}
  if (value && typeof value !== 'object') {
    value = String(value).trim();
    if (value) return value;
  }
  var user = null;
  try {
    if (this.utils && this.utils.getLoginUser) user = this.utils.getLoginUser();
  } catch (e2) {}
  if (!user && value && typeof value === 'object') user = value;
  if (!user && typeof window !== 'undefined') user = window.loginUser || window._loginUser || null;
  var name = user && (user.userName || user.nickName || user.name || user.displayName || user.zh_CN || user.pureEn_US || user.en_US) || '';
  if (name && typeof name === 'object') name = name.zh_CN || name.pureEn_US || name.en_US || name.userName || name.nickName || name.name || name.displayName || '';
  name = name ? String(name).trim() : '';
  return name || '当前用户';
}
export function getHomeUpdatesStorageKey() {
  return 'home_updates_last_read_' + (this.getLoginUserId() || 'default');
}
export function getHomeUpdatesLastReadTime() {
  if (typeof window === 'undefined' || !window.localStorage) return 0;
  var value = window.localStorage.getItem(this.getHomeUpdatesStorageKey());
  return this.normalizeTime(value);
}
export function hasUnreadHomeUpdates(updates) {
  var latest = this.getHomeUpdatesLatestTime(updates);
  var lastRead = this.getHomeUpdatesLastReadTime();
  return latest > lastRead;
}
export function markHomeUpdatesRead(updates) {
  var latest = this.getHomeUpdatesLatestTime(updates);
  if (!latest || typeof window === 'undefined' || !window.localStorage) return;
  // 首页第一期使用本机已读，后续如需跨设备未读再新增服务端提醒表。
  window.localStorage.setItem(this.getHomeUpdatesStorageKey(), String(latest));
  this.forceUpdate();
}
export function formatDateTime(value) {
  var num = this.normalizeTime(value);
  if (!num) return '-';
  var d = new Date(num);
  var m = d.getMonth() + 1;
  var day = d.getDate();
  var hour = d.getHours();
  var minute = d.getMinutes();
  return d.getFullYear() + '-' + (m < 10 ? '0' + m : m) + '-' + (day < 10 ? '0' + day : day) + ' ' + (hour < 10 ? '0' + hour : hour) + ':' + (minute < 10 ? '0' + minute : minute);
}
export function formatUpdateTime(value) {
  var num = this.normalizeTime(value);
  if (!num) return '';
  var d = new Date(num);
  var now = new Date();
  var dayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  var itemStart = new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
  var hour = d.getHours();
  var minute = d.getMinutes();
  var timeText = (hour < 10 ? '0' + hour : hour) + ':' + (minute < 10 ? '0' + minute : minute);
  if (itemStart === dayStart) return '今天 ' + timeText;
  var m = d.getMonth() + 1;
  var day = d.getDate();
  return d.getFullYear() + '-' + (m < 10 ? '0' + m : m) + '-' + (day < 10 ? '0' + day : day);
}
export function toggleHomeUpdatesAll() {
  _customState.showAllHomeUpdates = !_customState.showAllHomeUpdates;
  this.forceUpdate();
}
export function openHomeUpdate(item) {
  if (!item) return;
  this.markHomeUpdatesRead();
  if (item.target === 'visit') {
    this.openVisitDetail(item.row);
    return;
  }
  if (item.target === 'project') {
    this.openProjectDetail(item.row);
    return;
  }
  if (item.target === 'relation') {
    var projectId = this.getAssociationId(this.rawValue(item.row, FIELDS.relation.project));
    var project = this.findById(_customState.projects, projectId);
    if (project) {
      this.openProjectDetail(project);
      return;
    }
    this.openNativeForm(FORMS.projectManage);
  }
}
export function getIncompleteContacts() {
  var list = _customState.contacts.filter(item => {
    return this.getCompletion(item) < 80;
  });
  list = list.slice(0);
  list.sort((a, b) => {
    return this.getCompletion(a) - this.getCompletion(b);
  });
  return list.slice(0, 3);
}
export function getInProgressProjects() {
  return _customState.projects.filter(item => {
    var status = this.getValue(item, FIELDS.project.status);
    var phase = this.getValue(item, FIELDS.project.phase);
    return status !== '归档' && status !== '暂停' && phase !== '成功' && phase !== '失败' && phase !== '归档';
  });
}
export function getMetricData() {
  var activeContacts = _customState.contacts.filter(item => {
    return this.getValue(item, FIELDS.contact.status) === '活跃';
  }).length;
  var overdue = _customState.contacts.filter(item => {
    return this.getVisitRisk(item) === '已超期';
  }).length;
  var soon = _customState.contacts.filter(item => {
    return this.getVisitRisk(item) === '即将超期';
  }).length;
  var incomplete = _customState.contacts.filter(item => {
    return this.getCompletion(item) < 80;
  }).length;
  var inProgressProjects = this.getInProgressProjects();
  var projects = inProgressProjects.length;
  var focusProjects = inProgressProjects.filter(item => {
    return this.getValue(item, FIELDS.project.status) === '重点推进' || this.getValue(item, FIELDS.project.phase) === '重点推进';
  }).length;
  var keyRelations = _customState.relations.filter(item => {
    var role = this.getValue(item, FIELDS.relation.role);
    return role === '决策' || role === '牵头' || role === '影响';
  }).length;
  var leads = _customState.intel || [];
  var activeLeads = leads.filter(item => this.isLeadInProgress(item)).length;
  var myFollowLeads = leads.filter(item => {
    return !this.isLeadClosed(item) && this.employeeContainsCurrentUser(item, FIELDS.intel.handlers);
  }).length;
  var monthVisits = this.getThisMonthVisits();
  var doorVisits = monthVisits.filter(item => this.getValue(item, FIELDS.visit.method) === '上门').length;
  return {
    activeContacts: activeContacts,
    overdue: overdue,
    soon: soon,
    incomplete: incomplete,
    projects: projects,
    keyRelations: keyRelations,
    activeLeads: activeLeads,
    myFollowLeads: myFollowLeads,
    dueItems: this.getWorkTabCount('due'),
    monthVisits: monthVisits.length,
    doorVisits: doorVisits,
    focusProjects: focusProjects
  };
}
export function handleSearchChange(e) {
  if (_customState._isComposing) return;
  _customState.searchKeyword = e && e.target ? e.target.value : '';
}
export function handleCompositionStart() {
  _customState._isComposing = true;
}
export function handleCompositionEnd(e) {
  _customState._isComposing = false;
  _customState.searchKeyword = e && e.target ? e.target.value : _customState.searchKeyword;
}
export function handleSearchKeyDown(e) {
  if (!e || e.key !== 'Enter') return;
  this.openContactList();
}
export function openNativeForm(formUuid) {
  this.utils.router.push(formUuid, {}, false);
}
export function openSubmissionForm(formUuid, params) {
  var query = [];
  if (params) {
    Object.keys(params).forEach(key => {
      if (params[key]) query.push(encodeURIComponent(key) + '=' + encodeURIComponent(params[key]));
    });
  }
  window.location.href = BASE_URL + '/' + APP_TYPE + '/submission/' + formUuid + (query.length ? '?' + query.join('&') : '');
}
export function openFormWithParams(formUuid, params, openNew) {
  this.utils.router.push(formUuid, params || {}, openNew === true);
}
export function openContactList(filter) {
  var keyword = (_customState.searchKeyword || '').trim();
  var params = {};
  if (filter) params.filter = filter;
  if (keyword) params.keyword = keyword;
  if (keyword) {
    this.utils.toast({
      title: '已进入联系人管理，可继续筛选：' + keyword,
      type: 'success'
    });
  }
  this.openFormWithParams(FORMS.contactManage, params, false);
}
export function openContactDetail(contact) {
  var id = this.getRowId(contact);
  if (!id) return;
  this.openFormWithParams(FORMS.contactDetail, {
    contactId: id
  }, false);
}
export function openMarketLeadList() {
  this.openFormWithParams(FORMS.leadManage, {}, false);
}
export function openLeadDetail(row) {
  var id = this.getRowId(row);
  if (!id) return;
  this.openFormWithParams(FORMS.leadDetail, {
    leadId: id
  }, false);
}
export function openVisitDetail(row) {
  var id = this.getRowId(row);
  if (!id) return;
  this.openFormWithParams(FORMS.visitDetail, {
    formInstId: id
  }, false);
}
export function openProjectDetail(row) {
  var id = this.getRowId(row);
  if (!id) return;
  this.openFormWithParams(FORMS.projectDetail, {
    projectId: id
  }, false);
}
export function openReminderList() {
  this.openNativeForm(FORMS.reminder);
}
export function openNativeDetailForm(formUuid, formInstId) {
  if (!formInstId) return;
  window.location.href = BASE_URL + '/' + APP_TYPE + '/formDetail/' + formUuid + '?formInstId=' + encodeURIComponent(formInstId);
}
export function openReminderDetail(row) {
  var id = this.getRowId(row);
  if (!id) return;
  this.openNativeDetailForm(FORMS.reminder, id);
}
export function openIntelList() {
  this.openMarketLeadList();
}
export function openIntelDetail(row) {
  this.openLeadDetail(row);
}
export function setWorkTab(key) {
  _customState.activeWorkTab = key || 'follow';
  _customState.activeWorkInfoKey = '';
  this.forceUpdate();
}
export function getWorkInfo(key) {
  return WORK_INFO[key] || null;
}
export function toggleWorkInfo(key) {
  _customState.activeWorkInfoKey = _customState.activeWorkInfoKey === key ? '' : key;
  this.forceUpdate();
}
export function openWorkItem(item) {
  if (!item) return;
  if (item.type === 'lead') {
    this.openLeadDetail(item.row);
    return;
  }
  if (item.type === 'visit') {
    this.openVisitDetail(item.row);
    return;
  }
  if (item.type === 'project') {
    this.openProjectDetail(item.row);
  }
}
export function openWorkNative(item) {
  if (!item) return;
  this.openNativeDetailForm(item.formUuid, this.getRowId(item.row));
}
export function openUrl(url) {
  if (this.utils.openPage) {
    this.utils.openPage(url);
    return;
  }
  window.open(url, '_blank');
}
export function refreshData() {
  this.utils.toast({
    title: '正在刷新',
    type: 'notice'
  });
  this.loadAllData(true);
}
export function tone(status) {
  if (status === '已超期' || status === '高敏' || status === '反对') return 'danger';
  if (status === '即将超期' || status === '待维护' || status === '需继续跟进' || status === '未提醒' || status === '待跟进') return 'warning';
  if (status === '活跃' || status === '正常' || status === '已处理' || status === '已提醒' || status === '支持' || status === '有效') return 'success';
  if (status === '重点推进' || status === '关键节点' || status === '关键关系' || status === '推进' || status === '跟进中') return 'primary';
  return 'default';
}
export function renderIcon(type, color) {
  var path = null;
  if (type === 'users') path = <g><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></g>;
  if (type === 'alert') path = <g><circle cx="12" cy="12" r="9"></circle><path d="M12 8v5"></path><path d="M12 16h.01"></path></g>;
  if (type === 'folder') path = <g><path d="M3 7h6l2 2h10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></g>;
  if (type === 'bar') path = <g><path d="M6 20V10"></path><path d="M12 20V4"></path><path d="M18 20v-7"></path></g>;
  return <div style={Object.assign({}, styles.iconBox, {
    background: color
  })}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {path}
      </svg>
    </div>;
}
export function renderPanelIcon(marker) {
  var color = '#155EEF';
  var path = <circle cx="12" cy="12" r="8"></circle>;
  if (marker === 'alert') {
    color = '#F04438';
    path = <g><path d="M10.3 4.5 2.8 17.5a2 2 0 0 0 1.7 3h15a2 2 0 0 0 1.7-3L13.7 4.5a2 2 0 0 0-3.4 0z"></path><path d="M12 9v4"></path><path d="M12 16h.01"></path></g>;
  }
  if (marker === 'clock') {
    color = '#2563FF';
    path = <g><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></g>;
  }
  if (marker === 'calendar') {
    color = '#12B76A';
    path = <g><rect x="4" y="5" width="16" height="15" rx="2"></rect><path d="M8 3v4"></path><path d="M16 3v4"></path><path d="M4 10h16"></path></g>;
  }
  if (marker === 'bell') {
    color = '#F59E0B';
    path = <g><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"></path><path d="M10 21h4"></path></g>;
  }
  if (marker === 'trend') {
    color = '#B847F2';
    path = <g><path d="M3 17 9 11l4 4 8-8"></path><path d="M15 7h6v6"></path></g>;
  }
  if (marker === 'folder') {
    color = '#2563FF';
    path = <g><path d="M3 7h6l2 2h10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></g>;
  }
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{path}</svg>;
}
export function renderBadge(text, toneName) {
  var colors = {
    primary: {
      bg: '#EAF2FF',
      color: '#155EEF'
    },
    success: {
      bg: '#ECFDF3',
      color: '#027A48'
    },
    warning: {
      bg: '#FFF4D6',
      color: '#B54708'
    },
    danger: {
      bg: '#FFE4E8',
      color: '#C01048'
    },
    default: {
      bg: '#F2F4F7',
      color: '#475467'
    }
  };
  var c = colors[toneName] || colors.default;
  return <span style={Object.assign({}, styles.badge, {
    background: c.bg,
    color: c.color
  })}>{text || '-'}</span>;
}
export function renderVisitBadge(text) {
  var colors = {
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
    warning: {
      bg: '#FFF7E6',
      color: '#B54708',
      border: '#FEDF89'
    },
    purple: {
      bg: '#F4EBFF',
      color: '#6941C6',
      border: '#E9D7FE'
    },
    phone: {
      bg: '#F2F4F7',
      color: '#475467',
      border: '#EAECF0'
    },
    default: {
      bg: '#EAF2FF',
      color: '#155EEF',
      border: '#D6E8FF'
    }
  };
  var toneName = text === '上门' ? 'door' : text === '微信' ? 'wechat' : text === '电话' ? 'phone' : text === '饭局' || text === '活动' ? 'warning' : text === '会议' || text === '培训会' ? 'purple' : 'default';
  var c = colors[toneName];
  return <span style={Object.assign({}, styles.visitBadge, {
    background: c.bg,
    color: c.color,
    border: '1px solid ' + c.border
  })}>{text || '-'}</span>;
}
export function renderButton(label, type, onClick) {
  var primary = type === 'primary';
  return <button onClick={e => {
    if (onClick) onClick(e);
  }} style={Object.assign({}, styles.button, primary ? styles.buttonPrimary : styles.buttonDefault)}>
      {label}
    </button>;
}
export function renderIconButton(label, type, iconName, onClick) {
  var primary = type === 'primary';
  return <button onClick={e => {
    if (onClick) onClick(e);
  }} style={Object.assign({}, styles.button, styles.iconButton, primary ? styles.buttonPrimary : styles.buttonDefault)}>
      {this.renderButtonIcon(iconName, primary ? '#FFFFFF' : '#155EEF')}
      <span>{label}</span>
    </button>;
}
export function renderButtonIcon(name, color) {
  var path = <g><circle cx="9" cy="8" r="4"></circle><path d="M3 21v-1a6 6 0 0 1 12 0v1"></path><path d="M18 8v6"></path><path d="M15 11h6"></path></g>;
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color || '#155EEF'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={styles.buttonIcon}>{path}</svg>;
}
export function renderNav(isMobile) {
  var self = this;
  var items = [{
    label: '首页工作台',
    action: 'home'
  }, {
    label: '联系人管理',
    action: 'contact'
  }, {
    label: '拜访记录',
    action: 'visit'
  }, {
    label: '项目管理',
    action: 'project'
  }, {
    label: '单位档案',
    action: 'unit'
  }, {
    label: '提醒待办',
    action: 'reminder'
  }, {
    label: '系统配置',
    action: 'admin'
  }];
  return <div style={isMobile ? styles.mobileNav : styles.sidebar}>
      {!isMobile && <div style={styles.brand}>
          <div style={styles.brandMark}>MI</div>
          <div>
            <div style={styles.brandTitle}>市场信息管理系统</div>
            <div style={styles.brandSub}>V1.4 工作台</div>
          </div>
        </div>}
      <div style={isMobile ? styles.mobileNavScroll : styles.navList}>
        {items.map(item => {
        var active = item.action === 'home';
        return <button key={item.action} onClick={e => {
          self.handleNav(item.action);
        }} style={Object.assign({}, isMobile ? styles.mobileNavItem : styles.navItem, active ? styles.navActive : {})}>
              <span style={styles.navIcon}>{item.action === 'home' ? '▦' : '•'}</span>
              <span>{item.label}</span>
            </button>;
      })}
      </div>
    </div>;
}
export function handleNav(action) {
  if (action === 'home') {
    this.refreshData();
    return;
  }
  if (action === 'contact') this.openNativeForm(FORMS.contactManage);
  if (action === 'visit') this.openNativeForm(FORMS.visitManage);
  if (action === 'project') this.openNativeForm(FORMS.projectManage);
  if (action === 'unit') this.openNativeForm(FORMS.unitManage);
  if (action === 'reminder') this.openNativeForm(FORMS.reminder);
  if (action === 'admin') this.openUrl(BASE_URL + '/' + APP_TYPE + '/admin');
}
export function renderTopbar(isMobile) {
  return <div style={isMobile ? styles.topbarMobile : styles.topbar}>
      <div style={styles.topTitle}>个人工作台</div>
      <div style={styles.topRight}>
        <div style={styles.searchBox}>
          <span style={styles.searchMark}>⌕</span>
          <input defaultValue={_customState.searchKeyword} placeholder="搜索联系人..." onCompositionStart={e => {
          this.handleCompositionStart(e);
        }} onCompositionEnd={e => {
          this.handleCompositionEnd(e);
        }} onChange={e => {
          this.handleSearchChange(e);
        }} onKeyDown={e => {
          this.handleSearchKeyDown(e);
        }} style={styles.searchInput} />
        </div>
      </div>
    </div>;
}
export function renderHero(isMobile) {
  var metric = this.getMetricData();
  var userName = this.getLoginUserName();
  return <div style={isMobile ? styles.heroMobile : styles.hero}>
      <div>
        <div style={styles.heroTitle}>欢迎回来，{userName}</div>
        <div style={styles.heroSub}>今天是 {this.formatTodayCn()}，重点查看与你相关的线索、拜访和项目推进</div>
      </div>
      <div style={styles.heroActions}>
        {this.renderIconButton('新增联系人', 'primary', 'userPlus', e => {
        this.openSubmissionForm(FORMS.contact);
      })}
        {this.renderButton('新增线索', 'primary', e => {
        this.openSubmissionForm(FORMS.intel);
      })}
        {this.renderButton('记录拜访', 'default', e => {
        this.openSubmissionForm(FORMS.visit);
      })}
        {this.renderButton('刷新数据', 'default', e => {
        this.refreshData();
      })}
      </div>
    </div>;
}
export function renderMetrics(gridStyle) {
  var metric = this.getMetricData();
  var cards = [{
    title: '联系人总数',
    value: _customState.totals.contacts,
    sub: '活跃 ' + metric.activeContacts + ' 人',
    color: '#2563FF',
    icon: 'users',
    action: 'contacts'
  }, {
    title: '在推线索',
    value: metric.activeLeads,
    sub: '待跟进 / 跟进中',
    color: '#2563FF',
    icon: 'bar',
    action: 'leads'
  }, {
    title: '在推项目',
    value: metric.projects,
    sub: '重点推进 ' + metric.focusProjects + ' 个',
    color: '#6941C6',
    icon: 'folder',
    action: 'projects'
  }, {
    title: '待我跟进',
    value: metric.myFollowLeads,
    sub: '我是跟进经办人',
    color: '#FF3045',
    icon: 'alert',
    action: 'follow'
  }, {
    title: '即将到期',
    value: metric.dueItems,
    sub: '提醒 / 截止临近',
    color: '#B847F2',
    icon: 'folder',
    action: 'due'
  }, {
    title: '本月拜访',
    value: metric.monthVisits,
    sub: '上门拜访 ' + metric.doorVisits + ' 次',
    color: '#F59E0B',
    icon: 'users',
    action: 'visits'
  }];
  return <div style={gridStyle || styles.metricGrid}>
      {cards.map(card => <div key={card.title} onClick={e => {
      if (card.action === 'contacts') this.openContactList();
      if (card.action === 'leads') this.openMarketLeadList();
      if (card.action === 'projects') this.openNativeForm(FORMS.projectManage);
      if (card.action === 'follow') this.setWorkTab('follow');
      if (card.action === 'due') this.setWorkTab('due');
      if (card.action === 'visits') this.openNativeForm(FORMS.visitManage);
    }} style={styles.metricCard}>
          {this.renderIcon(card.icon, card.color)}
          <div style={styles.metricText}>
            <div style={styles.metricValue}>{card.value}</div>
            <div style={styles.metricTitle}>{card.title}</div>
            <div style={styles.metricSub}>{card.sub}</div>
          </div>
          <div style={styles.cardArrow}>›</div>
        </div>)}
    </div>;
}
export function getTypeTone(type) {
  if (type === 'lead') return 'primary';
  if (type === 'visit') return 'success';
  if (type === 'project') return 'warning';
  return 'default';
}
export function getImportanceTone(value) {
  if (value === '高' || value === '五星') return 'danger';
  if (value === '中' || value === '四星') return 'warning';
  if (value === '低') return 'default';
  return 'primary';
}
export function getMaturityTone(value) {
  if (value === '重点推进' || value === '可转项目') return 'primary';
  if (value === '持续推进') return 'warning';
  return 'default';
}
export function getRiskTone(value) {
  if (value === '今日到期' || value === '高风险') return 'danger';
  if (value === '即将到期') return 'warning';
  return 'default';
}
export function renderWorkInfoIcon(key) {
  var info = this.getWorkInfo(key);
  if (!info) return null;
  var active = _customState.activeWorkInfoKey === key;
  var titleText = info.title + '\n' + (info.lines || []).join('\n');
  return <span title={titleText} onClick={e => {
    e.stopPropagation();
    this.toggleWorkInfo(key);
  }} style={Object.assign({}, styles.workInfoIcon, active ? styles.workInfoIconActive : {})}>i</span>;
}
export function renderWorkInfoPanel(info) {
  if (!info) return null;
  return <div style={styles.workInfoPanel}>
      <div style={styles.workInfoPanelTitle}>{info.title}</div>
      {(info.lines || []).map((line, index) => <div key={index} style={styles.workInfoPanelLine}>{line}</div>)}
    </div>;
}
export function renderRelatedWorkbench(isMobile) {
  var items = this.getMyWorkItems(_customState.activeWorkTab);
  var activeTab = _customState.activeWorkTab || 'follow';
  var activeInfo = this.getWorkInfo(_customState.activeWorkInfoKey);
  var emptyText = activeTab === 'attention' ? '暂无我需关注的事项' : '暂无与你相关的事项';
  return <div style={styles.workbench}>
      <div style={isMobile ? styles.workbenchHeadMobile : styles.workbenchHead}>
        <div>
          <div style={styles.workbenchTitleRow}>
            <div style={styles.workbenchTitle}>与我相关</div>
            {this.renderWorkInfoIcon('scope')}
          </div>
          <div style={styles.workbenchSub}>围绕当前登录用户，汇总市场线索、拜访记录和项目推进。</div>
          {_customState.activeWorkInfoKey === 'scope' ? this.renderWorkInfoPanel(activeInfo) : null}
        </div>
        <button onClick={e => {
        this.refreshData();
      }} style={styles.workRefreshButton}>刷新数据</button>
      </div>
      <div style={styles.workTabs}>
        {WORK_TABS.map(tab => <button key={tab.key} onClick={e => {
        this.setWorkTab(tab.key);
      }} style={Object.assign({}, styles.workTab, activeTab === tab.key ? styles.workTabActive : {})}>
            <span>{tab.label}</span>
            {this.renderWorkInfoIcon(tab.key)}
            <span style={Object.assign({}, styles.workTabCount, activeTab === tab.key ? styles.workTabCountActive : {})}>{this.getWorkTabCount(tab.key)}</span>
          </button>)}
      </div>
      {_customState.activeWorkInfoKey && _customState.activeWorkInfoKey !== 'scope' ? this.renderWorkInfoPanel(activeInfo) : null}
      <div style={styles.workList}>
        {items.length ? items.map(item => this.renderWorkItem(item, isMobile)) : this.renderEmpty(emptyText)}
      </div>
    </div>;
}
export function renderWorkField(label, value) {
  var text = this.formatValue(value);
  return <div style={styles.workField}>
      <span style={styles.workFieldLabel}>{label}</span>
      <span style={styles.workFieldValue}>{text}</span>
    </div>;
}
export function renderWorkActionButton(label, onClick, primary) {
  return <button onClick={e => {
    e.stopPropagation();
    if (onClick) onClick(e);
  }} style={Object.assign({}, styles.workActionButton, primary ? styles.workActionPrimary : {})}>{label}</button>;
}
export function renderWorkActions(item) {
  var self = this;
  var nativeActionLabel = '编辑信息';
  if (item.type === 'lead') nativeActionLabel = '完善线索';
  if (item.type === 'visit') nativeActionLabel = '编辑拜访';
  if (item.type === 'project') nativeActionLabel = '编辑项目';
  return <div style={styles.workActions}>
      {item.type === 'lead' && this.renderWorkActionButton('查看线索', e => {
      self.openLeadDetail(item.row);
    }, true)}
      {item.type === 'visit' && item.leadRow && this.renderWorkActionButton('查看线索', e => {
      self.openLeadDetail(item.leadRow);
    }, true)}
      {item.type === 'visit' && this.renderWorkActionButton('查看拜访', e => {
      self.openVisitDetail(item.row);
    }, !item.leadRow)}
      {item.type === 'project' && this.renderWorkActionButton('查看项目', e => {
      self.openProjectDetail(item.row);
    }, true)}
      {item.type === 'project' && item.leadRow && this.renderWorkActionButton('查看线索', e => {
      self.openLeadDetail(item.leadRow);
    }, false)}
      {this.renderWorkActionButton(nativeActionLabel, e => {
      self.openWorkNative(item);
    }, false)}
    </div>;
}
export function renderWorkItem(item, isMobile) {
  var self = this;
  var cardStyle = Object.assign({}, styles.workItem, item.muted ? styles.workItemMuted : {});
  var metaStyle = isMobile ? styles.workMetaMobile : styles.workMeta;
  return <div key={item.id} onClick={e => {
    self.openWorkItem(item);
  }} style={cardStyle}>
      <div style={isMobile ? styles.workItemHeadMobile : styles.workItemHead}>
        <div style={styles.workTitleBlock}>
          <div style={styles.workBadges}>
            {this.renderBadge(item.typeText, this.getTypeTone(item.type))}
            {this.renderBadge(item.status, this.tone(item.status))}
            {item.importance !== '-' && this.renderBadge(item.importance, this.getImportanceTone(item.importance))}
            {item.maturity !== '-' && this.renderBadge(item.maturity, this.getMaturityTone(item.maturity))}
            {item.risk && this.renderBadge(item.risk, this.getRiskTone(item.risk))}
          </div>
          <div style={styles.workTitle}>{item.title}</div>
          <div style={styles.workRelation}>{item.relationText || '与我相关'}</div>
        </div>
        {this.renderWorkActions(item)}
      </div>
      <div style={metaStyle}>
        {this.renderWorkField('来源单位', item.unit)}
        {this.renderWorkField('关联联系人', item.contact)}
        {this.renderWorkField('跟进经办人', item.handlers)}
        {this.renderWorkField('关注人 / 必看人', item.watchers)}
        {this.renderWorkField('提醒日期', this.formatDate(item.remindDate))}
        {this.renderWorkField('有效截止日期', this.formatDate(item.validUntil))}
        {this.renderWorkField('下一步动作', item.nextAction)}
        {this.renderWorkField('最近更新时间', this.formatUpdateTime(item.updatedTime) || this.formatDateTime(item.updatedTime))}
      </div>
    </div>;
}
export function renderPanelTitle(title, marker, action) {
  return <div style={styles.panelHead}>
      <div style={styles.panelTitleWrap}>
        <span style={styles.panelMarker}>{this.renderPanelIcon(marker)}</span>
        <span style={styles.panelTitle}>{title}</span>
      </div>
      {action && <button onClick={e => {
      action(e);
    }} style={styles.linkButton}>查看全部</button>}
    </div>;
}
export function renderAttentionPanel() {
  var list = this.getOverdueContacts().slice(0, 4);
  return <div style={Object.assign({}, styles.panel, styles.panelTall)}>
      {this.renderPanelTitle('拜访超期/即将超期', 'alert', e => {
      this.openContactList('overdue');
    })}
      <div style={styles.panelBody}>
        {list.length ? list.map(item => this.renderAttentionItem(item)) : this.renderEmpty('暂无超期联系人')}
      </div>
    </div>;
}
export function renderAttentionItem(item) {
  var status = this.getVisitRisk(item);
  var nextDue = this.formatDate(this.getVisitDeadline(item));
  return <div key={item.formInstId} onClick={e => {
    this.openContactDetail(item);
  }} style={Object.assign({}, styles.rowItem, styles.clickableRow)}>
      <div style={Object.assign({}, styles.statusDot, status === '即将超期' ? styles.dotSoon : styles.dotDanger)}></div>
      <div style={styles.rowMain}>
        <div style={styles.rowTitle}>{this.getValue(item, FIELDS.contact.name)} <span style={styles.rowMeta}>{this.getValue(item, FIELDS.contact.position)}</span></div>
        <div style={styles.rowSub}>{this.getUnitNameFromContact(item)}</div>
      </div>
      <div style={styles.rowRight}>
        {this.renderBadge(status, this.tone(status))}
        <div style={styles.dateText}>{nextDue}</div>
      </div>
    </div>;
}
export function renderVisitsPanel() {
  var list = this.getRecentVisits().slice(0, 4);
  return <div style={Object.assign({}, styles.panel, styles.panelTall)}>
      {this.renderPanelTitle('最近拜访记录', 'clock', e => {
      this.openNativeForm(FORMS.visitManage);
    })}
      <div style={styles.panelBody}>
        {list.length ? list.map(item => this.renderVisitItem(item)) : this.renderEmpty('暂无拜访记录')}
      </div>
    </div>;
}
export function renderVisitItem(item) {
  var method = this.getValue(item, FIELDS.visit.method);
  var contactName = this.getContactNameFromAssociation(this.rawValue(item, FIELDS.visit.contact));
  var visitSub = contactName === '-' ? this.formatDate(this.getValue(item, FIELDS.visit.time)) : contactName + ' · ' + this.formatDate(this.getValue(item, FIELDS.visit.time));
  return <div key={item.formInstId} onClick={e => {
    this.openVisitDetail(item);
  }} style={Object.assign({}, styles.rowItem, styles.clickableRow)}>
      <div style={styles.visitTypeCell}>{this.renderVisitBadge(method)}</div>
      <div style={styles.rowMain}>
        <div style={styles.rowTitle}>{this.getValue(item, FIELDS.visit.title)}</div>
        <div style={styles.rowSub}>{visitSub}</div>
      </div>
    </div>;
}
export function renderHomeUpdatesPanel() {
  var updates = this.getHomeUpdates();
  var hasUnread = this.hasUnreadHomeUpdates(updates);
  var visible = _customState.showAllHomeUpdates ? updates : updates.slice(0, 3);
  return <div onClick={e => {
    if (hasUnread) this.markHomeUpdatesRead(updates);
  }} style={Object.assign({}, styles.panel, styles.updatePanel)}>
      <div style={styles.panelHead}>
        <div style={styles.panelTitleWrap}>
          <span style={styles.panelMarker}>{this.renderPanelIcon('bell')}</span>
          <span style={styles.panelTitle}>最新动态</span>
          {hasUnread && <span style={styles.unreadDot}></span>}
        </div>
        <div style={styles.updateActions}>
          {updates.length > 3 && <button onClick={e => {
          e.stopPropagation();
          this.toggleHomeUpdatesAll();
        }} style={styles.updateTextButton}>{_customState.showAllHomeUpdates ? '收起' : '查看全部'}</button>}
          {hasUnread && <button onClick={e => {
          e.stopPropagation();
          this.markHomeUpdatesRead(updates);
        }} style={styles.markReadButton}>标记已读</button>}
        </div>
      </div>
      <div style={styles.updateList}>
        {visible.length ? visible.map(item => this.renderHomeUpdateItem(item)) : this.renderEmpty('暂无最新动态')}
      </div>
    </div>;
}
export function renderHomeUpdateItem(item) {
  return <div key={item.id} onClick={e => {
    e.stopPropagation();
    this.openHomeUpdate(item);
  }} style={Object.assign({}, styles.updateItem, styles.clickableRow)}>
      <div style={styles.updateItemHead}>
        <div style={styles.updateTitleLine}>
          {this.renderUpdateTypeDot(item.type)}
          <span style={styles.updateTitle}>{item.title}</span>
        </div>
        <span style={styles.updateTime}>{this.formatUpdateTime(item.time)}</span>
      </div>
      <div style={styles.updateSummary}>{item.summary}</div>
    </div>;
}
export function renderUpdateTypeDot(type) {
  var typeStyle = styles.updateTypeVisit;
  if (type === '项目联系人变更') typeStyle = styles.updateTypeRelation;
  if (type === '项目更新') typeStyle = styles.updateTypeProject;
  return <span style={Object.assign({}, styles.updateTypeDot, typeStyle)}></span>;
}
export function renderReminderPanel() {
  var list = this.getUpcomingReminders();
  return <div style={styles.panel}>
      {this.renderPanelTitle('近期重要日期', 'calendar', e => {
      this.openReminderList();
    })}
      <div style={styles.panelBody}>
        {list.length ? list.map(item => this.renderReminderItem(item)) : this.renderEmpty('暂无重要日期')}
      </div>
    </div>;
}
export function renderReminderItem(item) {
  var days = this.daysUntil(this.getValue(item, FIELDS.reminder.date));
  var status = this.getValue(item, FIELDS.reminder.status);
  var tip = days === null ? '' : days >= 0 ? '提前' + days + '天提醒' : '已过' + Math.abs(days) + '天';
  return <div key={item.formInstId} onClick={e => {
    this.openReminderDetail(item);
  }} style={Object.assign({}, styles.compactItem, styles.clickableRow)}>
      <div style={styles.remindIcon}>{this.renderPanelIcon('calendar')}</div>
      <div style={styles.rowMain}>
        <div style={styles.rowTitle}>{this.getValue(item, FIELDS.reminder.title)}</div>
        <div style={styles.rowSub}>{this.formatDate(this.getValue(item, FIELDS.reminder.date))} · {tip}</div>
      </div>
      {this.renderBadge(status, this.tone(status))}
    </div>;
}
export function renderIntelPanel() {
  var list = this.getPendingIntel();
  return <div style={styles.panel}>
      {this.renderPanelTitle('情报线索', 'bell', e => {
      this.openIntelList();
    })}
      <div style={styles.panelBody}>
        {list.length ? list.map(item => this.renderIntelItem(item)) : this.renderEmpty('暂无情报线索')}
      </div>
    </div>;
}
export function renderIntelItem(item) {
  var status = this.getValue(item, FIELDS.intel.status);
  var contactName = this.getContactNameFromAssociation(this.rawValue(item, FIELDS.intel.contact));
  var remindDate = this.formatDate(this.rawValue(item, FIELDS.intel.remindDate));
  var validUntil = this.formatDate(this.rawValue(item, FIELDS.intel.validUntil));
  var intelSub = contactName === '-' ? '提醒 ' + remindDate : contactName + ' · 提醒 ' + remindDate + ' · 有效期 ' + validUntil;
  return <div key={item.formInstId} onClick={e => {
    this.openIntelDetail(item);
  }} style={Object.assign({}, styles.compactItem, styles.clickableRow)}>
      <div style={styles.statusDot}></div>
      <div style={styles.rowMain}>
        <div style={styles.rowTitle}>{this.getValue(item, FIELDS.intel.title)}</div>
        <div style={styles.rowSub}>{intelSub}</div>
      </div>
      {this.renderBadge(status, this.tone(status))}
    </div>;
}
export function getRelationHighlights() {
  var list = _customState.relations.slice(0);
  list.sort((a, b) => {
    var av = parseInt(this.getValue(a, FIELDS.relation.influence), 10) || 0;
    var bv = parseInt(this.getValue(b, FIELDS.relation.influence), 10) || 0;
    return bv - av;
  });
  return list.slice(0, 5);
}
export function renderRelationPanel() {
  var isMobile = this.utils.isMobile();
  var list = this.getRelationHighlights();
  return <div style={styles.widePanel}>
      {this.renderPanelTitle('项目关键关系', 'folder', e => {
      this.openNativeForm(FORMS.projectManage);
    })}
      <div style={isMobile ? styles.relationGridMobile : styles.relationGrid}>
        {list.length ? list.map(item => this.renderRelationItem(item)) : this.renderEmpty('暂无项目关系')}
      </div>
    </div>;
}
export function renderRelationItem(item) {
  var contactName = this.getContactNameFromAssociation(this.rawValue(item, FIELDS.relation.contact));
  var projectName = this.getProjectNameFromAssociation(this.rawValue(item, FIELDS.relation.project));
  var attitude = this.getValue(item, FIELDS.relation.attitude);
  return <div key={item.formInstId} style={styles.relationItem}>
      <div style={styles.rowTitle}>{contactName} · {this.getValue(item, FIELDS.relation.role)}</div>
      <div style={styles.rowSub}>{projectName}</div>
      <div style={styles.relationMeta}>
        {this.renderBadge('影响 ' + this.getValue(item, FIELDS.relation.influence), 'primary')}
        {this.renderBadge(attitude, this.tone(attitude))}
      </div>
    </div>;
}
export function renderCompletenessPanel(inGrid) {
  var isMobile = this.utils.isMobile();
  var list = this.getIncompleteContacts();
  return <div style={Object.assign({}, styles.widePanel, inGrid ? styles.widePanelInGrid : {})}>
      {this.renderPanelTitle('资料完整度待提升', 'trend', e => {
      this.openContactList('incomplete');
    })}
      <div style={isMobile ? styles.completionGridMobile : styles.completionGrid}>
        {list.length ? list.map(item => this.renderCompletenessItem(item)) : this.renderEmpty('暂无待补充资料')}
      </div>
    </div>;
}
export function renderStars(count) {
  var num = parseInt(count, 10);
  if (isNaN(num)) num = 0;
  var stars = [1, 2, 3, 4, 5];
  return <span style={styles.smallStars}>{stars.map(item => <span key={item} style={item <= num ? styles.starOn : styles.starOff}>★</span>)}</span>;
}
export function renderCompletenessItem(item) {
  var value = this.getCompletion(item);
  var barStyle = value < 50 ? styles.progressDanger : value < 70 ? styles.progressWarning : styles.progressSuccess;
  return <div key={item.formInstId} onClick={e => {
    this.openContactDetail(item);
  }} style={Object.assign({}, styles.completionItem, styles.clickableRow)}>
      <div style={styles.completionAvatar}>{this.getValue(item, FIELDS.contact.name).substring(0, 1)}</div>
      <div style={styles.completionMain}>
        <div style={styles.completionTitle}>{this.getValue(item, FIELDS.contact.name)} {this.renderStars(this.getValue(item, FIELDS.contact.star))}</div>
        <div style={styles.rowSub}>{this.getValue(item, FIELDS.contact.position)} · {this.getUnitNameFromContact(item)}</div>
        <div style={styles.completionMissing}>{this.getMissingSummary(item, 3)}</div>
        <div style={styles.completionLine}>
          <div style={styles.progressTrack}>
            <div style={Object.assign({}, styles.progressBar, barStyle, {
            width: value + '%'
          })}></div>
          </div>
          <span style={styles.completionPercent}>{value}%</span>
        </div>
      </div>
    </div>;
}
export function renderProjectPanel(inGrid) {
  var isMobile = this.utils.isMobile();
  var list = this.getInProgressProjects().slice(0, 3);
  return <div style={Object.assign({}, styles.widePanel, inGrid ? styles.widePanelInGrid : {})}>
      {this.renderPanelTitle('项目推进概览', 'folder', e => {
      this.openNativeForm(FORMS.projectManage);
    })}
      <div style={isMobile ? styles.projectGridMobile : styles.projectGrid}>
        {list.length ? list.map(item => this.renderProjectItem(item)) : this.renderEmpty('暂无在推项目')}
      </div>
    </div>;
}
export function renderProjectItem(item) {
  var phase = this.getValue(item, FIELDS.project.phase);
  var status = this.getValue(item, FIELDS.project.status);
  var body = this.getValue(item, FIELDS.project.recent);
  if (body === '-') body = this.getValue(item, FIELDS.project.keyProgress);
  if (body === '-') body = this.getValue(item, FIELDS.project.summary);
  var relationCount = this.getProjectRelationCount(item);
  return <div key={this.getRowId(item)} onClick={e => {
    this.openProjectDetail(item);
  }} style={Object.assign({}, styles.projectItem, styles.clickableRow)}>
      <div style={styles.projectHead}>
        <div style={styles.projectTitle}>{this.getValue(item, FIELDS.project.name)}</div>
        {this.renderBadge(phase, this.tone(phase))}
      </div>
      <div style={styles.projectMeta}>{this.getUnitNameFromProject(item)} · 负责人: {this.getValue(item, FIELDS.project.owner)}</div>
      <div style={styles.projectBody}>{body !== '-' ? body : '暂无最新进展'}</div>
      <div style={styles.projectFoot}>
        <span>{relationCount} 位关联联系人</span>
        {this.renderBadge(status, this.tone(status))}
      </div>
    </div>;
}
export function renderMaintenancePanel(isMobile) {
  if (!_customState.maintenanceOpen) return null;
  var total = this.getClearDataTotal();
  var disabled = _customState.clearDataScanning || _customState.clearDataRunning;
  var canClear = _customState.clearConfirmText === CLEAR_DATA_CONFIRM_TEXT && total > 0 && !disabled;
  var result = _customState.clearDataResult;
  var panelStyle = Object.assign({}, styles.maintenancePanel, isMobile ? styles.maintenancePanelMobile : {});
  return <div style={panelStyle}>
      <div style={styles.maintenanceHead}>
        <div>
          <div style={styles.maintenanceTitle}>数据维护</div>
          <div style={styles.maintenanceSub}>将清空全部业务数据，不删除页面和表单结构</div>
        </div>
        <button disabled={disabled} onClick={e => {
        this.closeMaintenancePanel();
      }} style={Object.assign({}, styles.smallButton, disabled ? styles.buttonDisabled : {})}>关闭</button>
      </div>
      <div style={styles.clearWarning}>操作不可恢复。系统会先统计清单，确认后按依赖顺序逐条删除。</div>
      <div style={styles.clearSummary}>
        <div>
          <div style={styles.clearSummaryLabel}>待清空</div>
          <div style={styles.clearSummaryValue}>{total} 条</div>
        </div>
        <button disabled={disabled} onClick={e => {
        this.scanClearData();
      }} style={Object.assign({}, styles.smallButton, disabled ? styles.buttonDisabled : {})}>重新统计</button>
      </div>
      {_customState.clearDataProgress && <div style={styles.clearProgress}>{_customState.clearDataProgress}</div>}
      <div style={styles.clearPlan}>
        {(_customState.clearDataPlan || []).map(item => {
        var statusText = item.deleted || item.failed ? '已删 ' + (item.deleted || 0) + '，失败 ' + (item.failed || 0) : item.status;
        return <div key={item.key} style={styles.clearPlanRow}>
              <div style={styles.clearPlanName}>{item.name}</div>
              <div style={styles.clearPlanCount}>{item.count || 0} 条</div>
              <div style={styles.clearPlanStatus}>{statusText}</div>
            </div>;
      })}
      </div>
      <div style={styles.confirmBlock}>
        <input id="clear-data-confirm-input" key={result ? 'clear-confirm-done' : 'clear-confirm-ready'} defaultValue={_customState.clearConfirmText} disabled={disabled} placeholder={'输入“' + CLEAR_DATA_CONFIRM_TEXT + '”确认'} onChange={e => {
        this.handleClearConfirmChange(e);
      }} style={styles.confirmInput} />
        <button disabled={!canClear} onClick={e => {
        this.startClearBusinessData();
      }} style={Object.assign({}, styles.dangerButton, !canClear ? styles.dangerButtonDisabled : {})}>清空全部业务数据</button>
      </div>
      {result && <div style={result.failed ? styles.clearResultWarning : styles.clearResultSuccess}>
          已处理 {result.total} 条，成功 {result.deleted} 条，失败 {result.failed} 条
          {result.failures && result.failures.length ? <div style={styles.clearFailureList}>
              {result.failures.slice(0, 3).map(item => <div key={item.formInstId}>{item.formName}：{item.message}</div>)}
            </div> : null}
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
  shell: {
    display: 'flex',
    minHeight: '100vh'
  },
  sidebar: {
    width: '228px',
    minHeight: '100vh',
    background: '#101828',
    color: '#FFFFFF',
    flexShrink: 0
  },
  brand: {
    height: '58px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '0 20px',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
    boxSizing: 'border-box'
  },
  brandMark: {
    width: '32px',
    height: '32px',
    borderRadius: '8px',
    background: '#2563FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '11px',
    fontWeight: 800
  },
  brandTitle: {
    fontSize: '15px',
    fontWeight: 700,
    lineHeight: '18px'
  },
  brandSub: {
    fontSize: '11px',
    color: '#D0D5DD',
    marginTop: '2px'
  },
  navList: {
    padding: '14px 8px',
    display: 'grid',
    gap: '4px',
    boxSizing: 'border-box'
  },
  navItem: {
    height: '44px',
    border: '1px solid transparent',
    background: 'transparent',
    color: '#D0D5DD',
    textAlign: 'left',
    borderRadius: '8px',
    padding: '0 12px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '14px',
    cursor: 'pointer',
    boxSizing: 'border-box'
  },
  navActive: {
    background: '#155EEF',
    color: '#FFFFFF'
  },
  navIcon: {
    display: 'inline-flex',
    width: '18px',
    justifyContent: 'center'
  },
  mobileNav: {
    background: '#101828',
    padding: '10px 12px',
    boxSizing: 'border-box'
  },
  mobileNavScroll: {
    display: 'flex',
    gap: '8px',
    overflowX: 'auto'
  },
  mobileNavItem: {
    height: '34px',
    border: '1px solid rgba(255,255,255,0.16)',
    background: 'transparent',
    color: '#D0D5DD',
    borderRadius: '8px',
    padding: '0 10px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '13px',
    cursor: 'pointer',
    whiteSpace: 'nowrap'
  },
  main: {
    flex: 1,
    minWidth: 0
  },
  topbar: {
    height: '56px',
    background: '#FFFFFF',
    borderBottom: '1px solid #E5E7EB',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 24px 0 16px',
    boxSizing: 'border-box'
  },
  topbarMobile: {
    background: '#FFFFFF',
    borderBottom: '1px solid #E5E7EB',
    display: 'grid',
    gap: '10px',
    padding: '12px',
    boxSizing: 'border-box'
  },
  topTitle: {
    fontSize: '18px',
    color: '#111827',
    fontWeight: 700
  },
  topRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px'
  },
  searchBox: {
    width: '256px',
    height: '32px',
    borderRadius: '8px',
    background: '#F2F4F7',
    display: 'flex',
    alignItems: 'center',
    padding: '0 12px',
    boxSizing: 'border-box'
  },
  searchMark: {
    color: '#98A2B3',
    fontSize: '16px',
    marginRight: '8px'
  },
  searchInput: {
    border: 'none',
    background: 'transparent',
    outline: 'none',
    width: '100%',
    height: '30px',
    color: '#344054',
    fontSize: '13px',
    boxSizing: 'border-box'
  },
  content: {
    width: 'calc(100% - 96px)',
    maxWidth: '1232px',
    padding: '24px 0 36px',
    margin: '0 auto',
    boxSizing: 'border-box'
  },
  contentMobile: {
    padding: '14px 12px',
    boxSizing: 'border-box'
  },
  hero: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '16px',
    marginBottom: '24px'
  },
  heroMobile: {
    display: 'grid',
    gap: '14px',
    marginBottom: '16px'
  },
  heroTitle: {
    fontSize: '22px',
    lineHeight: '30px',
    fontWeight: 800,
    color: '#101828'
  },
  heroSub: {
    fontSize: '14px',
    color: '#475467',
    marginTop: '3px'
  },
  heroActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    flexWrap: 'wrap'
  },
  button: {
    height: '38px',
    borderRadius: '8px',
    padding: '0 16px',
    border: '1px solid #D0D5DD',
    fontSize: '14px',
    fontWeight: 600,
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
    color: '#344054'
  },
  iconButton: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px'
  },
  buttonIcon: {
    flexShrink: 0
  },
  buttonDisabled: {
    opacity: 0.56,
    cursor: 'not-allowed'
  },
  smallButton: {
    height: '32px',
    borderRadius: '8px',
    padding: '0 12px',
    border: '1px solid #D0D5DD',
    background: '#FFFFFF',
    color: '#344054',
    fontSize: '13px',
    fontWeight: 600,
    cursor: 'pointer',
    outline: 'none',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box'
  },
  maintenancePanel: {
    background: '#FFFFFF',
    border: '1px solid #EAECF0',
    borderRadius: '8px',
    boxShadow: '0 8px 24px rgba(15, 23, 42, 0.04)',
    padding: '18px',
    marginBottom: '18px',
    boxSizing: 'border-box'
  },
  maintenancePanelMobile: {
    padding: '14px',
    marginBottom: '14px'
  },
  maintenanceHead: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: '12px',
    marginBottom: '12px'
  },
  maintenanceTitle: {
    color: '#101828',
    fontSize: '17px',
    lineHeight: '24px',
    fontWeight: 800
  },
  maintenanceSub: {
    color: '#667085',
    fontSize: '13px',
    lineHeight: '20px',
    marginTop: '2px'
  },
  clearWarning: {
    border: '1px solid #FDA29B',
    background: '#FFFBFA',
    color: '#B42318',
    borderRadius: '8px',
    padding: '10px 12px',
    fontSize: '13px',
    lineHeight: '20px',
    marginBottom: '12px'
  },
  clearSummary: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '12px',
    border: '1px solid #EAECF0',
    borderRadius: '8px',
    padding: '12px',
    boxSizing: 'border-box'
  },
  clearSummaryLabel: {
    color: '#667085',
    fontSize: '12px',
    lineHeight: '18px'
  },
  clearSummaryValue: {
    color: '#101828',
    fontSize: '22px',
    lineHeight: '28px',
    fontWeight: 800
  },
  clearProgress: {
    color: '#475467',
    fontSize: '13px',
    lineHeight: '20px',
    marginTop: '10px'
  },
  clearPlan: {
    display: 'grid',
    gap: '8px',
    marginTop: '12px'
  },
  clearPlanRow: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr) 72px 96px',
    alignItems: 'center',
    gap: '10px',
    minHeight: '36px',
    border: '1px solid #F2F4F7',
    borderRadius: '8px',
    padding: '8px 10px',
    boxSizing: 'border-box',
    background: '#FCFCFD'
  },
  clearPlanName: {
    color: '#344054',
    fontSize: '13px',
    lineHeight: '18px',
    fontWeight: 600,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  clearPlanCount: {
    color: '#101828',
    fontSize: '13px',
    lineHeight: '18px',
    fontWeight: 700,
    textAlign: 'right'
  },
  clearPlanStatus: {
    color: '#667085',
    fontSize: '12px',
    lineHeight: '18px',
    textAlign: 'right',
    whiteSpace: 'nowrap'
  },
  confirmBlock: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    flexWrap: 'wrap',
    marginTop: '14px'
  },
  confirmInput: {
    flex: 1,
    minWidth: '260px',
    height: '38px',
    borderRadius: '8px',
    border: '1px solid #D0D5DD',
    padding: '0 12px',
    color: '#344054',
    fontSize: '13px',
    outline: 'none',
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
    fontWeight: 700,
    cursor: 'pointer',
    outline: 'none',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box'
  },
  dangerButtonDisabled: {
    opacity: 0.5,
    cursor: 'not-allowed'
  },
  clearResultSuccess: {
    border: '1px solid #ABEFC6',
    background: '#F6FEF9',
    color: '#027A48',
    borderRadius: '8px',
    padding: '10px 12px',
    fontSize: '13px',
    lineHeight: '20px',
    marginTop: '12px'
  },
  clearResultWarning: {
    border: '1px solid #FEDF89',
    background: '#FFFCF5',
    color: '#B54708',
    borderRadius: '8px',
    padding: '10px 12px',
    fontSize: '13px',
    lineHeight: '20px',
    marginTop: '12px'
  },
  clearFailureList: {
    marginTop: '6px',
    color: '#667085'
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
    gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
    gap: '10px',
    marginBottom: '20px'
  },
  metricGridMobile: {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, minmax(132px, 1fr))',
    gap: '10px',
    marginBottom: '14px',
    overflowX: 'auto',
    paddingBottom: '4px'
  },
  metricCard: {
    minHeight: '96px',
    background: '#FFFFFF',
    border: '1px solid #EDF0F5',
    borderRadius: '14px',
    boxShadow: '0 8px 24px rgba(15, 23, 42, 0.04)',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '14px',
    boxSizing: 'border-box',
    cursor: 'pointer'
  },
  clickableRow: {
    cursor: 'pointer'
  },
  iconBox: {
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    color: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    fontWeight: 800,
    flexShrink: 0
  },
  metricText: {
    minWidth: 0,
    flex: 1
  },
  metricValue: {
    fontSize: '28px',
    lineHeight: '30px',
    color: '#101828',
    fontWeight: 800
  },
  metricTitle: {
    fontSize: '14px',
    color: '#344054',
    marginTop: '4px'
  },
  metricSub: {
    fontSize: '12px',
    color: '#667085',
    marginTop: '2px'
  },
  cardArrow: {
    color: '#C5CBD3',
    fontSize: '28px',
    lineHeight: '28px'
  },
  workbench: {
    background: '#FFFFFF',
    border: '1px solid #D6E8FF',
    borderRadius: '14px',
    boxShadow: '0 10px 28px rgba(21, 94, 239, 0.08)',
    padding: '20px',
    marginBottom: '20px',
    boxSizing: 'border-box'
  },
  workbenchHead: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: '16px',
    marginBottom: '16px'
  },
  workbenchHeadMobile: {
    display: 'grid',
    gap: '12px',
    marginBottom: '14px'
  },
  workbenchTitleRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px'
  },
  workbenchTitle: {
    color: '#101828',
    fontSize: '18px',
    lineHeight: '26px',
    fontWeight: 800
  },
  workbenchSub: {
    color: '#667085',
    fontSize: '13px',
    lineHeight: '20px',
    marginTop: '3px'
  },
  workInfoIcon: {
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    border: '1px solid #D0D5DD',
    background: '#FFFFFF',
    color: '#98A2B3',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '11px',
    lineHeight: '14px',
    fontWeight: 800,
    cursor: 'help',
    flexShrink: 0,
    boxSizing: 'border-box'
  },
  workInfoIconActive: {
    border: '1px solid #B9D6FF',
    background: '#EFF6FF',
    color: '#155EEF'
  },
  workInfoPanel: {
    width: '320px',
    maxWidth: '100%',
    borderRadius: '10px',
    border: '1px solid #D6E8FF',
    background: '#FFFFFF',
    boxShadow: '0 10px 28px rgba(16, 24, 40, 0.12)',
    padding: '12px',
    marginTop: '8px',
    marginBottom: '10px',
    color: '#344054',
    boxSizing: 'border-box'
  },
  workInfoPanelTitle: {
    color: '#101828',
    fontSize: '13px',
    lineHeight: '20px',
    fontWeight: 800,
    marginBottom: '6px'
  },
  workInfoPanelLine: {
    color: '#475467',
    fontSize: '12px',
    lineHeight: '18px',
    marginTop: '4px'
  },
  workRefreshButton: {
    height: '34px',
    borderRadius: '8px',
    border: '1px solid #155EEF',
    background: '#155EEF',
    color: '#FFFFFF',
    fontSize: '13px',
    fontWeight: 700,
    padding: '0 14px',
    cursor: 'pointer',
    outline: 'none',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box'
  },
  workTabs: {
    display: 'flex',
    gap: '8px',
    overflowX: 'auto',
    paddingBottom: '8px',
    borderBottom: '1px solid #EEF2F7',
    marginBottom: '12px'
  },
  workTab: {
    height: '34px',
    borderRadius: '8px',
    border: '1px solid #EAECF0',
    background: '#FFFFFF',
    color: '#475467',
    padding: '0 10px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '13px',
    fontWeight: 700,
    cursor: 'pointer',
    outline: 'none',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box'
  },
  workTabActive: {
    border: '1px solid #155EEF',
    background: '#EAF2FF',
    color: '#155EEF'
  },
  workTabCount: {
    minWidth: '20px',
    height: '20px',
    borderRadius: '10px',
    background: '#F2F4F7',
    color: '#667085',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    padding: '0 6px',
    boxSizing: 'border-box'
  },
  workTabCountActive: {
    background: '#155EEF',
    color: '#FFFFFF'
  },
  workList: {
    display: 'grid',
    gap: '10px'
  },
  workItem: {
    border: '1px solid #E5EAF3',
    borderRadius: '10px',
    background: '#FCFCFD',
    padding: '14px',
    boxSizing: 'border-box',
    cursor: 'pointer'
  },
  workItemMuted: {
    opacity: 0.72,
    background: '#F8FAFC'
  },
  workItemHead: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: '16px',
    marginBottom: '12px'
  },
  workItemHeadMobile: {
    display: 'grid',
    gap: '10px',
    marginBottom: '12px'
  },
  workTitleBlock: {
    minWidth: 0,
    flex: 1
  },
  workBadges: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '6px',
    marginBottom: '8px'
  },
  workTitle: {
    color: '#101828',
    fontSize: '15px',
    lineHeight: '22px',
    fontWeight: 800,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  workRelation: {
    color: '#667085',
    fontSize: '12px',
    lineHeight: '18px',
    marginTop: '3px'
  },
  workMeta: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
    gap: '8px 12px'
  },
  workMetaMobile: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: '8px'
  },
  workField: {
    minWidth: 0,
    borderTop: '1px solid #EEF2F7',
    paddingTop: '8px'
  },
  workFieldLabel: {
    display: 'block',
    color: '#98A2B3',
    fontSize: '12px',
    lineHeight: '17px',
    marginBottom: '2px',
    whiteSpace: 'nowrap'
  },
  workFieldValue: {
    display: 'block',
    color: '#344054',
    fontSize: '13px',
    lineHeight: '19px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  workActions: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '8px',
    flexWrap: 'wrap',
    flexShrink: 0
  },
  workActionButton: {
    height: '30px',
    borderRadius: '8px',
    border: '1px solid #D0D5DD',
    background: '#FFFFFF',
    color: '#344054',
    padding: '0 10px',
    fontSize: '12px',
    fontWeight: 700,
    cursor: 'pointer',
    outline: 'none',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box'
  },
  workActionPrimary: {
    border: '1px solid #155EEF',
    background: '#155EEF',
    color: '#FFFFFF'
  },
  dashboard: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
    gridTemplateRows: '300px 190px 250px',
    gridTemplateAreas: '"overdue overdue overdue overdue visits visits visits visits updates updates updates updates" "quality quality quality quality quality quality quality quality dates dates dates dates" "projects projects projects projects projects projects projects projects clues clues clues clues"',
    gap: '20px',
    alignItems: 'stretch'
  },
  dashboardTablet: {
    display: 'grid',
    gridTemplateColumns: 'repeat(8, minmax(0, 1fr))',
    gridTemplateRows: '300px 240px 220px 260px',
    gridTemplateAreas: '"overdue overdue overdue overdue visits visits visits visits" "updates updates updates updates dates dates dates dates" "quality quality quality quality quality quality quality quality" "projects projects projects projects clues clues clues clues"',
    gap: '16px',
    alignItems: 'stretch'
  },
  dashboardMobile: {
    display: 'grid',
    gap: '12px'
  },
  gridOverdue: {
    gridArea: 'overdue',
    minWidth: 0,
    minHeight: 0,
    height: '100%'
  },
  gridVisits: {
    gridArea: 'visits',
    minWidth: 0,
    minHeight: 0,
    height: '100%'
  },
  gridUpdates: {
    gridArea: 'updates',
    minWidth: 0,
    minHeight: 0,
    height: '100%'
  },
  gridQuality: {
    gridArea: 'quality',
    minWidth: 0,
    minHeight: 0,
    height: '100%'
  },
  gridDates: {
    gridArea: 'dates',
    minWidth: 0,
    minHeight: 0,
    height: '100%'
  },
  gridProjects: {
    gridArea: 'projects',
    minWidth: 0,
    minHeight: 0,
    height: '100%'
  },
  gridClues: {
    gridArea: 'clues',
    minWidth: 0,
    minHeight: 0,
    height: '100%'
  },
  panel: {
    background: '#FFFFFF',
    border: '1px solid #EDF0F5',
    borderRadius: '14px',
    boxShadow: '0 8px 24px rgba(15, 23, 42, 0.04)',
    padding: '20px',
    boxSizing: 'border-box',
    minHeight: 0,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  panelTall: {
    minHeight: 0
  },
  widePanel: {
    marginTop: '16px',
    background: '#FFFFFF',
    border: '1px solid #EDF0F5',
    borderRadius: '14px',
    boxShadow: '0 8px 24px rgba(15, 23, 42, 0.04)',
    padding: '20px',
    boxSizing: 'border-box'
  },
  widePanelInGrid: {
    marginTop: '0',
    minHeight: 0,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  panelHead: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '12px',
    minHeight: '24px',
    marginBottom: '14px',
    flexShrink: 0
  },
  panelTitleWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    minWidth: 0
  },
  panelMarker: {
    width: '18px',
    height: '18px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  panelTitle: {
    fontSize: '15px',
    lineHeight: '22px',
    color: '#111827',
    fontWeight: 800
  },
  linkButton: {
    border: 'none',
    background: 'transparent',
    color: '#155EEF',
    fontSize: '13px',
    cursor: 'pointer',
    padding: '0',
    whiteSpace: 'nowrap'
  },
  updatePanel: {
    padding: '20px'
  },
  updateActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    flexShrink: 0
  },
  updateTextButton: {
    border: 'none',
    background: 'transparent',
    color: '#155EEF',
    fontSize: '13px',
    cursor: 'pointer',
    padding: '0',
    whiteSpace: 'nowrap'
  },
  markReadButton: {
    border: 'none',
    background: 'transparent',
    color: '#667085',
    padding: '0',
    fontSize: '13px',
    cursor: 'pointer',
    whiteSpace: 'nowrap'
  },
  unreadDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: '#F04438',
    display: 'inline-flex',
    flexShrink: 0
  },
  updateList: {
    display: 'grid',
    gap: '0',
    flex: 1,
    minHeight: 0,
    overflowY: 'auto',
    overflowX: 'hidden'
  },
  updateItem: {
    borderTop: '1px solid #F2F4F7',
    padding: '9px 0',
    minWidth: 0,
    boxSizing: 'border-box'
  },
  updateItemHead: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '10px',
    marginBottom: '5px'
  },
  updateTitleLine: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    minWidth: 0,
    flex: 1
  },
  updateTime: {
    color: '#98A2B3',
    fontSize: '12px',
    lineHeight: '18px',
    whiteSpace: 'nowrap'
  },
  updateTitle: {
    color: '#101828',
    fontSize: '13px',
    lineHeight: '19px',
    fontWeight: 700,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  updateSummary: {
    color: '#667085',
    fontSize: '12px',
    lineHeight: '18px',
    marginTop: '2px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  updateTypeDot: {
    width: '7px',
    height: '7px',
    borderRadius: '50%',
    flexShrink: 0
  },
  updateTypeRelation: {
    background: '#F79009',
    color: '#B54708'
  },
  updateTypeProject: {
    background: '#155EEF',
    color: '#155EEF'
  },
  updateTypeVisit: {
    background: '#12B76A',
    color: '#027A48'
  },
  updateMeta: {
    color: '#98A2B3',
    fontSize: '12px',
    lineHeight: '18px',
    marginTop: '4px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  rowItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    minHeight: '52px',
    borderTop: '1px solid #F2F4F7',
    padding: '6px 0',
    boxSizing: 'border-box'
  },
  compactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    minHeight: '38px',
    padding: '4px 0',
    boxSizing: 'border-box'
  },
  panelBody: {
    flex: 1,
    minHeight: 0,
    overflowY: 'auto',
    overflowX: 'hidden'
  },
  rowMain: {
    flex: 1,
    minWidth: 0
  },
  rowTitle: {
    fontSize: '13px',
    lineHeight: '19px',
    color: '#101828',
    fontWeight: 700,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  rowMeta: {
    fontWeight: 400,
    color: '#475467',
    marginLeft: '8px'
  },
  rowSub: {
    fontSize: '12px',
    color: '#667085',
    lineHeight: '17px',
    marginTop: '2px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  rowRight: {
    display: 'grid',
    justifyItems: 'end',
    gap: '4px',
    flexShrink: 0
  },
  dateText: {
    fontSize: '12px',
    color: '#667085'
  },
  statusDot: {
    width: '8px',
    height: '8px',
    borderRadius: '4px',
    background: '#F59E0B',
    flexShrink: 0
  },
  dotSoon: {
    background: '#F59E0B'
  },
  dotDanger: {
    background: '#F04438'
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '58px',
    minHeight: '22px',
    padding: '1px 8px',
    borderRadius: '8px',
    fontSize: '12px',
    lineHeight: '18px',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box'
  },
  visitTypeCell: {
    width: '42px',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexShrink: 0
  },
  visitBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '36px',
    minHeight: '22px',
    padding: '1px 8px',
    borderRadius: '8px',
    fontSize: '12px',
    lineHeight: '18px',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box'
  },
  remindIcon: {
    width: '26px',
    height: '26px',
    borderRadius: '8px',
    background: '#ECFDF3',
    color: '#12B76A',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 800,
    flexShrink: 0
  },
  completionGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: '12px',
    flex: 1,
    minHeight: 0,
    overflow: 'hidden',
    alignItems: 'stretch'
  },
  completionGridMobile: {
    display: 'grid',
    gap: '10px'
  },
  completionItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    border: '1px solid #EAECF0',
    borderRadius: '10px',
    padding: '12px',
    boxSizing: 'border-box',
    minHeight: 0
  },
  completionAvatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: '#F2F4F7',
    color: '#667085',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 800,
    flexShrink: 0
  },
  completionMain: {
    flex: 1,
    minWidth: 0
  },
  completionTitle: {
    color: '#101828',
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 800,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  completionMissing: {
    color: '#B54708',
    fontSize: '12px',
    lineHeight: '18px',
    marginTop: '4px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  smallStars: {
    color: '#F59E0B',
    fontSize: '12px',
    marginLeft: '4px',
    whiteSpace: 'nowrap'
  },
  starOn: {
    color: '#F59E0B'
  },
  starOff: {
    color: '#E4E7EC'
  },
  completionLine: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginTop: '8px'
  },
  completionPercent: {
    color: '#667085',
    fontSize: '12px',
    width: '32px',
    textAlign: 'right',
    flexShrink: 0
  },
  relationGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
    gap: '12px'
  },
  relationGridMobile: {
    display: 'grid',
    gap: '10px'
  },
  relationItem: {
    border: '1px solid #EAECF0',
    borderRadius: '8px',
    padding: '12px',
    boxSizing: 'border-box',
    minWidth: 0
  },
  relationMeta: {
    display: 'flex',
    gap: '6px',
    flexWrap: 'wrap',
    marginTop: '10px'
  },
  progressTrack: {
    height: '6px',
    borderRadius: '3px',
    background: '#EAECF0',
    overflow: 'hidden',
    marginTop: '0',
    marginBottom: '0',
    flex: 1
  },
  progressBar: {
    height: '6px',
    borderRadius: '3px',
    background: '#F59E0B'
  },
  progressDanger: {
    background: '#FF6B6B'
  },
  progressWarning: {
    background: '#F59E0B'
  },
  progressSuccess: {
    background: '#12B76A'
  },
  projectGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: '16px',
    flex: 1,
    minHeight: 0,
    overflow: 'hidden',
    alignItems: 'stretch'
  },
  projectGridMobile: {
    display: 'grid',
    gap: '10px'
  },
  projectItem: {
    border: '1px solid #EAECF0',
    borderRadius: '12px',
    padding: '14px',
    boxSizing: 'border-box',
    minWidth: 0,
    minHeight: 0,
    overflow: 'hidden'
  },
  projectHead: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: '12px',
    marginBottom: '8px'
  },
  projectTitle: {
    color: '#101828',
    fontSize: '15px',
    lineHeight: '22px',
    fontWeight: 800,
    minWidth: 0
  },
  projectMeta: {
    color: '#667085',
    fontSize: '12px',
    lineHeight: '18px',
    marginBottom: '8px'
  },
  projectBody: {
    color: '#344054',
    fontSize: '13px',
    lineHeight: '20px',
    minHeight: '40px',
    overflow: 'hidden'
  },
  projectFoot: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '10px',
    color: '#98A2B3',
    fontSize: '12px',
    marginTop: '12px'
  },
  empty: {
    padding: '28px 12px',
    color: '#98A2B3',
    textAlign: 'center',
    fontSize: '13px'
  }
};
export function renderJsx() {
  var timestamp = this.state && this.state.timestamp;
  var isMobile = this.utils.isMobile();
  var viewportWidth = typeof window !== 'undefined' && window.innerWidth ? window.innerWidth : 1440;
  var isTablet = !isMobile && viewportWidth < 1200;
  var metricGridStyle = isMobile ? styles.metricGridMobile : styles.metricGrid;
  var dashboardStyle = isMobile ? styles.dashboardMobile : isTablet ? styles.dashboardTablet : styles.dashboard;
  var contentStyle = isMobile ? styles.contentMobile : styles.content;
  return <div style={styles.page}>
      <div style={{
      display: 'none'
    }}>{timestamp}</div>
      {isMobile ? <div>
          {this.renderTopbar(true)}
          <div style={contentStyle}>
            {this.renderHero(true)}
            {_customState.loading && <div style={styles.notice}>正在加载数据...</div>}
            {_customState.error && <div style={styles.error}>{_customState.error}</div>}
            {this.renderMaintenancePanel(true)}
            {this.renderMetrics(metricGridStyle)}
            {this.renderRelatedWorkbench(true)}
            <div style={dashboardStyle}>
              {this.renderAttentionPanel()}
              {this.renderVisitsPanel()}
              {this.renderHomeUpdatesPanel()}
              {this.renderReminderPanel()}
              {this.renderIntelPanel()}
            </div>
            {this.renderCompletenessPanel()}
            {this.renderProjectPanel()}
          </div>
        </div> : <div>
          {this.renderTopbar(false)}
          <div style={contentStyle}>
            {this.renderHero(false)}
            {_customState.loading && <div style={styles.notice}>正在加载数据...</div>}
            {_customState.error && <div style={styles.error}>{_customState.error}</div>}
            {this.renderMaintenancePanel(false)}
            {this.renderMetrics(metricGridStyle)}
            {this.renderRelatedWorkbench(false)}
            <div style={dashboardStyle}>
              <div style={styles.gridOverdue}>{this.renderAttentionPanel()}</div>
              <div style={styles.gridVisits}>{this.renderVisitsPanel()}</div>
              <div style={styles.gridUpdates}>{this.renderHomeUpdatesPanel()}</div>
              <div style={styles.gridQuality}>{this.renderCompletenessPanel(true)}</div>
              <div style={styles.gridDates}>{this.renderReminderPanel()}</div>
              <div style={styles.gridProjects}>{this.renderProjectPanel(true)}</div>
              <div style={styles.gridClues}>{this.renderIntelPanel()}</div>
            </div>
          </div>
        </div>}
    </div>;
}
