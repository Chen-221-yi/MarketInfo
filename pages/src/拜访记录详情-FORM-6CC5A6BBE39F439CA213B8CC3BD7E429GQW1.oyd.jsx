// 拜访记录详情 - 自定义页面
var APP_TYPE = 'APP_LC7BU43GCVLSI0TH8POE';
var FORMS = {
  visitManage: 'FORM-02C2269B84C44EFFB83ECF629F05AB94I339',
  visitDetail: 'FORM-6CC5A6BBE39F439CA213B8CC3BD7E429GQW1',
  contactDetail: 'FORM-89CA116EA0134CACB77EAA0F87AA7AB8MD1C',
  unitDetail: 'FORM-4A90B63766D14A9798BD0B1DD1D32F9CMOZK',
  projectDetail: 'FORM-3367C1CD6BDB4FE995BCA69ECFF03419Q0A4',
  visit: 'FORM-5C9373CB6EA5468FA607352B96908C87WHBW',
  contact: 'FORM-87B25B011DC14AA5ACC39BE4077D520AITQS',
  unit: 'FORM-A96B2187A20640C68C9F7806CC1FEADDZZZ8',
  project: 'FORM-DC58D4D9EB714ACBB421A34ADFB418ABJCVO',
  intel: 'FORM-76909065F1B5460E872D3834D95B2DFFK8F0'
};
var FIELDS = {
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
    auth: 'employeeField_kyv3jcji3',
    attachment: 'attachmentField_kyv3kmuep',
    recorder: 'employeeField_kyv3ln90f',
    recordTime: 'dateField_kyv3mec5i'
  },
  intel: {
    serial: 'serialNumberField_o5hf11mwc',
    contact: 'associationFormField_o5hf21sgj',
    project: 'associationFormField_o5hf3lnak',
    unit: 'associationFormField_nnet1kq13',
    category: 'selectField_o5hf4u689',
    title: 'textField_o5hf51ir9',
    content: 'textareaField_o5hf6dkbq',
    importance: 'selectField_mq4vrff2',
    sourceType: 'selectField_o5hf88jri',
    status: 'selectField_o5hfbq4tf',
    permission: 'selectField_o5hfdjolr',
    auth: 'employeeField_o5hfer19l',
    recorder: 'employeeField_o5hff9siq',
    recordTime: 'dateField_o5hfgz10c',
    visit: 'associationFormField_5szc127yh',
    entryType: 'selectField_5szc2uo33',
    expectedTime: 'textField_5szc4102z',
    validUntil: 'dateField_5szd5xzdb',
    remindDate: 'dateField_5szd6vvxq',
    owner: 'employeeField_5szd78u2t',
    handlers: 'employeeField_nnet2xu74',
    watchers: 'employeeField_nnet3hm2v',
    nextAction: 'textareaField_5szd8976q'
  }
};
var _customState = {
  loading: true,
  error: '',
  accessDenied: false,
  visitId: '',
  activeTab: 'basic',
  visits: [],
  intel: [],
  intelDrawerOpen: false,
  intelSaving: false,
  intelDraft: {
    title: '',
    content: '',
    category: '项目线索',
    importance: '中',
    expectedTime: '',
    validUntil: '',
    remindDate: '',
    nextAction: ''
  }
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
  return <div style={{ maxWidth: '680px', margin: '80px auto', padding: '32px 24px', background: '#FFFFFF', border: '1px solid #EAECF0', borderRadius: '8px', textAlign: 'center' }}>
      <div style={{ fontSize: '20px', fontWeight: 750, color: '#1D2939', marginBottom: '8px' }}>暂无查看权限</div>
      <div style={{ fontSize: '14px', color: '#667085', lineHeight: '22px' }}>拜访记录详情仅开放给“市场信息管理 / 总经理办”。普通员工提交的拜访线索不提供回看入口。</div>
    </div>;
}
export function didMount() {
  if (this.denyNormalEmployeeAccess()) return;
  _customState.visitId = this.getUrlParam('formInstId') || this.getUrlParam('visitId') || this.getUrlParam('id') || '';
  this.loadData();
}
export function loadData() {
  var self = this;
  _customState.loading = true;
  _customState.error = '';
  this.forceUpdate();
  Promise.all([self.loadVisitsData(), self.loadIntelData()]).then(() => {
    if (!_customState.visitId && _customState.visits.length) {
      _customState.visitId = self.getRowId(_customState.visits[0]);
    }
    _customState.loading = false;
    _customState.error = '';
    self.forceUpdate();
  }).catch(err => {
    _customState.loading = false;
    _customState.error = self.getErrorMessage(err);
    _customState.visits = [];
    _customState.intel = [];
    self.forceUpdate();
    self.utils.toast({
      title: '拜访记录详情加载失败',
      type: 'error'
    });
  });
}
export function loadVisitsData() {
  var order = {};
  order[FIELDS.visit.time] = '-';
  return this.utils.yida.searchFormDatas({
    formUuid: FORMS.visit,
    currentPage: 1,
    pageSize: 100,
    dynamicOrder: JSON.stringify(order)
  }).then(res => {
    _customState.visits = this.normalizeRows(res);
    return _customState.visits;
  }).catch(err => {
    _customState.visits = [];
    throw err;
  });
}
export function loadIntelData() {
  var order = {};
  order[FIELDS.intel.recordTime] = '-';
  return this.utils.yida.searchFormDatas({
    formUuid: FORMS.intel,
    currentPage: 1,
    pageSize: 100,
    dynamicOrder: JSON.stringify(order)
  }).then(res => {
    _customState.intel = this.normalizeRows(res);
    return _customState.intel;
  }).catch(err => {
    _customState.intel = [];
    throw err;
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
    if (decodeURIComponent(pair[0] || '') === name) return decodeURIComponent(pair[1] || '');
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
  var text = value.trim();
  if (!text) return '';
  var parsed = value;
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
    if (parsed.title) return parsed.title;
    if (parsed.name) return this.formatValue(parsed.name);
    return parsed.label || parsed.text || parsed.value || parsed.displayName || parsed.userName || parsed.nickName || '-';
  }
  return parsed;
}
export function getValue(row, fieldId) {
  return this.formatValue(this.rawValue(row, fieldId));
}
export function getAssociationText(row, fieldId) {
  return this.associationText(this.rawAssociation(row, fieldId));
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
export function findById(list, id) {
  if (!id) return null;
  var matched = list.filter(item => this.getRowId(item) === id);
  return matched[0] || null;
}
export function getVisit() {
  return this.findById(_customState.visits, _customState.visitId);
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
    if (typeof item !== 'object') return this.formatValue(item);
    return item.title || item.name || item.label || item.text || '-';
  }).join('、');
}
export function getAssociationId(value) {
  var items = this.getAssociationItems(value);
  if (!items.length) return '';
  var item = items[0];
  if (typeof item !== 'object') return '';
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
export function getAttachmentItems(row) {
  return this.getAssociationItems(this.rawValue(row, FIELDS.visit.attachment));
}
export function getRelatedIntel(row) {
  var visitId = this.getRowId(row);
  var leadIds = this.getAssociationIds(this.rawAssociation(row, FIELDS.visit.lead));
  var exists = {};
  var list = [];
  (_customState.intel || []).forEach(item => {
    var id = this.getRowId(item);
    var fromVisit = this.rowMatchesAssociation(item, FIELDS.intel.visit, visitId);
    var fromLinked = leadIds.indexOf(id) >= 0;
    if (!fromVisit && !fromLinked) return;
    if (exists[id]) return;
    exists[id] = true;
    var copied = Object.assign({}, item);
    copied.__relationSource = fromVisit ? '来源拜访记录' : '拜访记录关联线索';
    list.push(copied);
  });
  this.getAssociationItems(this.rawAssociation(row, FIELDS.visit.lead)).forEach(item => {
    if (!item || typeof item !== 'object') return;
    var id = item.instanceId || item.formInstId || item.formInstanceId || item.id || '';
    if (!id || exists[id]) return;
    exists[id] = true;
    var formData = {};
    formData[FIELDS.intel.title] = item.title || item.name || item.label || item.text || '已关联市场线索';
    list.push({
      formInstId: id,
      formData: formData,
      __relationSource: '拜访记录关联线索'
    });
  });
  list.sort((a, b) => {
    var ad = Number(this.rawValue(a, FIELDS.intel.remindDate)) || Number(this.rawValue(a, FIELDS.intel.validUntil)) || Number(this.rawValue(a, FIELDS.intel.recordTime)) || 0;
    var bd = Number(this.rawValue(b, FIELDS.intel.remindDate)) || Number(this.rawValue(b, FIELDS.intel.validUntil)) || Number(this.rawValue(b, FIELDS.intel.recordTime)) || 0;
    return bd - ad;
  });
  return list;
}
export function getTodayStart() {
  var today = new Date();
  return new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();
}
export function isClosedIntel(row) {
  var status = this.getValue(row, FIELDS.intel.status);
  return status === '已转项目' || status === '已关闭' || status === '已归档';
}
export function isIntelOverdue(row) {
  var validUntil = Number(this.rawValue(row, FIELDS.intel.validUntil)) || 0;
  return !!validUntil && validUntil < this.getTodayStart() && !this.isClosedIntel(row);
}
export function isIntelReminderDue(row) {
  var remindDate = Number(this.rawValue(row, FIELDS.intel.remindDate)) || 0;
  return !!remindDate && remindDate <= this.getTodayStart() && !this.isClosedIntel(row);
}
export function getIntelTone(row) {
  var status = this.getValue(row, FIELDS.intel.status);
  if (this.isIntelOverdue(row)) return 'danger';
  if (this.isIntelReminderDue(row)) return 'warning';
  if (status === '已转项目') return 'success';
  if (status === '跟进中') return 'primary';
  if (status === '已关闭' || status === '已归档') return 'default';
  return 'warning';
}
export function getLoginUserId() {
  if (this.utils.getLoginUserId) return this.utils.getLoginUserId();
  return typeof window !== 'undefined' && window.loginUser && window.loginUser.userId || '';
}
export function normalizeAssociationPayload(value, formUuid, fallbackTitle) {
  var result = [];
  this.getAssociationItems(value).forEach(item => {
    if (!item || typeof item !== 'object') return;
    var id = item.instanceId || item.formInstId || item.formInstanceId || item.id || '';
    if (!id) return;
    result.push({
      formType: 'receipt',
      formUuid: formUuid,
      instanceId: id,
      subTitle: item.subTitle || '',
      appType: APP_TYPE,
      title: item.title || item.name || item.label || item.text || fallbackTitle || ''
    });
  });
  return result;
}
export function buildVisitAssociation(row) {
  var id = this.getRowId(row);
  if (!id) return [];
  return [{
    formType: 'receipt',
    formUuid: FORMS.visit,
    instanceId: id,
    subTitle: this.formatDate(this.getVisitTime(row)),
    appType: APP_TYPE,
    title: this.getVisitTitle(row)
  }];
}
export function resetIntelDraft() {
  _customState.intelDraft = {
    title: '',
    content: '',
    category: '项目线索',
    importance: '中',
    expectedTime: '',
    validUntil: '',
    remindDate: '',
    nextAction: ''
  };
}
export function openIntelDrawer() {
  this.openIntelNativeSubmission();
}
export function closeIntelDrawer() {
  if (_customState.intelSaving) return;
  _customState.intelDrawerOpen = false;
  this.resetIntelDraft();
  this.forceUpdate();
}
export function handleIntelDraftChange(key, e) {
  _customState.intelDraft[key] = e && e.target ? e.target.value : '';
}
export function setIntelCategory(category) {
  _customState.intelDraft.category = category;
  this.forceUpdate();
}
export function setIntelImportance(importance) {
  _customState.intelDraft.importance = importance;
  this.forceUpdate();
}
export function getDraftInputValue(key) {
  var value = _customState.intelDraft && _customState.intelDraft[key] || '';
  if (typeof document === 'undefined') return value;
  var input = document.getElementById('visit-intel-' + key);
  if (input && input.value !== undefined) return input.value;
  return value;
}
export function parseDateInput(value) {
  if (!value) return 0;
  var parts = String(value).split('-');
  if (parts.length !== 3) return 0;
  var year = Number(parts[0]);
  var month = Number(parts[1]);
  var day = Number(parts[2]);
  if (!year || !month || !day) return 0;
  return new Date(year, month - 1, day).getTime();
}
export function addDays(time, days) {
  return time + days * 24 * 60 * 60 * 1000;
}
export function normalizeTextValue(value, fallback) {
  if (value === undefined || value === null || value === '' || value === '-') return fallback || '';
  return value;
}
export function buildPrefilledIntelPayload(row) {
  var payload = {};
  var today = this.getTodayStart();
  var nextDate = Number(this.rawValue(row, FIELDS.visit.nextDate)) || 0;
  var visitContent = this.normalizeTextValue(this.getValue(row, FIELDS.visit.content), '由拜访记录生成，待补充线索内容');
  var nextAction = this.normalizeTextValue(this.getValue(row, FIELDS.visit.nextAction), '');
  var contact = this.normalizeAssociationPayload(this.rawAssociation(row, FIELDS.visit.contact), FORMS.contact, this.getAssociationText(row, FIELDS.visit.contact));
  var unit = this.normalizeAssociationPayload(this.rawAssociation(row, FIELDS.visit.unit), FORMS.unit, this.getAssociationText(row, FIELDS.visit.unit));
  var project = this.normalizeAssociationPayload(this.rawAssociation(row, FIELDS.visit.project), FORMS.project, this.getAssociationText(row, FIELDS.visit.project));
  payload[FIELDS.intel.title] = this.getVisitTitle(row);
  payload[FIELDS.intel.content] = visitContent;
  payload[FIELDS.intel.category] = '项目线索';
  payload[FIELDS.intel.importance] = '中';
  payload[FIELDS.intel.status] = '待跟进';
  payload[FIELDS.intel.sourceType] = '拜访获得';
  payload[FIELDS.intel.entryType] = '拜访生成';
  payload[FIELDS.intel.permission] = '内部';
  payload[FIELDS.intel.nextAction] = nextAction;
  payload[FIELDS.intel.remindDate] = nextDate || today;
  payload[FIELDS.intel.validUntil] = nextDate && nextDate > today ? this.addDays(nextDate, 30) : this.addDays(today, 30);
  payload[FIELDS.intel.recordTime] = new Date().getTime();
  payload[FIELDS.intel.visit] = this.buildVisitAssociation(row);
  if (contact.length) payload[FIELDS.intel.contact] = contact;
  if (unit.length) payload[FIELDS.intel.unit] = unit;
  if (project.length) payload[FIELDS.intel.project] = project;
  return payload;
}
export function getSavedFormInstId(res) {
  var body = res && (res.content || res.data || res.result || res) || {};
  if (typeof body === 'string') return body;
  return body.formInstId || body.formInstanceId || body.instanceId || body.id || body.formDataId || '';
}
export function findLatestIntelByVisit(row) {
  var related = this.getRelatedIntel(row);
  return related && related[0] || null;
}
export function openSavedIntelOrRefresh(row, formInstId) {
  if (formInstId) {
    this.openNativeEditForm(FORMS.intel, formInstId);
    return;
  }
  this.loadIntelData().then(() => {
    var latest = this.findLatestIntelByVisit(row);
    var id = this.getRowId(latest);
    if (id) {
      this.openNativeEditForm(FORMS.intel, id);
      return;
    }
    this.utils.toast({
      title: '市场线索已生成，请刷新后查看',
      type: 'success'
    });
    this.forceUpdate();
  }).catch(() => {
    this.utils.toast({
      title: '市场线索已生成，请刷新后查看',
      type: 'success'
    });
  });
}
export function openIntelNativeSubmission() {
  var row = this.getVisit();
  if (!row) return;
  if (_customState.intelSaving) return;
  _customState.intelSaving = true;
  this.forceUpdate();
  var payload = this.buildPrefilledIntelPayload(row);
  this.utils.toast({
    title: '正在生成预填市场线索',
    type: 'notice'
  });
  this.utils.yida.saveFormData({
    appType: APP_TYPE,
    formUuid: FORMS.intel,
    formDataJson: JSON.stringify(payload)
  }).then(res => {
    _customState.intelSaving = false;
    this.utils.toast({
      title: '已生成预填草稿，请在原生表单中补充人员字段',
      type: 'success'
    });
    this.openSavedIntelOrRefresh(row, this.getSavedFormInstId(res));
  }).catch(err => {
    _customState.intelSaving = false;
    this.forceUpdate();
    this.utils.toast({
      title: '生成市场线索失败：' + this.getErrorMessage(err),
      type: 'error'
    });
  });
}
export function methodTone(method) {
  if (method === '电话' || method === '微信') return 'success';
  if (method === '饭局' || method === '活动') return 'warning';
  if (method === '会议' || method === '培训会') return 'purple';
  return 'primary';
}
export function goBack() {
  this.utils.router.push(FORMS.visitManage, {}, false);
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
export function editVisit() {
  var row = this.getVisit();
  var id = this.getRowId(row);
  if (!id) return;
  this.openNativeEditForm(FORMS.visit, id);
}
export function openIntelDetail(row) {
  var id = this.getRowId(row);
  if (!id) return;
  this.openNativeDetailForm(FORMS.intel, id);
}
export function editIntel(row) {
  var id = this.getRowId(row);
  if (!id) return;
  this.openNativeEditForm(FORMS.intel, id);
}
export function openContact(row) {
  var id = this.getAssociationId(this.rawAssociation(row, FIELDS.visit.contact));
  if (!id) return;
  this.utils.router.push(FORMS.contactDetail, {
    contactId: id
  }, false);
}
export function openRelationDetail(row, fieldId, formUuid, paramName) {
  var id = this.getAssociationId(this.rawAssociation(row, fieldId));
  if (!id) return;
  var params = {};
  params[paramName] = id;
  this.utils.router.push(formUuid, params, false);
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
  })}>{text || '-'}</span>;
}
export function renderButton(label, type, onClick) {
  var primary = type === 'primary';
  var edit = type === 'edit';
  return <button onClick={e => {
    if (onClick) onClick(e);
  }} style={Object.assign({}, styles.button, primary ? styles.buttonPrimary : edit ? styles.buttonEdit : styles.buttonDefault)}>{label}</button>;
}
export function renderMiniIcon(name, color, size) {
  var common = {
    width: size || 16,
    height: size || 16,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color || '#667085',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    style: {
      flexShrink: 0
    }
  };
  if (name === 'arrowLeft') return <svg {...common}><path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path></svg>;
  if (name === 'edit') return <svg {...common}><path d="M12 20h9"></path><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z"></path></svg>;
  return null;
}
export function renderBack(isMobile) {
  return <div style={isMobile ? styles.backRowMobile : styles.backRow}>
      <button style={styles.backLink} onClick={e => {
      this.goBack();
    }}>
        {this.renderMiniIcon('arrowLeft', '#667085', 16)}
        <span>返回拜访记录</span>
      </button>
    </div>;
}
export function renderHero(row, isMobile) {
  var method = this.getValue(row, FIELDS.visit.method);
  var people = this.getValue(row, FIELDS.visit.people);
  var recorder = this.getValue(row, FIELDS.visit.recorder);
  var participant = people !== '-' ? people : recorder;
  return <div style={isMobile ? styles.heroMobile : styles.hero}>
      <div style={isMobile ? styles.heroTopMobile : styles.heroTop}>
        <div style={styles.titleWrap}>
          <div style={styles.titleLine}>
            {this.renderBadge(method, this.methodTone(method))}
            <h1 style={styles.title}>{this.getVisitTitle(row)}</h1>
          </div>
          <div style={styles.metaLine}>
            <span>{this.formatDate(this.getVisitTime(row))}</span>
            <span>{this.getValue(row, FIELDS.visit.place)}</span>
            <span>我方：{participant}</span>
          </div>
        </div>
        <div style={styles.heroRight}>
          <div style={styles.serial}>{this.getValue(row, FIELDS.visit.serial)} · 记录人：{recorder}</div>
          <div style={styles.actions}>
            {this.renderButton(<span style={styles.buttonInner}>{this.renderMiniIcon('edit', '#344054', 14)}<span>编辑</span></span>, 'edit', e => {
            this.editVisit();
          })}
          </div>
        </div>
      </div>
      <div style={isMobile ? styles.summaryGridMobile : styles.summaryGrid}>
        {this.renderRelationCard('主联系人', this.getAssociationText(row, FIELDS.visit.contact), 'primary', e => {
        this.openContact(row);
      })}
        {this.renderRelationCard('关联单位', this.getAssociationText(row, FIELDS.visit.unit), 'default', e => {
        this.openRelationDetail(row, FIELDS.visit.unit, FORMS.unitDetail, 'unitId');
      })}
        {this.renderRelationCard('关联项目', this.getAssociationText(row, FIELDS.visit.project), 'purple', e => {
        this.openRelationDetail(row, FIELDS.visit.project, FORMS.projectDetail, 'projectId');
      })}
        {this.renderRelationCard('计划跟进', this.formatDate(this.rawValue(row, FIELDS.visit.nextDate)), 'success', null)}
      </div>
    </div>;
}
export function renderRelationCard(label, value, tone, onClick) {
  var color = tone === 'primary' ? styles.summaryBlue : tone === 'purple' ? styles.summaryPurple : tone === 'success' ? styles.summaryGreen : {};
  var clickable = value !== '-' && onClick;
  return <div onClick={e => {
    if (clickable) onClick(e);
  }} style={Object.assign({}, styles.summaryCard, color, clickable ? styles.clickable : {})}>
      <div style={styles.summaryLabel}>{label}</div>
      <div style={styles.summaryValue}>{value !== '-' ? value + (clickable ? ' ›' : '') : '-'}</div>
    </div>;
}
export function renderSection(title, children, secure) {
  return <div style={styles.section}>
      <div style={styles.sectionHead}>
        <h3 style={styles.sectionTitle}>{title}</h3>
        {secure && <span style={styles.secureBadge}>授权可见</span>}
      </div>
      {children}
    </div>;
}
export function renderTextBlock(text, tone) {
  var style = tone === 'blue' ? styles.textBlockBlue : tone === 'amber' ? styles.textBlockAmber : styles.textBlock;
  return <div style={style}>{text && text !== '-' ? text : '暂无记录'}</div>;
}
export function renderAttachments(row) {
  var files = this.getAttachmentItems(row);
  if (!files.length) return null;
  return this.renderSection('附件', <div style={styles.attachmentList}>
      {files.map((file, index) => <div key={index} style={styles.attachmentItem}>
          {file.name || file.fileName || file.title || '附件 ' + (index + 1)}
        </div>)}
    </div>, false);
}
export function renderDetailBody(row) {
  var nextDate = this.formatDate(this.rawValue(row, FIELDS.visit.nextDate));
  var auth = this.getValue(row, FIELDS.visit.auth);
  return <div style={styles.panel}>
      {this.renderSection('交流内容', this.renderTextBlock(this.getValue(row, FIELDS.visit.content), 'default'), false)}
      {this.renderSection('后续动作', <div style={styles.nextBox}>
          <div style={styles.nextText}>{this.getValue(row, FIELDS.visit.nextAction) !== '-' ? this.getValue(row, FIELDS.visit.nextAction) : '暂无后续动作'}</div>
          {nextDate !== '-' && <div style={styles.nextDate}>计划跟进日期：{nextDate}</div>}
        </div>, false)}
      {auth !== '-' && this.renderSection('授权查看人', this.renderTextBlock(auth, 'default'), true)}
    </div>;
}
export function setActiveTab(key) {
  _customState.activeTab = key;
  this.forceUpdate();
}
export function renderTabs() {
  var tabs = [{
    key: 'basic',
    label: '基本信息'
  }, {
    key: 'attachment',
    label: '附件资料'
  }, {
    key: 'intel',
    label: '市场线索'
  }];
  return <div style={styles.tabs}>
      {tabs.map(tab => <button key={tab.key} style={Object.assign({}, styles.tab, _customState.activeTab === tab.key ? styles.tabActive : {})} onClick={e => {
      this.setActiveTab(tab.key);
    }}>{tab.label}</button>)}
    </div>;
}
export function renderAttachmentTab(row) {
  var body = this.renderAttachments(row);
  return <div style={styles.panel}>
      {body || this.renderEmpty('暂无附件资料')}
    </div>;
}
export function renderIntelCard(row) {
  var status = this.getValue(row, FIELDS.intel.status);
  var importance = this.getValue(row, FIELDS.intel.importance);
  var validUntil = this.formatDate(this.rawValue(row, FIELDS.intel.validUntil));
  var remindDate = this.formatDate(this.rawValue(row, FIELDS.intel.remindDate));
  var project = this.getAssociationText(row, FIELDS.intel.project);
  var projectText = project;
  var handlers = this.getValue(row, FIELDS.intel.handlers);
  var watchers = this.getValue(row, FIELDS.intel.watchers);
  var content = this.getValue(row, FIELDS.intel.content);
  var visit = this.getVisit();
  var sourceContent = visit ? this.getValue(visit, FIELDS.visit.content) : '-';
  var contentText = content !== '-' ? content : sourceContent !== '-' ? '来源交流摘要：' + sourceContent : '暂无线索内容';
  var expired = this.isIntelOverdue(row);
  var remindDue = this.isIntelReminderDue(row);
  return <div key={this.getRowId(row)} style={styles.intelCard}>
      <div style={styles.intelCardHead}>
        <div style={styles.intelCardTitle} onClick={e => {
        this.openIntelDetail(row);
      }}>{this.getValue(row, FIELDS.intel.title)}</div>
        <div style={styles.intelBadges}>
          {row.__relationSource && this.renderBadge(row.__relationSource, 'default')}
          {expired && this.renderBadge('已过期', 'danger')}
          {!expired && remindDue && this.renderBadge('待提醒', 'warning')}
          {this.renderBadge(status, this.getIntelTone(row))}
          {importance !== '-' && this.renderBadge(importance, importance === '高' ? 'danger' : importance === '低' ? 'default' : 'warning')}
        </div>
      </div>
      <div style={styles.intelMetaGrid}>
        <div style={styles.intelMetaItem}><span>线索类型</span><strong>{this.getValue(row, FIELDS.intel.category)}</strong></div>
        <div style={styles.intelMetaItem}><span>主关联项目</span><strong>{projectText !== '-' ? projectText : '未关联'}</strong></div>
        <div style={styles.intelMetaItem}><span>预计时间</span><strong>{this.getValue(row, FIELDS.intel.expectedTime)}</strong></div>
        <div style={styles.intelMetaItem}><span>有效截止</span><strong>{validUntil}</strong></div>
        <div style={styles.intelMetaItem}><span>提醒</span><strong>{remindDate}</strong></div>
        <div style={styles.intelMetaItem}><span>线索负责人</span><strong>{this.getValue(row, FIELDS.intel.owner)}</strong></div>
        <div style={styles.intelMetaItem}><span>跟进经办人</span><strong>{handlers !== '-' ? handlers : '未指定'}</strong></div>
        <div style={styles.intelMetaItem}><span>关注人 / 必看人</span><strong>{watchers !== '-' ? watchers : '未指定'}</strong></div>
      </div>
      <div style={styles.intelContent}>{contentText}</div>
      {this.getValue(row, FIELDS.intel.nextAction) !== '-' && <div style={styles.intelNext}>下一步：{this.getValue(row, FIELDS.intel.nextAction)}</div>}
      <div style={styles.intelActions}>
        {this.renderButton('查看', 'default', e => {
        this.openIntelDetail(row);
      })}
        {this.renderButton('编辑', 'edit', e => {
        this.editIntel(row);
      })}
      </div>
    </div>;
}
export function renderIntelCategoryChoice(label) {
  var active = _customState.intelDraft.category === label;
  return <button style={Object.assign({}, styles.categoryChoice, active ? styles.categoryChoiceActive : {})} onClick={e => {
      this.setIntelCategory(label);
    }}>{label}</button>;
}
export function renderIntelImportanceChoice(label) {
  var active = _customState.intelDraft.importance === label;
  return <button style={Object.assign({}, styles.categoryChoice, active ? styles.categoryChoiceActive : {})} onClick={e => {
      this.setIntelImportance(label);
    }}>{label}</button>;
}
export function renderIntelDrawer(row) {
  return null;
}
export function renderIntelTab(row) {
  var intel = this.getRelatedIntel(row);
  return <div style={styles.panel}>
      <div style={styles.intelHead}>
        <div>
          <h3 style={styles.sectionTitle}>市场线索（{intel.length}条）</h3>
          <div style={styles.intelHeadSub}>展示本次拜访生成的市场线索，以及拜访记录已关联的市场线索</div>
        </div>
        {this.renderButton(_customState.intelSaving ? '生成中...' : '+ 生成市场线索', 'primary', e => {
          this.openIntelDrawer();
        })}
      </div>
      <div style={styles.intelList}>
        {intel.length ? intel.map(item => this.renderIntelCard(item)) : this.renderEmpty('暂无市场线索')}
      </div>
      {this.renderIntelDrawer(row)}
    </div>;
}
export function renderTabContent(row) {
  if (_customState.activeTab === 'attachment') return this.renderAttachmentTab(row);
  if (_customState.activeTab === 'intel') return this.renderIntelTab(row);
  return this.renderDetailBody(row);
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
    boxSizing: 'border-box',
    padding: '0 0 36px'
  },
  shell: {
    maxWidth: '1088px',
    margin: '0 auto',
    padding: '12px 0 0',
    boxSizing: 'border-box'
  },
  shellMobile: {
    padding: '12px 12px 24px',
    boxSizing: 'border-box'
  },
  backRow: {
    minHeight: '26px',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '12px'
  },
  backRowMobile: {
    minHeight: '24px',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px'
  },
  backLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    border: 'none',
    background: 'transparent',
    color: '#667085',
    fontSize: '14px',
    lineHeight: '20px',
    padding: '0',
    height: '24px',
    cursor: 'pointer',
    width: 'auto'
  },
  hero: {
    background: '#FFFFFF',
    border: '1px solid #EAECF0',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 8px 22px rgba(16,24,40,0.04)',
    boxSizing: 'border-box',
    marginBottom: '14px'
  },
  heroMobile: {
    background: '#FFFFFF',
    border: '1px solid #EAECF0',
    borderRadius: '10px',
    padding: '16px',
    boxShadow: '0 8px 22px rgba(16,24,40,0.04)',
    boxSizing: 'border-box',
    marginBottom: '12px'
  },
  heroTop: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '18px',
    alignItems: 'flex-start'
  },
  heroTopMobile: {
    display: 'grid',
    gap: '12px'
  },
  titleWrap: {
    minWidth: 0,
    flex: 1
  },
  titleLine: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    flexWrap: 'wrap'
  },
  title: {
    fontSize: '22px',
    lineHeight: '30px',
    fontWeight: 900,
    color: '#101828',
    margin: 0
  },
  metaLine: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    flexWrap: 'wrap',
    marginTop: '10px',
    color: '#667085',
    fontSize: '14px',
    lineHeight: '20px'
  },
  heroRight: {
    display: 'grid',
    justifyItems: 'end',
    gap: '10px',
    flexShrink: 0
  },
  serial: {
    fontSize: '12px',
    lineHeight: '18px',
    color: '#98A2B3'
  },
  actions: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    justifyContent: 'flex-end'
  },
  button: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '36px',
    borderRadius: '8px',
    padding: '0 14px',
    fontSize: '14px',
    fontWeight: 700,
    cursor: 'pointer',
    lineHeight: '20px',
    boxSizing: 'border-box'
  },
  buttonInner: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px'
  },
  buttonPrimary: {
    border: '1px solid #155EEF',
    background: '#155EEF',
    color: '#FFFFFF'
  },
  buttonDefault: {
    border: '1px solid #D0D5DD',
    background: '#FFFFFF',
    color: '#344054'
  },
  buttonEdit: {
    border: '1px solid #D0D5DD',
    background: '#FFFFFF',
    color: '#344054',
    boxShadow: '0 1px 2px rgba(16,24,40,0.04)'
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    minHeight: '24px',
    padding: '0 10px',
    borderRadius: '999px',
    fontSize: '12px',
    fontWeight: 700,
    boxSizing: 'border-box',
    whiteSpace: 'nowrap'
  },
  summaryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
    gap: '12px',
    marginTop: '20px'
  },
  summaryGridMobile: {
    display: 'grid',
    gap: '10px',
    marginTop: '14px'
  },
  summaryCard: {
    minHeight: '76px',
    borderRadius: '8px',
    background: '#F8FAFC',
    padding: '12px',
    boxSizing: 'border-box',
    border: '1px solid #EEF2F6'
  },
  summaryBlue: {
    background: '#EFF6FF',
    border: '1px solid #D6E8FF'
  },
  summaryPurple: {
    background: '#F4EBFF',
    border: '1px solid #E9D7FE'
  },
  summaryGreen: {
    background: '#ECFDF3',
    border: '1px solid #ABEFC6'
  },
  clickable: {
    cursor: 'pointer'
  },
  summaryLabel: {
    fontSize: '12px',
    color: '#667085',
    marginBottom: '8px'
  },
  summaryValue: {
    fontSize: '14px',
    lineHeight: '20px',
    color: '#101828',
    fontWeight: 800,
    wordBreak: 'break-word'
  },
  panel: {
    background: '#FFFFFF',
    border: '1px solid #EAECF0',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 8px 22px rgba(16,24,40,0.04)',
    boxSizing: 'border-box'
  },
  tabs: {
    display: 'flex',
    gap: '8px',
    margin: '0 0 14px',
    flexWrap: 'wrap'
  },
  tab: {
    height: '36px',
    borderRadius: '8px',
    border: '1px solid #D0D5DD',
    background: '#FFFFFF',
    color: '#344054',
    padding: '0 14px',
    fontSize: '14px',
    fontWeight: 700,
    cursor: 'pointer',
    boxSizing: 'border-box'
  },
  tabActive: {
    background: '#EAF2FF',
    color: '#155EEF',
    borderColor: '#B9D6FF'
  },
  intelHead: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: '12px',
    marginBottom: '14px',
    flexWrap: 'wrap'
  },
  intelHeadSub: {
    color: '#667085',
    fontSize: '12px',
    lineHeight: '18px',
    marginTop: '4px'
  },
  intelList: {
    display: 'grid',
    gap: '12px'
  },
  intelCard: {
    border: '1px solid #EEF2F6',
    background: '#FCFCFD',
    borderRadius: '8px',
    padding: '14px',
    boxSizing: 'border-box'
  },
  intelCardHead: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: '12px',
    marginBottom: '12px'
  },
  intelCardTitle: {
    color: '#101828',
    fontSize: '15px',
    lineHeight: '22px',
    fontWeight: 900,
    wordBreak: 'break-word'
  },
  intelBadges: {
    display: 'flex',
    gap: '6px',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    flexShrink: 0
  },
  intelMetaGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: '8px',
    marginBottom: '10px'
  },
  intelMetaItem: {
    minHeight: '48px',
    borderRadius: '8px',
    background: '#FFFFFF',
    border: '1px solid #F2F4F7',
    padding: '8px 10px',
    boxSizing: 'border-box',
    display: 'grid',
    gap: '3px'
  },
  intelContent: {
    color: '#344054',
    fontSize: '14px',
    lineHeight: '22px',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word'
  },
  intelNext: {
    color: '#155EEF',
    fontSize: '13px',
    lineHeight: '20px',
    marginTop: '8px'
  },
  intelActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '8px',
    marginTop: '12px',
    flexWrap: 'wrap'
  },
  drawerMask: {
    position: 'fixed',
    inset: 0,
    zIndex: 9999,
    background: 'rgba(16,24,40,0.48)',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'stretch'
  },
  drawer: {
    width: '520px',
    maxWidth: '100%',
    background: '#FFFFFF',
    padding: '20px',
    boxSizing: 'border-box',
    overflowY: 'auto',
    boxShadow: '-18px 0 48px rgba(16,24,40,0.16)'
  },
  drawerMobile: {
    width: '100%',
    background: '#FFFFFF',
    padding: '16px',
    boxSizing: 'border-box',
    overflowY: 'auto'
  },
  drawerHead: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: '12px',
    marginBottom: '16px'
  },
  drawerTitle: {
    color: '#101828',
    fontSize: '18px',
    lineHeight: '26px',
    fontWeight: 900
  },
  drawerSub: {
    color: '#667085',
    fontSize: '12px',
    lineHeight: '18px',
    marginTop: '3px'
  },
  drawerClose: {
    width: '32px',
    height: '32px',
    borderRadius: '8px',
    border: '1px solid #EAECF0',
    background: '#FFFFFF',
    color: '#667085',
    fontSize: '20px',
    lineHeight: '28px',
    cursor: 'pointer'
  },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px'
  },
  formGridMobile: {
    display: 'grid',
    gap: '12px'
  },
  field: {
    display: 'grid',
    gap: '6px',
    minWidth: 0
  },
  fieldWide: {
    display: 'grid',
    gap: '6px',
    minWidth: 0,
    gridColumn: '1 / -1'
  },
  fieldLabel: {
    color: '#667085',
    fontSize: '12px',
    lineHeight: '18px',
    fontWeight: 700
  },
  input: {
    width: '100%',
    height: '38px',
    borderRadius: '8px',
    border: '1px solid #D0D5DD',
    background: '#FFFFFF',
    color: '#344054',
    padding: '0 10px',
    fontSize: '14px',
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'inherit'
  },
  select: {
    width: '100%',
    height: '38px',
    borderRadius: '8px',
    border: '1px solid #D0D5DD',
    background: '#FFFFFF',
    color: '#344054',
    padding: '0 10px',
    fontSize: '14px',
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'inherit'
  },
  categoryRow: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
  },
  categoryChoice: {
    minHeight: '32px',
    borderRadius: '8px',
    border: '1px solid #D0D5DD',
    background: '#FFFFFF',
    color: '#344054',
    padding: '0 10px',
    fontSize: '13px',
    fontWeight: 700,
    cursor: 'pointer',
    boxSizing: 'border-box'
  },
  categoryChoiceActive: {
    background: '#EAF2FF',
    color: '#155EEF',
    borderColor: '#B9D6FF'
  },
  textarea: {
    width: '100%',
    minHeight: '112px',
    borderRadius: '8px',
    border: '1px solid #D0D5DD',
    background: '#FFFFFF',
    color: '#344054',
    padding: '10px',
    fontSize: '14px',
    lineHeight: '22px',
    outline: 'none',
    resize: 'vertical',
    boxSizing: 'border-box',
    fontFamily: 'inherit'
  },
  textareaSmall: {
    width: '100%',
    minHeight: '76px',
    borderRadius: '8px',
    border: '1px solid #D0D5DD',
    background: '#FFFFFF',
    color: '#344054',
    padding: '10px',
    fontSize: '14px',
    lineHeight: '22px',
    outline: 'none',
    resize: 'vertical',
    boxSizing: 'border-box',
    fontFamily: 'inherit'
  },
  drawerActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '8px',
    marginTop: '16px',
    flexWrap: 'wrap'
  },
  section: {
    marginBottom: '20px'
  },
  sectionHead: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '10px'
  },
  sectionTitle: {
    color: '#344054',
    fontSize: '14px',
    lineHeight: '22px',
    fontWeight: 800,
    margin: 0
  },
  secureBadge: {
    height: '22px',
    padding: '0 8px',
    borderRadius: '999px',
    background: '#FFF7E6',
    color: '#B54708',
    fontSize: '12px',
    lineHeight: '22px',
    whiteSpace: 'nowrap'
  },
  textBlock: {
    minHeight: '48px',
    borderRadius: '8px',
    background: '#F8FAFC',
    color: '#344054',
    padding: '14px 16px',
    lineHeight: '22px',
    fontSize: '14px',
    whiteSpace: 'pre-wrap',
    boxSizing: 'border-box'
  },
  textBlockBlue: {
    minHeight: '48px',
    borderRadius: '8px',
    background: '#EFF6FF',
    border: '1px solid #D6E8FF',
    color: '#1849A9',
    padding: '14px 16px',
    lineHeight: '22px',
    fontSize: '14px',
    whiteSpace: 'pre-wrap',
    boxSizing: 'border-box'
  },
  textBlockAmber: {
    minHeight: '48px',
    borderRadius: '8px',
    background: '#FFFAEB',
    border: '1px solid #FEDF89',
    color: '#7A2E0E',
    padding: '14px 16px',
    lineHeight: '22px',
    fontSize: '14px',
    whiteSpace: 'pre-wrap',
    boxSizing: 'border-box'
  },
  nextBox: {
    borderRadius: '8px',
    background: '#EFF6FF',
    border: '1px solid #D6E8FF',
    padding: '14px 16px',
    boxSizing: 'border-box'
  },
  nextText: {
    color: '#1849A9',
    fontSize: '14px',
    lineHeight: '22px',
    whiteSpace: 'pre-wrap'
  },
  nextDate: {
    color: '#155EEF',
    fontSize: '12px',
    lineHeight: '18px',
    marginTop: '6px'
  },
  attachmentList: {
    display: 'grid',
    gap: '8px'
  },
  attachmentItem: {
    border: '1px solid #EEF2F6',
    background: '#FCFCFD',
    borderRadius: '8px',
    padding: '10px 12px',
    color: '#344054',
    fontSize: '13px'
  },
  notice: {
    marginTop: '16px',
    padding: '16px',
    borderRadius: '8px',
    background: '#FFFFFF',
    color: '#667085',
    border: '1px solid #EAECF0'
  },
  error: {
    marginTop: '16px',
    padding: '16px',
    borderRadius: '8px',
    background: '#FEF3F2',
    color: '#B42318',
    border: '1px solid #FECDCA'
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
  var visit = this.getVisit();
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
      <div style={isMobile ? styles.shellMobile : styles.shell}>
        {this.renderBack(isMobile)}
        {_customState.loading && <div style={styles.notice}>正在加载拜访记录详情...</div>}
        {_customState.error && <div style={styles.error}>{_customState.error}</div>}
        {!_customState.loading && !visit && this.renderEmpty('未找到拜访记录，请返回列表重新选择')}
        {!_customState.loading && visit && <div>
          {this.renderHero(visit, isMobile)}
          {this.renderTabs()}
          {this.renderTabContent(visit)}
        </div>}
      </div>
    </div>;
}
