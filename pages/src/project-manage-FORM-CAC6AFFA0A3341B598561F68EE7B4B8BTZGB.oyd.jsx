// 项目管理 - 自定义页面
var APP_TYPE = 'APP_LC7BU43GCVLSI0TH8POE';
var FORMS = {
  home: 'FORM-41D8F3A775DA409DB07100731DD5AAFAPIEN',
  contactManage: 'FORM-99CDE5F8732145A29304285F2E0A9B05D5CM',
  visitManage: 'FORM-02C2269B84C44EFFB83ECF629F05AB94I339',
  projectManage: 'FORM-CAC6AFFA0A3341B598561F68EE7B4B8BTZGB',
  unitManage: 'FORM-CA9908793C7C4EA3997B43B5BF5FAA34KEAC',
  page: 'FORM-CAC6AFFA0A3341B598561F68EE7B4B8BTZGB',
  projectDetail: 'FORM-3367C1CD6BDB4FE995BCA69ECFF03419Q0A4',
  leadDetail: 'FORM-48EA952D879B4D1D94580C2EA14B7AE43HM9',
  project: 'FORM-DC58D4D9EB714ACBB421A34ADFB418ABJCVO',
  lead: 'FORM-76909065F1B5460E872D3834D95B2DFFK8F0',
  unit: 'FORM-A96B2187A20640C68C9F7806CC1FEADDZZZ8',
  contact: 'FORM-87B25B011DC14AA5ACC39BE4077D520AITQS',
  relation: 'FORM-FB6E6BA777E84128A96E567646E5733DXI0O'
};
var FIELDS = {
  project: {
    code: 'serialNumberField_jpjm1m4pg',
    name: 'textField_jpjm21hie',
    shortName: 'textField_jpjm3hpoz',
    region: 'textField_jpjn4z298',
    unit: 'associationFormField_jpjn5lpv8',
    type: 'selectField_jpjn6kai0',
    phase: 'selectField_jpjn73b05',
    star: 'selectField_jpjn8e1tu',
    owner: 'employeeField_jpjn9lyh5',
    members: 'employeeField_jpjna6ksi',
    auth: 'employeeField_jpjnbzxhi',
    summary: 'textareaField_jpjnctccb',
    keyProgress: 'textareaField_jpjndkc1w',
    decision: 'textareaField_jpjnerk4x',
    risk: 'textareaField_jpjnf46ew',
    block: 'textareaField_jpjngp2l6',
    nextAction: 'textareaField_jpjnh16i8',
    nextOwner: 'employeeField_jpjniimk7',
    nextDate: 'dateField_jpjnjcxmp',
    recent: 'textareaField_jpjnk9q1c',
    recentDate: 'dateField_jpjnl71j3',
    status: 'selectField_jpjnm9c66',
    remark: 'textareaField_jpjnn9kdi',
    sourceLead: 'associationFormField_o8c51p6t3'
  },
  lead: {
    title: 'textField_o5hf51ir9',
    content: 'textareaField_o5hf6dkbq',
    status: 'selectField_o5hfbq4tf',
    owner: 'employeeField_5szd78u2t',
    handlers: 'employeeField_nnet2xu74',
    contact: 'associationFormField_o5hf21sgj',
    unit: 'associationFormField_nnet1kq13',
    mainProject: 'associationFormField_o5hf3lnak',
    remindDate: 'dateField_5szd6vvxq',
    validUntil: 'dateField_5szd5xzdb',
    nextAction: 'textareaField_5szd8976q'
  },
  unit: {
    name: 'textField_gqbk2dh1r',
    shortName: 'textField_gqbk3q3b8',
    region: 'addressField_mq52xi6b'
  },
  contact: {
    name: 'textField_ibw42mevu',
    unit: 'associationFormField_ibw594k2s',
    position: 'textField_ibw5bqqub'
  },
  relation: {
    project: 'associationFormField_m7me25hdh',
    contact: 'associationFormField_m7me3i0ht',
    role: 'selectField_m7me6h495',
    influence: 'selectField_m7me7mn98',
    attitude: 'selectField_m7mf8jeyu',
    status: 'selectField_3ipp1yq72',
    familiar: 'selectField_m7mf9bxwf',
    nextAction: 'textareaField_m7mfevfco'
  }
};
var PHASE_OPTIONS = ['全部', '线索', '接洽', '方案', '推进', '招采', '实施', '验收', '归档'];
var STATUS_OPTIONS = ['全部', '正常', '重点推进', '有风险', '暂停', '归档'];
var STAR_OPTIONS = ['全部星级', '5星', '4星', '3星', '2星', '1星'];
var _customState = {
  loading: true,
  error: '',
  accessDenied: false,
  keyword: '',
  phaseFilter: '全部',
  statusFilter: '全部',
  starFilter: '全部星级',
  sortBy: 'recent',
  currentPage: 1,
  pageSize: 8,
  projects: [],
  units: [],
  contacts: [],
  relations: [],
  convertMode: false,
  convertLeadId: '',
  convertLead: null,
  convertDraft: {
    name: '',
    unitId: '',
    unitTitle: '',
    summary: '',
    nextAction: '',
    planDate: ''
  },
  convertDraftReady: false,
  convertSaving: false,
  convertSaved: false,
  createdProjectId: '',
  createdProjectTitle: '',
  totalProjects: 0,
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
      <div style={{ fontSize: '14px', color: '#667085', lineHeight: '22px' }}>项目完整管理页仅开放给“市场信息管理 / 总经理办”。普通员工首页只展示项目公开摘要。</div>
    </div>;
}
export function didMount() {
  var self = this;
  if (this.denyNormalEmployeeAccess()) return;
  this.initConvertMode();
  this.loadData(true);
  if (!_customState.convertMode) {
    _customState.refreshTimer = setInterval(() => {
      self.loadData(false);
    }, 90000);
  }
}
export function didUnmount() {
  if (_customState.refreshTimer) {
    clearInterval(_customState.refreshTimer);
    _customState.refreshTimer = null;
  }
}
export function loadData(showLoading) {
  var self = this;
  if (showLoading !== false) {
    _customState.loading = true;
    _customState.error = '';
    this.forceUpdate();
  }
  Promise.all([self.loadProjects(), self.loadUnits(), self.loadLightForm(FORMS.contact, 'contacts'), self.loadLightForm(FORMS.relation, 'relations'), self.loadConvertLead()]).then(() => {
    _customState.loading = false;
    _customState.error = '';
    self.forceUpdate();
  }).catch(err => {
    _customState.loading = false;
    _customState.error = self.getErrorMessage(err);
    self.forceUpdate();
    self.utils.toast({
      title: '项目数据加载失败，请稍后重试',
      type: 'error'
    });
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
    var rows = this.normalizeRows(res);
    _customState.projects = rows;
    _customState.totalProjects = this.normalizeTotal(res, rows.length);
  }).catch(err => {
    this.utils.toast({
      title: '项目列表加载失败',
      type: 'error'
    });
    throw err;
  });
}
export function loadUnits() {
  return this.utils.yida.searchFormDatas({
    formUuid: FORMS.unit,
    currentPage: 1,
    pageSize: 100
  }).then(res => {
    _customState.units = this.normalizeRows(res);
  }).catch(err => {
    _customState.units = [];
    return [];
  });
}
export function loadLightForm(formUuid, key) {
  return this.utils.yida.searchFormDatas({
    formUuid: formUuid,
    currentPage: 1,
    pageSize: 100
  }).then(res => {
    _customState[key] = this.normalizeRows(res);
  }).catch(err => {
    _customState[key] = [];
    return [];
  });
}
export function getPageParam(name) {
  var params = this.state && this.state.urlParams || {};
  if (params[name] !== undefined && params[name] !== null && params[name] !== '') return params[name];
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
export function initConvertMode() {
  var mode = this.getPageParam('mode');
  var action = this.getPageParam('action');
  var sourceLeadId = this.getPageParam('sourceLeadId') || this.getPageParam('leadId');
  if (sourceLeadId && (mode === 'leadConvert' || action === 'leadConvert' || this.getPageParam('leadTitle'))) {
    _customState.convertMode = true;
    _customState.convertLeadId = sourceLeadId;
  }
}
export function normalizeSingleRow(res) {
  if (!res) return null;
  if (res.formData) return res;
  if (res.data && res.data.formData) return res.data;
  if (res.content && res.content.formData) return res.content;
  if (res.result && res.result.formData) return res.result;
  if (res.content && res.content.data && res.content.data.formData) return res.content.data;
  return null;
}
export function loadConvertLead() {
  var self = this;
  if (!_customState.convertMode || !_customState.convertLeadId) return Promise.resolve();
  return this.utils.yida.getFormDataById({
    formInstId: _customState.convertLeadId
  }).then(res => {
    var row = self.normalizeSingleRow(res);
    if (row) {
      _customState.convertLead = row;
      self.prepareConvertDraft(row);
    }
  }).catch(err => {
    _customState.convertLead = null;
    _customState.error = '来源线索加载失败：' + self.getErrorMessage(err);
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
export function getAssociationId(value) {
  var parsed = this.parseMaybeJson(value);
  var item = Array.isArray(parsed) ? parsed[0] : parsed;
  if (!item || typeof item !== 'object') return '';
  return item.instanceId || item.formInstId || item.formInstanceId || item.id || '';
}
export function getAssociationIds(value) {
  var parsed = this.parseMaybeJson(value);
  var list = Array.isArray(parsed) ? parsed : [parsed];
  return list.map(item => {
    if (!item || typeof item !== 'object') return '';
    return item.instanceId || item.formInstId || item.formInstanceId || item.id || '';
  }).filter(id => id);
}
export function getAssociationFirstItem(value) {
  var parsed = this.parseMaybeJson(value);
  if (Array.isArray(parsed)) return parsed[0] || null;
  return parsed && typeof parsed === 'object' ? parsed : null;
}
export function findById(list, id) {
  if (!id) return null;
  var matched = list.filter(item => {
    return this.getRowId(item) === id;
  });
  return matched[0] || null;
}
export function getAssociationText(row, fieldId) {
  var raw = this.rawAssociation(row, fieldId);
  var item = this.getAssociationFirstItem(raw);
  if (item) {
    var title = item.title || item.name || item.label || item.text || item.displayName || '';
    var text = this.formatValue(title);
    if (text !== '-') return text;
  }
  return this.formatValue(raw);
}
export function makeAssociation(formUuid, instanceId, title) {
  if (!instanceId) return [];
  return [{
    formType: 'receipt',
    formUuid: formUuid,
    instanceId: instanceId,
    subTitle: '',
    appType: APP_TYPE,
    title: title || ''
  }];
}
export function getLeadTitle(row) {
  if (!row) return this.getPageParam('leadTitle') || '未命名市场线索';
  var title = this.getValue(row, FIELDS.lead.title);
  if (title !== '-') return title;
  return this.getPageParam('leadTitle') || '未命名市场线索';
}
export function getLeadUnitItem(row) {
  var item = this.getAssociationFirstItem(this.rawAssociation(row, FIELDS.lead.unit));
  if (item) return item;
  var id = this.getPageParam('unitId');
  if (!id) return null;
  return {
    instanceId: id,
    title: this.getPageParam('unitTitle') || ''
  };
}
export function getLeadContactText(row) {
  var text = row ? this.getAssociationText(row, FIELDS.lead.contact) : this.getPageParam('contactTitle');
  return text && text !== '-' ? text : '未关联联系人';
}
export function timestampToDateInput(value) {
  var num = Number(value);
  if (!num) return '';
  var d = new Date(num);
  var month = d.getMonth() + 1;
  var day = d.getDate();
  var monthText = month < 10 ? '0' + month : '' + month;
  var dayText = day < 10 ? '0' + day : '' + day;
  return d.getFullYear() + '-' + monthText + '-' + dayText;
}
export function dateInputToTimestamp(value) {
  if (!value) return '';
  var time = new Date(value + 'T00:00:00').getTime();
  return isNaN(time) ? '' : time;
}
export function normalizeFieldForSave(value) {
  var parsed = this.parseMaybeJson(value);
  if (parsed === undefined || parsed === null || parsed === '' || parsed === '-') return null;
  if (Array.isArray(parsed) && !parsed.length) return null;
  return parsed;
}
export function getLoginUserIdSafe() {
  if (this.utils && this.utils.getLoginUserId) return this.utils.getLoginUserId();
  return typeof window !== 'undefined' && window.loginUser && window.loginUser.userId || '';
}
export function getLoginUserNameSafe() {
  if (this.utils && this.utils.getLoginUserName) return this.utils.getLoginUserName();
  return typeof window !== 'undefined' && window.loginUser && window.loginUser.userName || '';
}
export function getProjectOwnerValue(row) {
  var ownerId = row ? this.normalizeFieldForSave(this.rawValue(row, FIELDS.lead.owner + '_id')) : null;
  if (ownerId) return ownerId;
  var owner = row ? this.normalizeFieldForSave(this.rawValue(row, FIELDS.lead.owner)) : null;
  if (owner) return owner;
  var userId = this.getLoginUserIdSafe();
  return userId ? [userId] : null;
}
export function getProjectNextOwnerValue(row) {
  var handlerIds = row ? this.normalizeFieldForSave(this.rawValue(row, FIELDS.lead.handlers + '_id')) : null;
  if (handlerIds) return handlerIds;
  var handlers = row ? this.normalizeFieldForSave(this.rawValue(row, FIELDS.lead.handlers)) : null;
  if (handlers) return handlers;
  return this.getProjectOwnerValue(row);
}
export function prepareConvertDraft(row) {
  if (_customState.convertDraftReady) return;
  var unitItem = this.getLeadUnitItem(row);
  var remindDate = row ? this.rawValue(row, FIELDS.lead.remindDate) : this.getPageParam('leadRemindDate');
  var validUntil = row ? this.rawValue(row, FIELDS.lead.validUntil) : this.getPageParam('leadValidUntil');
  _customState.convertDraft = {
    name: this.getLeadTitle(row),
    unitId: unitItem && (unitItem.instanceId || unitItem.formInstId || unitItem.formInstanceId || unitItem.id) || '',
    unitTitle: unitItem ? this.formatValue(unitItem.title || unitItem.name || unitItem.label || unitItem.text) : '',
    summary: row ? this.getValue(row, FIELDS.lead.content) !== '-' ? this.getValue(row, FIELDS.lead.content) : '' : this.getPageParam('leadContent'),
    nextAction: row ? this.getValue(row, FIELDS.lead.nextAction) !== '-' ? this.getValue(row, FIELDS.lead.nextAction) : '' : this.getPageParam('leadNextAction'),
    planDate: this.timestampToDateInput(remindDate || validUntil)
  };
  _customState.convertDraftReady = true;
}
export function getUnitOptions() {
  var exists = {};
  var list = [];
  var draft = _customState.convertDraft || {};
  if (draft.unitId) {
    exists[draft.unitId] = true;
    list.push({
      id: draft.unitId,
      title: draft.unitTitle || '来源单位'
    });
  }
  (_customState.units || []).forEach(unit => {
    var id = this.getRowId(unit);
    if (!id || exists[id]) return;
    exists[id] = true;
    list.push({
      id: id,
      title: this.getValue(unit, FIELDS.unit.name)
    });
  });
  return list;
}
export function handleConvertDraftChange(key, value) {
  _customState.convertDraft = _customState.convertDraft || {};
  _customState.convertDraft[key] = value;
}
export function handleConvertUnitChange(value) {
  var id = value || '';
  var unit = this.findById(_customState.units, id);
  _customState.convertDraft.unitId = id || '';
  _customState.convertDraft.unitTitle = unit ? this.getValue(unit, FIELDS.unit.name) : '';
  this.forceUpdate();
}
export function getConvertedProjectFromLead(row) {
  if (!row) return null;
  var leadId = this.getRowId(row);
  var mainIds = this.getAssociationIds(this.rawAssociation(row, FIELDS.lead.mainProject));
  for (var i = 0; i < mainIds.length; i += 1) {
    var mainProject = this.findById(_customState.projects, mainIds[i]);
    if (mainProject) return mainProject;
  }
  for (var j = 0; j < _customState.projects.length; j += 1) {
    var project = _customState.projects[j];
    if (this.rowMatchesAssociation(project, FIELDS.project.sourceLead, leadId)) return project;
  }
  return null;
}
export function openProjectDetailById(projectId) {
  if (!projectId) return;
  this.utils.router.push(FORMS.projectDetail, {
    projectId: projectId
  }, false);
}
export function returnToSourceLead() {
  var leadId = _customState.convertLeadId;
  if (!leadId) {
    this.utils.router.push(FORMS.projectManage, {}, false);
    return;
  }
  this.utils.router.push(FORMS.leadDetail, {
    leadId: leadId
  }, false);
}
export function getCreatedProjectId(res) {
  if (!res) return '';
  if (typeof res === 'string') return res;
  return res.result || res.data || res.content && (res.content.result || res.content.formInstId || res.content.instanceId) || res.formInstId || res.instanceId || '';
}
export function saveConvertedProject() {
  var self = this;
  var row = _customState.convertLead;
  var leadId = _customState.convertLeadId || this.getRowId(row);
  if (_customState.convertSaving || !leadId) return;
  var existed = this.getConvertedProjectFromLead(row);
  if (existed) {
    _customState.createdProjectId = this.getRowId(existed);
    _customState.createdProjectTitle = this.getValue(existed, FIELDS.project.name);
    _customState.convertSaved = true;
    this.forceUpdate();
    this.utils.toast({
      title: '当前线索已关联项目，不能重复创建。',
      type: 'warning'
    });
    return;
  }
  var draft = _customState.convertDraft || {};
  var projectName = (draft.name || '').trim();
  if (!projectName) {
    this.utils.toast({
      title: '请填写项目名称',
      type: 'warning'
    });
    return;
  }
  _customState.convertSaving = true;
  this.forceUpdate();
  var now = new Date().getTime();
  var projectPayload = {};
  projectPayload[FIELDS.project.name] = projectName;
  projectPayload[FIELDS.project.phase] = '线索';
  projectPayload[FIELDS.project.status] = '正常';
  projectPayload[FIELDS.project.summary] = draft.summary || '';
  projectPayload[FIELDS.project.nextAction] = draft.nextAction || '';
  projectPayload[FIELDS.project.recentDate] = now;
  projectPayload[FIELDS.project.sourceLead] = this.makeAssociation(FORMS.lead, leadId, this.getLeadTitle(row));
  var planTime = this.dateInputToTimestamp(draft.planDate);
  if (planTime) projectPayload[FIELDS.project.nextDate] = planTime;
  if (draft.unitId) projectPayload[FIELDS.project.unit] = this.makeAssociation(FORMS.unit, draft.unitId, draft.unitTitle);
  var ownerValue = this.getProjectOwnerValue(row);
  if (ownerValue) projectPayload[FIELDS.project.owner] = ownerValue;
  var nextOwnerValue = this.getProjectNextOwnerValue(row);
  if (nextOwnerValue) projectPayload[FIELDS.project.nextOwner] = nextOwnerValue;
  this.utils.yida.saveFormData({
    formUuid: FORMS.project,
    appType: APP_TYPE,
    formDataJson: JSON.stringify(projectPayload)
  }).then(res => {
    var projectId = self.getCreatedProjectId(res);
    if (!projectId) throw new Error('项目已保存但未返回实例 ID');
    var leadPayload = {};
    leadPayload[FIELDS.lead.status] = '已转项目';
    leadPayload[FIELDS.lead.mainProject] = self.makeAssociation(FORMS.project, projectId, projectName);
    return self.utils.yida.updateFormData({
      formInstId: leadId,
      updateFormDataJson: JSON.stringify(leadPayload),
      useLatestVersion: 'y'
    }).catch(err => {
      throw err;
    }).then(() => {
      _customState.convertSaving = false;
      _customState.convertSaved = true;
      _customState.createdProjectId = projectId;
      _customState.createdProjectTitle = projectName;
      self.utils.toast({
        title: '项目已创建，并已关联当前线索。',
        type: 'success',
        size: 'large'
      });
      self.loadData(false);
    });
  }).catch(err => {
    _customState.convertSaving = false;
    self.forceUpdate();
    self.utils.toast({
      title: '保存项目失败：' + self.getErrorMessage(err),
      type: 'error'
    });
  });
}
export function getUnitName(row) {
  var raw = this.rawValue(row, FIELDS.project.unit);
  var id = this.getAssociationId(raw);
  var unit = this.findById(_customState.units, id);
  if (unit) return this.getValue(unit, FIELDS.unit.name);
  var text = this.formatValue(raw);
  return text !== '-' ? text : '-';
}
export function rowMatchesAssociation(row, fieldId, id) {
  if (!id) return false;
  return this.getAssociationIds(this.rawAssociation(row, fieldId)).indexOf(id) >= 0;
}
export function getRelationStatus(row) {
  var status = this.getValue(row, FIELDS.relation.status);
  return status === '-' ? '' : status;
}
export function isCurrentRelation(row) {
  var status = this.getRelationStatus(row);
  return !status || status === '当前';
}
export function getProjectRelations(project) {
  var id = this.getRowId(project);
  var list = _customState.relations.filter(item => this.rowMatchesAssociation(item, FIELDS.relation.project, id) && this.isCurrentRelation(item));
  list.sort((a, b) => {
    var av = parseInt(this.getValue(a, FIELDS.relation.influence), 10) || 0;
    var bv = parseInt(this.getValue(b, FIELDS.relation.influence), 10) || 0;
    return bv - av;
  });
  return list;
}
export function getContactNameFromRelation(row) {
  var raw = this.rawAssociation(row, FIELDS.relation.contact);
  var id = this.getAssociationId(raw);
  var contact = this.findById(_customState.contacts, id);
  if (contact) return this.getValue(contact, FIELDS.contact.name);
  return this.formatValue(raw);
}
export function getMetricData() {
  var projects = _customState.projects;
  var active = projects.filter(item => {
    var status = this.getValue(item, FIELDS.project.status);
    var phase = this.getValue(item, FIELDS.project.phase);
    return status !== '归档' && phase !== '归档';
  }).length;
  var risk = projects.filter(item => {
    var riskText = this.getValue(item, FIELDS.project.risk);
    var blockText = this.getValue(item, FIELDS.project.block);
    var status = this.getValue(item, FIELDS.project.status);
    return riskText !== '-' || blockText !== '-' || status === '有风险';
  }).length;
  var next = projects.filter(item => {
    return this.getValue(item, FIELDS.project.nextAction) !== '-';
  }).length;
  return {
    total: _customState.totalProjects || projects.length,
    active: active,
    risk: risk,
    next: next,
    relations: _customState.relations.filter(item => this.isCurrentRelation(item)).length
  };
}
export function getSearchText(row) {
  var fields = [FIELDS.project.code, FIELDS.project.name, FIELDS.project.shortName, FIELDS.project.region, FIELDS.project.type, FIELDS.project.phase, FIELDS.project.star, FIELDS.project.owner, FIELDS.project.members, FIELDS.project.summary, FIELDS.project.keyProgress, FIELDS.project.risk, FIELDS.project.block, FIELDS.project.nextAction, FIELDS.project.status];
  var self = this;
  return fields.map(fieldId => {
    return self.getValue(row, fieldId);
  }).join(' ').toLowerCase() + ' ' + this.getUnitName(row).toLowerCase();
}
export function getFilteredProjects() {
  var self = this;
  var keyword = (_customState.keyword || '').trim().toLowerCase();
  var list = _customState.projects.filter(row => {
    var phase = self.getValue(row, FIELDS.project.phase);
    var status = self.getValue(row, FIELDS.project.status);
    var star = self.getValue(row, FIELDS.project.star);
    var keywordMatched = !keyword || self.getSearchText(row).indexOf(keyword) >= 0;
    var phaseMatched = _customState.phaseFilter === '全部' || phase === _customState.phaseFilter;
    var statusMatched = _customState.statusFilter === '全部' || status === _customState.statusFilter;
    var starMatched = _customState.starFilter === '全部星级' || star === _customState.starFilter;
    return keywordMatched && phaseMatched && statusMatched && starMatched;
  });
  return this.sortProjects(list);
}
export function sortProjects(list) {
  var self = this;
  var sorted = list.slice(0);
  sorted.sort((a, b) => {
    if (_customState.sortBy === 'nextDate') {
      return (Number(self.rawValue(a, FIELDS.project.nextDate)) || 9999999999999) - (Number(self.rawValue(b, FIELDS.project.nextDate)) || 9999999999999);
    }
    if (_customState.sortBy === 'star') {
      return (parseInt(self.getValue(b, FIELDS.project.star), 10) || 0) - (parseInt(self.getValue(a, FIELDS.project.star), 10) || 0);
    }
    return (Number(self.rawValue(b, FIELDS.project.recentDate)) || 0) - (Number(self.rawValue(a, FIELDS.project.recentDate)) || 0);
  });
  return sorted;
}
export function getTotalPage(total) {
  var page = Math.ceil((total || 0) / _customState.pageSize);
  return page < 1 ? 1 : page;
}
export function getCurrentPageProjects() {
  var list = this.getFilteredProjects();
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
export function setPhaseFilter(value) {
  _customState.phaseFilter = _customState.phaseFilter === value ? '全部' : value || '全部';
  _customState.currentPage = 1;
  this.forceUpdate();
}
export function setStatusFilter(value) {
  _customState.statusFilter = _customState.statusFilter === value ? '全部' : value || '全部';
  _customState.currentPage = 1;
  this.forceUpdate();
}
export function setStarFilter(e) {
  _customState.starFilter = e && e.target ? e.target.value : '全部星级';
  _customState.currentPage = 1;
  this.forceUpdate();
}
export function setSortBy(e) {
  _customState.sortBy = e && e.target ? e.target.value : 'recent';
  _customState.currentPage = 1;
  this.forceUpdate();
}
export function resetFilters() {
  _customState.keyword = '';
  _customState.phaseFilter = '全部';
  _customState.statusFilter = '全部';
  _customState.starFilter = '全部星级';
  _customState.sortBy = 'recent';
  _customState.currentPage = 1;
  ['project-keyword-main', 'project-keyword-mobile'].forEach(id => {
    var input = document.getElementById(id);
    if (input) input.value = '';
  });
  this.forceUpdate();
}
export function clearSearch() {
  _customState.keyword = '';
  _customState.currentPage = 1;
  ['project-keyword-main', 'project-keyword-mobile'].forEach(id => {
    var input = document.getElementById(id);
    if (input) input.value = '';
  });
  this.forceUpdate();
}
export function goPage(delta) {
  var list = this.getFilteredProjects();
  var totalPage = this.getTotalPage(list.length);
  var next = _customState.currentPage + delta;
  if (next < 1) next = 1;
  if (next > totalPage) next = totalPage;
  _customState.currentPage = next;
  this.forceUpdate();
}
export function refreshData() {
  this.utils.toast({
    title: '正在刷新项目',
    type: 'notice'
  });
  this.loadData(true);
}
export function openNativeForm(formUuid) {
  this.utils.router.push(formUuid, {}, false);
}
export function openSubmissionForm(formUuid) {
  var base = typeof window !== 'undefined' && window.location ? window.location.origin : '';
  window.location.href = base + '/' + APP_TYPE + '/submission/' + formUuid;
}
export function openDetail(row) {
  var id = this.getRowId(row);
  if (!id) {
    this.openNativeForm(FORMS.project);
    return;
  }
  this.utils.router.push(FORMS.projectDetail, {
    projectId: id
  }, false);
}
export function tone(text) {
  if (text === '有风险' || text === '暂停') return 'danger';
  if (text === '招采' || text === '实施' || text === '重点推进') return 'warning';
  if (text === '正常' || text === '推进' || text === '验收') return 'success';
  if (text === '方案' || text === '接洽') return 'primary';
  return 'default';
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
export function renderStars(starText) {
  var count = parseInt(starText, 10) || 0;
  var stars = [1, 2, 3, 4, 5];
  if (count < 1) count = 0;
  if (count > 5) count = 5;
  return <div style={styles.starRow}>
      {stars.map(item => <span key={item} style={item <= count ? styles.starOn : styles.starOff}>★</span>)}
    </div>;
}
export function renderButton(label, type, onClick) {
  var primary = type === 'primary';
  return <button onClick={e => {
    if (onClick) onClick(e);
  }} style={Object.assign({}, styles.button, primary ? styles.buttonPrimary : styles.buttonDefault)}>{label}</button>;
}
export function renderTopbar(isMobile) {
  return <div style={isMobile ? styles.topbarMobile : styles.topbar}><div style={styles.topTitle}>项目管理</div></div>;
}
export function renderHero(isMobile) {
  var metric = this.getMetricData();
  return <div style={isMobile ? styles.heroMobile : styles.hero}>
      <div>
        <div style={styles.pageTitle}>项目管理</div>
        <div style={styles.pageSub}>共 {metric.total} 个项目</div>
      </div>
      <div style={styles.heroActions}>
        {this.renderButton('+ 新增项目', 'primary', e => {
        this.openSubmissionForm(FORMS.project);
      })}
      </div>
    </div>;
}
export function renderMetrics(isMobile) {
  var metric = this.getMetricData();
  var cards = [{
    title: '在推项目',
    value: metric.active,
    sub: '项目关系 ' + metric.relations + ' 条',
    tone: 'primary'
  }, {
    title: '风险/卡点',
    value: metric.risk,
    sub: '需重点跟进',
    tone: 'danger'
  }, {
    title: '有下一步',
    value: metric.next,
    sub: '动作明确',
    tone: 'success'
  }];
  return <div style={isMobile ? styles.metricGridMobile : styles.metricGrid}>
      {cards.map(item => <div key={item.title} style={styles.metricCard}>
          <div style={styles.metricLabel}>{item.title}</div>
          <div style={Object.assign({}, styles.metricValue, item.tone === 'danger' ? styles.metricRed : item.tone === 'success' ? styles.metricGreen : styles.metricBlue)}>{item.value}</div>
          <div style={styles.metricSub}>{item.sub}</div>
        </div>)}
    </div>;
}
export function renderFilterBar(isMobile) {
  var self = this;
  var phaseOptions = PHASE_OPTIONS.filter(item => item !== '全部');
  var statusOptions = STATUS_OPTIONS.filter(item => item !== '全部');
  return <div style={styles.filterPanel}>
      <div style={styles.mainSearch}>
        <span style={styles.searchIcon}>⌕</span>
        <input id={isMobile ? 'project-keyword-mobile' : 'project-keyword-main'} defaultValue={_customState.keyword} placeholder="搜索项目名称、地区、负责人..." onCompositionStart={e => {
        self.handleCompositionStart(e);
      }} onCompositionEnd={e => {
        self.handleCompositionEnd(e);
      }} onChange={e => {
        self.handleSearchChange(e);
      }} style={styles.filterInput} />
        {_customState.keyword && <button onClick={e => {
        self.clearSearch();
      }} style={styles.clearSearch}>×</button>}
      </div>
      <div style={styles.filterLine}>
        <span style={styles.filterLabel}>阶段：</span>
        {phaseOptions.map(item => {
        var active = _customState.phaseFilter === item;
        return <button key={item} onClick={e => {
          self.setPhaseFilter(item);
        }} style={Object.assign({}, styles.segment, active ? styles.segmentActive : {})}>{item}</button>;
      })}
      </div>
      <div style={styles.filterLine}>
        <span style={styles.filterLabel}>状态：</span>
        {statusOptions.map(item => {
        var active = _customState.statusFilter === item;
        return <button key={item} onClick={e => {
          self.setStatusFilter(item);
        }} style={Object.assign({}, styles.segment, active ? styles.segmentActive : {})}>{item}</button>;
      })}
        <button onClick={e => {
        self.resetFilters();
      }} style={styles.resetButton}>重置</button>
      </div>
    </div>;
}
export function renderProjectCard(row, isMobile) {
  var self = this;
  var phase = this.getValue(row, FIELDS.project.phase);
  var status = this.getValue(row, FIELDS.project.status);
  var type = this.getValue(row, FIELDS.project.type);
  var unit = this.getUnitName(row);
  var recent = this.getValue(row, FIELDS.project.recent);
  var progress = this.getValue(row, FIELDS.project.keyProgress);
  var risk = this.getValue(row, FIELDS.project.risk);
  var block = this.getValue(row, FIELDS.project.block);
  var nextAction = this.getValue(row, FIELDS.project.nextAction);
  var nextOwner = this.getValue(row, FIELDS.project.nextOwner);
  var nextDate = this.formatDate(this.rawValue(row, FIELDS.project.nextDate));
  var body = progress !== '-' ? progress : recent !== '-' ? recent : this.getValue(row, FIELDS.project.summary);
  var warningText = risk !== '-' ? risk : block;
  var relations = this.getProjectRelations(row);
  var owner = this.getValue(row, FIELDS.project.owner);
  var metaItems = [unit, this.getValue(row, FIELDS.project.region), type, owner !== '-' ? '负责人：' + owner : '-'].filter(item => item && item !== '-');
  return <div key={this.getRowId(row)} style={styles.card} onClick={e => {
    self.openDetail(row);
  }}>
      <div style={isMobile ? styles.cardHeadMobile : styles.cardHead}>
        <div style={styles.cardMain}>
          <div style={styles.titleLine}>
            <span style={styles.cardTitle}>{this.getValue(row, FIELDS.project.name)}</span>
            {this.renderBadge(phase, this.tone(phase))}
            {this.renderBadge(status, this.tone(status))}
          </div>
          <div style={styles.metaLine}>
            {metaItems.map((item, index) => <span key={index}>{item}</span>)}
          </div>
        </div>
        <div style={styles.cardRight}>
          <div style={styles.dateText}>更新 {this.formatDate(this.rawValue(row, FIELDS.project.recentDate))}</div>
          {this.renderStars(this.getValue(row, FIELDS.project.star))}
        </div>
      </div>
      <div style={styles.bodyText}>{body !== '-' ? body : '暂无项目摘要'}</div>
      {relations.length > 0 && <div style={styles.relationLine}>
          <span style={styles.relationLabel}>关键联系人：</span>
          {relations.slice(0, 4).map(item => <span key={this.getRowId(item)} style={styles.relationChip}>
              {this.getContactNameFromRelation(item)} · {this.getValue(item, FIELDS.relation.role)} · {this.getValue(item, FIELDS.relation.attitude)}
            </span>)}
        </div>}
      {warningText !== '-' && <div style={styles.warningLine}>风险/卡点：{warningText}</div>}
      <div style={styles.nextLine}>
        <span style={styles.nextText}>下一步：{nextAction !== '-' ? nextAction : '暂无下一步动作'}</span>
        {nextOwner !== '-' && <span>负责人：{nextOwner}</span>}
        {nextDate !== '-' && <span>{nextDate}</span>}
      </div>
      <button onClick={e => {
      e.stopPropagation();
      self.openDetail(row);
    }} style={styles.detailButton}>详情 ›</button>
    </div>;
}
export function renderList(isMobile) {
  var self = this;
  var list = this.getCurrentPageProjects();
  var filtered = this.getFilteredProjects();
  var totalPage = this.getTotalPage(filtered.length);
  return <div>
      {filtered.length === 0 ? this.renderEmpty('暂无匹配项目') : <div style={styles.list}>{list.map(item => self.renderProjectCard(item, isMobile))}</div>}
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
export function renderConvertReadonly(label, value, note) {
  return <div style={styles.convertReadonly}>
      <div style={styles.convertLabel}>{label}</div>
      <div style={styles.convertReadonlyValue}>{value && value !== '-' ? value : '未填写'}</div>
      {note && <div style={styles.convertFieldNote}>{note}</div>}
    </div>;
}
export function renderConvertTextInput(label, key, placeholder) {
  var self = this;
  var draft = _customState.convertDraft || {};
  return <label style={styles.convertField}>
      <span style={styles.convertLabel}>{label}</span>
      <input defaultValue={draft[key] || ''} placeholder={placeholder || ''} onChange={e => {
      self.handleConvertDraftChange(key, e && e.target ? e.target.value : '');
    }} style={styles.convertInput} />
    </label>;
}
export function renderConvertTextarea(label, key, placeholder) {
  var self = this;
  var draft = _customState.convertDraft || {};
  return <label style={styles.convertField}>
      <span style={styles.convertLabel}>{label}</span>
      <textarea defaultValue={draft[key] || ''} placeholder={placeholder || ''} onChange={e => {
      self.handleConvertDraftChange(key, e && e.target ? e.target.value : '');
    }} style={styles.convertTextarea} />
    </label>;
}
export function renderConvertUnitSelect() {
  var self = this;
  var draft = _customState.convertDraft || {};
  var options = this.getUnitOptions();
  return <div style={styles.convertField}>
      <span style={styles.convertLabel}>所属单位</span>
      <div style={styles.unitChoiceWrap}>
        <button type="button" onClick={e => {
        self.handleConvertUnitChange('');
      }} style={Object.assign({}, styles.unitChoice, !draft.unitId ? styles.unitChoiceActive : {})}>未选择</button>
        {options.slice(0, 12).map(item => <button key={item.id} type="button" onClick={e => {
        self.handleConvertUnitChange(item.id);
      }} style={Object.assign({}, styles.unitChoice, draft.unitId === item.id ? styles.unitChoiceActive : {})}>{item.title}</button>)}
      </div>
    </div>;
}
export function renderConvertPlanDate() {
  var self = this;
  var draft = _customState.convertDraft || {};
  return <label style={styles.convertField}>
      <span style={styles.convertLabel}>计划日期</span>
      <input type="date" defaultValue={draft.planDate || ''} onChange={e => {
      self.handleConvertDraftChange('planDate', e && e.target ? e.target.value : '');
    }} style={styles.convertInput} />
    </label>;
}
export function renderConvertSuccess() {
  return <div style={styles.convertShell}>
      <div style={styles.convertSuccess}>
        <div style={styles.convertSuccessTitle}>项目已创建，并已关联当前线索。</div>
        <div style={styles.convertSuccessSub}>{_customState.createdProjectTitle || '新项目'} 已写入项目档案，当前线索已回写为“已转项目”。</div>
        <div style={styles.convertActions}>
          {this.renderButton('查看项目', 'primary', e => {
          this.openProjectDetailById(_customState.createdProjectId);
        })}
          {this.renderButton('返回线索', 'default', e => {
          this.returnToSourceLead();
        })}
        </div>
      </div>
    </div>;
}
export function renderConvertAlready(project) {
  var projectId = project ? this.getRowId(project) : '';
  var projectTitle = project ? this.getValue(project, FIELDS.project.name) : '';
  return <div style={styles.convertShell}>
      <div style={styles.convertWarning}>
        <div style={styles.convertSuccessTitle}>当前线索已转为项目</div>
        <div style={styles.convertSuccessSub}>{projectTitle || '该线索已标记为已转项目'}，不能重复创建第二个项目。</div>
        <div style={styles.convertActions}>
          {projectId && this.renderButton('查看项目', 'primary', e => {
          this.openProjectDetailById(projectId);
        })}
          {this.renderButton('返回线索', 'default', e => {
          this.returnToSourceLead();
        })}
        </div>
      </div>
    </div>;
}
export function renderConvertForm(row, isMobile) {
  var self = this;
  var leadTitle = this.getLeadTitle(row);
  var ownerText = this.getValue(row, FIELDS.lead.owner);
  if (ownerText === '-') ownerText = this.getLoginUserNameSafe() || '当前登录人';
  var nextOwnerText = this.getValue(row, FIELDS.lead.handlers);
  if (nextOwnerText === '-') nextOwnerText = ownerText;
  return <div style={styles.convertShell}>
      <div style={styles.convertHeader}>
        <button type="button" onClick={e => {
        self.returnToSourceLead();
      }} style={styles.backToLeadButton}>返回线索</button>
        <div style={styles.convertTitle}>项目新增</div>
      </div>
      <div style={styles.sourceBanner}>
        <div style={styles.sourceTitle}>来源线索：{leadTitle}</div>
        <div style={styles.sourceText}>系统已自动带入联系人、单位、线索内容和后续动作，保存项目后将自动回写线索。</div>
      </div>
      <div style={isMobile ? styles.convertGridMobile : styles.convertGrid}>
        {this.renderConvertTextInput('项目名称', 'name', '请输入项目名称')}
        {this.renderConvertReadonly('来源线索', leadTitle, '保存时自动写入，不需要再次选择')}
        {this.renderConvertUnitSelect()}
        {this.renderConvertReadonly('关联联系人', this.getLeadContactText(row), '项目档案暂无联系人字段，保留为来源上下文')}
        {this.renderConvertReadonly('项目负责人', ownerText, '')}
        {this.renderConvertReadonly('下一步负责人', nextOwnerText, '')}
        <div style={styles.convertFull}>{this.renderConvertTextarea('项目摘要', 'summary', '请输入项目摘要')}</div>
        <div style={styles.convertFull}>{this.renderConvertTextarea('下一步动作', 'nextAction', '请输入下一步动作')}</div>
        {this.renderConvertPlanDate()}
      </div>
      <div style={styles.convertActions}>
        <button type="button" disabled={_customState.convertSaving} onClick={e => {
        self.saveConvertedProject();
      }} style={Object.assign({}, styles.button, styles.buttonPrimary, _customState.convertSaving ? styles.buttonDisabled : {})}>{_customState.convertSaving ? '保存中...' : '保存项目'}</button>
        {this.renderButton('返回线索', 'default', e => {
        self.returnToSourceLead();
      })}
      </div>
    </div>;
}
export function renderConvertPage(isMobile) {
  var row = _customState.convertLead;
  if (_customState.convertSaved) return this.renderConvertSuccess();
  if (_customState.loading) {
    return <div style={styles.convertShell}>
        <div style={styles.notice}>正在加载来源线索...</div>
      </div>;
  }
  if (!row) {
    return <div style={styles.convertShell}>
        {this.renderEmpty('未找到来源线索，请返回线索页重新发起转为项目')}
      </div>;
  }
  var existed = this.getConvertedProjectFromLead(row);
  if (existed || this.getValue(row, FIELDS.lead.status) === '已转项目') return this.renderConvertAlready(existed);
  return this.renderConvertForm(row, isMobile);
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
    maxWidth: '1280px',
    margin: '0 auto',
    boxSizing: 'border-box'
  },
  contentMobile: {
    padding: '14px 12px 24px',
    boxSizing: 'border-box'
  },
  convertShell: {
    maxWidth: '980px',
    margin: '0 auto',
    padding: '24px 32px 36px',
    boxSizing: 'border-box'
  },
  convertHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '14px'
  },
  backToLeadButton: {
    height: '32px',
    borderRadius: '8px',
    border: '1px solid #D0D5DD',
    background: '#FFFFFF',
    color: '#344054',
    cursor: 'pointer',
    padding: '0 10px',
    fontSize: '13px',
    fontWeight: 700
  },
  convertTitle: {
    fontSize: '22px',
    lineHeight: '30px',
    fontWeight: 850,
    color: '#101828'
  },
  sourceBanner: {
    background: '#EFF6FF',
    border: '1px solid #B9D6FF',
    borderRadius: '8px',
    padding: '14px 16px',
    marginBottom: '14px',
    boxSizing: 'border-box'
  },
  sourceTitle: {
    color: '#155EEF',
    fontSize: '15px',
    lineHeight: '22px',
    fontWeight: 850
  },
  sourceText: {
    color: '#344054',
    fontSize: '13px',
    lineHeight: '20px',
    marginTop: '4px'
  },
  convertGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: '12px',
    background: '#FFFFFF',
    border: '1px solid #EAECF0',
    borderRadius: '8px',
    padding: '16px',
    boxSizing: 'border-box'
  },
  convertGridMobile: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '12px',
    background: '#FFFFFF',
    border: '1px solid #EAECF0',
    borderRadius: '8px',
    padding: '14px',
    boxSizing: 'border-box'
  },
  convertFull: {
    gridColumn: '1 / -1'
  },
  convertField: {
    display: 'grid',
    gap: '6px'
  },
  convertLabel: {
    color: '#475467',
    fontSize: '13px',
    lineHeight: '18px',
    fontWeight: 750
  },
  convertInput: {
    width: '100%',
    height: '38px',
    borderRadius: '8px',
    border: '1px solid #D0D5DD',
    background: '#FFFFFF',
    color: '#101828',
    padding: '0 10px',
    fontSize: '14px',
    outline: 'none',
    boxSizing: 'border-box'
  },
  unitChoiceWrap: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px'
  },
  unitChoice: {
    minHeight: '32px',
    borderRadius: '8px',
    border: '1px solid #D0D5DD',
    background: '#FFFFFF',
    color: '#344054',
    padding: '5px 10px',
    fontSize: '13px',
    lineHeight: '18px',
    cursor: 'pointer',
    boxSizing: 'border-box'
  },
  unitChoiceActive: {
    background: '#EAF2FF',
    color: '#155EEF',
    borderColor: '#B9D6FF',
    fontWeight: 800
  },
  convertTextarea: {
    width: '100%',
    minHeight: '88px',
    borderRadius: '8px',
    border: '1px solid #D0D5DD',
    background: '#FFFFFF',
    color: '#101828',
    padding: '10px',
    fontSize: '14px',
    lineHeight: '20px',
    outline: 'none',
    resize: 'vertical',
    boxSizing: 'border-box'
  },
  convertReadonly: {
    display: 'grid',
    gap: '6px',
    borderRadius: '8px',
    border: '1px solid #EAECF0',
    background: '#F8FAFC',
    padding: '9px 10px',
    boxSizing: 'border-box',
    minHeight: '68px'
  },
  convertReadonlyValue: {
    color: '#101828',
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 700,
    wordBreak: 'break-word'
  },
  convertFieldNote: {
    color: '#667085',
    fontSize: '12px',
    lineHeight: '18px'
  },
  convertActions: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
    marginTop: '16px'
  },
  convertSuccess: {
    background: '#ECFDF3',
    border: '1px solid #ABEFC6',
    borderRadius: '8px',
    padding: '24px',
    boxSizing: 'border-box'
  },
  convertWarning: {
    background: '#FFF7E6',
    border: '1px solid #FEDF89',
    borderRadius: '8px',
    padding: '24px',
    boxSizing: 'border-box'
  },
  convertSuccessTitle: {
    color: '#101828',
    fontSize: '20px',
    lineHeight: '28px',
    fontWeight: 850
  },
  convertSuccessSub: {
    color: '#475467',
    fontSize: '14px',
    lineHeight: '22px',
    marginTop: '6px'
  },
  hero: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '18px'
  },
  heroMobile: {
    display: 'grid',
    gap: '12px',
    marginBottom: '14px'
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
  buttonDisabled: {
    opacity: 0.65,
    cursor: 'not-allowed'
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
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: '14px',
    marginBottom: '16px'
  },
  metricGridMobile: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
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
  metricRed: {
    color: '#D92D20'
  },
  metricGreen: {
    color: '#039855'
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
    border: 'none',
    background: 'transparent',
    color: '#98A2B3',
    fontSize: '18px',
    lineHeight: '18px',
    cursor: 'pointer',
    padding: '0 2px',
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
  card: {
    position: 'relative',
    background: '#FFFFFF',
    border: '1px solid #EAECF0',
    borderRadius: '8px',
    padding: '18px 58px 18px 20px',
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
  cardMain: {
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
    color: '#475467',
    fontSize: '12px',
    lineHeight: '18px'
  },
  bodyText: {
    fontSize: '14px',
    lineHeight: '22px',
    color: '#344054',
    marginTop: '12px'
  },
  warningLine: {
    marginTop: '10px',
    fontSize: '13px',
    lineHeight: '20px',
    color: '#B42318',
    background: '#FEF3F2',
    border: '1px solid #FECDCA',
    borderRadius: '8px',
    padding: '8px 10px'
  },
  relationLine: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    flexWrap: 'wrap',
    marginTop: '12px',
    fontSize: '13px',
    lineHeight: '22px'
  },
  relationLabel: {
    color: '#667085',
    fontWeight: 700
  },
  relationChip: {
    display: 'inline-flex',
    alignItems: 'center',
    minHeight: '24px',
    borderRadius: '8px',
    background: '#F8FAFC',
    border: '1px solid #EEF2F6',
    color: '#344054',
    padding: '1px 8px',
    boxSizing: 'border-box',
    whiteSpace: 'nowrap'
  },
  nextLine: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    flexWrap: 'wrap',
    color: '#155EEF',
    fontSize: '13px',
    lineHeight: '20px',
    marginTop: '10px'
  },
  nextText: {
    fontWeight: 700
  },
  dateText: {
    fontSize: '12px',
    color: '#667085',
    lineHeight: '18px',
    whiteSpace: 'nowrap'
  },
  starRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '2px',
    height: '18px'
  },
  starOn: {
    color: '#F59E0B',
    fontSize: '14px',
    lineHeight: '18px'
  },
  starOff: {
    color: '#D0D5DD',
    fontSize: '14px',
    lineHeight: '18px'
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
  if (_customState.convertMode) {
    return <div style={styles.page}>
        <div style={{
        display: 'none'
      }}>{timestamp}</div>
        {this.renderConvertPage(isMobile)}
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
