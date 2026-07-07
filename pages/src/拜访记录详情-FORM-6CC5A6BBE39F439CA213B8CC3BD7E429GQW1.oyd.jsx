// 拜访记录详情 - 自定义页面
var APP_TYPE = 'APP_LC7BU43GCVLSI0TH8POE';
var FORMS = {
  visitManage: 'FORM-02C2269B84C44EFFB83ECF629F05AB94I339',
  visitDetail: 'FORM-6CC5A6BBE39F439CA213B8CC3BD7E429GQW1',
  contactDetail: 'FORM-89CA116EA0134CACB77EAA0F87AA7AB8MD1C',
  unitDetail: 'FORM-4A90B63766D14A9798BD0B1DD1D32F9CMOZK',
  projectDetail: 'FORM-3367C1CD6BDB4FE995BCA69ECFF03419Q0A4',
  intelManage: 'FORM-4E927F6C9D1E43EC8226DDB561F31FAC4OF7',
  leadDetail: 'FORM-48EA952D879B4D1D94580C2EA14B7AE43HM9',
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
    hasLead: 'radioField_mq4wodxx',
    leadTable: 'tableField_mq4wodxm',
    leadTableTitle: 'textField_mq4wodxo',
    leadTableImportance: 'selectField_mq50f6hx',
    leadTableCategory: 'selectField_mq4wodxp',
    leadTableExpectedTime: 'textField_mq4wodxr',
    leadTableValidUntil: 'dateField_mq4wodxs',
    leadTableRemindDate: 'dateField_mq4wodxt',
    leadTableContent: 'textareaField_mq4wodxy',
    leadTableNextAction: 'textareaField_mq4wodxz',
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
export function getInlineVisitIntel(row) {
  var items = this.getAssociationItems(this.rawValue(row, FIELDS.visit.leadTable));
  var visitId = this.getRowId(row);
  var list = [];
  items.forEach((item, index) => {
    if (!item || typeof item !== 'object') return;
    var itemData = item.formData || item;
    var title = this.formatValue(itemData[FIELDS.visit.leadTableTitle] || itemData.title || itemData.name);
    var hasAny = title !== '-' || this.formatValue(itemData[FIELDS.visit.leadTableContent]) !== '-';
    if (!hasAny) return;
    var formData = {};
    formData[FIELDS.intel.title] = title !== '-' ? title : '拜访记录内线索';
    formData[FIELDS.intel.category] = itemData[FIELDS.visit.leadTableCategory] || '';
    formData[FIELDS.intel.importance] = itemData[FIELDS.visit.leadTableImportance] || '';
    formData[FIELDS.intel.expectedTime] = itemData[FIELDS.visit.leadTableExpectedTime] || '';
    formData[FIELDS.intel.validUntil] = itemData[FIELDS.visit.leadTableValidUntil] || '';
    formData[FIELDS.intel.remindDate] = itemData[FIELDS.visit.leadTableRemindDate] || '';
    formData[FIELDS.intel.content] = itemData[FIELDS.visit.leadTableContent] || '';
    formData[FIELDS.intel.nextAction] = itemData[FIELDS.visit.leadTableNextAction] || '';
    formData[FIELDS.intel.status] = '待跟进';
    formData[FIELDS.intel.owner] = this.rawValue(row, FIELDS.visit.recorder);
    formData[FIELDS.intel.handlers] = this.rawValue(row, FIELDS.visit.handlers);
    list.push({
      formInstId: visitId ? visitId + '-inline-' + index : 'inline-' + index,
      formData: formData,
      __inlineVisitIntel: true,
      __relationSource: '由本次拜访生成'
    });
  });
  return list;
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
    copied.__relationSource = fromVisit ? '由本次拜访生成' : '由本次拜访关联';
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
      __relationSource: '由本次拜访关联'
    });
  });
  if (!list.length) {
    list = this.getInlineVisitIntel(row);
  }
  list.sort((a, b) => {
    var ad = Number(this.rawValue(a, FIELDS.intel.remindDate)) || Number(this.rawValue(a, FIELDS.intel.validUntil)) || Number(this.rawValue(a, FIELDS.intel.recordTime)) || 0;
    var bd = Number(this.rawValue(b, FIELDS.intel.remindDate)) || Number(this.rawValue(b, FIELDS.intel.validUntil)) || Number(this.rawValue(b, FIELDS.intel.recordTime)) || 0;
    return bd - ad;
  });
  return list;
}
export function canOpenIntel(row) {
  return !!row && !row.__inlineVisitIntel && !!this.getRowId(row);
}
export function getPrimaryIntelAction(row) {
  var list = this.getRelatedIntel(row);
  if (!list.length) {
    return {
      label: '生成线索',
      action: 'create'
    };
  }
  if (list.length === 1 && this.canOpenIntel(list[0])) {
    return {
      label: '查看线索',
      action: 'view',
      row: list[0]
    };
  }
  if (list.length === 1) {
    return {
      label: '生成线索',
      action: 'create'
    };
  }
  return {
    label: '新增线索',
    action: 'create'
  };
}
export function getLeadSummaryStatus(row) {
  var list = this.getRelatedIntel(row);
  if (!list.length) {
    return {
      label: '未生成线索',
      tone: 'default'
    };
  }
  var hasLinked = list.some(item => item && item.__relationSource === '由本次拜访关联');
  if (hasLinked) {
    return {
      label: '已关联线索',
      tone: 'success'
    };
  }
  return {
    label: '已生成线索',
    tone: 'primary'
  };
}
export function runPrimaryIntelAction(row) {
  var action = this.getPrimaryIntelAction(row);
  if (action.action === 'view' && action.row) {
    this.openIntelDetail(action.row);
    return;
  }
  this.openIntelNativeSubmission();
}
export function openAllIntel(row) {
  var params = {};
  var visitId = this.getRowId(row);
  if (visitId) params.visitId = visitId;
  if (visitId) params.sourceVisitId = visitId;
  this.utils.router.push(FORMS.intelManage, params, false);
}
export function getRowCreatedTime(row) {
  return row && (row.gmtCreate || row.createTime || row.createdAt || row.gmtCreated || row.formCreateTime) || this.rawValue(row, FIELDS.visit.recordTime);
}
export function getRowModifiedTime(row) {
  return row && (row.gmtModified || row.modifiedTime || row.updateTime || row.updatedAt || row.formModifyTime) || '';
}
export function formatDateTime(value) {
  if (!value || value === '-') return '-';
  var num = Number(value);
  if (!num) return '-';
  var d = new Date(num);
  var month = d.getMonth() + 1;
  var day = d.getDate();
  var hour = d.getHours();
  var minute = d.getMinutes();
  var monthText = month < 10 ? '0' + month : '' + month;
  var dayText = day < 10 ? '0' + day : '' + day;
  var hourText = hour < 10 ? '0' + hour : '' + hour;
  var minuteText = minute < 10 ? '0' + minute : '' + minute;
  return d.getFullYear() + '-' + monthText + '-' + dayText + ' ' + hourText + ':' + minuteText;
}
export function getDisplayName(item) {
  var parsed = this.parseMaybeJson(item);
  if (parsed === undefined || parsed === null || parsed === '') return '';
  if (typeof parsed === 'string') return parsed;
  if (typeof parsed !== 'object') return String(parsed);
  return parsed.name || parsed.title || parsed.label || parsed.text || parsed.displayName || parsed.userName || parsed.nickName || '';
}
export function getPersonItems(value) {
  var parsed = this.parseMaybeJson(value);
  var list = Array.isArray(parsed) ? parsed : parsed ? [parsed] : [];
  return list.map(item => {
    var name = this.getDisplayName(item);
    return name ? { name: name } : null;
  }).filter(item => item);
}
export function getInitial(name) {
  if (!name) return '-';
  return String(name).trim().charAt(0) || '-';
}
export function getAttachmentUrl(file) {
  if (!file || typeof file !== 'object') return '';
  return file.url || file.downloadUrl || file.previewUrl || file.fileUrl || file.ossUrl || '';
}
export function getAttachmentName(file, index) {
  if (!file || typeof file !== 'object') return '附件 ' + (index + 1);
  return file.name || file.fileName || file.title || file.filename || '附件 ' + (index + 1);
}
export function getAttachmentExt(name) {
  var text = String(name || '');
  var dot = text.lastIndexOf('.');
  if (dot < 0) return '';
  return text.slice(dot + 1).toUpperCase();
}
export function formatFileSize(file) {
  if (!file || typeof file !== 'object') return '';
  var size = Number(file.size || file.fileSize || file.length || 0);
  if (!size) return '';
  if (size < 1024) return size + ' B';
  if (size < 1024 * 1024) return Math.round(size / 1024) + ' KB';
  return Math.round(size / 1024 / 1024 * 10) / 10 + ' MB';
}
export function isImageAttachment(file, index) {
  var name = this.getAttachmentName(file, index).toLowerCase();
  var type = String(file && (file.type || file.mimeType || file.contentType) || '').toLowerCase();
  return type.indexOf('image') >= 0 || /\.(png|jpg|jpeg|gif|webp|bmp)$/i.test(name);
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
export function buildPrefilledIntelParams(row) {
  var params = {};
  params.sourceType = '拜访获得';
  params.leadSourceType = '拜访获得';
  params.entryType = '拜访生成';
  params.leadEntryType = '拜访生成';
  var visitId = this.getRowId(row);
  if (visitId) {
    params.visitId = visitId;
    params.sourceVisitId = visitId;
  }
  var visitNo = this.getValue(row, FIELDS.visit.serial);
  if (visitNo && visitNo !== '-') params.visitNo = visitNo;
  var title = this.getVisitTitle(row);
  if (title && title !== '-') {
    params.visitTitle = title;
    params.leadTitle = title;
  }
  var content = this.getValue(row, FIELDS.visit.content);
  if (content && content !== '-') {
    params.visitContent = content;
    params.leadContent = content;
  }
  var nextAction = this.getValue(row, FIELDS.visit.nextAction);
  if (nextAction && nextAction !== '-') {
    params.nextAction = nextAction;
    params.leadNextAction = nextAction;
  }
  var nextDate = this.rawValue(row, FIELDS.visit.nextDate);
  if (nextDate) params.leadRemindDate = nextDate;
  var visitTime = this.rawValue(row, FIELDS.visit.time);
  if (visitTime) params.visitTime = visitTime;
  var method = this.getValue(row, FIELDS.visit.method);
  if (method && method !== '-') params.visitMethod = method;
  var recorder = this.getValue(row, FIELDS.visit.recorder);
  if (recorder && recorder !== '-') params.recorder = recorder;
  var handlers = this.getValue(row, FIELDS.visit.handlers);
  if (handlers && handlers !== '-') params.leadHandlers = handlers;
  var watchers = this.getValue(row, FIELDS.visit.watchers);
  if (watchers && watchers !== '-') params.leadWatchers = watchers;
  var contactId = this.getAssociationId(this.rawAssociation(row, FIELDS.visit.contact));
  if (contactId) {
    params.contactId = contactId;
    params.contactTitle = this.getAssociationText(row, FIELDS.visit.contact);
  }
  var unitId = this.getAssociationId(this.rawAssociation(row, FIELDS.visit.unit));
  if (unitId) {
    params.unitId = unitId;
    params.unitTitle = this.getAssociationText(row, FIELDS.visit.unit);
  }
  var projectId = this.getAssociationId(this.rawAssociation(row, FIELDS.visit.project));
  if (projectId) {
    params.projectId = projectId;
    params.projectTitle = this.getAssociationText(row, FIELDS.visit.project);
  }
  return params;
}
export function openIntelNativeSubmission() {
  var row = this.getVisit();
  if (!row) return;
  this.utils.toast({
    title: '将打开市场线索原生新增页',
    type: 'notice'
  });
  this.openSubmissionForm(FORMS.intel, this.buildPrefilledIntelParams(row));
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
export function editVisit() {
  var row = this.getVisit();
  var id = this.getRowId(row);
  if (!id) return;
  this.openNativeEditForm(FORMS.visit, id);
}
export function openIntelDetail(row) {
  var id = this.getRowId(row);
  if (!id) return;
  this.utils.router.push(FORMS.leadDetail, {
    leadId: id
  }, false);
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
export function renderEmpty(text) {
  return <div style={styles.empty}>{text}</div>;
}
export function renderDetailMiniIcon(name, color, size) {
  var common = {
    width: size || 18,
    height: size || 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color || '#475467',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    style: {
      flexShrink: 0
    }
  };
  if (name === 'arrowLeft') return <svg {...common}><path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path></svg>;
  if (name === 'edit') return <svg {...common}><path d="M12 20h9"></path><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z"></path></svg>;
  if (name === 'target') return <svg {...common}><circle cx="12" cy="12" r="8"></circle><circle cx="12" cy="12" r="3"></circle><path d="M12 2v3"></path><path d="M12 19v3"></path><path d="M2 12h3"></path><path d="M19 12h3"></path></svg>;
  if (name === 'plus') return <svg {...common}><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>;
  if (name === 'user') return <svg {...common}><path d="M20 21a8 8 0 0 0-16 0"></path><circle cx="12" cy="7" r="4"></circle></svg>;
  if (name === 'building') return <svg {...common}><path d="M3 21h18"></path><path d="M5 21V7l7-4 7 4v14"></path><path d="M9 21v-6h6v6"></path><path d="M9 9h.01"></path><path d="M15 9h.01"></path><path d="M9 12h.01"></path><path d="M15 12h.01"></path></svg>;
  if (name === 'folder') return <svg {...common}><path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></path></svg>;
  if (name === 'calendar') return <svg {...common}><path d="M8 2v4"></path><path d="M16 2v4"></path><rect x="3" y="4" width="18" height="18" rx="2"></rect><path d="M3 10h18"></path></svg>;
  if (name === 'location') return <svg {...common}><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
  if (name === 'users') return <svg {...common}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;
  if (name === 'message') return <svg {...common}><path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"></path><path d="M8 9h8"></path><path d="M8 13h5"></path></svg>;
  if (name === 'flag') return <svg {...common}><path d="M4 22V4"></path><path d="M4 4h12l-1 5 1 5H4"></path></svg>;
  if (name === 'clipboard') return <svg {...common}><rect x="4" y="4" width="16" height="18" rx="2"></rect><path d="M9 2h6v4H9z"></path><path d="M9 12h6"></path><path d="M9 16h4"></path></svg>;
  if (name === 'paperclip') return <svg {...common}><path d="M21.44 11.05 12.25 20.24a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>;
  if (name === 'download') return <svg {...common}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="M7 10l5 5 5-5"></path><path d="M12 15V3"></path></svg>;
  if (name === 'chevronRight') return <svg {...common}><path d="m9 18 6-6-6-6"></path></svg>;
  if (name === 'check') return <svg {...common}><path d="M20 6 9 17l-5-5"></path></svg>;
  return null;
}
export function renderDetailBadge(text, toneName) {
  var tone = toneName || 'default';
  var map = {
    primary: { bg: '#EFF6FF', color: '#2563EB', border: '#BFDBFE' },
    success: { bg: '#DCFCE7', color: '#16A34A', border: '#BBF7D0' },
    warning: { bg: '#FFF7ED', color: '#F59E0B', border: '#FED7AA' },
    danger: { bg: '#FEF2F2', color: '#EF4444', border: '#FECACA' },
    teal: { bg: '#ECFEFF', color: '#0891B2', border: '#A5F3FC' },
    purple: { bg: '#F5F3FF', color: '#7C3AED', border: '#DDD6FE' },
    default: { bg: '#F1F5F9', color: '#64748B', border: '#E2E8F0' }
  };
  var c = map[tone] || map.default;
  return <span style={Object.assign({}, detailStyles.badge, {
    background: c.bg,
    color: c.color,
    border: '1px solid ' + c.border
  })}>{text || '暂无'}</span>;
}
export function renderDetailButton(label, type, iconName, onClick) {
  var primary = type === 'primary';
  var color = primary ? '#FFFFFF' : '#334155';
  return <button type="button" onClick={e => {
    if (onClick) onClick(e);
  }} style={Object.assign({}, detailStyles.button, primary ? detailStyles.buttonPrimary : detailStyles.buttonDefault)}>
      <span style={detailStyles.buttonInner}>
        {iconName && this.renderDetailMiniIcon(iconName, color, 16)}
        <span>{label}</span>
      </span>
    </button>;
}
export function getImportanceTone(value) {
  if (value === '高') return 'danger';
  if (value === '中') return 'warning';
  if (value === '低') return 'default';
  return 'default';
}
export function getStatusTone(value) {
  if (value === '跟进中') return 'success';
  if (value === '待跟进') return 'warning';
  if (value === '已转项目') return 'teal';
  if (value === '已关闭' || value === '已归档') return 'default';
  return this.getIntelTone({ formData: {} });
}
export function getSummaryEmptyText(label) {
  if (label === '关联单位') return '暂未关联单位';
  if (label === '关联项目') return '暂未关联项目';
  if (label === '主联系人') return '暂未关联联系人';
  return '暂无';
}
export function renderMemoText(text, emptyText) {
  if (!text || text === '-') return <div style={detailStyles.emptyInline}>{emptyText || '暂无'}</div>;
  var lines = String(text).split('\n').map(item => item.trim()).filter(item => item);
  if (!lines.length) return <div style={detailStyles.emptyInline}>{emptyText || '暂无'}</div>;
  return <div style={detailStyles.memoList}>
      {lines.map((line, index) => <div key={'memo-' + index} style={detailStyles.memoLine}>{line}</div>)}
    </div>;
}
export function renderHeroDetail(row, isMobile) {
  var method = this.getValue(row, FIELDS.visit.method);
  var people = this.getValue(row, FIELDS.visit.people);
  var recorder = this.getValue(row, FIELDS.visit.recorder);
  var participant = people !== '-' ? people : recorder;
  var primaryAction = this.getPrimaryIntelAction(row);
  return <div style={detailStyles.hero}>
      <div style={detailStyles.backLine}>
        <button type="button" style={detailStyles.backLink} onClick={e => {
          this.goBack();
        }}>
          {this.renderDetailMiniIcon('arrowLeft', '#344054', 17)}
          <span>返回拜访记录</span>
        </button>
      </div>
      <div style={isMobile ? detailStyles.heroMainMobile : detailStyles.heroMain}>
        <div style={detailStyles.heroInfo}>
          <div style={detailStyles.titleLine}>
            {this.renderDetailBadge(method !== '-' ? method : '暂无方式', this.methodTone(method))}
            <h1 style={detailStyles.title}>{this.getVisitTitle(row)}</h1>
          </div>
          <div style={detailStyles.metaLine}>
            <span style={detailStyles.metaItem}>{this.renderDetailMiniIcon('calendar', '#64748B', 16)}{this.formatDate(this.getVisitTime(row))}</span>
            <span style={detailStyles.metaItem}>{this.renderDetailMiniIcon('location', '#64748B', 16)}{this.getValue(row, FIELDS.visit.place)}</span>
            <span style={detailStyles.metaItem}>{this.renderDetailMiniIcon('users', '#64748B', 16)}我方：{participant}</span>
          </div>
        </div>
        <div style={detailStyles.actions}>
          {this.renderDetailButton(primaryAction.label, 'primary', primaryAction.action === 'view' ? 'target' : 'plus', e => {
            this.runPrimaryIntelAction(row);
          })}
          {this.renderDetailButton('编辑记录', 'default', 'edit', e => {
            this.editVisit();
          })}
        </div>
      </div>
      <div style={isMobile ? detailStyles.summaryGridMobile : detailStyles.summaryGrid}>
        {this.renderSummaryCard('主联系人', this.getAssociationText(row, FIELDS.visit.contact), 'user', 'blue', e => {
          this.openContact(row);
        })}
        {this.renderSummaryCard('关联单位', this.getAssociationText(row, FIELDS.visit.unit), 'building', 'green', e => {
          this.openRelationDetail(row, FIELDS.visit.unit, FORMS.unitDetail, 'unitId');
        })}
        {this.renderSummaryCard('关联项目', this.getAssociationText(row, FIELDS.visit.project), 'folder', 'purple', e => {
          this.openRelationDetail(row, FIELDS.visit.project, FORMS.projectDetail, 'projectId');
        })}
      </div>
    </div>;
}
export function renderSummaryCard(label, value, iconName, tone, onClick) {
  var filled = value && value !== '-';
  var clickable = filled && !!onClick;
  var emptyText = this.getSummaryEmptyText(label);
  var toneStyle = tone === 'blue' ? detailStyles.summaryBlue : tone === 'green' ? detailStyles.summaryGreen : detailStyles.summaryPurple;
  var iconStyle = tone === 'blue' ? detailStyles.summaryIconBlue : tone === 'green' ? detailStyles.summaryIconGreen : detailStyles.summaryIconPurple;
  return <div style={Object.assign({}, detailStyles.summaryCard, toneStyle, clickable ? detailStyles.clickable : {})} onClick={e => {
      if (clickable) onClick(e);
    }}>
      <div style={iconStyle}>{this.renderDetailMiniIcon(iconName, iconStyle.color, 24)}</div>
      <div style={detailStyles.summaryText}>
        <div style={detailStyles.summaryLabel}>{label}</div>
        <div style={filled ? detailStyles.summaryValue : detailStyles.summaryEmpty}>{filled ? value : emptyText}</div>
      </div>
      {clickable && <div style={detailStyles.summaryArrow}>{this.renderDetailMiniIcon('chevronRight', '#94A3B8', 18)}</div>}
    </div>;
}
export function renderDetailSection(title, iconName, children) {
  return <section style={detailStyles.card}>
      <div style={detailStyles.cardTitle}>
        {this.renderDetailMiniIcon(iconName, '#2563EB', 21)}
        <span>{title}</span>
      </div>
      {children}
    </section>;
}
export function renderContentSection(row) {
  return this.renderDetailSection('交流内容', 'message', this.renderMemoText(this.getValue(row, FIELDS.visit.content), '暂无交流内容'));
}
export function renderNextActionSection(row) {
  var nextAction = this.getValue(row, FIELDS.visit.nextAction);
  var nextDate = this.formatDate(this.rawValue(row, FIELDS.visit.nextDate));
  var handler = this.getValue(row, FIELDS.visit.handlers);
  return this.renderDetailSection('后续动作', 'flag', <div>
      <div style={detailStyles.nextBox}>
        <span style={detailStyles.nextIcon}>{this.renderDetailMiniIcon('check', '#2563EB', 15)}</span>
        <span style={detailStyles.nextText}>{nextAction !== '-' ? nextAction : '暂无后续动作'}</span>
      </div>
      <div style={detailStyles.followMeta}>
        {nextDate !== '-' && <div style={detailStyles.followMetaItem}>{this.renderDetailMiniIcon('calendar', '#64748B', 15)}<span>下次跟进日期</span><strong>{nextDate}</strong></div>}
        {handler !== '-' && <div style={detailStyles.followMetaItem}>{this.renderDetailMiniIcon('user', '#64748B', 15)}<span>跟进经办人</span><strong>{handler}</strong></div>}
      </div>
    </div>);
}
export function renderScheduleSection(row) {
  var leadStatus = this.getLeadSummaryStatus(row);
  var serial = this.getValue(row, FIELDS.visit.serial);
  var created = this.formatDateTime(this.getRowCreatedTime(row));
  var modified = this.formatDateTime(this.getRowModifiedTime(row));
  return this.renderDetailSection('状态摘要', 'clipboard', <div>
      <div style={detailStyles.kvList}>
        <div style={detailStyles.kvRow}>
          <span style={detailStyles.kvLabel}>当前状态</span>
          <span style={detailStyles.kvValue}>{this.renderDetailBadge('已记录', 'primary')}</span>
        </div>
        <div style={detailStyles.kvRow}>
          <span style={detailStyles.kvLabel}>线索状态</span>
          <span style={detailStyles.kvValue}>{this.renderDetailBadge(leadStatus.label, leadStatus.tone)}</span>
        </div>
      </div>
      <div style={detailStyles.recordInfoGroup}>
        <div style={detailStyles.recordInfoTitle}>记录信息</div>
        <div style={detailStyles.recordInfoList}>
          <div style={detailStyles.recordInfoRow}>
            <span style={detailStyles.recordInfoLabel}>记录编号</span>
            <span style={detailStyles.recordNoValue}>{serial !== '-' ? serial : '暂无'}</span>
          </div>
          <div style={detailStyles.recordInfoRow}>
            <span style={detailStyles.recordInfoLabel}>创建时间</span>
            <span style={detailStyles.recordInfoValue}>{created}</span>
          </div>
          <div style={detailStyles.recordInfoRow}>
            <span style={detailStyles.recordInfoLabel}>最后修改</span>
            <span style={detailStyles.recordInfoValue}>{modified}</span>
          </div>
        </div>
      </div>
    </div>);
}
export function renderPeopleGroup(title, people, toneOffset, emptyText) {
  return <div style={detailStyles.peopleGroup}>
      <div style={detailStyles.peopleTitle}>{title}</div>
      {people.length ? <div style={detailStyles.peopleList}>
          {people.map((person, index) => {
          var toneIndex = (index + (toneOffset || 0)) % 4;
          var avatarStyle = toneIndex === 0 ? detailStyles.avatarBlue : toneIndex === 1 ? detailStyles.avatarGreen : toneIndex === 2 ? detailStyles.avatarPurple : detailStyles.avatarSlate;
          return <div key={person.name + index} style={detailStyles.personItem}>
              <span style={Object.assign({}, detailStyles.avatar, avatarStyle)}>{this.getInitial(person.name)}</span>
              <span>{person.name}</span>
            </div>;
        })}
        </div> : <div style={detailStyles.emptyInline}>{emptyText || '暂无'}</div>}
    </div>;
}
export function renderPermissionSection(row) {
  var watchers = this.getPersonItems(this.rawValue(row, FIELDS.visit.watchers));
  var auth = this.getPersonItems(this.rawValue(row, FIELDS.visit.auth));
  return this.renderDetailSection('协作与权限', 'users', <div>
      {this.renderPeopleGroup('关注人 / 必看人', watchers, 0, '暂无关注人')}
      <div style={detailStyles.peopleDivider}></div>
      {this.renderPeopleGroup('授权查看人', auth, 1, '暂无授权查看人')}
    </div>);
}
export function renderIntelMeta(label, value, tone) {
  return <div style={detailStyles.intelMeta}>
      <span>{label}</span>
      <strong style={detailStyles.intelMetaValue}>{tone ? this.renderDetailBadge(value !== '-' ? value : '暂无', tone) : value !== '-' ? value : '暂无'}</strong>
    </div>;
}
export function renderIntelCardDetail(item, compact, index) {
  var status = this.getValue(item, FIELDS.intel.status);
  var importance = this.getValue(item, FIELDS.intel.importance);
  var title = this.getValue(item, FIELDS.intel.title);
  var sourceText = item.__relationSource || '';
  var isLinked = sourceText === '由本次拜访关联';
  return <div key={this.getRowId(item)} style={detailStyles.intelCard}>
      <div style={detailStyles.intelCardTop}>
        {compact && <span style={detailStyles.intelIndex}>{(index || 0) + 1}</span>}
        <div style={detailStyles.intelTitleWrap}>
          <div style={detailStyles.intelTitle}>{title !== '-' ? title : '未命名线索'}</div>
          <div style={detailStyles.intelBadges}>
            {sourceText && this.renderDetailBadge(sourceText, isLinked ? 'warning' : 'default')}
            {status !== '-' && this.renderDetailBadge(status, this.getStatusTone(status))}
          </div>
        </div>
        {this.canOpenIntel(item) ? this.renderDetailButton('查看线索详情', 'default', 'chevronRight', e => {
          this.openIntelDetail(item);
        }) : this.renderDetailButton('生成正式线索', 'default', 'plus', e => {
          this.openIntelNativeSubmission();
        })}
      </div>
      <div style={compact ? detailStyles.intelMetaGridCompact : detailStyles.intelMetaGridDetail}>
        {this.renderIntelMeta('线索类型', this.getValue(item, FIELDS.intel.category))}
        {this.renderIntelMeta('重要程度', importance, this.getImportanceTone(importance))}
        {this.renderIntelMeta('提醒日期', this.formatDate(this.rawValue(item, FIELDS.intel.remindDate)))}
        {this.renderIntelMeta('线索负责人', this.getValue(item, FIELDS.intel.owner))}
        {this.renderIntelMeta('跟进经办人', this.getValue(item, FIELDS.intel.handlers))}
        {!compact && this.renderIntelMeta('线索状态', status, this.getStatusTone(status))}
      </div>
      {isLinked && <div style={detailStyles.intelHint}>本次拜访已归入该线索推进过程，可在线索详情中查看完整时间线。</div>}
      {sourceText && !isLinked && compact && <div style={detailStyles.intelHint}>{sourceText}</div>}
    </div>;
}
export function getIntelStatusCounts(list) {
  var counts = {};
  list.forEach(item => {
    var status = this.getValue(item, FIELDS.intel.status);
    if (!status || status === '-') status = '待跟进';
    counts[status] = (counts[status] || 0) + 1;
  });
  return counts;
}
export function renderIntelSectionDetail(row) {
  var list = this.getRelatedIntel(row);
  if (!list.length) return null;
  var count = list.length;
  var first = list[0];
  var singleLinked = count === 1 && first.__relationSource === '由本次拜访关联';
  var title = count === 1 ? singleLinked ? '已关联线索' : '市场线索信息' : '关联市场线索（' + count + '）';
  var showAll = count >= 4;
  var visible = showAll ? list.slice(0, 3) : list;
  var folded = count - visible.length;
  var counts = this.getIntelStatusCounts(list);
  return this.renderDetailSection(title, 'target', <div>
      {count > 1 && <div style={detailStyles.sectionSub}>本次拜访同时支撑多个市场机会，按线索卡片分别查看和推进。</div>}
      {showAll && <div style={detailStyles.statusPills}>
          {counts['跟进中'] ? this.renderDetailBadge('跟进中 ' + counts['跟进中'], 'success') : null}
          {counts['待跟进'] ? this.renderDetailBadge('待跟进 ' + counts['待跟进'], 'warning') : null}
          {counts['已转项目'] ? this.renderDetailBadge('已转项目 ' + counts['已转项目'], 'teal') : null}
          {counts['已关闭'] ? this.renderDetailBadge('已关闭 ' + counts['已关闭'], 'default') : null}
        </div>}
      {showAll && <div style={detailStyles.sectionToolbar}>
          {this.renderDetailButton('查看全部线索', 'default', 'chevronRight', e => {
            this.openAllIntel(row);
          })}
        </div>}
      <div style={detailStyles.intelListDetail}>{visible.map((item, index) => this.renderIntelCardDetail(item, count > 1, index))}</div>
      {showAll && folded > 0 && <div style={detailStyles.foldedRow} onClick={e => {
        this.openAllIntel(row);
      }}>
          <span>{list[3] ? this.getValue(list[3], FIELDS.intel.title) : '更多线索'}</span>
          <span>另有 {folded} 条线索已折叠显示，可点击“查看全部线索”统一查看。</span>
          {this.renderDetailMiniIcon('chevronRight', '#667085', 18)}
        </div>}
    </div>);
}
export function renderAttachmentCard(file, index, titleOverride, countOverride) {
  var name = titleOverride || this.getAttachmentName(file, index);
  var url = this.getAttachmentUrl(file);
  var ext = countOverride ? '图片' : this.getAttachmentExt(name) || '附件';
  var size = countOverride ? countOverride + ' 张图片' : this.formatFileSize(file);
  var body = <div style={detailStyles.fileCard}>
      <div style={detailStyles.fileIcon}>{this.renderDetailMiniIcon(countOverride ? 'folder' : 'paperclip', '#2563EB', 22)}</div>
      <div style={detailStyles.fileInfo}>
        <div style={detailStyles.fileName}>{name}</div>
        <div style={detailStyles.fileMeta}>{ext}{size ? ' · ' + size : ''}</div>
      </div>
      {url && this.renderDetailMiniIcon('download', '#667085', 18)}
    </div>;
  if (!url) return body;
  return <a key={name + index} href={url} target="_blank" rel="noreferrer" style={detailStyles.fileLink}>{body}</a>;
}
export function renderAttachmentsDetail(row) {
  var files = this.getAttachmentItems(row);
  if (!files.length) {
    return this.renderDetailSection('附件资料', 'paperclip', <div style={detailStyles.emptyInline}>暂无附件资料</div>);
  }
  var images = [];
  var others = [];
  files.forEach((file, index) => {
    if (this.isImageAttachment(file, index)) images.push(file);
    else others.push(file);
  });
  return this.renderDetailSection('附件资料', 'paperclip', <div style={detailStyles.fileGrid}>
      {others.map((file, index) => <div key={'file-' + index}>{this.renderAttachmentCard(file, index)}</div>)}
      {images.length === 1 && <div>{this.renderAttachmentCard(images[0], 0)}</div>}
      {images.length > 1 && <div>{this.renderAttachmentCard(images[0], 0, '现场照片（' + images.length + '）', images.length)}</div>}
    </div>);
}
export function renderDetailLayout(row, isMobile) {
  return <div>
      {this.renderHeroDetail(row, isMobile)}
      <div style={isMobile ? detailStyles.bodyGridMobile : detailStyles.bodyGrid}>
        <main style={detailStyles.leftColumn}>
          {this.renderContentSection(row)}
          {this.renderNextActionSection(row)}
          {this.renderIntelSectionDetail(row)}
          {this.renderAttachmentsDetail(row)}
        </main>
        <aside style={detailStyles.rightColumn}>
          {this.renderScheduleSection(row)}
          {this.renderPermissionSection(row)}
        </aside>
      </div>
    </div>;
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
var detailTokens = {
  pageBg: '#F5F7FB',
  cardBg: '#FFFFFF',
  border: '#E5EAF3',
  textMain: '#0F172A',
  textNormal: '#334155',
  textMuted: '#64748B',
  primary: '#2563EB',
  success: '#16A34A',
  warning: '#F59E0B',
  danger: '#EF4444',
  radiusLg: '18px',
  radiusMd: '14px',
  shadowCard: '0 8px 24px rgba(15, 23, 42, 0.06)'
};
var detailStyles = {
  page: {
    minHeight: '100vh',
    background: detailTokens.pageBg,
    color: detailTokens.textMain,
    fontFamily: '-apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", sans-serif',
    boxSizing: 'border-box',
    padding: '20px 20px 36px'
  },
  shell: {
    maxWidth: '1360px',
    margin: '0 auto',
    boxSizing: 'border-box'
  },
  shellMobile: {
    padding: '0',
    boxSizing: 'border-box'
  },
  hero: {
    background: detailTokens.cardBg,
    border: '1px solid ' + detailTokens.border,
    borderRadius: detailTokens.radiusLg,
    padding: '24px 28px 26px',
    boxShadow: detailTokens.shadowCard,
    boxSizing: 'border-box',
    marginBottom: '18px'
  },
  backLine: {
    marginBottom: '14px'
  },
  backLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    border: 'none',
    background: 'transparent',
    color: detailTokens.textNormal,
    fontSize: '14px',
    fontWeight: 600,
    padding: 0,
    cursor: 'pointer'
  },
  heroMain: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '24px'
  },
  heroMainMobile: {
    display: 'grid',
    gap: '14px'
  },
  heroInfo: {
    minWidth: 0,
    flex: 1
  },
  titleLine: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    flexWrap: 'wrap'
  },
  title: {
    margin: 0,
    color: detailTokens.textMain,
    fontSize: '27px',
    lineHeight: '36px',
    fontWeight: 800,
    letterSpacing: 0,
    wordBreak: 'break-word'
  },
  metaLine: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '18px',
    marginTop: '12px',
    color: detailTokens.textMuted,
    fontSize: '14px',
    lineHeight: '22px'
  },
  metaItem: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px'
  },
  actions: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    flexShrink: 0
  },
  button: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '38px',
    borderRadius: '10px',
    padding: '0 16px',
    fontSize: '14px',
    fontWeight: 700,
    cursor: 'pointer',
    lineHeight: '20px',
    boxSizing: 'border-box',
    outline: 'none'
  },
  buttonInner: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    whiteSpace: 'nowrap'
  },
  buttonPrimary: {
    border: '1px solid ' + detailTokens.primary,
    background: detailTokens.primary,
    color: '#FFFFFF',
    boxShadow: '0 8px 18px rgba(37, 99, 235, 0.20)'
  },
  buttonDefault: {
    border: '1px solid #CBD5E1',
    background: detailTokens.cardBg,
    color: detailTokens.textNormal,
    boxShadow: '0 1px 2px rgba(15, 23, 42, 0.04)'
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    minHeight: '24px',
    padding: '0 9px',
    borderRadius: '8px',
    fontSize: '12px',
    fontWeight: 700,
    boxSizing: 'border-box',
    whiteSpace: 'nowrap'
  },
  summaryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: '22px',
    marginTop: '22px'
  },
  summaryGridMobile: {
    display: 'grid',
    gap: '12px',
    marginTop: '16px'
  },
  summaryCard: {
    minHeight: '88px',
    borderRadius: detailTokens.radiusMd,
    padding: '18px 20px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    border: '1px solid ' + detailTokens.border,
    boxSizing: 'border-box',
    boxShadow: '0 4px 14px rgba(15, 23, 42, 0.035)'
  },
  summaryBlue: {
    background: '#F8FBFF',
    borderColor: '#BFDBFE'
  },
  summaryGreen: {
    background: '#F8FFFC',
    borderColor: '#BAE6D7'
  },
  summaryPurple: {
    background: '#FCFAFF',
    borderColor: '#DDD6FE'
  },
  summaryIconBlue: {
    width: '46px',
    height: '46px',
    borderRadius: '50%',
    background: '#EFF6FF',
    color: detailTokens.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  summaryIconGreen: {
    width: '46px',
    height: '46px',
    borderRadius: '50%',
    background: '#DCFCE7',
    color: detailTokens.success,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  summaryIconPurple: {
    width: '46px',
    height: '46px',
    borderRadius: '50%',
    background: '#F5F3FF',
    color: '#7C3AED',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  clickable: {
    cursor: 'pointer'
  },
  summaryText: {
    minWidth: 0,
    flex: 1
  },
  summaryLabel: {
    fontSize: '13px',
    lineHeight: '20px',
    color: detailTokens.textMuted,
    fontWeight: 600,
    marginBottom: '4px'
  },
  summaryValue: {
    fontSize: '16px',
    lineHeight: '24px',
    color: detailTokens.textMain,
    fontWeight: 800,
    wordBreak: 'break-word'
  },
  summaryEmpty: {
    fontSize: '15px',
    lineHeight: '23px',
    color: detailTokens.textMuted,
    fontWeight: 600,
    wordBreak: 'break-word'
  },
  summaryArrow: {
    flexShrink: 0,
    opacity: 0.8
  },
  bodyGrid: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 2.05fr) minmax(330px, 1fr)',
    gap: '22px',
    alignItems: 'start'
  },
  bodyGridMobile: {
    display: 'grid',
    gap: '14px'
  },
  leftColumn: {
    display: 'grid',
    gap: '16px',
    minWidth: 0
  },
  rightColumn: {
    display: 'grid',
    gap: '16px',
    minWidth: 0
  },
  card: {
    background: detailTokens.cardBg,
    border: '1px solid ' + detailTokens.border,
    borderRadius: detailTokens.radiusLg,
    padding: '20px',
    boxShadow: detailTokens.shadowCard,
    boxSizing: 'border-box'
  },
  cardTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: detailTokens.textMain,
    fontSize: '18px',
    lineHeight: '26px',
    fontWeight: 800,
    marginBottom: '16px'
  },
  contentText: {
    color: detailTokens.textNormal,
    fontSize: '14px',
    lineHeight: '28px',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word'
  },
  memoList: {
    display: 'grid',
    gap: '7px',
    color: detailTokens.textNormal,
    fontSize: '14px',
    lineHeight: '25px',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word'
  },
  memoLine: {
    minHeight: '25px'
  },
  nextBox: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    borderRadius: '12px',
    background: '#F4F8FF',
    border: '1px solid #BFDBFE',
    color: '#1E40AF',
    padding: '14px 16px',
    fontSize: '14px',
    lineHeight: '24px',
    fontWeight: 700,
    boxSizing: 'border-box',
    whiteSpace: 'pre-wrap'
  },
  nextIcon: {
    width: '22px',
    height: '22px',
    borderRadius: '50%',
    background: '#DBEAFE',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    marginTop: '1px'
  },
  nextText: {
    minWidth: 0,
    flex: 1,
    wordBreak: 'break-word'
  },
  followMeta: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    marginTop: '12px',
    color: detailTokens.textMuted,
    fontSize: '13px'
  },
  followMetaItem: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    minHeight: '28px',
    padding: '0 10px',
    border: '1px solid #E2E8F0',
    borderRadius: '999px',
    background: '#F8FAFC'
  },
  kvList: {
    display: 'grid'
  },
  kvRow: {
    display: 'grid',
    gridTemplateColumns: '112px minmax(0, 1fr)',
    gap: '12px',
    alignItems: 'center',
    padding: '11px 0',
    borderBottom: '1px solid #EEF2F7',
    fontSize: '14px',
    lineHeight: '22px'
  },
  kvLabel: {
    color: detailTokens.textMuted,
    fontWeight: 600
  },
  kvValue: {
    color: detailTokens.textNormal,
    fontWeight: 600,
    wordBreak: 'break-word'
  },
  recordInfoGroup: {
    marginTop: '14px',
    paddingTop: '14px',
    borderTop: '1px solid #EEF2F7'
  },
  recordInfoTitle: {
    color: detailTokens.textMuted,
    fontSize: '13px',
    lineHeight: '20px',
    fontWeight: 700,
    marginBottom: '8px'
  },
  recordInfoList: {
    display: 'grid',
    gap: '8px'
  },
  recordInfoRow: {
    display: 'grid',
    gridTemplateColumns: '88px minmax(0, 1fr)',
    gap: '10px',
    alignItems: 'center',
    fontSize: '13px',
    lineHeight: '20px'
  },
  recordInfoLabel: {
    color: '#94A3B8',
    fontWeight: 600
  },
  recordInfoValue: {
    color: detailTokens.textMuted,
    wordBreak: 'break-word'
  },
  recordNoValue: {
    color: detailTokens.textMuted,
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',
    fontSize: '12px',
    lineHeight: '20px',
    wordBreak: 'break-all'
  },
  peopleGroup: {
    display: 'grid',
    gap: '12px'
  },
  peopleTitle: {
    color: detailTokens.textNormal,
    fontSize: '14px',
    lineHeight: '22px',
    fontWeight: 700
  },
  peopleList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '14px'
  },
  personItem: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    color: detailTokens.textNormal,
    fontSize: '14px',
    lineHeight: '24px',
    fontWeight: 600
  },
  avatar: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    color: '#FFFFFF',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '13px',
    fontWeight: 900,
    boxShadow: '0 5px 12px rgba(15, 23, 42, 0.10)'
  },
  avatarBlue: {
    background: detailTokens.primary
  },
  avatarGreen: {
    background: detailTokens.success
  },
  avatarPurple: {
    background: '#7C3AED'
  },
  avatarSlate: {
    background: '#475569'
  },
  peopleDivider: {
    height: '1px',
    background: '#E5EAF3',
    margin: '20px 0'
  },
  emptyInline: {
    color: '#94A3B8',
    fontSize: '14px',
    lineHeight: '22px'
  },
  intelListDetail: {
    display: 'grid',
    gap: '10px'
  },
  intelCard: {
    border: '1px solid #E5EAF3',
    borderLeft: '3px solid #F59E0B',
    background: '#FFFFFF',
    borderRadius: '14px',
    padding: '14px 16px',
    boxSizing: 'border-box',
    boxShadow: '0 4px 14px rgba(15, 23, 42, 0.035)'
  },
  intelCardTop: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: '12px',
    marginBottom: '12px'
  },
  intelIndex: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    background: '#EFF6FF',
    color: detailTokens.primary,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    fontWeight: 800,
    flexShrink: 0,
    marginTop: '1px'
  },
  intelTitleWrap: {
    minWidth: 0,
    flex: 1
  },
  intelTitle: {
    color: detailTokens.primary,
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 800,
    wordBreak: 'break-word'
  },
  intelBadges: {
    display: 'flex',
    gap: '6px',
    flexWrap: 'wrap',
    marginTop: '6px'
  },
  intelMetaGridDetail: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: '12px 16px'
  },
  intelMetaGridCompact: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
    gap: '10px 12px'
  },
  intelMeta: {
    display: 'grid',
    gap: '3px',
    minWidth: 0,
    color: detailTokens.textMuted,
    fontSize: '12px',
    lineHeight: '18px'
  },
  intelMetaValue: {
    color: detailTokens.textNormal,
    fontSize: '14px',
    lineHeight: '22px',
    fontWeight: 700,
    minWidth: 0,
    wordBreak: 'break-word'
  },
  intelHint: {
    marginTop: '12px',
    border: '1px solid #FED7AA',
    background: '#FFF7ED',
    borderRadius: '10px',
    padding: '9px 11px',
    color: detailTokens.textMuted,
    fontSize: '13px',
    lineHeight: '20px'
  },
  sectionSub: {
    color: detailTokens.textMuted,
    fontSize: '13px',
    lineHeight: '20px',
    margin: '-6px 0 12px'
  },
  statusPills: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '12px'
  },
  sectionToolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '-2px 0 10px',
    minHeight: '36px'
  },
  foldedRow: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr) auto 20px',
    gap: '12px',
    alignItems: 'center',
    border: '1px solid #BFDBFE',
    background: '#F8FBFF',
    color: detailTokens.textMuted,
    borderRadius: '12px',
    padding: '11px 12px',
    marginTop: '10px',
    cursor: 'pointer',
    fontSize: '13px'
  },
  fileGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '14px'
  },
  fileLink: {
    textDecoration: 'none',
    color: 'inherit'
  },
  fileCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    minHeight: '62px',
    border: '1px solid #E5EAF3',
    borderRadius: '12px',
    padding: '10px 12px',
    background: '#FFFFFF',
    boxSizing: 'border-box'
  },
  fileIcon: {
    width: '42px',
    height: '42px',
    borderRadius: '10px',
    background: '#EFF6FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  fileInfo: {
    minWidth: 0,
    flex: 1
  },
  fileName: {
    color: detailTokens.textNormal,
    fontSize: '14px',
    lineHeight: '22px',
    fontWeight: 700,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  fileMeta: {
    color: detailTokens.textMuted,
    fontSize: '12px',
    lineHeight: '18px'
  },
  notice: {
    padding: '16px',
    borderRadius: '12px',
    background: detailTokens.cardBg,
    color: detailTokens.textMuted,
    border: '1px solid ' + detailTokens.border
  },
  error: {
    padding: '16px',
    borderRadius: '12px',
    background: '#FEF3F2',
    color: '#B42318',
    border: '1px solid #FECDCA'
  }
};
export function renderJsx() {
  var timestamp = this.state && this.state.timestamp;
  var isMobile = this.utils.isMobile() || (typeof window !== 'undefined' && window.innerWidth < 980);
  var visit = this.getVisit();
  if (_customState.accessDenied) {
    return <div style={detailStyles.page}>
        <div style={{ display: 'none' }}>{timestamp}</div>
        {this.renderAccessDenied()}
      </div>;
  }
  return <div style={detailStyles.page}>
      <div style={{
      display: 'none'
    }}>{timestamp}</div>
      <div style={isMobile ? detailStyles.shellMobile : detailStyles.shell}>
        {_customState.loading && <div style={detailStyles.notice}>正在加载拜访记录详情...</div>}
        {_customState.error && <div style={detailStyles.error}>{_customState.error}</div>}
        {!_customState.loading && !visit && this.renderEmpty('未找到拜访记录，请返回列表重新选择')}
        {!_customState.loading && visit && this.renderDetailLayout(visit, isMobile)}
      </div>
    </div>;
}
