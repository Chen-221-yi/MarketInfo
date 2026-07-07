// 市场线索管理 - 自定义页面
var APP_TYPE = 'APP_LC7BU43GCVLSI0TH8POE';
var FORMS = {
  leadManage: 'FORM-4E927F6C9D1E43EC8226DDB561F31FAC4OF7',
  leadDetail: 'FORM-48EA952D879B4D1D94580C2EA14B7AE43HM9',
  projectManage: 'FORM-CAC6AFFA0A3341B598561F68EE7B4B8BTZGB',
  projectDetail: 'FORM-3367C1CD6BDB4FE995BCA69ECFF03419Q0A4',
  visitDetail: 'FORM-6CC5A6BBE39F439CA213B8CC3BD7E429GQW1',
  lead: 'FORM-76909065F1B5460E872D3834D95B2DFFK8F0',
  visit: 'FORM-5C9373CB6EA5468FA607352B96908C87WHBW',
  project: 'FORM-DC58D4D9EB714ACBB421A34ADFB418ABJCVO',
  contact: 'FORM-87B25B011DC14AA5ACC39BE4077D520AITQS',
  unit: 'FORM-A96B2187A20640C68C9F7806CC1FEADDZZZ8'
};
var FIELDS = {
  lead: {
    title: 'textField_o5hf51ir9',
    serial: 'serialNumberField_o5hf11mwc',
    content: 'textareaField_o5hf6dkbq',
    type: 'selectField_o5hf4u689',
    importance: 'selectField_mq4vrff2',
    status: 'selectField_o5hfbq4tf',
    owner: 'employeeField_5szd78u2t',
    handlers: 'employeeField_nnet2xu74',
    watchers: 'employeeField_nnet3hm2v',
    contact: 'associationFormField_o5hf21sgj',
    unit: 'associationFormField_nnet1kq13',
    sourceVisit: 'associationFormField_5szc127yh',
    mainProject: 'associationFormField_o5hf3lnak',
    remindDate: 'dateField_5szd6vvxq',
    validUntil: 'dateField_5szd5xzdb',
    expectedTime: 'textField_5szc4102z',
    nextAction: 'textareaField_5szd8976q',
    sourceType: 'selectField_o5hf88jri',
    entryType: 'selectField_5szc2uo33',
    permission: 'selectField_o5hfdjolr',
    auth: 'employeeField_o5hfer19l',
    closeReason: 'selectField_nnet4f154',
    closeNote: 'textareaField_nneu5a0qt',
    closeTime: 'dateField_nneu6312q',
    closePerson: 'employeeField_nneu7j6e9',
    maturity: 'selectField_nneu896bu',
    recorder: 'employeeField_o5hff9siq',
    recordTime: 'dateField_o5hfgz10c'
  },
  visit: {
    title: 'textField_kyv32ess0',
    contact: 'associationFormField_kyv33bc8s',
    unit: 'associationFormField_2yle119gl',
    project: 'associationFormField_kyv35uxhy',
    lead: 'associationFormField_o2e81pniy',
    method: 'selectField_kyv378rc2',
    time: 'dateField_kyv38g8dw',
    content: 'textareaField_kyv3acyym',
    nextAction: 'textareaField_0usd1fstw',
    people: 'employeeField_kyv36zyqq',
    watchers: 'employeeField_o2e82mhmy',
    handlers: 'employeeField_o2e83lzlv',
    recorder: 'employeeField_kyv3ln90f'
  },
  project: {
    name: 'textField_jpjm21hie',
    phase: 'selectField_jpjn73b05',
    status: 'selectField_jpjnm9c66',
    owner: 'employeeField_jpjn9lyh5',
    unit: 'associationFormField_jpjn5lpv8',
    sourceLead: 'associationFormField_o8c51p6t3',
    nextAction: 'textareaField_jpjnh16i8',
    recentDate: 'dateField_jpjnl71j3'
  }
};
var STATUS_OPTIONS = [{ label: '全部', value: '全部' }, { label: '待我跟进', value: '待跟进' }, { label: '推进中', value: '跟进中' }, { label: '已转项目', value: '已转项目' }, { label: '已关闭', value: '已关闭' }];
var IMPORTANCE_OPTIONS = ['全部', '高', '中', '低'];
var TYPE_OPTIONS = ['全部', '市场信息', '项目线索', '政策动向', '招采节点', '其他'];
var MATURITY_OPTIONS = ['全部', '初步接触', '持续推进', '重点推进', '可转项目'];
var RELATION_OPTIONS = ['全部', '我负责', '我跟进', '我关注'];
var DATE_FIELD_OPTIONS = [{ label: '提醒日期', value: 'remindDate' }, { label: '有效截止日期', value: 'validUntil' }];
var CLOSE_REASON_OPTIONS = ['关系不到位', '无预算', '非目标区域', '非目标业务', '已错过窗口期', '客户不再推进', '已由其他单位承接', '其他'];
var _customState = {
  loading: true,
  error: '',
  accessDenied: false,
  keyword: '',
  statusFilter: '全部',
  importanceFilter: '全部',
  typeFilter: '全部',
  maturityFilter: '全部',
  relationFilter: '全部',
  dateFieldFilter: 'remindDate',
  dateStart: '',
  dateEnd: '',
  currentPage: 1,
  pageSize: 8,
  leads: [],
  visits: [],
  projects: [],
  totalLeads: 0,
  closeModalOpen: false,
  closeTargetId: '',
  closeReason: '其他',
  closeNote: '',
  closeSaving: false,
  transferModalOpen: false,
  transferTargetId: '',
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
export function didMount() {
  if (this.denyNormalEmployeeAccess()) return;
  this.loadData(true);
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
  _customState.loading = false;
  _customState.error = '';
  this.forceUpdate();
  return true;
}
export function renderAccessDenied() {
  return <div style={styles.accessBox}>
      <div style={styles.accessTitle}>暂无查看权限</div>
      <div style={styles.accessText}>市场线索管理页仅开放给“市场信息管理 / 总经理办”。普通员工请继续使用原生表单提交拜访和线索。</div>
    </div>;
}
export function loadData(showLoading) {
  var self = this;
  if (showLoading !== false) {
    _customState.loading = true;
    _customState.error = '';
    this.forceUpdate();
  }
  Promise.all([self.loadLeads(), self.loadVisits(), self.loadProjects()]).then(() => {
    _customState.loading = false;
    _customState.error = '';
    self.forceUpdate();
  }).catch(err => {
    _customState.loading = false;
    _customState.error = self.getErrorMessage(err);
    self.forceUpdate();
    self.utils.toast({
      title: '市场线索加载失败',
      type: 'error'
    });
  });
}
export function loadLeads() {
  var order = {};
  order[FIELDS.lead.recordTime] = '-';
  return this.utils.yida.searchFormDatas({
    formUuid: FORMS.lead,
    currentPage: 1,
    pageSize: 100,
    dynamicOrder: JSON.stringify(order)
  }).then(res => {
    var rows = this.normalizeRows(res);
    _customState.leads = rows;
    _customState.totalLeads = this.normalizeTotal(res, rows.length);
  }).catch(err => {
    _customState.leads = [];
    _customState.totalLeads = 0;
    throw err;
  });
}
export function loadVisits() {
  var order = {};
  order[FIELDS.visit.time] = '-';
  return this.utils.yida.searchFormDatas({
    formUuid: FORMS.visit,
    currentPage: 1,
    pageSize: 100,
    dynamicOrder: JSON.stringify(order)
  }).then(res => {
    _customState.visits = this.normalizeRows(res);
  }).catch(err => {
    _customState.visits = [];
    return [];
  });
}
export function loadProjects() {
  var order = {};
  order[FIELDS.project.recentDate] = '-';
  return this.utils.yida.searchFormDatas({
    formUuid: FORMS.project,
    currentPage: 1,
    pageSize: 100,
    dynamicOrder: JSON.stringify(order)
  }).then(res => {
    _customState.projects = this.normalizeRows(res);
  }).catch(err => {
    _customState.projects = [];
    return [];
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
    if (parsed.zh_CN) return this.formatValue(parsed.zh_CN);
    var keys = ['title', 'name', 'label', 'text', 'displayName', 'userName', 'nickName', 'value'];
    for (var i = 0; i < keys.length; i += 1) {
      var text = this.formatValue(parsed[keys[i]]);
      if (text && text !== '-') return text;
    }
    return '-';
  }
  return parsed;
}
export function getValue(row, fieldId) {
  return this.formatValue(this.rawValue(row, fieldId));
}
export function getAssociationItems(value) {
  var parsed = this.parseMaybeJson(value);
  if (!parsed) return [];
  var list = Array.isArray(parsed) ? parsed : [parsed];
  return list.filter(item => item);
}
export function associationText(value) {
  var items = this.getAssociationItems(value);
  if (!items.length) return this.formatValue(value);
  return items.map(item => {
    if (!item || typeof item !== 'object') return this.formatValue(item);
    return this.formatValue(item.title || item.name || item.label || item.text || item.value);
  }).join('、');
}
export function getAssociationText(row, fieldId) {
  return this.associationText(this.rawAssociation(row, fieldId));
}
export function getAssociationId(value) {
  var items = this.getAssociationItems(value);
  if (!items.length) return '';
  var item = items[0];
  if (!item || typeof item !== 'object') return '';
  return item.instanceId || item.formInstId || item.formInstanceId || item.id || '';
}
export function getAssociationIds(value) {
  return this.getAssociationItems(value).map(item => {
    if (!item || typeof item !== 'object') return '';
    return item.instanceId || item.formInstId || item.formInstanceId || item.id || '';
  }).filter(id => id);
}
export function getAssociationFirstItem(value) {
  var items = this.getAssociationItems(value);
  return items[0] || null;
}
export function rowMatchesAssociation(row, fieldId, id) {
  if (!id) return false;
  return this.getAssociationIds(this.rawAssociation(row, fieldId)).indexOf(id) >= 0;
}
export function getRowId(row) {
  return row && (row.formInstId || row.formInstanceId || row.instanceId || row.id) || '';
}
export function findById(list, id) {
  if (!id) return null;
  var matched = (list || []).filter(item => this.getRowId(item) === id);
  return matched[0] || null;
}
export function formatDate(value) {
  if (!value || value === '-') return '-';
  var num = Number(value);
  var d = num ? new Date(num) : new Date(value);
  if (!d || isNaN(d.getTime())) return '-';
  var month = d.getMonth() + 1;
  var day = d.getDate();
  var hour = d.getHours();
  var minute = d.getMinutes();
  var monthText = month < 10 ? '0' + month : '' + month;
  var dayText = day < 10 ? '0' + day : '' + day;
  var text = d.getFullYear() + '-' + monthText + '-' + dayText;
  if (hour || minute) {
    var hourText = hour < 10 ? '0' + hour : '' + hour;
    var minuteText = minute < 10 ? '0' + minute : '' + minute;
    text += ' ' + hourText + ':' + minuteText;
  }
  return text;
}
export function dateInputToTimestamp(value, endOfDay) {
  if (!value) return 0;
  var parts = String(value).split('-');
  if (parts.length !== 3) return 0;
  var year = Number(parts[0]);
  var month = Number(parts[1]);
  var day = Number(parts[2]);
  if (!year || !month || !day) return 0;
  if (endOfDay) return new Date(year, month - 1, day, 23, 59, 59).getTime();
  return new Date(year, month - 1, day).getTime();
}
export function getTodayStart() {
  var now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
}
export function addDays(time, days) {
  return time + days * 24 * 60 * 60 * 1000;
}
export function getLeadTitle(row) {
  var title = this.getValue(row, FIELDS.lead.title);
  if (title !== '-') return title;
  var unit = this.getAssociationText(row, FIELDS.lead.unit);
  var type = this.getValue(row, FIELDS.lead.type);
  if (unit !== '-' && type !== '-') return unit + ' · ' + type;
  return '未命名市场线索';
}
export function getVisitTime(row) {
  return Number(this.rawValue(row, FIELDS.visit.time)) || 0;
}
export function getLeadVisits(row) {
  var leadId = this.getRowId(row);
  var exists = {};
  var list = [];
  var sourceIds = this.getAssociationIds(this.rawAssociation(row, FIELDS.lead.sourceVisit));
  sourceIds.forEach(id => {
    var visit = this.findById(_customState.visits, id);
    if (visit && !exists[id]) {
      exists[id] = true;
      list.push(visit);
    }
  });
  (_customState.visits || []).forEach(visit => {
    var id = this.getRowId(visit);
    if (!id || exists[id]) return;
    if (this.rowMatchesAssociation(visit, FIELDS.visit.lead, leadId)) {
      exists[id] = true;
      list.push(visit);
    }
  });
  list.sort((a, b) => this.getVisitTime(b) - this.getVisitTime(a));
  return list;
}
export function getLeadProjects(row) {
  var leadId = this.getRowId(row);
  var exists = {};
  var list = [];
  var mainIds = this.getAssociationIds(this.rawAssociation(row, FIELDS.lead.mainProject));
  mainIds.forEach(id => {
    var project = this.findById(_customState.projects, id);
    if (project && !exists[id]) {
      exists[id] = true;
      list.push(project);
    }
  });
  (_customState.projects || []).forEach(project => {
    var id = this.getRowId(project);
    if (!id || exists[id]) return;
    if (this.rowMatchesAssociation(project, FIELDS.project.sourceLead, leadId)) {
      exists[id] = true;
      list.push(project);
    }
  });
  list.sort((a, b) => {
    return (Number(this.rawValue(b, FIELDS.project.recentDate)) || 0) - (Number(this.rawValue(a, FIELDS.project.recentDate)) || 0);
  });
  return list;
}
export function getLatestVisitDate(row) {
  var visits = this.getLeadVisits(row);
  if (!visits.length) return '-';
  return this.formatDate(this.getVisitTime(visits[0]));
}
export function getSourceVisitDate(row) {
  var sourceIds = this.getAssociationIds(this.rawAssociation(row, FIELDS.lead.sourceVisit));
  if (!sourceIds.length) return '-';
  for (var i = 0; i < sourceIds.length; i += 1) {
    var visit = this.findById(_customState.visits, sourceIds[i]);
    if (visit) return this.formatDate(this.getVisitTime(visit));
  }
  return '已关联';
}
export function getLeadRecentDate(row) {
  var latestVisit = this.getLatestVisitDate(row);
  if (latestVisit && latestVisit !== '-') return latestVisit;
  return this.formatDate(this.rawValue(row, FIELDS.lead.recordTime));
}
export function displayStatus(status) {
  if (status === '跟进中') return '推进中';
  if (status === '待跟进') return '待我跟进';
  return status && status !== '-' ? status : '待我跟进';
}
export function getNextActionText(row) {
  var status = this.getValue(row, FIELDS.lead.status);
  if (status === '已关闭') return '线索已关闭，暂无下一步动作';
  var nextAction = this.getValue(row, FIELDS.lead.nextAction);
  if (nextAction && nextAction !== '-') return nextAction;
  return '暂无下一步动作';
}
export function isLeadClosed(row) {
  return this.getValue(row, FIELDS.lead.status) === '已关闭';
}
export function isLeadTransferred(row) {
  return this.getValue(row, FIELDS.lead.status) === '已转项目' || this.getLeadProjects(row).length > 0;
}
export function isLeadDueSoon(row) {
  if (this.isLeadClosed(row) || this.getValue(row, FIELDS.lead.status) === '已转项目') return false;
  var validUntil = Number(this.rawValue(row, FIELDS.lead.validUntil)) || 0;
  if (!validUntil) return false;
  var today = this.getTodayStart();
  return validUntil >= today && validUntil <= this.addDays(today, 7);
}
export function getLoginUserIdSafe() {
  if (this.utils && this.utils.getLoginUserId) return this.utils.getLoginUserId();
  return typeof window !== 'undefined' && window.loginUser && window.loginUser.userId || '';
}
export function getLoginUserNameSafe() {
  if (this.utils && this.utils.getLoginUserName) return this.utils.getLoginUserName();
  return typeof window !== 'undefined' && window.loginUser && window.loginUser.userName || '';
}
export function employeeContainsCurrentUser(row, fieldId) {
  var userId = this.getLoginUserIdSafe();
  var userName = this.getLoginUserNameSafe();
  var raw = this.rawValue(row, fieldId);
  var text = this.formatValue(raw);
  if (userName && text.indexOf(userName) >= 0) return true;
  var items = this.getAssociationItems(raw);
  for (var i = 0; i < items.length; i += 1) {
    var item = items[i];
    if (typeof item === 'string' && userId && item === userId) return true;
    if (item && typeof item === 'object') {
      var id = item.userId || item.value || item.id || item.employeeId || '';
      var name = item.name || item.userName || item.nickName || item.label || '';
      if (userId && id === userId) return true;
      if (userName && this.formatValue(name).indexOf(userName) >= 0) return true;
    }
  }
  return false;
}
export function getSearchText(row) {
  var fields = [FIELDS.lead.title, FIELDS.lead.serial, FIELDS.lead.content, FIELDS.lead.type, FIELDS.lead.status, FIELDS.lead.importance, FIELDS.lead.maturity, FIELDS.lead.owner, FIELDS.lead.handlers, FIELDS.lead.watchers, FIELDS.lead.nextAction];
  var self = this;
  var text = fields.map(fieldId => self.getValue(row, fieldId)).join(' ');
  text += ' ' + this.getAssociationText(row, FIELDS.lead.unit);
  text += ' ' + this.getAssociationText(row, FIELDS.lead.contact);
  return text.toLowerCase();
}
export function dateMatches(row) {
  var start = this.dateInputToTimestamp(_customState.dateStart, false);
  var end = this.dateInputToTimestamp(_customState.dateEnd, true);
  if (!start && !end) return true;
  var fieldId = _customState.dateFieldFilter === 'validUntil' ? FIELDS.lead.validUntil : FIELDS.lead.remindDate;
  var value = Number(this.rawValue(row, fieldId)) || 0;
  if (!value) return false;
  if (start && value < start) return false;
  if (end && value > end) return false;
  return true;
}
export function relationMatches(row) {
  if (_customState.relationFilter === '全部') return true;
  if (_customState.relationFilter === '我负责') return this.employeeContainsCurrentUser(row, FIELDS.lead.owner);
  if (_customState.relationFilter === '我跟进') return this.employeeContainsCurrentUser(row, FIELDS.lead.handlers);
  if (_customState.relationFilter === '我关注') return this.employeeContainsCurrentUser(row, FIELDS.lead.watchers);
  return true;
}
export function getFilteredLeads() {
  var self = this;
  var keyword = (_customState.keyword || '').trim().toLowerCase();
  var list = (_customState.leads || []).filter(row => {
    var status = self.getValue(row, FIELDS.lead.status);
    var importance = self.getValue(row, FIELDS.lead.importance);
    var type = self.getValue(row, FIELDS.lead.type);
    var maturity = self.getValue(row, FIELDS.lead.maturity);
    var keywordMatched = !keyword || self.getSearchText(row).indexOf(keyword) >= 0;
    var statusMatched = true;
    if (_customState.statusFilter !== '全部') {
      statusMatched = _customState.statusFilter === '已转项目' ? self.isLeadTransferred(row) : status === _customState.statusFilter;
    }
    var importanceMatched = _customState.importanceFilter === '全部' || importance === _customState.importanceFilter;
    var typeMatched = _customState.typeFilter === '全部' || type === _customState.typeFilter;
    var maturityMatched = _customState.maturityFilter === '全部' || maturity === _customState.maturityFilter;
    return keywordMatched && statusMatched && importanceMatched && typeMatched && maturityMatched && self.dateMatches(row) && self.relationMatches(row);
  });
  list.sort((a, b) => {
    var statusA = self.getValue(a, FIELDS.lead.status) === '已关闭' ? -1 : 0;
    var statusB = self.getValue(b, FIELDS.lead.status) === '已关闭' ? -1 : 0;
    if (statusA !== statusB) return statusB - statusA;
    return (Number(self.rawValue(b, FIELDS.lead.remindDate)) || Number(self.rawValue(b, FIELDS.lead.recordTime)) || 0) - (Number(self.rawValue(a, FIELDS.lead.remindDate)) || Number(self.rawValue(a, FIELDS.lead.recordTime)) || 0);
  });
  return list;
}
export function getMetricData() {
  var leads = _customState.leads || [];
  var projects = _customState.projects || [];
  return {
    total: _customState.totalLeads || leads.length,
    pending: leads.filter(row => this.getValue(row, FIELDS.lead.status) === '待跟进').length,
    running: leads.filter(row => this.getValue(row, FIELDS.lead.status) === '跟进中').length,
    transferred: leads.filter(row => this.isLeadTransferred(row)).length,
    closed: leads.filter(row => this.getValue(row, FIELDS.lead.status) === '已关闭').length,
    dueSoon: leads.filter(row => this.isLeadDueSoon(row)).length,
    myOwner: leads.filter(row => this.employeeContainsCurrentUser(row, FIELDS.lead.owner)).length,
    myFollow: leads.filter(row => this.employeeContainsCurrentUser(row, FIELDS.lead.handlers)).length,
    inProjects: projects.filter(row => {
      var status = this.getValue(row, FIELDS.project.status);
      return status !== '暂停' && status !== '归档' && status !== '已关闭';
    }).length
  };
}
export function getTotalPage(total) {
  var page = Math.ceil((total || 0) / _customState.pageSize);
  return page < 1 ? 1 : page;
}
export function getCurrentPageLeads() {
  var list = this.getFilteredLeads();
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
export function setFilter(key, value) {
  _customState[key] = value;
  _customState.currentPage = 1;
  this.forceUpdate();
}
export function setDateFilter(key, e) {
  _customState[key] = e && e.target ? e.target.value : '';
}
export function applyDateFilter() {
  _customState.currentPage = 1;
  this.forceUpdate();
}
export function resetFilters() {
  _customState.keyword = '';
  _customState.statusFilter = '全部';
  _customState.importanceFilter = '全部';
  _customState.typeFilter = '全部';
  _customState.maturityFilter = '全部';
  _customState.relationFilter = '全部';
  _customState.dateFieldFilter = 'remindDate';
  _customState.dateStart = '';
  _customState.dateEnd = '';
  _customState.currentPage = 1;
  ['lead-keyword-main', 'lead-keyword-mobile', 'lead-date-start', 'lead-date-end'].forEach(id => {
    var input = document.getElementById(id);
    if (input) input.value = '';
  });
  this.forceUpdate();
}
export function goPage(delta) {
  var totalPage = this.getTotalPage(this.getFilteredLeads().length);
  var next = _customState.currentPage + delta;
  if (next < 1) next = 1;
  if (next > totalPage) next = totalPage;
  _customState.currentPage = next;
  this.forceUpdate();
}
export function openSubmissionForm(formUuid, params) {
  var base = typeof window !== 'undefined' && window.location ? window.location.origin : '';
  var query = [];
  var data = params || {};
  Object.keys(data).forEach(key => {
    if (data[key] !== undefined && data[key] !== null && data[key] !== '') query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
  });
  window.location.href = base + '/' + APP_TYPE + '/submission/' + formUuid + (query.length ? '?' + query.join('&') : '');
}
export function openNativeEditForm(formUuid, formInstId) {
  if (!formInstId) return;
  var base = typeof window !== 'undefined' && window.location ? window.location.origin : '';
  window.location.href = base + '/' + APP_TYPE + '/formDetail/' + formUuid + '?formInstId=' + encodeURIComponent(formInstId) + '&mode=edit';
}
export function openNativeDetailForm(formUuid, formInstId) {
  if (!formInstId) return;
  var base = typeof window !== 'undefined' && window.location ? window.location.origin : '';
  window.location.href = base + '/' + APP_TYPE + '/formDetail/' + formUuid + '?formInstId=' + encodeURIComponent(formInstId);
}
export function openLeadDetail(row) {
  var id = this.getRowId(row);
  if (!id) return;
  this.utils.router.push(FORMS.leadDetail, {
    leadId: id
  }, false);
}
export function openVisitDetail(row) {
  var id = this.getRowId(row);
  if (!id) return;
  this.utils.router.push(FORMS.visitDetail, {
    formInstId: id
  }, false);
}
export function openProjectDetail(row) {
  var id = this.getRowId(row);
  if (!id) return;
  this.utils.router.push(FORMS.projectDetail, {
    projectId: id
  }, false);
}
export function getAssociationParam(rawValue, idName, titleName, params) {
  var item = this.getAssociationFirstItem(rawValue);
  if (!item || typeof item !== 'object') return;
  var id = item.instanceId || item.formInstId || item.formInstanceId || item.id || '';
  var title = this.formatValue(item.title || item.name || item.label || item.text);
  if (id) params[idName] = id;
  if (title && title !== '-') params[titleName] = title;
}
export function addLeadContextParams(row, params) {
  var leadId = this.getRowId(row);
  if (leadId) {
    params.leadId = leadId;
    params.sourceLeadId = leadId;
  }
  params.leadTitle = this.getLeadTitle(row);
  var content = this.getValue(row, FIELDS.lead.content);
  if (content && content !== '-') params.leadContent = content;
  var type = this.getValue(row, FIELDS.lead.type);
  if (type && type !== '-') params.leadType = type;
  var importance = this.getValue(row, FIELDS.lead.importance);
  if (importance && importance !== '-') params.leadImportance = importance;
  var sourceType = this.getValue(row, FIELDS.lead.sourceType);
  if (sourceType && sourceType !== '-') params.leadSourceType = sourceType;
  var expectedTime = this.getValue(row, FIELDS.lead.expectedTime);
  if (expectedTime && expectedTime !== '-') params.leadExpectedTime = expectedTime;
  var nextAction = this.getValue(row, FIELDS.lead.nextAction);
  if (nextAction && nextAction !== '-') params.leadNextAction = nextAction;
  var remindDate = this.rawValue(row, FIELDS.lead.remindDate);
  if (remindDate) params.leadRemindDate = remindDate;
  var validUntil = this.rawValue(row, FIELDS.lead.validUntil);
  if (validUntil) params.leadValidUntil = validUntil;
  var owner = this.getValue(row, FIELDS.lead.owner);
  if (owner && owner !== '-') params.leadOwner = owner;
  var handlers = this.getValue(row, FIELDS.lead.handlers);
  if (handlers && handlers !== '-') params.leadHandlers = handlers;
  var watchers = this.getValue(row, FIELDS.lead.watchers);
  if (watchers && watchers !== '-') params.leadWatchers = watchers;
}
export function openAddVisitFromLead(row) {
  if (!row) return;
  var params = {};
  this.addLeadContextParams(row, params);
  this.getAssociationParam(this.rawAssociation(row, FIELDS.lead.contact), 'contactId', 'contactTitle', params);
  this.getAssociationParam(this.rawAssociation(row, FIELDS.lead.unit), 'unitId', 'unitTitle', params);
  this.getAssociationParam(this.rawAssociation(row, FIELDS.lead.mainProject), 'projectId', 'projectTitle', params);
  this.utils.toast({
    title: '将打开拜访原生新增页；关联线索请在原生表单中确认',
    type: 'notice'
  });
  this.openSubmissionForm(FORMS.visit, params);
}
export function refreshData() {
  this.utils.toast({
    title: '正在刷新市场线索',
    type: 'notice'
  });
  this.loadData(true);
}
export function openCloseModal(row) {
  if (!row) return;
  _customState.closeModalOpen = true;
  _customState.closeTargetId = this.getRowId(row);
  _customState.closeReason = this.getValue(row, FIELDS.lead.closeReason) !== '-' ? this.getValue(row, FIELDS.lead.closeReason) : '其他';
  _customState.closeNote = this.getValue(row, FIELDS.lead.closeNote) !== '-' ? this.getValue(row, FIELDS.lead.closeNote) : '';
  _customState.closeSaving = false;
  this.forceUpdate();
}
export function closeCloseModal() {
  if (_customState.closeSaving) return;
  _customState.closeModalOpen = false;
  _customState.closeTargetId = '';
  _customState.closeReason = '其他';
  _customState.closeNote = '';
  this.forceUpdate();
}
export function handleCloseReason(e) {
  var value = e && e.target ? e.target.value : e;
  _customState.closeReason = value || '其他';
  this.forceUpdate();
}
export function handleCloseNote(e) {
  _customState.closeNote = e && e.target ? e.target.value : '';
}
export function saveCloseLead() {
  var self = this;
  if (!_customState.closeTargetId || _customState.closeSaving) return;
  _customState.closeSaving = true;
  this.forceUpdate();
  var payload = {};
  payload[FIELDS.lead.status] = '已关闭';
  payload[FIELDS.lead.closeReason] = _customState.closeReason || '其他';
  payload[FIELDS.lead.closeNote] = _customState.closeNote || '';
  payload[FIELDS.lead.closeTime] = new Date().getTime();
  this.utils.yida.updateFormData({
    formInstId: _customState.closeTargetId,
    updateFormDataJson: JSON.stringify(payload),
    useLatestVersion: 'y'
  }).then(() => {
    _customState.closeSaving = false;
    _customState.closeModalOpen = false;
    self.utils.toast({
      title: '线索已关闭，关闭人请在原生表单或规则中维护',
      type: 'success'
    });
    self.loadData(true);
  }).catch(err => {
    _customState.closeSaving = false;
    self.forceUpdate();
    self.utils.toast({
      title: '关闭线索失败：' + self.getErrorMessage(err),
      type: 'error'
    });
  });
}
export function openTransferModal(row) {
  this.openProjectCreateFromLead(row);
}
export function closeTransferModal() {
  _customState.transferModalOpen = false;
  _customState.transferTargetId = '';
  this.forceUpdate();
}
export function getTransferLead() {
  return this.findById(_customState.leads, _customState.transferTargetId);
}
export function openFirstProjectFromLead(row) {
  var projects = this.getLeadProjects(row);
  if (projects.length) {
    this.openProjectDetail(projects[0]);
    return;
  }
  this.utils.toast({
    title: '未找到已关联项目，请在线索详情中核对关联关系。',
    type: 'warning'
  });
}
export function openProjectCreateFromLead(row) {
  if (!row) return;
  if (this.isLeadTransferred(row)) {
    this.openFirstProjectFromLead(row);
    return;
  }
  if (this.isLeadClosed(row)) {
    this.utils.toast({
      title: '已关闭线索不能转为项目',
      type: 'warning'
    });
    return;
  }
  var params = {};
  params.mode = 'leadConvert';
  this.addLeadContextParams(row, params);
  this.getAssociationParam(this.rawAssociation(row, FIELDS.lead.contact), 'contactId', 'contactTitle', params);
  this.getAssociationParam(this.rawAssociation(row, FIELDS.lead.unit), 'unitId', 'unitTitle', params);
  this.getAssociationParam(this.rawAssociation(row, FIELDS.lead.mainProject), 'sourceProjectId', 'sourceProjectTitle', params);
  this.utils.router.push(FORMS.projectManage, params, false);
}
export function openProjectSubmissionFromLead() {
  var row = this.getTransferLead();
  this.openProjectCreateFromLead(row);
}
export function openProjectManageForLink() {
  this.utils.toast({
    title: '请在项目原生表单中维护“来源线索”后返回查看',
    type: 'notice'
  });
  this.utils.router.push(FORMS.projectManage, {}, false);
}
export function toneStatus(status) {
  if (status === '已转项目') return 'success';
  if (status === '跟进中') return 'primary';
  if (status === '已关闭') return 'default';
  return 'warning';
}
export function toneImportance(importance) {
  if (importance === '高') return 'danger';
  if (importance === '低') return 'default';
  return 'warning';
}
export function toneMaturity(maturity) {
  if (maturity === '可转项目' || maturity === '重点推进') return 'success';
  if (maturity === '持续推进') return 'primary';
  return 'default';
}
export function renderBadge(text, toneName) {
  if (!text || text === '-') return null;
  var colors = {
    primary: { bg: '#EAF2FF', color: '#155EEF', border: '#B9D6FF' },
    success: { bg: '#ECFDF3', color: '#027A48', border: '#ABEFC6' },
    warning: { bg: '#FFF7E6', color: '#B54708', border: '#FEDF89' },
    danger: { bg: '#FEF3F2', color: '#B42318', border: '#FECDCA' },
    purple: { bg: '#F4EBFF', color: '#6941C6', border: '#E9D7FE' },
    default: { bg: '#F2F4F7', color: '#475467', border: '#EAECF0' }
  };
  var c = colors[toneName] || colors.default;
  return <span style={Object.assign({}, styles.badge, {
    background: c.bg,
    color: c.color,
    border: '1px solid ' + c.border
  })}>{text}</span>;
}
export function renderButton(label, type, onClick) {
  var style = styles.buttonDefault;
  if (type === 'primary') style = styles.buttonPrimary;
  if (type === 'danger') style = styles.buttonDanger;
  if (type === 'softDanger') style = styles.buttonSoftDanger;
  if (type === 'success') style = styles.buttonSuccess;
  if (type === 'weak') style = styles.buttonWeak;
  return <button type="button" onClick={e => {
      if (onClick) onClick(e);
    }} style={Object.assign({}, styles.button, style)}>{label}</button>;
}
export function renderDisabledButton(label) {
  return <span style={Object.assign({}, styles.button, styles.buttonDisabled)}>{label}</span>;
}
export function renderHero(isMobile) {
  return <div style={isMobile ? styles.heroMobile : styles.hero}>
      <div>
        <div style={styles.breadcrumb}>市场信息管理 / <span style={styles.breadcrumbStrong}>线索管理</span></div>
        <div style={styles.pageTitle}>市场线索管理</div>
        <div style={styles.pageSub}>统一管理市场机会、拜访沉淀与后续推进事项，形成从拜访到项目的闭环。</div>
      </div>
      <div style={styles.heroActions}>
        {this.renderButton('+ 新增联系人', 'default', e => {
        this.openSubmissionForm(FORMS.contact);
      })}
        {this.renderButton('+ 新增线索', 'primary', e => {
        this.openSubmissionForm(FORMS.lead);
      })}
        {this.renderButton('刷新数据', 'default', e => {
        this.refreshData();
      })}
      </div>
    </div>;
}
export function renderProcessBar(activeValue) {
  var isMobile = this.utils && this.utils.isMobile && this.utils.isMobile();
  var steps = [{ label: '来源拜访', value: 'source', icon: '访' }, { label: '创建线索', value: 'create', icon: '线' }, { label: '指派协作', value: 'assign', icon: '协' }, { label: '持续跟进', value: 'follow', icon: '进' }, { label: '转为项目 / 关闭', value: 'finish', icon: '转' }];
  var activeIndex = 0;
  steps.forEach((step, index) => {
    if (step.value === activeValue) activeIndex = index;
  });
  return <div style={isMobile ? styles.processBarMobile : styles.processBar}>
      {steps.map((step, index) => {
      var active = !activeValue || index <= activeIndex;
      return <div key={step.value} style={styles.processItem}>
          <span style={Object.assign({}, styles.processIcon, active ? styles.processIconActive : {})}>{step.icon}</span>
          <span style={Object.assign({}, styles.processText, active ? styles.processTextActive : {})}>{step.label}</span>
          {index < steps.length - 1 && <span style={styles.processLine}></span>}
        </div>;
    })}
    </div>;
}
export function renderMetrics(isMobile) {
  var data = this.getMetricData();
  var cards = [
    { label: '全部线索', value: data.total, tone: 'primary', key: '全部', field: 'statusFilter', desc: '来源：市场线索主表', trend: '当前可见', icon: '线' },
    { label: '待我跟进', value: data.myFollow, tone: 'warning', key: '我跟进', field: 'relationFilter', desc: '来源：市场线索主表', trend: '经办范围', icon: '待' },
    { label: '推进中', value: data.running, tone: 'primary', key: '跟进中', field: 'statusFilter', desc: '来源：市场线索主表', trend: '持续推进', icon: '进' },
    { label: '已转项目', value: data.transferred, tone: 'success', key: '已转项目', field: 'statusFilter', desc: '来源：项目档案', trend: '转化闭环', icon: '项' },
    { label: '已关闭', value: data.closed, tone: 'default', key: '已关闭', field: 'statusFilter', desc: '来源：市场线索主表', trend: '规范关闭', icon: '闭' },
    { label: '临期提醒', value: data.dueSoon, tone: 'danger', key: '', field: '', desc: '来源：有效截止日期', trend: '7天内', icon: '期' },
    { label: '我负责的', value: data.myOwner, tone: 'purple', key: '我负责', field: 'relationFilter', desc: '来源：市场线索主表', trend: '负责人', icon: '责' },
    { label: '在推项目', value: data.inProjects, tone: 'primary', key: '', field: '', desc: '来源：项目档案', trend: '进行中', icon: '推' }
  ];
  return <div style={isMobile ? styles.metricGridMobile : styles.metricGrid}>
      {cards.map(item => <button key={item.label} type="button" onClick={e => {
          if (item.field) this.setFilter(item.field, item.key);
        }} style={Object.assign({}, styles.metricCard, item.field ? styles.clickableMetric : {})}>
          <span style={Object.assign({}, styles.metricIcon, item.tone === 'danger' ? styles.metricIconRed : item.tone === 'success' ? styles.metricIconGreen : item.tone === 'warning' ? styles.metricIconOrange : item.tone === 'purple' ? styles.metricIconPurple : styles.metricIconBlue)}>{item.icon}</span>
          <span style={styles.metricLabel}>{item.label}</span>
          <span style={Object.assign({}, styles.metricValue, item.tone === 'danger' ? styles.metricRed : item.tone === 'success' ? styles.metricGreen : item.tone === 'warning' ? styles.metricOrange : item.tone === 'purple' ? styles.metricPurple : styles.metricBlue)}>{item.value}</span>
          <span style={styles.metricDesc}>{item.desc}</span>
          <span style={styles.metricTrend}>{item.trend}</span>
        </button>)}
    </div>;
}
export function renderOptionButtons(label, key, options) {
  return <div style={styles.filterLine}>
      <span style={styles.filterLabel}>{label}</span>
      {options.map(item => {
        var value = typeof item === 'string' ? item : item.value;
        var text = typeof item === 'string' ? item : item.label;
        var active = _customState[key] === value;
        return <button key={value} type="button" onClick={e => {
            this.setFilter(key, value);
          }} style={Object.assign({}, styles.segment, active ? styles.segmentActive : {})}>{text}</button>;
      })}
    </div>;
}
export function renderChoiceGroup(options, activeValue, onSelect) {
  return <div style={styles.choiceGroup}>
      {options.map(item => {
        var value = typeof item === 'string' ? item : item.value;
        var label = typeof item === 'string' ? item : item.label;
        var active = activeValue === value;
        return <button key={value} type="button" onClick={e => {
            if (onSelect) onSelect(value);
          }} style={Object.assign({}, styles.choiceButton, active ? styles.choiceButtonActive : {})}>{label}</button>;
      })}
    </div>;
}
export function renderFilterBar(isMobile) {
  var self = this;
  return <div style={styles.filterPanel}>
      <div style={isMobile ? styles.filterTopRowMobile : styles.filterTopRow}>
        <div style={styles.mainSearch}>
          <span style={styles.searchIcon}>⌕</span>
          <input id={isMobile ? 'lead-keyword-mobile' : 'lead-keyword-main'} defaultValue={_customState.keyword} placeholder="搜索线索标题、内容、来源单位、联系人、编号" onCompositionStart={e => {
          self.handleCompositionStart(e);
        }} onCompositionEnd={e => {
          self.handleCompositionEnd(e);
        }} onChange={e => {
          self.handleSearchChange(e);
        }} style={styles.filterInput} />
        </div>
        <div style={styles.filterMeta}>
          <span style={styles.filterMetaItem}>默认排序：最近更新</span>
          <span style={styles.filterMetaItem}>视图密度：舒适</span>
          {this.renderButton('重置筛选', 'weak', e => {
          this.resetFilters();
        })}
        </div>
      </div>
      {this.renderOptionButtons('线索状态', 'statusFilter', STATUS_OPTIONS)}
      {this.renderOptionButtons('重要程度', 'importanceFilter', IMPORTANCE_OPTIONS)}
      {this.renderOptionButtons('线索类型', 'typeFilter', TYPE_OPTIONS)}
      {this.renderOptionButtons('成熟度', 'maturityFilter', MATURITY_OPTIONS)}
      {this.renderOptionButtons('与我相关', 'relationFilter', RELATION_OPTIONS)}
      <div style={isMobile ? styles.dateFilterMobile : styles.dateFilter}>
        {this.renderChoiceGroup(DATE_FIELD_OPTIONS, _customState.dateFieldFilter, value => {
        self.setFilter('dateFieldFilter', value);
      })}
        <input id="lead-date-start" type="date" defaultValue={_customState.dateStart} onChange={e => {
        self.setDateFilter('dateStart', e);
      }} style={styles.dateInput} />
        <input id="lead-date-end" type="date" defaultValue={_customState.dateEnd} onChange={e => {
        self.setDateFilter('dateEnd', e);
      }} style={styles.dateInput} />
        {this.renderButton('应用筛选', 'primary', e => {
        this.applyDateFilter();
      })}
      </div>
      <div style={styles.filterNote}>说明：线索来源于拜访、电话、微信或公开信息；进入“待我跟进”表示已指派到人；推进成熟后可转为项目，失效机会需规范关闭。</div>
    </div>;
}
export function renderInfoItem(label, value) {
  return <div style={styles.infoItem}>
      <span style={styles.infoLabel}>{label}</span>
      <span style={styles.infoValue}>{value && value !== '-' ? value : '未填写'}</span>
    </div>;
}
export function renderSummaryItem(label, value) {
  var empty = !value || value === '-';
  return <div style={styles.summaryCell}>
      <span style={styles.summaryLabel}>{label}</span>
      <span style={Object.assign({}, styles.summaryValue, empty ? styles.summaryValueEmpty : {})}>{empty ? '暂无' : value}</span>
    </div>;
}
export function getLeadCardStyle(row) {
  var status = this.getValue(row, FIELDS.lead.status);
  var style = Object.assign({}, styles.leadCard);
  if (status === '跟进中') style = Object.assign(style, styles.leadCardBlue);
  if (status === '待跟进') style = Object.assign(style, styles.leadCardOrange);
  if (this.isLeadTransferred(row)) style = Object.assign(style, styles.leadCardGreen);
  if (this.isLeadDueSoon(row) || this.getValue(row, FIELDS.lead.importance) === '高') style = Object.assign(style, styles.leadCardRisk);
  if (status === '已关闭') style = Object.assign(style, styles.leadCardClosed);
  return style;
}
export function renderProgressItem(label, value, tone, last) {
  var empty = !value || value === '-';
  return <div style={styles.progressAxisItem}>
      <div style={styles.progressAxisTop}>
        <span style={Object.assign({}, styles.progressDot, tone === 'green' ? styles.progressDotGreen : tone === 'orange' ? styles.progressDotOrange : styles.progressDotBlue)}></span>
        {!last && <span style={styles.progressConnector}></span>}
      </div>
      <span style={styles.progressLabel}>{label}</span>
      <span style={empty ? styles.progressValueEmpty : styles.progressValue}>{empty ? '暂无' : value}</span>
    </div>;
}
export function renderMiniProgress(row) {
  var visitCount = this.getLeadVisits(row).length;
  var projectCount = this.getLeadProjects(row).length;
  var items = [
    { label: '来源拜访', value: this.getSourceVisitDate(row), tone: 'green' },
    { label: '最新跟进', value: this.getLatestVisitDate(row), tone: 'blue' },
    { label: '关联项目数', value: projectCount + ' 个', tone: 'orange' },
    { label: '关联拜访次数', value: visitCount + ' 次', tone: 'blue' }
  ];
  return <div style={styles.progressPanel}>
      <div style={styles.progressTitle}>推进概览</div>
      <div style={styles.progressAxis}>
        {items.map((item, index) => this.renderProgressItem(item.label, item.value, item.tone, index === items.length - 1))}
      </div>
    </div>;
}
export function renderLeadCard(row, isMobile) {
  var self = this;
  var status = this.getValue(row, FIELDS.lead.status);
  var importance = this.getValue(row, FIELDS.lead.importance);
  var type = this.getValue(row, FIELDS.lead.type);
  var maturity = this.getValue(row, FIELDS.lead.maturity);
  var title = this.getLeadTitle(row);
  var serial = this.getValue(row, FIELDS.lead.serial);
  var closed = status === '已关闭';
  var transferred = this.isLeadTransferred(row);
  var planDate = this.formatDate(this.rawValue(row, FIELDS.lead.remindDate));
  var compactCard = isMobile || (typeof window !== 'undefined' && window.innerWidth < 1180);
  return <div key={this.getRowId(row)} style={this.getLeadCardStyle(row)}>
      <div style={compactCard ? styles.leadCardBodyMobile : styles.leadCardBody}>
        <div style={styles.leadMain}>
          <div style={styles.cardTitleWrap}>
            <div style={styles.titleLine}>
              <span style={styles.cardTitle} onClick={e => {
              self.openLeadDetail(row);
            }}>{title}</span>
              {serial !== '-' && <span style={styles.serial}>编号：{serial}</span>}
            </div>
            <div style={styles.badgeRow}>
              {this.renderBadge(this.displayStatus(status), this.toneStatus(status))}
              {status !== '已转项目' && this.isLeadTransferred(row) && this.renderBadge('已转项目', 'success')}
              {this.renderBadge(importance, this.toneImportance(importance))}
              {this.renderBadge(type, 'purple')}
              {this.renderBadge(maturity, this.toneMaturity(maturity))}
            </div>
          </div>
          <div style={compactCard ? styles.cardSummaryMobile : styles.cardSummary}>
            {this.renderSummaryItem('来源单位', this.getAssociationText(row, FIELDS.lead.unit))}
            {this.renderSummaryItem('联系人', this.getAssociationText(row, FIELDS.lead.contact))}
            {this.renderSummaryItem('线索负责人', this.getValue(row, FIELDS.lead.owner))}
            {this.renderSummaryItem('跟进经办人', this.getValue(row, FIELDS.lead.handlers))}
            {this.renderSummaryItem('提醒日期', this.formatDate(this.rawValue(row, FIELDS.lead.remindDate)))}
            {this.renderSummaryItem('有效截止日期', this.formatDate(this.rawValue(row, FIELDS.lead.validUntil)))}
            {this.renderSummaryItem('预计发生时间', this.getValue(row, FIELDS.lead.expectedTime))}
            {this.renderSummaryItem('最近更新时间', this.getLeadRecentDate(row))}
          </div>
        </div>
        <div style={styles.leadCardSide}>
          <div style={compactCard ? styles.leadSideTopMobile : styles.leadSideTop}>
            {this.renderMiniProgress(row)}
            <div style={styles.cardActionPanel}>
              {this.renderButton('查看详情', 'primary', e => {
              self.openLeadDetail(row);
            })}
              {this.renderButton('记录跟进', 'default', e => {
              self.openAddVisitFromLead(row);
            })}
              {transferred ? this.renderButton('查看项目', 'success', e => {
              self.openFirstProjectFromLead(row);
            }) : closed ? this.renderDisabledButton('转为项目') : this.renderButton('转为项目', 'success', e => {
              self.openProjectCreateFromLead(row);
            })}
              {closed ? this.renderDisabledButton('关闭线索') : this.renderButton('关闭线索', 'softDanger', e => {
              self.openCloseModal(row);
            })}
            </div>
          </div>
          <div style={closed ? Object.assign({}, styles.nextBox, styles.nextBoxClosed) : styles.nextBox}>
            <span style={styles.nextLabel}>下一步动作</span>
            <span style={closed ? styles.nextTextMuted : styles.nextText}>{this.getNextActionText(row)}</span>
            {!closed && <span style={styles.nextPlanTime}>计划时间：{planDate && planDate !== '-' ? planDate : '未填写'}</span>}
          </div>
        </div>
      </div>

    </div>;
}
export function renderList(isMobile) {
  var list = this.getCurrentPageLeads();
  var filtered = this.getFilteredLeads();
  var totalPage = this.getTotalPage(filtered.length);
  return <div>
      <div style={styles.listHead}>当前筛选 {filtered.length} 条</div>
      {filtered.length === 0 ? this.renderEmpty('暂无匹配市场线索') : <div style={styles.list}>{list.map(row => this.renderLeadCard(row, isMobile))}</div>}
      {filtered.length > _customState.pageSize && <div style={styles.pagination}>
        {this.renderButton('上一页', 'default', e => {
        this.goPage(-1);
      })}
        <span style={styles.pageText}>{_customState.currentPage} / {totalPage}</span>
        {this.renderButton('下一页', 'default', e => {
        this.goPage(1);
      })}
      </div>}
    </div>;
}
export function renderEmpty(text) {
  return <div style={styles.empty}>{text}</div>;
}
export function renderCloseModal() {
  if (!_customState.closeModalOpen) return null;
  var self = this;
  return <div style={styles.modalMask}>
      <div style={styles.modal}>
        <div style={styles.modalHead}>
          <div>
            <div style={styles.modalTitle}>关闭线索</div>
            <div style={styles.modalSub}>只更新关闭状态、原因、说明和关闭时间；关闭人由系统记录。</div>
          </div>
          <button type="button" onClick={e => {
          self.closeCloseModal();
        }} style={styles.iconButton}>×</button>
        </div>
        <div style={styles.field}>
          <label style={styles.fieldLabel}>关闭原因</label>
          {this.renderChoiceGroup(CLOSE_REASON_OPTIONS, _customState.closeReason, value => {
          self.handleCloseReason(value);
        })}
        </div>
        <div style={styles.field}>
          <label style={styles.fieldLabel}>关闭说明</label>
          <textarea defaultValue={_customState.closeNote} onChange={e => {
          self.handleCloseNote(e);
        }} style={styles.textarea} placeholder="补充关闭说明" />
        </div>
        <div style={styles.modalActions}>
          {this.renderButton('取消', 'default', e => {
          self.closeCloseModal();
        })}
          {this.renderButton(_customState.closeSaving ? '保存中...' : '保存关闭', 'danger', e => {
          self.saveCloseLead();
        })}
        </div>
      </div>
    </div>;
}
export function renderTransferModal() {
  return null;
}
var styles = {
  page: {
    minHeight: '100vh',
    background: '#F6F8FC',
    color: '#101828',
    fontFamily: '-apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", sans-serif',
    boxSizing: 'border-box',
    padding: '0 0 36px'
  },
  shell: { maxWidth: '1366px', margin: '0 auto', padding: '18px 16px 0', boxSizing: 'border-box' },
  shellMobile: { padding: '12px 12px 24px', boxSizing: 'border-box' },
  accessBox: { maxWidth: '680px', margin: '80px auto', padding: '32px 24px', background: '#FFFFFF', border: '1px solid #EAECF0', borderRadius: '8px', textAlign: 'center' },
  accessTitle: { fontSize: '20px', fontWeight: 750, color: '#1D2939', marginBottom: '8px' },
  accessText: { fontSize: '14px', color: '#667085', lineHeight: '22px' },
  hero: { background: '#FFFFFF', border: '1px solid #E5EAF3', borderRadius: '8px', padding: '18px 22px', boxShadow: '0 8px 22px rgba(16,24,40,0.04)', boxSizing: 'border-box', marginBottom: '12px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '20px' },
  heroMobile: { background: '#FFFFFF', border: '1px solid #E5EAF3', borderRadius: '10px', padding: '16px', boxShadow: '0 8px 22px rgba(16,24,40,0.04)', boxSizing: 'border-box', marginBottom: '12px', display: 'grid', gap: '12px' },
  breadcrumb: { color: '#667085', fontSize: '13px', lineHeight: '20px', fontWeight: 700, marginBottom: '7px' },
  breadcrumbStrong: { color: '#101828', fontWeight: 900 },
  heroEyebrow: { color: '#155EEF', fontSize: '13px', lineHeight: '20px', fontWeight: 900, marginBottom: '4px' },
  pageTitle: { fontSize: '26px', lineHeight: '34px', fontWeight: 900, color: '#101828' },
  pageSub: { fontSize: '14px', lineHeight: '22px', color: '#667085', marginTop: '4px' },
  heroTagRow: { display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '14px' },
  heroTag: { minHeight: '24px', display: 'inline-flex', alignItems: 'center', borderRadius: '6px', background: '#F8FAFC', border: '1px solid #E5EAF3', color: '#475467', fontSize: '12px', fontWeight: 800, padding: '0 8px' },
  heroActions: { display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'flex-end' },
  processBar: { minHeight: '62px', background: '#FFFFFF', border: '1px solid #E5EAF3', borderRadius: '8px', boxShadow: '0 6px 18px rgba(16,24,40,0.035)', display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', alignItems: 'center', gap: '0', padding: '10px 18px', boxSizing: 'border-box', marginBottom: '12px' },
  processBarMobile: { background: '#FFFFFF', border: '1px solid #E5EAF3', borderRadius: '8px', boxShadow: '0 6px 18px rgba(16,24,40,0.035)', display: 'grid', gridTemplateColumns: '1fr', gap: '8px', padding: '12px', boxSizing: 'border-box', marginBottom: '12px' },
  processItem: { display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 },
  processIcon: { width: '32px', height: '32px', borderRadius: '50%', border: '1px solid #D0D5DD', background: '#F8FAFC', color: '#667085', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 900, flex: '0 0 auto' },
  processIconActive: { background: '#EAF2FF', borderColor: '#B9D6FF', color: '#155EEF' },
  processText: { color: '#667085', fontSize: '13px', lineHeight: '20px', fontWeight: 800, whiteSpace: 'nowrap' },
  processTextActive: { color: '#101828' },
  processLine: { height: '1px', background: '#D0D5DD', flex: 1, minWidth: '18px' },
  metricGrid: { display: 'grid', gridTemplateColumns: 'repeat(8, minmax(0, 1fr))', gap: '10px', marginBottom: '12px' },
  metricGridMobile: { display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '8px', marginBottom: '12px' },
  metricCard: { position: 'relative', minHeight: '104px', border: '1px solid #E5EAF3', background: '#FFFFFF', borderRadius: '8px', padding: '12px 10px 10px', textAlign: 'left', boxShadow: '0 6px 18px rgba(16,24,40,0.035)', cursor: 'default', overflow: 'hidden' },
  clickableMetric: { cursor: 'pointer' },
  metricAccent: { position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px' },
  accentBlue: { background: '#155EEF' },
  accentGreen: { background: '#12B76A' },
  accentOrange: { background: '#F79009' },
  accentRed: { background: '#D92D20' },
  accentPurple: { background: '#7A5AF8' },
  metricIcon: { position: 'absolute', right: '10px', top: '10px', width: '28px', height: '28px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 900 },
  metricIconBlue: { background: '#EAF2FF', color: '#155EEF' },
  metricIconGreen: { background: '#ECFDF3', color: '#027A48' },
  metricIconOrange: { background: '#FFF7E6', color: '#B54708' },
  metricIconRed: { background: '#FEF3F2', color: '#B42318' },
  metricIconPurple: { background: '#F4EBFF', color: '#6941C6' },
  metricLabel: { display: 'block', color: '#344054', fontSize: '12px', lineHeight: '18px', fontWeight: 800, marginBottom: '5px', paddingRight: '28px' },
  metricValue: { display: 'block', fontSize: '24px', lineHeight: '30px', fontWeight: 900 },
  metricDesc: { display: 'block', color: '#98A2B3', fontSize: '11px', lineHeight: '17px', marginTop: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
  metricTrend: { display: 'block', color: '#667085', fontSize: '11px', lineHeight: '17px', marginTop: '2px' },
  metricBlue: { color: '#155EEF' },
  metricGreen: { color: '#027A48' },
  metricOrange: { color: '#B54708' },
  metricRed: { color: '#B42318' },
  metricPurple: { color: '#6941C6' },
  filterPanel: { background: '#FFFFFF', border: '1px solid #E5EAF3', borderRadius: '8px', padding: '12px 14px', boxSizing: 'border-box', marginBottom: '12px', boxShadow: '0 8px 22px rgba(16,24,40,0.035)' },
  filterHead: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' },
  filterTitle: { color: '#101828', fontSize: '15px', lineHeight: '22px', fontWeight: 900 },
  filterSub: { color: '#98A2B3', fontSize: '12px', lineHeight: '18px', marginTop: '2px' },
  filterTopRow: { display: 'grid', gridTemplateColumns: 'minmax(360px, 1fr) auto', gap: '12px', alignItems: 'center', marginBottom: '8px' },
  filterTopRowMobile: { display: 'grid', gap: '8px', marginBottom: '8px' },
  filterMeta: { display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'flex-end', alignItems: 'center' },
  filterMetaItem: { display: 'inline-flex', alignItems: 'center', minHeight: '28px', borderRadius: '6px', background: '#F8FAFC', border: '1px solid #E5EAF3', color: '#475467', fontSize: '12px', lineHeight: '18px', fontWeight: 800, padding: '0 9px' },
  mainSearch: { position: 'relative' },
  searchIcon: { position: 'absolute', left: '12px', top: '8px', color: '#98A2B3', fontSize: '16px' },
  filterInput: { width: '100%', height: '38px', borderRadius: '8px', border: '1px solid #D0D5DD', background: '#FFFFFF', color: '#344054', padding: '0 12px 0 34px', fontSize: '14px', outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit' },
  filterLine: { display: 'flex', alignItems: 'center', gap: '7px', flexWrap: 'wrap', marginTop: '8px' },
  filterLabel: { color: '#667085', fontSize: '13px', fontWeight: 700, minWidth: '72px' },
  segment: { minHeight: '28px', borderRadius: '7px', border: '1px solid #D0D5DD', background: '#FFFFFF', color: '#344054', padding: '0 10px', fontSize: '13px', fontWeight: 700, cursor: 'pointer' },
  segmentActive: { background: '#EAF2FF', color: '#155EEF', borderColor: '#B9D6FF' },
  choiceGroup: { display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' },
  choiceButton: { minHeight: '32px', borderRadius: '7px', border: '1px solid #D0D5DD', background: '#FFFFFF', color: '#344054', padding: '0 11px', fontSize: '13px', fontWeight: 800, cursor: 'pointer', boxSizing: 'border-box', fontFamily: 'inherit' },
  choiceButtonActive: { background: '#EAF2FF', color: '#155EEF', borderColor: '#B9D6FF', boxShadow: '0 0 0 2px rgba(21,94,239,0.08)' },
  dateFilter: { display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap', marginTop: '10px' },
  dateFilterMobile: { display: 'grid', gap: '8px', marginTop: '12px' },
  dateInput: { height: '36px', borderRadius: '8px', border: '1px solid #D0D5DD', background: '#FFFFFF', color: '#344054', padding: '0 10px', fontSize: '14px', outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit' },
  filterNote: { marginTop: '10px', padding: '7px 10px', borderRadius: '7px', background: '#F5F9FF', border: '1px solid #D6E8FF', color: '#3563A8', fontSize: '12px', lineHeight: '19px' },
  listHead: { color: '#667085', fontSize: '13px', lineHeight: '20px', margin: '0 0 8px' },
  list: { display: 'grid', gap: '12px' },
  leadCard: { background: '#FFFFFF', border: '1px solid #E5EAF3', borderLeft: '3px solid #155EEF', borderRadius: '8px', padding: '12px', boxShadow: '0 4px 14px rgba(16,24,40,0.035)', boxSizing: 'border-box' },
  leadCardBlue: { borderLeftColor: '#155EEF' },
  leadCardOrange: { borderLeftColor: '#F79009' },
  leadCardGreen: { borderLeftColor: '#12B76A' },
  leadCardRisk: { borderLeftColor: '#D92D20', borderColor: '#F2F4F7', boxShadow: '0 6px 18px rgba(180,35,24,0.03)' },
  leadCardHigh: { borderLeft: '3px solid #D92D20', paddingLeft: '11px', borderColor: '#FECDCA', boxShadow: '0 6px 18px rgba(180,35,24,0.06)' },
  leadCardClosed: { opacity: 0.82, background: '#FCFCFD', borderLeftColor: '#98A2B3', borderColor: '#E5EAF3' },
  leadCardBody: { display: 'grid', gridTemplateColumns: 'minmax(540px, 1.05fr) minmax(560px, 1fr)', gap: '18px', alignItems: 'stretch' },
  leadCardBodyMobile: { display: 'grid', gap: '12px' },
  leadMain: { minWidth: 0 },
  leadCardSide: { minWidth: 0, display: 'grid', gridTemplateRows: 'auto auto', gap: '10px', alignContent: 'start' },
  leadSideTop: { display: 'grid', gridTemplateColumns: 'minmax(360px, 0.68fr) minmax(160px, 0.32fr)', gap: '12px', alignItems: 'start' },
  leadSideTopMobile: { display: 'grid', gap: '10px' },
  cardHead: { display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '14px', marginBottom: '8px' },
  cardHeadMobile: { display: 'grid', gap: '10px', marginBottom: '8px' },
  cardTitleWrap: { minWidth: 0, flex: 1 },
  titleLine: { display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' },
  cardTitle: { color: '#101828', fontSize: '16px', lineHeight: '24px', fontWeight: 900, cursor: 'pointer', wordBreak: 'break-word' },
  serial: { color: '#98A2B3', fontSize: '12px', lineHeight: '18px' },
  badgeRow: { display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '6px' },
  badge: { display: 'inline-flex', alignItems: 'center', minHeight: '22px', padding: '0 8px', borderRadius: '999px', fontSize: '12px', fontWeight: 700, boxSizing: 'border-box', whiteSpace: 'nowrap' },
  cardActions: { display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'flex-end' },
  cardActionPanel: { display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '8px', alignContent: 'start', paddingLeft: '12px', borderLeft: '1px solid #EEF2F7' },
  button: { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '34px', borderRadius: '8px', padding: '0 12px', fontSize: '13px', fontWeight: 800, cursor: 'pointer', boxSizing: 'border-box', fontFamily: 'inherit' },
  buttonPrimary: { border: '1px solid #155EEF', background: '#155EEF', color: '#FFFFFF' },
  buttonDefault: { border: '1px solid #D0D5DD', background: '#FFFFFF', color: '#344054' },
  buttonDanger: { border: '1px solid #D92D20', background: '#D92D20', color: '#FFFFFF' },
  buttonSoftDanger: { border: '1px solid #FECDCA', background: '#FFFBFA', color: '#B42318' },
  buttonSuccess: { border: '1px solid #ABEFC6', background: '#F6FEF9', color: '#027A48' },
  buttonWeak: { border: '1px solid #EAECF0', background: '#FFFFFF', color: '#667085' },
  buttonDisabled: { border: '1px solid #EAECF0', background: '#F8FAFC', color: '#98A2B3', cursor: 'default' },
  cardSummary: { display: 'grid', gridTemplateColumns: 'repeat(4, minmax(110px, 1fr))', gap: '8px 14px', padding: '10px 0 0', borderTop: '1px solid #F2F4F7', marginTop: '10px' },
  cardSummaryMobile: { display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '7px 12px', padding: '8px 0', borderTop: '1px solid #F2F4F7', borderBottom: '1px solid #F2F4F7', marginBottom: '8px' },
  summaryCell: { minWidth: 0, display: 'grid', gap: '2px' },
  summaryLabel: { color: '#98A2B3', fontSize: '12px', lineHeight: '18px', wordBreak: 'normal', overflowWrap: 'break-word' },
  summaryValue: { color: '#1D2939', fontSize: '13px', lineHeight: '20px', fontWeight: 800, wordBreak: 'normal', overflowWrap: 'break-word' },
  summaryValueEmpty: { color: '#98A2B3', fontWeight: 500 },
  infoGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '0 24px', marginBottom: '12px' },
  infoGridMobile: { display: 'grid', gridTemplateColumns: '1fr', gap: '0', marginBottom: '12px' },
  infoItem: { minHeight: '38px', background: 'transparent', borderTop: '1px solid #F2F4F7', padding: '8px 0', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', boxSizing: 'border-box' },
  infoLabel: { color: '#667085', fontSize: '12px', lineHeight: '18px', flex: '0 0 88px' },
  infoValue: { color: '#101828', fontSize: '13px', lineHeight: '19px', fontWeight: 700, wordBreak: 'break-word', textAlign: 'right', flex: 1 },
  progressPanel: { padding: '0', boxSizing: 'border-box', display: 'grid', alignContent: 'start', minWidth: 0 },
  progressTitle: { color: '#101828', fontSize: '13px', lineHeight: '20px', fontWeight: 900, marginBottom: '7px' },
  progressAxis: { display: 'grid', gridTemplateColumns: 'repeat(4, minmax(78px, 1fr))', gap: '8px' },
  progressAxisItem: { minWidth: 0, display: 'grid', gap: '3px', alignContent: 'start' },
  progressAxisTop: { display: 'flex', alignItems: 'center', minHeight: '10px' },
  progressConnector: { height: '1px', background: '#D6E8FF', flex: 1, marginLeft: '5px' },
  progressItem: { display: 'grid', gridTemplateColumns: '12px 1fr auto', alignItems: 'center', gap: '7px', minHeight: '25px' },
  progressDot: { width: '7px', height: '7px', borderRadius: '50%', background: '#155EEF' },
  progressDotBlue: { background: '#155EEF' },
  progressDotGreen: { background: '#12B76A' },
  progressDotOrange: { background: '#F79009' },
  progressLabel: { color: '#98A2B3', fontSize: '11px', lineHeight: '17px', whiteSpace: 'nowrap' },
  progressValue: { color: '#344054', fontSize: '12px', lineHeight: '18px', fontWeight: 800, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
  progressValueEmpty: { color: '#98A2B3', fontSize: '12px', lineHeight: '18px', fontWeight: 500, whiteSpace: 'nowrap' },
  nextBox: { background: '#EFF6FF', border: '1px solid #CFE3FF', borderLeft: '3px solid #155EEF', borderRadius: '8px', padding: '8px 10px', display: 'grid', gap: '2px', alignContent: 'start', minWidth: 0, boxSizing: 'border-box' },
  nextBoxClosed: { background: '#F8FAFC', border: '1px solid #EAECF0', borderLeft: '3px solid #98A2B3' },
  nextLabel: { color: '#155EEF', fontSize: '12px', lineHeight: '18px', fontWeight: 800 },
  nextText: { color: '#1849A9', fontSize: '13px', lineHeight: '20px', whiteSpace: 'pre-wrap', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' },
  nextTextMuted: { color: '#667085', fontSize: '13px', lineHeight: '20px', whiteSpace: 'pre-wrap' },
  nextPlanTime: { color: '#667085', fontSize: '12px', lineHeight: '18px' },
  footerActions: { display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'flex-end', alignItems: 'center' },
  footerHint: { marginRight: 'auto', color: '#98A2B3', fontSize: '12px', lineHeight: '18px', fontWeight: 700 },
  pagination: { display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center', marginTop: '14px' },
  pageText: { color: '#667085', fontSize: '13px', fontWeight: 700 },
  empty: { background: '#FFFFFF', border: '1px solid #EAECF0', borderRadius: '8px', padding: '42px 12px', color: '#98A2B3', textAlign: 'center', fontSize: '14px' },
  notice: { marginTop: '16px', padding: '16px', borderRadius: '8px', background: '#FFFFFF', color: '#667085', border: '1px solid #EAECF0' },
  error: { marginTop: '16px', padding: '16px', borderRadius: '8px', background: '#FEF3F2', color: '#B42318', border: '1px solid #FECDCA' },
  modalMask: { position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(16,24,40,0.48)', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '16px', boxSizing: 'border-box' },
  modal: { width: '520px', maxWidth: '100%', background: '#FFFFFF', borderRadius: '12px', padding: '18px', boxSizing: 'border-box', boxShadow: '0 24px 64px rgba(16,24,40,0.22)' },
  modalHead: { display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '14px' },
  modalTitle: { color: '#101828', fontSize: '18px', lineHeight: '26px', fontWeight: 900 },
  modalSub: { color: '#667085', fontSize: '12px', lineHeight: '18px', marginTop: '3px' },
  iconButton: { width: '32px', height: '32px', borderRadius: '8px', border: '1px solid #EAECF0', background: '#FFFFFF', color: '#667085', fontSize: '20px', lineHeight: '28px', cursor: 'pointer' },
  field: { display: 'grid', gap: '6px', marginBottom: '12px' },
  fieldLabel: { color: '#667085', fontSize: '12px', lineHeight: '18px', fontWeight: 700 },
  input: { width: '100%', height: '38px', borderRadius: '8px', border: '1px solid #D0D5DD', background: '#FFFFFF', color: '#344054', padding: '0 10px', fontSize: '14px', outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit' },
  textarea: { width: '100%', minHeight: '100px', borderRadius: '8px', border: '1px solid #D0D5DD', background: '#FFFFFF', color: '#344054', padding: '10px', fontSize: '14px', lineHeight: '22px', outline: 'none', resize: 'vertical', boxSizing: 'border-box', fontFamily: 'inherit' },
  modalActions: { display: 'flex', justifyContent: 'flex-end', gap: '8px', flexWrap: 'wrap', marginTop: '14px' },
  modalActionsLeft: { display: 'flex', justifyContent: 'flex-start', gap: '8px', flexWrap: 'wrap', marginTop: '14px' },
  tipBox: { background: '#FFFAEB', border: '1px solid #FEDF89', color: '#7A2E0E', borderRadius: '8px', padding: '12px', fontSize: '13px', lineHeight: '21px' }
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
      <div style={{ display: 'none' }}>{timestamp}</div>
      <div style={isMobile ? styles.shellMobile : styles.shell}>
        {this.renderHero(isMobile)}
        {this.renderProcessBar()}
        {this.renderMetrics(isMobile)}
        {this.renderFilterBar(isMobile)}
        {_customState.loading && <div style={styles.notice}>正在加载市场线索...</div>}
        {_customState.error && <div style={styles.error}>{_customState.error}</div>}
        {!_customState.loading && this.renderList(isMobile)}
      </div>
      {this.renderCloseModal()}
      {this.renderTransferModal()}
    </div>;
}
