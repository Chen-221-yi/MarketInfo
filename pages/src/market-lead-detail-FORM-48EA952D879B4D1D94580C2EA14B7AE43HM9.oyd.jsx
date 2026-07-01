// 市场线索详情 - 自定义页面
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
var CLOSE_REASON_OPTIONS = ['关系不到位', '无预算', '非目标区域', '非目标业务', '已错过窗口期', '客户不再推进', '已由其他单位承接', '其他'];
var _customState = {
  loading: true,
  error: '',
  accessDenied: false,
  leadId: '',
  leads: [],
  visits: [],
  projects: [],
  closeModalOpen: false,
  closeReason: '其他',
  closeNote: '',
  closeSaving: false,
  transferModalOpen: false
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
  _customState.leadId = this.getUrlParam('leadId') || this.getUrlParam('formInstId') || this.getUrlParam('id') || '';
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
      <div style={styles.accessText}>市场线索详情页仅开放给“市场信息管理 / 总经理办”。普通员工请继续使用原生表单提交拜访和线索。</div>
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
    if (!_customState.leadId && _customState.leads.length) {
      _customState.leadId = self.getRowId(_customState.leads[0]);
    }
    _customState.loading = false;
    _customState.error = '';
    self.forceUpdate();
  }).catch(err => {
    _customState.loading = false;
    _customState.error = self.getErrorMessage(err);
    self.forceUpdate();
    self.utils.toast({
      title: '市场线索详情加载失败',
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
    _customState.leads = this.normalizeRows(res);
  }).catch(err => {
    _customState.leads = [];
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
export function getErrorMessage(err) {
  if (!err) return '未知错误';
  return err.message || err.errorMsg || '未知错误';
}
export function getUrlParam(name) {
  var params = this.state && this.state.urlParams || {};
  if (params && params[name]) return params[name];
  if (typeof window === 'undefined' || !window.location) return '';
  var search = window.location.search || '';
  if (!search) return '';
  var parts = search.replace(/^\?/, '').split('&');
  for (var i = 0; i < parts.length; i += 1) {
    var pair = parts[i].split('=');
    if (decodeURIComponent(pair[0] || '') === name) return decodeURIComponent(pair.slice(1).join('=') || '');
  }
  return '';
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
export function getLead() {
  return this.findById(_customState.leads, _customState.leadId);
}
export function getLeadTitle(row) {
  var title = this.getValue(row, FIELDS.lead.title);
  if (title !== '-') return title;
  var unit = this.getAssociationText(row, FIELDS.lead.unit);
  var type = this.getValue(row, FIELDS.lead.type);
  if (unit !== '-' && type !== '-') return unit + ' · ' + type;
  return '未命名市场线索';
}
export function displayStatus(status) {
  if (status === '跟进中') return '推进中';
  if (status === '待跟进') return '待我跟进';
  return status && status !== '-' ? status : '待我跟进';
}
export function getActiveStep(row) {
  var status = this.getValue(row, FIELDS.lead.status);
  if (status === '已转项目' || this.getLeadProjects(row).length > 0) return 'finish';
  if (status === '已关闭') return 'finish';
  if (status === '跟进中') return 'follow';
  if (this.hasDisplayValue(this.getValue(row, FIELDS.lead.handlers)) || this.hasDisplayValue(this.getValue(row, FIELDS.lead.watchers))) return 'assign';
  return 'create';
}
export function getVisitTime(row) {
  return Number(this.rawValue(row, FIELDS.visit.time)) || 0;
}
export function getVisitTitle(row) {
  var title = this.getValue(row, FIELDS.visit.title);
  if (title !== '-') return title;
  var method = this.getValue(row, FIELDS.visit.method);
  var date = this.formatDate(this.getVisitTime(row));
  if (method !== '-' && date !== '-') return method + '拜访记录 · ' + date;
  return '未命名拜访记录';
}
export function makeVisitStub(item, relationSource) {
  var id = item && (item.instanceId || item.formInstId || item.formInstanceId || item.id) || '';
  var formData = {};
  formData[FIELDS.visit.title] = item && (item.title || item.name || item.label || item.text) || '已关联拜访记录';
  return {
    formInstId: id,
    formData: formData,
    __relationSource: relationSource,
    __stub: true
  };
}
export function getLeadVisits(row) {
  var leadId = this.getRowId(row);
  var exists = {};
  var list = [];
  this.getAssociationItems(this.rawAssociation(row, FIELDS.lead.sourceVisit)).forEach(item => {
    var id = item && (item.instanceId || item.formInstId || item.formInstanceId || item.id) || '';
    if (!id || exists[id]) return;
    var visit = this.findById(_customState.visits, id) || this.makeVisitStub(item, '来源拜访');
    var copied = Object.assign({}, visit);
    copied.__relationSource = '来源拜访';
    exists[id] = true;
    list.push(copied);
  });
  (_customState.visits || []).forEach(visit => {
    var id = this.getRowId(visit);
    if (!id || exists[id]) return;
    if (this.rowMatchesAssociation(visit, FIELDS.visit.lead, leadId)) {
      var copied = Object.assign({}, visit);
      copied.__relationSource = '后续关联拜访';
      exists[id] = true;
      list.push(copied);
    }
  });
  list.sort((a, b) => this.getVisitTime(b) - this.getVisitTime(a));
  return list;
}
export function makeProjectStub(item, relationSource) {
  var id = item && (item.instanceId || item.formInstId || item.formInstanceId || item.id) || '';
  var formData = {};
  formData[FIELDS.project.name] = item && (item.title || item.name || item.label || item.text) || '已关联项目';
  return {
    formInstId: id,
    formData: formData,
    __relationSource: relationSource,
    __stub: true
  };
}
export function getLeadProjects(row) {
  var leadId = this.getRowId(row);
  var exists = {};
  var list = [];
  this.getAssociationItems(this.rawAssociation(row, FIELDS.lead.mainProject)).forEach(item => {
    var id = item && (item.instanceId || item.formInstId || item.formInstanceId || item.id) || '';
    if (!id || exists[id]) return;
    var project = this.findById(_customState.projects, id) || this.makeProjectStub(item, '主关联项目');
    var copied = Object.assign({}, project);
    copied.__relationSource = '主关联项目';
    exists[id] = true;
    list.push(copied);
  });
  (_customState.projects || []).forEach(project => {
    var id = this.getRowId(project);
    if (!id || exists[id]) return;
    if (this.rowMatchesAssociation(project, FIELDS.project.sourceLead, leadId)) {
      var copied = Object.assign({}, project);
      copied.__relationSource = '来源线索回连';
      exists[id] = true;
      list.push(copied);
    }
  });
  list.sort((a, b) => {
    return (Number(this.rawValue(b, FIELDS.project.recentDate)) || 0) - (Number(this.rawValue(a, FIELDS.project.recentDate)) || 0);
  });
  return list;
}
export function getShortText(value, fallback) {
  if (!value || value === '-') return fallback || '暂无';
  var text = String(value);
  if (text.length > 180) return text.slice(0, 180) + '...';
  return text;
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
export function goBack() {
  this.utils.router.push(FORMS.leadManage, {}, false);
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
  var title = item.title || this.formatValue(item.name) || item.label || item.text || '';
  if (id) params[idName] = id;
  if (title) params[titleName] = title;
}
export function openAddVisit() {
  var row = this.getLead();
  if (!row) return;
  var params = {};
  params.leadId = this.getRowId(row);
  params.leadTitle = this.getLeadTitle(row);
  this.getAssociationParam(this.rawAssociation(row, FIELDS.lead.contact), 'contactId', 'contactTitle', params);
  this.getAssociationParam(this.rawAssociation(row, FIELDS.lead.unit), 'unitId', 'unitTitle', params);
  this.getAssociationParam(this.rawAssociation(row, FIELDS.lead.mainProject), 'projectId', 'projectTitle', params);
  this.utils.toast({
    title: '将打开拜访原生新增页；联系人、单位、项目可预填，关联线索请在原生表单中确认',
    type: 'notice'
  });
  this.openSubmissionForm(FORMS.visit, params);
}
export function openAssignCollaboration() {
  var row = this.getLead();
  if (!row) return;
  this.utils.toast({
    title: '请在原生表单中维护跟进经办人、关注人或授权查看人',
    type: 'notice'
  });
  this.openNativeEditForm(FORMS.lead, this.getRowId(row));
}
export function openCloseModal() {
  var row = this.getLead();
  if (!row) return;
  _customState.closeModalOpen = true;
  _customState.closeReason = this.getValue(row, FIELDS.lead.closeReason) !== '-' ? this.getValue(row, FIELDS.lead.closeReason) : '其他';
  _customState.closeNote = this.getValue(row, FIELDS.lead.closeNote) !== '-' ? this.getValue(row, FIELDS.lead.closeNote) : '';
  _customState.closeSaving = false;
  this.forceUpdate();
}
export function closeCloseModal() {
  if (_customState.closeSaving) return;
  _customState.closeModalOpen = false;
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
  var row = this.getLead();
  var id = this.getRowId(row);
  if (!id || _customState.closeSaving) return;
  _customState.closeSaving = true;
  this.forceUpdate();
  var payload = {};
  payload[FIELDS.lead.status] = '已关闭';
  payload[FIELDS.lead.closeReason] = _customState.closeReason || '其他';
  payload[FIELDS.lead.closeNote] = _customState.closeNote || '';
  payload[FIELDS.lead.closeTime] = new Date().getTime();
  this.utils.yida.updateFormData({
    formInstId: id,
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
export function openTransferModal() {
  _customState.transferModalOpen = true;
  this.forceUpdate();
}
export function closeTransferModal() {
  _customState.transferModalOpen = false;
  this.forceUpdate();
}
export function openProjectSubmissionFromLead() {
  var row = this.getLead();
  if (!row) return;
  this.utils.toast({
    title: '将打开项目原生新增页；来源线索字段需在原生表单中确认',
    type: 'notice'
  });
  this.openSubmissionForm(FORMS.project, {
    leadId: this.getRowId(row),
    sourceLeadId: this.getRowId(row),
    leadTitle: this.getLeadTitle(row)
  });
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
export function renderBack() {
  return <div style={styles.backRow}>
      <button type="button" onClick={e => {
      this.goBack();
    }} style={styles.backLink}>市场信息管理 / 线索管理 / <span style={styles.backStrong}>线索详情</span></button>
    </div>;
}
export function renderHero(row, isMobile) {
  var status = this.getValue(row, FIELDS.lead.status);
  var importance = this.getValue(row, FIELDS.lead.importance);
  var maturity = this.getValue(row, FIELDS.lead.maturity);
  var type = this.getValue(row, FIELDS.lead.type);
  var serial = this.getValue(row, FIELDS.lead.serial);
  return <div style={isMobile ? styles.heroMobile : styles.hero}>
      <div style={styles.heroMain}>
        <div style={styles.titleLine}>
          <h1 style={styles.pageTitle}>{this.getLeadTitle(row)}</h1>
          {serial !== '-' && <span style={styles.serial}>编号：{serial}</span>}
        </div>
        <div style={styles.badgeRow}>
          {this.renderBadge(this.displayStatus(status), this.toneStatus(status))}
          {this.renderBadge(importance, this.toneImportance(importance))}
          {this.renderBadge(type, 'purple')}
          {this.renderBadge(maturity, this.toneMaturity(maturity))}
          {this.getLeadProjects(row).length > 0 && this.renderBadge('已转项目', 'success')}
        </div>
      </div>
      <div style={styles.heroActions}>
        {this.renderButton('+ 记录跟进', 'primary', e => {
        this.openAddVisit();
      })}
        {this.renderButton('指派协作', 'default', e => {
        this.openAssignCollaboration();
      })}
        {this.renderButton('转项目 / 关联项目', 'default', e => {
        this.openTransferModal();
      })}
        {this.renderButton('关闭线索', status === '已关闭' ? 'weak' : 'softDanger', e => {
        this.openCloseModal();
      })}
        {this.renderButton('打开原生表单', 'weak', e => {
        this.openNativeEditForm(FORMS.lead, this.getRowId(row));
      })}
      </div>
    </div>;
}
export function renderProcessBar(row) {
  var isMobile = this.utils && this.utils.isMobile && this.utils.isMobile();
  var activeValue = this.getActiveStep(row);
  var steps = [{ label: '来源拜访', value: 'source', icon: '访' }, { label: '创建线索', value: 'create', icon: '线' }, { label: '指派协作', value: 'assign', icon: '协' }, { label: '持续跟进', value: 'follow', icon: '进' }, { label: '转项目 / 关闭', value: 'finish', icon: '转' }];
  var activeIndex = 0;
  steps.forEach((step, index) => {
    if (step.value === activeValue) activeIndex = index;
  });
  return <div style={isMobile ? styles.processBarMobile : styles.processBar}>
      {steps.map((step, index) => {
      var active = index <= activeIndex;
      var current = index === activeIndex;
      return <div key={step.value} style={styles.processItem}>
          <span style={Object.assign({}, styles.processIcon, active ? styles.processIconActive : {}, current ? styles.processIconCurrent : {})}>{step.icon}</span>
          <span style={Object.assign({}, styles.processText, active ? styles.processTextActive : {})}>{step.label}</span>
          {index < steps.length - 1 && <span style={styles.processLine}></span>}
        </div>;
    })}
    </div>;
}
export function renderSummaryBar(row, isMobile) {
  var items = [
    { label: '线索负责人', value: this.getValue(row, FIELDS.lead.owner), tone: 'primary', icon: '责' },
    { label: '跟进经办人', value: this.getValue(row, FIELDS.lead.handlers), tone: 'success', icon: '办' },
    { label: '提醒日期', value: this.formatDate(this.rawValue(row, FIELDS.lead.remindDate)), tone: 'warning', icon: '醒' },
    { label: '有效截止', value: this.formatDate(this.rawValue(row, FIELDS.lead.validUntil)), tone: 'danger', icon: '期' },
    { label: '累计拜访', value: this.getLeadVisits(row).length + ' 次', tone: 'success', icon: '访' },
    { label: '关联项目', value: this.getLeadProjects(row).length + ' 个', tone: 'purple', icon: '项' }
  ];
  return <div style={isMobile ? styles.summaryBarMobile : styles.summaryBar}>
      {items.map(item => {
      var empty = !this.hasDisplayValue(item.value);
      var accent = item.tone === 'danger' ? styles.summaryAccentDanger : item.tone === 'warning' ? styles.summaryAccentWarning : item.tone === 'success' ? styles.summaryAccentSuccess : item.tone === 'purple' ? styles.summaryAccentPurple : styles.summaryAccentPrimary;
      return <div key={item.label} style={Object.assign({}, styles.summaryItem, accent)}>
          <span style={styles.summaryIcon}>{item.icon}</span>
          <span style={styles.summaryLabel}>{item.label}</span>
          <span style={empty ? styles.summaryValueEmpty : styles.summaryValue}>{empty ? '未填写' : item.value}</span>
        </div>;
    })}
    </div>;
}
export function renderSection(title, body) {
  return <section style={styles.section}>
      <div style={styles.sectionTitle}>{title}</div>
      {body}
    </section>;
}
export function hasDisplayValue(value) {
  return value === 0 || !!(value && value !== '-' && value !== '暂无');
}
export function renderInfoItem(label, value, full) {
  var empty = !this.hasDisplayValue(value);
  var style = full ? Object.assign({}, styles.infoItem, styles.infoItemFull) : styles.infoItem;
  return <div style={style}>
      <span style={styles.infoLabel}>{label}</span>
      <span style={empty ? styles.infoValueEmpty : styles.infoValue}>{empty ? '未填写' : value}</span>
    </div>;
}
export function renderInfoGrid(items, isMobile) {
  return <div style={isMobile ? styles.infoGridMobile : styles.infoGrid}>
      {items.map(item => this.renderInfoItem(item.label, item.value, item.full))}
    </div>;
}
export function renderPersonCard(label, value, tone) {
  var empty = !this.hasDisplayValue(value);
  var display = empty ? '未填写' : value;
  var avatarText = empty ? '未' : String(display).charAt(0);
  var avatarStyle = tone === 'success' ? styles.personAvatarGreen : tone === 'purple' ? styles.personAvatarPurple : tone === 'warning' ? styles.personAvatarOrange : styles.personAvatarBlue;
  return <div style={styles.personCard}>
      <span style={Object.assign({}, styles.personAvatar, avatarStyle)}>{avatarText}</span>
      <div style={styles.personText}>
        <span style={styles.personLabel}>{label}</span>
        <span style={empty ? styles.personValueEmpty : styles.personValue}>{display}</span>
      </div>
    </div>;
}
export function renderTextBlock(value, tone) {
  var style = styles.textBlock;
  if (tone === 'blue') style = Object.assign({}, styles.textBlock, styles.textBlockBlue);
  if (tone === 'amber') style = Object.assign({}, styles.textBlock, styles.textBlockAmber);
  return <div style={style}>{value && value !== '-' ? value : '暂无'}</div>;
}
export function renderBasicSection(row, isMobile) {
  var items = [
    { label: '来源单位', value: this.getAssociationText(row, FIELDS.lead.unit) },
    { label: '关键联系人 / 关联联系人', value: this.getAssociationText(row, FIELDS.lead.contact) },
    { label: '线索类型', value: this.getValue(row, FIELDS.lead.type) },
    { label: '线索来源', value: this.getValue(row, FIELDS.lead.sourceType) },
    { label: '来源拜访', value: this.getAssociationText(row, FIELDS.lead.sourceVisit) },
    { label: '录入方式', value: this.getValue(row, FIELDS.lead.entryType) },
    { label: '预计发生时间', value: this.getValue(row, FIELDS.lead.expectedTime) },
    { label: '权限级别', value: this.getValue(row, FIELDS.lead.permission) },
    { label: '最近更新时间', value: this.formatDate(this.rawValue(row, FIELDS.lead.recordTime)) },
    { label: '记录人', value: this.getValue(row, FIELDS.lead.recorder) },
    { label: '数据来源说明', value: '市场线索主表 / 拜访记录 / 项目档案', full: true }
  ];
  return this.renderSection('A. 线索概览', this.renderInfoGrid(items, isMobile));
}
export function renderPeopleSection(row, isMobile) {
  var collabItems = [
    { label: '线索负责人', value: this.getValue(row, FIELDS.lead.owner), tone: 'primary' },
    { label: '跟进经办人', value: this.getValue(row, FIELDS.lead.handlers), tone: 'success' },
    { label: '关注人 / 必看人', value: this.getValue(row, FIELDS.lead.watchers), tone: 'purple' },
    { label: '协作部门', value: '暂无', tone: 'warning' },
    { label: '授权查看人', value: this.getValue(row, FIELDS.lead.auth), tone: 'primary' }
  ];
  return this.renderSection('C. 协作与关注', <div>
      <div style={isMobile ? styles.personGridMobile : styles.personGrid}>
        {collabItems.map(item => this.renderPersonCard(item.label, item.value, item.tone))}
      </div>
      <div style={styles.collabHint}>此线索已指派到人，与我有关人员将在工作入口中收到提醒。</div>
    </div>);
}
export function getActionTags(row) {
  var tags = [];
  var importance = this.getValue(row, FIELDS.lead.importance);
  var maturity = this.getValue(row, FIELDS.lead.maturity);
  var nextAction = this.getValue(row, FIELDS.lead.nextAction);
  if (importance === '高') tags.push({ label: '重要', tone: 'danger' });
  if (maturity === '重点推进' || maturity === '可转项目') tags.push({ label: maturity, tone: 'success' });
  if (nextAction && nextAction !== '-' && nextAction.indexOf('上门') >= 0) tags.push({ label: '需二次上门', tone: 'warning' });
  if (nextAction && nextAction !== '-' && nextAction.indexOf('预算') >= 0) tags.push({ label: '关注预算窗口', tone: 'warning' });
  if (!tags.length) tags.push({ label: '按下一步动作推进', tone: 'primary' });
  return tags;
}
export function renderActionTags(row) {
  return <div style={styles.actionTagRow}>
      {this.getActionTags(row).map(tag => <span key={tag.label}>{this.renderBadge(tag.label, tag.tone)}</span>)}
    </div>;
}
export function renderContentSection(row, isMobile) {
  var status = this.getValue(row, FIELDS.lead.status);
  var closeReason = this.getValue(row, FIELDS.lead.closeReason);
  var closePerson = this.getValue(row, FIELDS.lead.closePerson);
  var closeTime = this.formatDate(this.rawValue(row, FIELDS.lead.closeTime));
  var closeNote = this.getValue(row, FIELDS.lead.closeNote);
  var showCloseInfo = status === '已关闭' || this.hasDisplayValue(closeReason) || this.hasDisplayValue(closeNote) || this.hasDisplayValue(closeTime);
  var closeItems = [
    { label: '关闭原因', value: closeReason },
    { label: '关闭人', value: closePerson },
    { label: '关闭时间', value: closeTime }
  ].filter(item => this.hasDisplayValue(item.value));
  return this.renderSection('B. 线索内容与下一步动作', <div style={styles.contentGrid}>
      <div>
        <div style={styles.subTitle}>线索内容</div>
        {this.renderTextBlock(this.getValue(row, FIELDS.lead.content), 'blue')}
      </div>
      <div>
        <div style={styles.subTitle}>下一步动作</div>
        {this.renderTextBlock(this.getValue(row, FIELDS.lead.nextAction), 'amber')}
        {this.renderActionTags(row)}
      </div>
      {showCloseInfo && <div style={styles.closePanel}>
          <div style={styles.subTitle}>关闭信息</div>
          {closeItems.length ? this.renderInfoGrid(closeItems, isMobile) : <div style={styles.collabHint}>暂无关闭明细</div>}
          {this.hasDisplayValue(closeNote) && <div style={styles.closeNoteBlock}>
              <div style={styles.subTitle}>关闭说明</div>
              {this.renderTextBlock(closeNote, 'default')}
            </div>}
        </div>}
    </div>);
}
export function renderTimelineSection(row, isMobile) {
  var visits = this.getLeadVisits(row);
  return <section style={Object.assign({}, styles.section, styles.timelineSection)}>
      <div style={isMobile ? styles.timelineSectionHeadMobile : styles.timelineSectionHead}>
        <div style={styles.sectionTitleCompact}>D. 推进拜访时间线</div>
        <div style={styles.timelineSectionSub}>展示来源拜访及后续推进过程关键节点的拜访、电话、微信沟通等推进过程。</div>
      </div>
      {visits.length ? <div style={styles.timeline}>{visits.map(item => this.renderVisitCard(item, isMobile))}</div> : this.renderEmpty('暂无拜访推进记录，可从原生拜访表单补充关联')}
      {visits.length ? <div style={styles.timelineCount}>共 {visits.length} 条拜访记录</div> : null}
    </section>;
}
export function renderVisitMeta(label, value) {
  if (!this.hasDisplayValue(value)) return null;
  return <span style={styles.metaItem}><span style={styles.metaLabel}>{label}</span>{value}</span>;
}
export function toneVisitMethod(method) {
  if (method === '上门') return 'success';
  if (method === '电话' || method === '微信') return 'primary';
  if (method === '会议') return 'purple';
  return 'default';
}
export function renderVisitCard(row, isMobile) {
  var isSourceVisit = row.__relationSource === '来源拜访';
  var relationLabel = isSourceVisit ? '来源拜访记录' : '后续推进';
  var dotStyle = isSourceVisit ? styles.timelineDotSuccess : styles.timelineDotPrimary;
  var method = this.getValue(row, FIELDS.visit.method);
  return <div key={this.getRowId(row)} style={styles.timelineItem}>
      <div style={Object.assign({}, styles.timelineDot, dotStyle)}></div>
      <div style={styles.timelineCard}>
        <div style={isMobile ? styles.timelineCardTopMobile : styles.timelineCardTop}>
          <div style={styles.timelineTitleWrap}>
            <div style={styles.timelineTitleRow}>
              <span style={styles.timelineCardTitle}>{this.getVisitTitle(row)}</span>
              {this.renderBadge(relationLabel, isSourceVisit ? 'success' : 'primary')}
              {this.renderBadge(method, this.toneVisitMethod(method))}
            </div>
          </div>
          <div style={styles.cardDate}>{this.formatDate(this.getVisitTime(row))}</div>
        </div>
        <div style={isMobile ? styles.timelineCardBodyMobile : styles.timelineCardBody}>
          <div style={styles.timelineCardContent}>
            <div style={styles.metaLineCompact}>
              {this.renderVisitMeta('联系人：', this.getAssociationText(row, FIELDS.visit.contact))}
              {this.renderVisitMeta('单位：', this.getAssociationText(row, FIELDS.visit.unit))}
              {this.renderVisitMeta('我方参与人：', this.getValue(row, FIELDS.visit.people))}
              {this.renderVisitMeta('记录人：', this.getValue(row, FIELDS.visit.recorder))}
            </div>
            <div style={styles.timelineTextLine}><span style={styles.timelineLineLabel}>交流摘要：</span>{this.getShortText(this.getValue(row, FIELDS.visit.content), '暂无交流内容')}</div>
            <div style={styles.timelineTextLine}><span style={styles.timelineLineLabel}>后续动作：</span>{this.getShortText(this.getValue(row, FIELDS.visit.nextAction), '暂无后续动作')}</div>
          </div>
          <div style={styles.timelineCardAction}>
            {this.renderButton('查看拜访详情', 'default', e => {
            this.openVisitDetail(row);
          })}
          </div>
        </div>
      </div>
    </div>;
}
export function renderProjectsSection(row, isMobile) {
  var projects = this.getLeadProjects(row);
  var maturity = this.getValue(row, FIELDS.lead.maturity);
  return this.renderSection('E. 关联项目', <div>
      <div style={styles.sectionSub}>展示主关联项目和由当前线索转出或回连的项目；线索不是项目，项目由线索转化或关联而来。</div>
      {projects.length ? <div style={styles.projectGrid}>{projects.map(project => this.renderProjectCard(project, isMobile))}</div> : this.renderEmpty('暂无关联项目，转项目或关联后会在这里显示')}
      <div style={styles.projectHint}>提示：当线索成熟度达到“可转项目”时，可直接执行转项目。当前成熟度：{maturity && maturity !== '-' ? maturity : '未填写'}</div>
    </div>);
}
export function renderProjectCard(row, isMobile) {
  var nextAction = this.getValue(row, FIELDS.project.nextAction);
  var updateDate = this.formatDate(this.rawValue(row, FIELDS.project.recentDate));
  return <div key={this.getRowId(row)} style={styles.projectCard}>
      <div style={isMobile ? styles.cardHeadMobile : styles.cardHead}>
        <div>
          <div style={styles.cardTitle}>{this.getShortText(this.getValue(row, FIELDS.project.name), '未命名项目')}</div>
          <div style={styles.badgeRow}>
            {this.renderBadge(row.__relationSource || '关联项目', row.__relationSource === '主关联项目' ? 'primary' : 'success')}
            {this.renderBadge(this.getValue(row, FIELDS.project.phase), 'purple')}
            {this.renderBadge(this.getValue(row, FIELDS.project.status), this.getValue(row, FIELDS.project.status) === '重点推进' ? 'warning' : 'default')}
          </div>
        </div>
        <div style={styles.cardDate}>{updateDate !== '-' ? '更新 ' + updateDate : '暂无更新'}</div>
      </div>
      <div style={styles.metaLine}>
        {this.renderVisitMeta('负责人：', this.getValue(row, FIELDS.project.owner))}
        {this.renderVisitMeta('牵头单位：', this.getAssociationText(row, FIELDS.project.unit))}
      </div>
      {this.hasDisplayValue(nextAction) && <div style={styles.nextStrip}><span style={styles.nextStripLabel}>下一步动作</span>{this.getShortText(nextAction, '')}</div>}
      <div style={styles.footerActions}>
        {this.renderButton('查看项目详情', 'default', e => {
        this.openProjectDetail(row);
      })}
      </div>
    </div>;
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
  if (!_customState.transferModalOpen) return null;
  var row = this.getLead();
  var self = this;
  return <div style={styles.modalMask}>
      <div style={styles.modal}>
        <div style={styles.modalHead}>
          <div>
            <div style={styles.modalTitle}>转项目 / 关联项目</div>
            <div style={styles.modalSub}>{row ? this.getLeadTitle(row) : ''}</div>
          </div>
          <button type="button" onClick={e => {
          self.closeTransferModal();
        }} style={styles.iconButton}>×</button>
        </div>
        <div style={styles.tipBox}>本阶段使用轻量流程：项目通过“来源线索”字段回连市场线索。项目原生表单当前未验证可靠自动预填来源线索，请在原生表单中确认该字段。</div>
        <div style={styles.modalActionsLeft}>
          {this.renderButton('打开项目原生新增表单', 'primary', e => {
          self.openProjectSubmissionFromLead();
        })}
          {this.renderButton('关联已有项目', 'default', e => {
          self.openProjectManageForLink();
        })}
          {this.renderButton('取消', 'default', e => {
          self.closeTransferModal();
        })}
        </div>
      </div>
    </div>;
}
export function renderEmpty(text) {
  return <div style={styles.empty}>{text}</div>;
}
var styles = {
  page: { minHeight: '100vh', background: '#F6F8FC', color: '#101828', fontFamily: '-apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", sans-serif', boxSizing: 'border-box', padding: '0 0 36px' },
  shell: { maxWidth: '1366px', margin: '0 auto', padding: '18px 16px 0', boxSizing: 'border-box' },
  shellMobile: { padding: '12px 12px 24px', boxSizing: 'border-box' },
  accessBox: { maxWidth: '680px', margin: '80px auto', padding: '32px 24px', background: '#FFFFFF', border: '1px solid #EAECF0', borderRadius: '8px', textAlign: 'center' },
  accessTitle: { fontSize: '20px', fontWeight: 750, color: '#1D2939', marginBottom: '8px' },
  accessText: { fontSize: '14px', color: '#667085', lineHeight: '22px' },
  backRow: { minHeight: '28px', display: 'flex', alignItems: 'center', marginBottom: '12px' },
  backLink: { display: 'inline-flex', alignItems: 'center', border: 'none', background: 'transparent', color: '#667085', fontSize: '14px', lineHeight: '22px', padding: 0, cursor: 'pointer', fontFamily: 'inherit' },
  backStrong: { color: '#101828', fontWeight: 900 },
  hero: { background: '#FFFFFF', border: '1px solid #E5EAF3', borderRadius: '8px', padding: '18px 22px', boxShadow: '0 8px 22px rgba(16,24,40,0.04)', boxSizing: 'border-box', marginBottom: '12px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px' },
  heroMobile: { background: '#FFFFFF', border: '1px solid #E5EAF3', borderRadius: '10px', padding: '16px', boxShadow: '0 8px 22px rgba(16,24,40,0.04)', boxSizing: 'border-box', marginBottom: '12px', display: 'grid', gap: '12px' },
  heroMain: { minWidth: 0, flex: 1 },
  heroEyebrow: { color: '#155EEF', fontSize: '13px', lineHeight: '20px', fontWeight: 900, marginBottom: '5px' },
  titleLine: { display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' },
  pageTitle: { fontSize: '24px', lineHeight: '32px', fontWeight: 900, color: '#101828', margin: 0, wordBreak: 'break-word' },
  serial: { color: '#98A2B3', fontSize: '12px', lineHeight: '18px' },
  badgeRow: { display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '8px' },
  badge: { display: 'inline-flex', alignItems: 'center', minHeight: '24px', padding: '0 9px', borderRadius: '999px', fontSize: '12px', fontWeight: 700, boxSizing: 'border-box', whiteSpace: 'nowrap' },
  heroActions: { display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'flex-end' },
  button: { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '34px', borderRadius: '8px', padding: '0 12px', fontSize: '13px', fontWeight: 800, cursor: 'pointer', boxSizing: 'border-box', fontFamily: 'inherit' },
  buttonPrimary: { border: '1px solid #155EEF', background: '#155EEF', color: '#FFFFFF' },
  buttonDefault: { border: '1px solid #D0D5DD', background: '#FFFFFF', color: '#344054' },
  buttonDanger: { border: '1px solid #D92D20', background: '#D92D20', color: '#FFFFFF' },
  buttonSoftDanger: { border: '1px solid #FECDCA', background: '#FFFBFA', color: '#B42318' },
  buttonSuccess: { border: '1px solid #ABEFC6', background: '#F6FEF9', color: '#027A48' },
  buttonWeak: { border: '1px solid #EAECF0', background: '#FFFFFF', color: '#667085' },
  choiceGroup: { display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' },
  choiceButton: { minHeight: '34px', borderRadius: '8px', border: '1px solid #D0D5DD', background: '#FFFFFF', color: '#344054', padding: '0 11px', fontSize: '13px', fontWeight: 800, cursor: 'pointer', boxSizing: 'border-box', fontFamily: 'inherit' },
  choiceButtonActive: { background: '#EAF2FF', color: '#155EEF', borderColor: '#B9D6FF', boxShadow: '0 0 0 2px rgba(21,94,239,0.08)' },
  processBar: { minHeight: '62px', background: '#FFFFFF', border: '1px solid #E5EAF3', borderRadius: '8px', boxShadow: '0 6px 18px rgba(16,24,40,0.035)', display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', alignItems: 'center', gap: '0', padding: '10px 18px', boxSizing: 'border-box', marginBottom: '12px' },
  processBarMobile: { background: '#FFFFFF', border: '1px solid #E5EAF3', borderRadius: '8px', boxShadow: '0 6px 18px rgba(16,24,40,0.035)', display: 'grid', gridTemplateColumns: '1fr', gap: '8px', padding: '12px', boxSizing: 'border-box', marginBottom: '12px' },
  processItem: { display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 },
  processIcon: { width: '32px', height: '32px', borderRadius: '50%', border: '1px solid #D0D5DD', background: '#F8FAFC', color: '#667085', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 900, flex: '0 0 auto' },
  processIconActive: { background: '#EAF2FF', borderColor: '#B9D6FF', color: '#155EEF' },
  processIconCurrent: { background: '#155EEF', borderColor: '#155EEF', color: '#FFFFFF', boxShadow: '0 0 0 4px #EAF2FF' },
  processText: { color: '#667085', fontSize: '13px', lineHeight: '20px', fontWeight: 800, whiteSpace: 'nowrap' },
  processTextActive: { color: '#101828' },
  processLine: { height: '1px', background: '#D0D5DD', flex: 1, minWidth: '18px' },
  summaryBar: { display: 'grid', gridTemplateColumns: 'repeat(6, minmax(0, 1fr))', gap: '10px', marginBottom: '14px' },
  summaryBarMobile: { display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '8px', marginBottom: '12px' },
  summaryItem: { position: 'relative', minHeight: '78px', padding: '12px 46px 12px 14px', background: '#FFFFFF', border: '1px solid #E5EAF3', borderLeft: '3px solid #155EEF', borderRadius: '8px', boxShadow: '0 8px 20px rgba(16,24,40,0.04)', boxSizing: 'border-box', display: 'grid', alignContent: 'center', gap: '4px' },
  summaryAccentPrimary: { borderLeftColor: '#155EEF' },
  summaryAccentWarning: { borderLeftColor: '#F79009' },
  summaryAccentDanger: { borderLeftColor: '#D92D20' },
  summaryAccentSuccess: { borderLeftColor: '#12B76A' },
  summaryAccentPurple: { borderLeftColor: '#7A5AF8' },
  summaryIcon: { position: 'absolute', right: '12px', top: '18px', width: '30px', height: '30px', borderRadius: '50%', background: '#F8FAFC', border: '1px solid #E5EAF3', color: '#155EEF', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 900 },
  summaryLabel: { color: '#98A2B3', fontSize: '12px', lineHeight: '18px', fontWeight: 700 },
  summaryValue: { color: '#101828', fontSize: '18px', lineHeight: '24px', fontWeight: 900, wordBreak: 'normal', overflowWrap: 'break-word' },
  summaryValueEmpty: { color: '#98A2B3', fontSize: '14px', lineHeight: '21px', fontWeight: 800, wordBreak: 'normal', overflowWrap: 'break-word' },
  detailMasonry: { display: 'grid', gridTemplateColumns: 'minmax(460px, 0.84fr) minmax(620px, 1.16fr)', gap: '16px', alignItems: 'start' },
  detailGrid: { display: 'grid', gridTemplateColumns: 'minmax(460px, 0.84fr) minmax(620px, 1.16fr)', gap: '16px', alignItems: 'start' },
  detailFull: { gridColumn: '1 / -1', minWidth: 0 },
  detailMasonryMobile: { display: 'grid', gridTemplateColumns: '1fr', gap: '12px' },
  detailColumn: { display: 'grid', gap: '12px', alignContent: 'start', minWidth: 0 },
  section: { background: '#FFFFFF', border: '1px solid #E5EAF3', borderRadius: '8px', padding: '16px', boxShadow: '0 6px 18px rgba(16,24,40,0.03)', boxSizing: 'border-box', marginBottom: '0' },
  sectionTitle: { color: '#101828', fontSize: '16px', lineHeight: '24px', fontWeight: 900, marginBottom: '12px' },
  sectionTitleCompact: { color: '#101828', fontSize: '16px', lineHeight: '24px', fontWeight: 900, whiteSpace: 'nowrap' },
  sectionSub: { color: '#667085', fontSize: '13px', lineHeight: '21px', marginBottom: '12px' },
  infoGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, minmax(110px, 1fr))', gap: '8px 16px' },
  infoGridMobile: { display: 'grid', gridTemplateColumns: '1fr', gap: '0' },
  infoItem: { minHeight: '36px', background: 'transparent', borderTop: '1px solid #F2F4F7', padding: '6px 0', display: 'grid', gap: '1px', alignContent: 'start', boxSizing: 'border-box', minWidth: 0 },
  infoItemFull: { gridColumn: '1 / -1' },
  infoLabel: { color: '#667085', fontSize: '13px', lineHeight: '20px', wordBreak: 'normal', overflowWrap: 'break-word' },
  infoValue: { color: '#101828', fontSize: '14px', lineHeight: '21px', fontWeight: 700, wordBreak: 'normal', overflowWrap: 'break-word', minWidth: 0 },
  infoValueEmpty: { color: '#98A2B3', fontSize: '14px', lineHeight: '21px', fontWeight: 500, wordBreak: 'normal', overflowWrap: 'break-word', minWidth: 0 },
  personGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '8px' },
  personGridMobile: { display: 'grid', gridTemplateColumns: '1fr', gap: '8px' },
  personCard: { minHeight: '66px', border: '1px solid #EEF2F7', background: '#FCFCFD', borderRadius: '8px', padding: '10px', boxSizing: 'border-box', display: 'flex', alignItems: 'center', gap: '9px', minWidth: 0 },
  personAvatar: { width: '30px', height: '30px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto', fontSize: '12px', fontWeight: 900 },
  personAvatarBlue: { background: '#EAF2FF', color: '#155EEF' },
  personAvatarGreen: { background: '#ECFDF3', color: '#027A48' },
  personAvatarPurple: { background: '#F4EBFF', color: '#6941C6' },
  personAvatarOrange: { background: '#FFF7E6', color: '#B54708' },
  personText: { minWidth: 0, display: 'grid', gap: '2px' },
  personLabel: { color: '#98A2B3', fontSize: '12px', lineHeight: '18px' },
  personValue: { color: '#101828', fontSize: '13px', lineHeight: '20px', fontWeight: 800, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
  personValueEmpty: { color: '#98A2B3', fontSize: '13px', lineHeight: '20px', fontWeight: 500 },
  collabHint: { marginTop: '8px', padding: '9px 10px', borderRadius: '8px', background: '#F8FAFC', border: '1px dashed #D0D5DD', color: '#98A2B3', fontSize: '13px', lineHeight: '20px' },
  contentGrid: { display: 'grid', gap: '12px' },
  closeInfo: { paddingTop: '2px' },
  closePanel: { padding: '12px', borderRadius: '8px', background: '#F8FAFC', border: '1px solid #EEF2F7' },
  closeNoteBlock: { marginTop: '10px' },
  subTitle: { color: '#667085', fontSize: '13px', lineHeight: '20px', fontWeight: 800, marginBottom: '6px' },
  textBlock: { minHeight: '44px', borderRadius: '8px', background: '#F8FAFC', border: '1px solid #EEF2F7', color: '#344054', padding: '10px 12px', lineHeight: '22px', fontSize: '14px', whiteSpace: 'pre-wrap', boxSizing: 'border-box', wordBreak: 'normal', overflowWrap: 'break-word' },
  textBlockBlue: { background: '#EFF6FF', border: '1px solid #D6E8FF', color: '#1849A9' },
  textBlockAmber: { background: '#FFFAEB', border: '1px solid #FEDF89', color: '#7A2E0E' },
  actionTagRow: { display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '8px' },
  timelineSection: { padding: '14px 16px 10px' },
  timelineSectionHead: { display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '12px', minWidth: 0 },
  timelineSectionHeadMobile: { display: 'grid', gap: '4px', marginBottom: '10px' },
  timelineSectionSub: { color: '#667085', fontSize: '13px', lineHeight: '20px', flex: 1, minWidth: '260px' },
  timeline: { display: 'grid', gap: '0', paddingTop: '0' },
  timelineItem: { position: 'relative', paddingLeft: '26px', paddingBottom: '8px', borderLeft: '1px solid #D6E8FF', marginLeft: '7px' },
  timelineDot: { position: 'absolute', left: '-6px', top: '17px', width: '11px', height: '11px', borderRadius: '50%', border: '2px solid #FFFFFF', boxSizing: 'border-box' },
  timelineDotPrimary: { background: '#155EEF', boxShadow: '0 0 0 4px #EAF2FF' },
  timelineDotSuccess: { background: '#12B76A', boxShadow: '0 0 0 4px #ECFDF3' },
  timelineCard: { border: '1px solid #E5EAF3', background: '#FFFFFF', borderRadius: '8px', padding: '10px 12px', boxSizing: 'border-box', boxShadow: 'none', minWidth: 0 },
  timelineCardTop: { display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '14px', marginBottom: '6px' },
  timelineCardTopMobile: { display: 'grid', gap: '4px', marginBottom: '8px' },
  timelineTitleWrap: { minWidth: 0, flex: 1 },
  timelineTitleRow: { display: 'flex', alignItems: 'center', gap: '7px', flexWrap: 'wrap', minWidth: 0 },
  timelineCardTitle: { color: '#101828', fontSize: '15px', lineHeight: '22px', fontWeight: 900, wordBreak: 'normal', overflowWrap: 'break-word' },
  timelineCardBody: { display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) auto', gap: '12px', alignItems: 'center' },
  timelineCardBodyMobile: { display: 'grid', gap: '10px' },
  timelineCardContent: { minWidth: 0, display: 'grid', gap: '4px' },
  timelineCardAction: { display: 'flex', justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'stretch' },
  timelineCardMain: { minWidth: 0, flex: 1 },
  cardHead: { display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', marginBottom: '9px' },
  cardHeadMobile: { display: 'grid', gap: '10px', marginBottom: '10px' },
  cardTitle: { color: '#101828', fontSize: '16px', lineHeight: '24px', fontWeight: 900, wordBreak: 'normal', overflowWrap: 'break-word' },
  cardDate: { color: '#667085', fontSize: '13px', lineHeight: '20px', fontWeight: 700, whiteSpace: 'nowrap', flex: '0 0 auto', textAlign: 'right' },
  metaLine: { display: 'flex', gap: '7px 14px', flexWrap: 'wrap', color: '#667085', fontSize: '13px', lineHeight: '20px', marginTop: '8px', paddingTop: '8px', borderTop: '1px solid #F2F4F7' },
  metaLineCompact: { display: 'flex', gap: '5px 12px', flexWrap: 'wrap', color: '#667085', fontSize: '13px', lineHeight: '20px', minWidth: 0 },
  metaItem: { display: 'inline-flex', gap: '2px', alignItems: 'center', maxWidth: '100%', minWidth: 0, wordBreak: 'normal', overflowWrap: 'break-word' },
  metaLabel: { color: '#98A2B3' },
  summaryText: { color: '#344054', fontSize: '14px', lineHeight: '22px', marginTop: '10px', whiteSpace: 'pre-wrap', wordBreak: 'break-word' },
  timelineTextLine: { color: '#344054', fontSize: '13px', lineHeight: '20px', whiteSpace: 'pre-wrap', wordBreak: 'normal', overflowWrap: 'break-word' },
  timelineLineLabel: { color: '#667085', fontWeight: 800 },
  timelineCount: { color: '#667085', fontSize: '13px', lineHeight: '20px', paddingLeft: '26px', marginLeft: '7px' },
  visitBlock: { marginTop: '10px', padding: '9px 10px', borderRadius: '8px', background: '#FCFCFD', border: '1px solid #EEF2F7', color: '#344054', fontSize: '14px', lineHeight: '22px', whiteSpace: 'pre-wrap', wordBreak: 'normal', overflowWrap: 'break-word' },
  visitBlockLabel: { display: 'block', color: '#667085', fontSize: '12px', lineHeight: '18px', fontWeight: 800, marginBottom: '4px' },
  nextText: { color: '#155EEF', fontSize: '13px', lineHeight: '21px', marginTop: '8px', whiteSpace: 'pre-wrap', wordBreak: 'break-word' },
  nextStrip: { background: '#EFF6FF', border: '1px solid #CFE3FF', borderLeft: '3px solid #155EEF', borderRadius: '8px', color: '#1849A9', fontSize: '13px', lineHeight: '21px', marginTop: '10px', padding: '9px 10px', whiteSpace: 'pre-wrap', wordBreak: 'normal', overflowWrap: 'break-word' },
  nextStripLabel: { display: 'block', color: '#155EEF', fontSize: '12px', lineHeight: '18px', fontWeight: 900, marginBottom: '3px' },
  footerActions: { display: 'flex', justifyContent: 'flex-end', gap: '8px', flexWrap: 'wrap', marginTop: '12px' },
  projectGrid: { display: 'grid', gap: '8px' },
  projectCard: { border: '1px solid #E5EAF3', background: '#FCFCFD', borderRadius: '8px', padding: '12px', boxSizing: 'border-box' },
  projectHint: { marginTop: '10px', padding: '9px 10px', borderRadius: '8px', background: '#FFFAEB', border: '1px solid #FEDF89', color: '#7A2E0E', fontSize: '13px', lineHeight: '20px' },
  empty: { background: '#F8FAFC', border: '1px dashed #D0D5DD', borderRadius: '8px', padding: '18px 12px', color: '#98A2B3', textAlign: 'center', fontSize: '14px', lineHeight: '22px' },
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
  var lead = this.getLead();
  if (_customState.accessDenied) {
    return <div style={styles.page}>
        <div style={{ display: 'none' }}>{timestamp}</div>
        {this.renderAccessDenied()}
      </div>;
  }
  return <div style={styles.page}>
      <div style={{ display: 'none' }}>{timestamp}</div>
      <div style={isMobile ? styles.shellMobile : styles.shell}>
        {this.renderBack()}
        {_customState.loading && <div style={styles.notice}>正在加载市场线索详情...</div>}
        {_customState.error && <div style={styles.error}>{_customState.error}</div>}
        {!_customState.loading && !lead && this.renderEmpty('未找到市场线索，请返回列表重新选择')}
        {!_customState.loading && lead && <div>
          {this.renderHero(lead, isMobile)}
          {this.renderProcessBar(lead)}
          {this.renderSummaryBar(lead, isMobile)}
          {isMobile ? <div style={styles.detailMasonryMobile}>
              {this.renderBasicSection(lead, isMobile)}
              {this.renderContentSection(lead, isMobile)}
              {this.renderPeopleSection(lead, isMobile)}
              {this.renderTimelineSection(lead, isMobile)}
              {this.renderProjectsSection(lead, isMobile)}
            </div> : <div style={styles.detailGrid}>
              {this.renderBasicSection(lead, isMobile)}
              {this.renderContentSection(lead, isMobile)}
              {this.renderPeopleSection(lead, isMobile)}
              {this.renderTimelineSection(lead, isMobile)}
              <div style={styles.detailFull}>
                {this.renderProjectsSection(lead, isMobile)}
              </div>
            </div>}
        </div>}
      </div>
      {this.renderCloseModal()}
      {this.renderTransferModal()}
    </div>;
}
