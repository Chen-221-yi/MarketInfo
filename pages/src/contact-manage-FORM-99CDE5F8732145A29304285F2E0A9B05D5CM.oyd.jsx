// 联系人管理 - 自定义页面

var APP_TYPE = 'APP_LC7BU43GCVLSI0TH8POE';
var FORMS = {
  home: 'FORM-41D8F3A775DA409DB07100731DD5AAFAPIEN',
  page: 'FORM-99CDE5F8732145A29304285F2E0A9B05D5CM',
  contactManage: 'FORM-99CDE5F8732145A29304285F2E0A9B05D5CM',
  contactDetail: 'FORM-89CA116EA0134CACB77EAA0F87AA7AB8MD1C',
  visitManage: 'FORM-02C2269B84C44EFFB83ECF629F05AB94I339',
  projectManage: 'FORM-CAC6AFFA0A3341B598561F68EE7B4B8BTZGB',
  unitManage: 'FORM-CA9908793C7C4EA3997B43B5BF5FAA34KEAC',
  unit: 'FORM-A96B2187A20640C68C9F7806CC1FEADDZZZ8',
  contact: 'FORM-87B25B011DC14AA5ACC39BE4077D520AITQS',
  project: 'FORM-DC58D4D9EB714ACBB421A34ADFB418ABJCVO',
  visit: 'FORM-5C9373CB6EA5468FA607352B96908C87WHBW',
  career: 'FORM-F6F6E0D90D344240B744CB8FF06CC25BGA7K',
  relation: 'FORM-FB6E6BA777E84128A96E567646E5733DXI0O',
  reminder: 'FORM-320958D6AD8443E68B139C537C452222OGMX',
  intel: 'FORM-76909065F1B5460E872D3834D95B2DFFK8F0',
  tagConfig: 'FORM-6CAE1527A36B48F68D2FDFB4D6DF1873DTY7'
};
var FIELDS = {
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
    tagAssociation: 'associationFormField_a5dv128m1',
    familiar: 'employeeField_ibw5k2k03',
    owner: 'employeeField_ibw5l5fgu',
    birthDate: 'dateField_mpp8m6hw',
    lastVisit: 'dateField_ibw5mkmv9',
    nextDue: 'dateField_ibw5nexxj',
    visitStatus: 'selectField_ibw5o8pd5',
    secrecy: 'selectField_ibw5rildh',
    source: 'textareaField_ibw5swzca'
  },
  unit: {
    name: 'textField_gqbk2dh1r',
    shortName: 'textField_gqbk3q3b8',
    system: 'selectField_gqbk5upc2',
    region: 'addressField_mq52xi6b'
  },
  project: {
    name: 'textField_jpjm21hie',
    phase: 'selectField_jpjn73b05',
    status: 'selectField_jpjnm9c66',
    nextAction: 'textareaField_jpjnh16i8'
  },
  visit: {
    title: 'textField_kyv32ess0',
    contact: 'associationFormField_kyv33bc8s',
    method: 'selectField_kyv378rc2',
    time: 'dateField_kyv38g8dw',
    content: 'textareaField_kyv3acyym',
    nextAction: 'textareaField_0usd1fstw'
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
    nextAction: 'textareaField_m7mfevfco'
  },
  reminder: {
    contact: 'associationFormField_n31w2yat4',
    title: 'textField_n31w37t96',
    date: 'dateField_n31w580q6',
    status: 'selectField_n31wb0qv0'
  },
  intel: {
    contact: 'associationFormField_o5hf21sgj',
    title: 'textField_o5hf51ir9',
    date: 'dateField_o5hfgz10c',
    status: 'selectField_o5hfbq4tf',
    permission: 'selectField_o5hfdjolr'
  },
  tagConfig: {
    name: 'textField_rslv1au5x',
    category: 'textField_rsm52u96z',
    creator: 'employeeField_rsm53mjr3',
    createTime: 'dateField_rsm549arf',
    status: 'selectField_rsm55e1ts',
    usageCount: 'numberField_rsm56atyh'
  }
};
var _customState = {
  loading: true,
  error: '',
  accessDenied: false,
  keyword: '',
  showFilters: false,
  visitFilter: '全部',
  statusFilter: '全部',
  starFilter: '全部',
  tagFilter: '全部',
  incompleteOnly: false,
  sortBy: 'star',
  sortMenuOpen: false,
  currentPage: 1,
  pageSize: 8,
  contacts: [],
  units: [],
  projects: [],
  visits: [],
  careers: [],
  relations: [],
  reminders: [],
  intel: [],
  tagConfigs: [],
  totalContacts: 0,
  selectedContactId: '',
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
      <div style={{ fontSize: '14px', color: '#667085', lineHeight: '22px' }}>当前完整管理页仅开放给“市场信息管理 / 总经理办”。普通员工请使用普通员工首页查看基础信息或提交线索。</div>
    </div>;
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
export function applyRouteParams() {
  var filter = this.getUrlParam('filter');
  var keyword = this.getUrlParam('keyword');
  if (keyword) _customState.keyword = keyword;
  if (filter === 'overdue') _customState.visitFilter = '拜访风险';
  if (filter === 'incomplete') {
    _customState.incompleteOnly = true;
    _customState.sortBy = 'completion';
  }
}
export function didMount() {
  var self = this;
  if (this.denyNormalEmployeeAccess()) return;
  this.applyRouteParams();
  this.loadData(true);
  _customState.refreshTimer = setInterval(() => {
    self.loadData(false);
  }, 90000);
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
  Promise.all([self.loadContacts(), self.loadUnits(), self.loadLightForm(FORMS.project, 'projects'), self.loadLightForm(FORMS.visit, 'visits'), self.loadLightForm(FORMS.career, 'careers'), self.loadLightForm(FORMS.relation, 'relations'), self.loadLightForm(FORMS.reminder, 'reminders'), self.loadLightForm(FORMS.intel, 'intel'), self.loadLightForm(FORMS.tagConfig, 'tagConfigs')]).then(() => {
    _customState.loading = false;
    _customState.error = '';
    self.ensureSelectedContact();
    self.forceUpdate();
  }).catch(err => {
    _customState.loading = false;
    _customState.error = self.getErrorMessage(err);
    self.forceUpdate();
    self.utils.toast({
      title: '联系人数据加载失败，请稍后重试',
      type: 'error'
    });
  });
}
export function loadContacts() {
  var order = {};
  order[FIELDS.contact.star] = '-';
  return this.loadPagedForm(FORMS.contact, JSON.stringify(order)).then(result => {
    var rows = result.rows;
    _customState.contacts = rows;
    _customState.totalContacts = result.total;
  }).catch(err => {
    this.utils.toast({
      title: '关键联系人加载失败',
      type: 'error'
    });
    throw err;
  });
}
export function loadUnits() {
  return this.loadPagedForm(FORMS.unit).then(result => {
    _customState.units = result.rows;
  }).catch(err => {
    _customState.units = [];
    return [];
  });
}
export function loadLightForm(formUuid, key) {
  return this.loadPagedForm(formUuid).then(result => {
    _customState[key] = result.rows;
  }).catch(err => {
    _customState[key] = [];
    return [];
  });
}
export function loadPagedForm(formUuid, dynamicOrder) {
  var self = this;
  var pageSize = 100;
  var allRows = [];
  var total = 0;
  var fetchPage = page => {
    var params = {
      formUuid: formUuid,
      currentPage: page,
      pageSize: pageSize
    };
    if (dynamicOrder) params.dynamicOrder = dynamicOrder;
    return self.utils.yida.searchFormDatas(params).then(res => {
      var rows = self.normalizeRows(res);
      var pageTotal = self.normalizeTotal(res, 0);
      if (pageTotal) total = pageTotal;
      allRows = allRows.concat(rows);
      if (rows.length >= pageSize && (!total || allRows.length < total)) {
        return fetchPage(page + 1);
      }
      return {
        rows: allRows,
        total: total || allRows.length
      };
    });
  };
  return fetchPage(1);
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
  var data = this.getFormData(row);
  var value = data[fieldId];
  if ((value === undefined || value === null || value === '') && data[fieldId + '_id'] !== undefined) {
    value = data[fieldId + '_id'];
  }
  return value;
}
export function getValue(row, fieldId) {
  var value = this.rawValue(row, fieldId);
  return this.formatValue(value);
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
export function calculateAge(value) {
  if (!value || value === '-') return '-';
  var num = Number(value);
  if (!num) return '-';
  var birth = new Date(num);
  if (isNaN(birth.getTime())) return '-';
  var today = new Date();
  var age = today.getFullYear() - birth.getFullYear();
  var monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || monthDiff === 0 && today.getDate() < birth.getDate()) age -= 1;
  if (age < 0 || age > 150) return '-';
  return age + '岁';
}
export function getAssociationId(value) {
  var parsed = this.parseMaybeJson(value);
  var item = parsed;
  if (Array.isArray(parsed)) item = parsed[0];
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
export function getRowId(row) {
  return row && (row.formInstId || row.formInstanceId || row.instanceId || row.id) || '';
}
export function findById(list, id) {
  if (!id) return null;
  var matched = list.filter(item => {
    return item.formInstId === id || item.formInstanceId === id || item.instanceId === id || item.id === id;
  });
  return matched[0] || null;
}
export function rowMatchesAssociation(row, fieldId, id) {
  if (!id) return false;
  var ids = this.getAssociationIds(this.rawValue(row, fieldId));
  return ids.indexOf(id) >= 0;
}
export function isFilled(value) {
  var parsed = this.parseMaybeJson(value);
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
export function getSelectedContact() {
  return this.findById(_customState.contacts, _customState.selectedContactId);
}
export function getRelatedVisits(contact) {
  var id = this.getRowId(contact);
  return _customState.visits.filter(item => this.rowMatchesAssociation(item, FIELDS.visit.contact, id)).sort((a, b) => {
    return (Number(this.rawValue(b, FIELDS.visit.time)) || 0) - (Number(this.rawValue(a, FIELDS.visit.time)) || 0);
  });
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
  return _customState.reminders.filter(item => this.rowMatchesAssociation(item, FIELDS.reminder.contact, id)).sort((a, b) => {
    return (Number(this.rawValue(a, FIELDS.reminder.date)) || 9999999999999) - (Number(this.rawValue(b, FIELDS.reminder.date)) || 9999999999999);
  });
}
export function getRelatedIntel(contact) {
  var id = this.getRowId(contact);
  return _customState.intel.filter(item => {
    return this.rowMatchesAssociation(item, FIELDS.intel.contact, id);
  });
}
export function getProjectNameFromRelation(row) {
  var id = this.getAssociationId(this.rawValue(row, FIELDS.relation.project));
  var project = this.findById(_customState.projects, id);
  if (project) return this.getValue(project, FIELDS.project.name);
  return this.getValue(row, FIELDS.relation.project);
}
export function getUnitName(contact) {
  var rawUnit = this.rawValue(contact, FIELDS.contact.unit);
  var unitId = this.getAssociationId(rawUnit);
  var unit = this.findById(_customState.units, unitId);
  if (unit) return this.getValue(unit, FIELDS.unit.name);
  var unitText = this.formatValue(rawUnit);
  if (unitText !== '-') return unitText;
  var region = this.getValue(contact, FIELDS.contact.region);
  var department = this.getValue(contact, FIELDS.contact.department);
  if (region !== '-' && department !== '-') return region + ' · ' + department;
  if (department !== '-') return department;
  return region;
}
export function getStarNumber(contact) {
  var value = this.getValue(contact, FIELDS.contact.star);
  var num = parseInt(value, 10);
  return isNaN(num) ? 0 : num;
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
export function getInitial(name) {
  if (!name || name === '-') return '联';
  return name.substring(0, 1);
}
export function statusTone(text) {
  if (text === '已超期' || text === '高敏' || text === '失联') return 'danger';
  if (text === '即将超期' || text === '待维护' || text === '需维护') return 'warning';
  if (text === '活跃' || text === '未超期' || text === '公开') return 'success';
  if (text === '重点决策人' || text === '关键关系' || text === '授权') return 'primary';
  return 'default';
}
export function getMetricData() {
  var contacts = _customState.contacts;
  var active = contacts.filter(item => this.getValue(item, FIELDS.contact.status) === '活跃').length;
  var overdue = contacts.filter(item => this.getVisitRisk(item) === '已超期').length;
  var soon = contacts.filter(item => this.getVisitRisk(item) === '即将超期').length;
  var incomplete = contacts.filter(item => this.getCompletion(item) < 80).length;
  return {
    total: _customState.totalContacts,
    active: active,
    overdue: overdue,
    soon: soon,
    incomplete: incomplete
  };
}
export function getFilteredContacts() {
  var self = this;
  var keyword = (_customState.keyword || '').toLowerCase();
  var list = _customState.contacts.filter(item => {
    var name = self.getValue(item, FIELDS.contact.name).toLowerCase();
    var alias = self.getValue(item, FIELDS.contact.alias).toLowerCase();
    var unit = self.getUnitName(item).toLowerCase();
    var position = self.getValue(item, FIELDS.contact.position).toLowerCase();
    var region = self.getValue(item, FIELDS.contact.region).toLowerCase();
    var tags = self.getContactTags(item).join('、').toLowerCase();
    var owner = self.getValue(item, FIELDS.contact.owner).toLowerCase();
    var visitStatus = self.getVisitRisk(item);
    var status = self.getValue(item, FIELDS.contact.status);
    var star = self.getValue(item, FIELDS.contact.star);
    var normalizedTags = self.getContactTags(item);
    var keywordMatch = !keyword || name.indexOf(keyword) >= 0 || alias.indexOf(keyword) >= 0 || unit.indexOf(keyword) >= 0 || position.indexOf(keyword) >= 0 || region.indexOf(keyword) >= 0 || tags.indexOf(keyword) >= 0 || owner.indexOf(keyword) >= 0;
    var visitMatch = _customState.visitFilter === '全部' || _customState.visitFilter === '拜访风险' && (visitStatus === '已超期' || visitStatus === '即将超期') || visitStatus === _customState.visitFilter;
    var statusMatch = _customState.statusFilter === '全部' || status === _customState.statusFilter;
    var starMatch = _customState.starFilter === '全部' || star === _customState.starFilter;
    var tagMatch = _customState.tagFilter === '全部' || normalizedTags.indexOf(_customState.tagFilter) >= 0;
    var incompleteMatch = !_customState.incompleteOnly || self.getCompletion(item) < 80;
    return keywordMatch && visitMatch && statusMatch && starMatch && tagMatch && incompleteMatch;
  });
  return this.sortContacts(list);
}
export function hasActiveFilters() {
  return _customState.visitFilter !== '全部' || _customState.statusFilter !== '全部' || _customState.starFilter !== '全部' || _customState.tagFilter !== '全部' || _customState.incompleteOnly;
}
export function getAllTags() {
  var all = [];
  _customState.tagConfigs.forEach(item => {
    var name = this.normalizeTagName(this.getValue(item, FIELDS.tagConfig.name));
    var status = this.getValue(item, FIELDS.tagConfig.status);
    if (name && status !== '停用' && all.indexOf(name) < 0) all.push(name);
  });
  _customState.contacts.forEach(item => {
    var list = this.getContactTags(item);
    list.forEach(tag => {
      if (tag && all.indexOf(tag) < 0) all.push(tag);
    });
  });
  return all;
}
export function normalizeTagName(value) {
  var text = this.formatValue(value);
  if (!text || text === '-') return '';
  return String(text).trim();
}
export function getContactTags(contact) {
  var raw = this.rawValue(contact, FIELDS.contact.tagAssociation);
  var parsed = this.parseMaybeJson(raw);
  if (Array.isArray(parsed)) {
    return parsed.map(item => this.normalizeTagName(item)).filter(item => item);
  }
  var text = this.normalizeTagName(parsed);
  if (!text) return [];
  return text.split(/[，,]/).map(item => this.normalizeTagName(item)).filter(item => item);
}
export function sortContacts(list) {
  var self = this;
  var sorted = list.slice(0);
  sorted.sort((a, b) => {
    if (_customState.sortBy === 'recent') {
      return (Number(self.rawValue(b, FIELDS.contact.lastVisit)) || 0) - (Number(self.rawValue(a, FIELDS.contact.lastVisit)) || 0);
    }
    if (_customState.sortBy === 'nextDue') {
      return (self.getVisitDeadline(a) || 9999999999999) - (self.getVisitDeadline(b) || 9999999999999);
    }
    if (_customState.sortBy === 'completion') {
      return self.getCompletion(a) - self.getCompletion(b);
    }
    return self.getStarNumber(b) - self.getStarNumber(a);
  });
  return sorted;
}
export function getCurrentPageContacts() {
  var list = this.getFilteredContacts();
  var totalPage = this.getTotalPage(list.length);
  if (_customState.currentPage > totalPage) _customState.currentPage = totalPage;
  var start = (_customState.currentPage - 1) * _customState.pageSize;
  return list.slice(start, start + _customState.pageSize);
}
export function getTotalPage(total) {
  var page = Math.ceil((total || 0) / _customState.pageSize);
  return page < 1 ? 1 : page;
}
export function ensureSelectedContact() {
  var list = this.getFilteredContacts();
  if (!list.length) {
    _customState.selectedContactId = '';
    return;
  }
  var exists = list.filter(item => item.formInstId === _customState.selectedContactId).length > 0;
  if (!exists) _customState.selectedContactId = list[0].formInstId;
}
export function handleSearchChange(e) {
  if (_customState._isComposing) return;
  _customState.keyword = e && e.target ? e.target.value : '';
  _customState.currentPage = 1;
  this.ensureSelectedContact();
  this.forceUpdate();
}
export function handleCompositionStart() {
  _customState._isComposing = true;
}
export function handleCompositionEnd(e) {
  _customState._isComposing = false;
  _customState.keyword = e && e.target ? e.target.value : _customState.keyword;
  _customState.currentPage = 1;
  this.ensureSelectedContact();
  this.forceUpdate();
}
export function handleSearchKeyDown(e) {
  if (_customState._isComposing) return;
  if (e && e.key === 'Enter') this.applyFilters();
}
export function applyFilters() {
  _customState.currentPage = 1;
  this.ensureSelectedContact();
  this.forceUpdate();
}
export function setVisitFilter(value) {
  _customState.visitFilter = value;
  this.applyFilters();
}
export function preventButtonFocus(e) {
  if (e && e.preventDefault) e.preventDefault();
}
export function clearButtonFocus(e) {
  var target = e && (e.currentTarget || e.target);
  if (target && target.blur) target.blur();
}
export function toggleIncompleteFilter() {
  _customState.incompleteOnly = !_customState.incompleteOnly;
  if (_customState.incompleteOnly) _customState.sortBy = 'completion';
  this.applyFilters();
}
export function toggleFilterPanel() {
  _customState.showFilters = !_customState.showFilters;
  this.forceUpdate();
}
export function setStatusFilter(e) {
  _customState.statusFilter = e && e.target ? e.target.value : '全部';
  this.applyFilters();
}
export function setStatusFilterValue(value) {
  _customState.statusFilter = _customState.statusFilter === value ? '全部' : value;
  this.applyFilters();
}
export function setStarFilter(e) {
  _customState.starFilter = e && e.target ? e.target.value : '全部';
  this.applyFilters();
}
export function setStarFilterValue(value) {
  _customState.starFilter = _customState.starFilter === value ? '全部' : value;
  this.applyFilters();
}
export function setTagFilter(value) {
  _customState.tagFilter = value || '全部';
  this.applyFilters();
}
export function setSortBy(value) {
  var nextValue = value && value.target ? value.target.value : value;
  _customState.sortBy = nextValue || 'star';
  _customState.sortMenuOpen = false;
  this.applyFilters();
}
export function toggleSortMenu() {
  _customState.sortMenuOpen = !_customState.sortMenuOpen;
  this.forceUpdate();
}
export function resetFilters() {
  _customState.keyword = '';
  _customState.visitFilter = '全部';
  _customState.statusFilter = '全部';
  _customState.starFilter = '全部';
  _customState.tagFilter = '全部';
  _customState.incompleteOnly = false;
  _customState.sortBy = 'star';
  _customState.sortMenuOpen = false;
  _customState.currentPage = 1;
  ['contact-keyword-main', 'contact-keyword-mobile'].forEach(id => {
    var input = document.getElementById(id);
    if (input) input.value = '';
  });
  this.ensureSelectedContact();
  this.forceUpdate();
}
export function goPage(delta) {
  var list = this.getFilteredContacts();
  var totalPage = this.getTotalPage(list.length);
  var next = _customState.currentPage + delta;
  if (next < 1) next = 1;
  if (next > totalPage) next = totalPage;
  _customState.currentPage = next;
  this.forceUpdate();
}
export function selectContact(id) {
  _customState.selectedContactId = id;
  this.forceUpdate();
}
export function refreshData() {
  this.utils.toast({
    title: '正在刷新联系人',
    type: 'notice'
  });
  this.loadData(true);
}
export function openForm(formUuid) {
  this.utils.router.push(formUuid, {}, false);
}
export function openSubmissionForm(formUuid) {
  var base = typeof window !== 'undefined' && window.location ? window.location.origin : '';
  window.location.href = base + '/' + APP_TYPE + '/submission/' + formUuid;
}
export function openDetail(formUuid, formInstId) {
  if (!formInstId) {
    this.openForm(formUuid);
    return;
  }
  this.utils.router.push(formUuid, {
    formInstId: formInstId
  }, true);
}
export function openContactDetail(formInstId) {
  if (!formInstId) return;
  this.utils.router.push(FORMS.contactDetail, {
    contactId: formInstId
  }, false);
}
export function handleNav(action) {
  if (action === 'home') this.openForm(FORMS.home);
  if (action === 'contact') this.refreshData();
  if (action === 'visit') this.openForm(FORMS.visit);
  if (action === 'project') this.openForm(FORMS.project);
  if (action === 'unit') this.openForm(FORMS.unit);
  if (action === 'reminder') this.openForm(FORMS.reminder);
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
  })}>
      {text || '-'}
    </span>;
}
export function renderButton(label, type, onClick) {
  var primary = type === 'primary';
  return <button onClick={e => {
    if (onClick) onClick(e);
  }} style={Object.assign({}, styles.button, primary ? styles.buttonPrimary : styles.buttonDefault)}>
      {label === '新增联系人' && <span style={styles.buttonIcon}>+</span>}{label}
    </button>;
}
export function getSortOptions() {
  return [{
    value: 'star',
    label: '按星级排序'
  }, {
    value: 'recent',
    label: '按最近拜访'
  }, {
    value: 'nextDue',
    label: '按下次截止'
  }, {
    value: 'completion',
    label: '按完整度补齐'
  }];
}
export function getSortLabel() {
  var options = this.getSortOptions();
  for (var i = 0; i < options.length; i++) {
    if (options[i].value === _customState.sortBy) return options[i].label;
  }
  return options[0].label;
}
export function renderSortDropdown() {
  var self = this;
  var options = this.getSortOptions();
  return <div style={styles.sortDropdown}>
      <button onClick={e => {
      self.toggleSortMenu();
    }} style={styles.sortButton}>
        <span>{this.getSortLabel()}</span>
        <span style={styles.sortCaret}>⌄</span>
      </button>
      {_customState.sortMenuOpen && <div style={styles.sortMenu}>
          {options.map(item => {
        var active = item.value === _customState.sortBy;
        return <button key={item.value} onClick={e => {
          self.setSortBy(item.value);
        }} style={Object.assign({}, styles.sortOption, active ? styles.sortOptionActive : {})}>
              {item.label}
            </button>;
      })}
        </div>}
    </div>;
}
export function renderStars(contact) {
  var count = this.getStarNumber(contact);
  var stars = [1, 2, 3, 4, 5];
  return <span style={styles.stars}>
      {stars.map(item => <span key={item} style={item <= count ? styles.starOn : styles.starOff}>★</span>)}
    </span>;
}
export function renderAvatar(contact) {
  var name = this.getValue(contact, FIELDS.contact.name);
  return <div style={styles.avatar}>{this.getInitial(name)}</div>;
}
export function renderNav(isMobile) {
  var self = this;
  var items = [{
    label: '首页总览',
    action: 'home',
    icon: '▦'
  }, {
    label: '联系人管理',
    action: 'contact',
    icon: '◎'
  }, {
    label: '拜访记录',
    action: 'visit',
    icon: '□'
  }, {
    label: '项目管理',
    action: 'project',
    icon: '◇'
  }, {
    label: '单位档案',
    action: 'unit',
    icon: '▤'
  }, {
    label: '提醒待办',
    action: 'reminder',
    icon: '○'
  }];
  if (isMobile) {
    return <div style={styles.mobileNav}>
        {items.map(item => {
        var active = item.action === 'contact';
        return <button key={item.action} onClick={e => {
          self.handleNav(item.action);
        }} style={Object.assign({}, styles.mobileNavItem, active ? styles.navActive : {})}>
              <span>{item.icon}</span><span>{item.label}</span>
            </button>;
      })}
      </div>;
  }
  return <aside style={styles.sidebar}>
      <div style={styles.brand}>
        <div style={styles.brandMark}>系</div>
        <div>
          <div style={styles.brandTitle}>关系管理系统</div>
          <div style={styles.brandSub}>RMS v1.0</div>
        </div>
      </div>
      <div style={styles.navList}>
        {items.map(item => {
        var active = item.action === 'contact';
        return <button key={item.action} onClick={e => {
          self.handleNav(item.action);
        }} style={Object.assign({}, styles.navItem, active ? styles.navActive : {})}>
              <span style={styles.navIcon}>{item.icon}</span>
              <span>{item.label}</span>
            </button>;
      })}
      </div>
      <div style={styles.userBox}>
        <div style={styles.userAvatar}>王</div>
        <div style={styles.userText}>
          <div style={styles.userName}>王经理</div>
          <div style={styles.userRole}>业务负责人</div>
        </div>
      </div>
    </aside>;
}
export function renderTopbar(isMobile) {
  return <div style={isMobile ? styles.topbarMobile : styles.topbar}>
      <div style={styles.topTitle}>联系人管理</div>
    </div>;
}
export function renderHero(isMobile) {
  var metric = this.getMetricData();
  return <div style={isMobile ? styles.heroMobile : styles.hero}>
      <div>
        <div style={styles.pageTitle}>联系人管理</div>
        <div style={styles.pageSub}>共 {metric.total} 位联系人</div>
      </div>
      <div style={styles.heroActions}>
        {this.renderButton('新增联系人', 'primary', e => {
        this.openSubmissionForm(FORMS.contact);
      })}
      </div>
    </div>;
}
export function renderFilterBar(isMobile) {
  var self = this;
  var statusOptions = ['活跃', '待维护', '暂缓', '失联', '离退休'];
  var starOptions = ['5星', '4星', '3星', '2星', '1星'];
  var tagOptions = this.getAllTags();
  var hasFilters = this.hasActiveFilters();
  return <div style={styles.filterPanel}>
      <div style={isMobile ? styles.filterRowMobile : styles.filterRow}>
        <div style={styles.mainSearch}>
          <span style={styles.searchIcon}>⌕</span>
          <input id={isMobile ? 'contact-keyword-mobile' : 'contact-keyword-main'} defaultValue={_customState.keyword} placeholder="搜索姓名、别名、单位、岗位、地区..." onCompositionStart={e => {
          self.handleCompositionStart(e);
        }} onCompositionEnd={e => {
          self.handleCompositionEnd(e);
        }} onChange={e => {
          self.handleSearchChange(e);
        }} onKeyDown={e => {
          self.handleSearchKeyDown(e);
        }} style={styles.filterInput} />
          {_customState.keyword && <button onClick={e => {
          _customState.keyword = '';
          _customState.currentPage = 1;
          var input = document.getElementById(isMobile ? 'contact-keyword-mobile' : 'contact-keyword-main');
          if (input) input.value = '';
          self.ensureSelectedContact();
          self.forceUpdate();
        }} style={styles.clearSearch}>×</button>}
        </div>
        <div style={styles.filterActions}>
          <button onClick={e => {
          self.toggleFilterPanel();
        }} style={Object.assign({}, styles.button, styles.buttonDefault, _customState.showFilters || hasFilters ? styles.filterButtonActive : {})}>
            <span style={styles.filterIcon}>☷</span>筛选{hasFilters && <span style={styles.filterDot}>!</span>}
          </button>
          {this.renderButton('重置', 'default', e => {
          this.resetFilters();
        })}
          {this.renderSortDropdown()}
        </div>
      </div>
      {_customState.showFilters && <div style={styles.filterLine}>
          <div style={styles.filterGroup}>
            <span style={styles.filterLabel}>状态:</span>
            <div style={styles.segmentWrap}>
              {statusOptions.map(item => <button key={item} onMouseDown={e => {
            self.preventButtonFocus(e);
          }} onClick={e => {
            self.clearButtonFocus(e);
            self.setStatusFilterValue(item);
          }} style={Object.assign({}, styles.segment, _customState.statusFilter === item ? styles.segmentActive : {})}>{item}</button>)}
            </div>
          </div>
          <div style={styles.filterGroup}>
            <span style={styles.filterLabel}>星级:</span>
            <div style={styles.segmentWrap}>
              {starOptions.map(item => <button key={item} onMouseDown={e => {
            self.preventButtonFocus(e);
          }} onClick={e => {
            self.clearButtonFocus(e);
            self.setStarFilterValue(item);
          }} style={Object.assign({}, styles.segment, styles.starSegment, _customState.starFilter === item ? styles.starSegmentActive : {})}>{'★'.repeat(parseInt(item, 10))}</button>)}
            </div>
          </div>
          <div style={styles.filterGroup}>
            <span style={styles.filterLabel}>快捷:</span>
            <div style={styles.segmentWrap}>
              <button onMouseDown={e => {
            self.preventButtonFocus(e);
          }} onClick={e => {
            self.clearButtonFocus(e);
            self.setVisitFilter(_customState.visitFilter === '拜访风险' ? '全部' : '拜访风险');
          }} style={Object.assign({}, styles.segment, _customState.visitFilter === '拜访风险' ? styles.riskSegmentActive : {})}>拜访超期</button>
              <button onMouseDown={e => {
            self.preventButtonFocus(e);
          }} onClick={e => {
            self.clearButtonFocus(e);
            self.toggleIncompleteFilter();
          }} style={Object.assign({}, styles.segment, _customState.incompleteOnly ? styles.starSegmentActive : {})}>资料不足</button>
            </div>
          </div>
          {tagOptions.length > 0 && <div style={styles.filterGroupWide}>
              <span style={styles.filterLabel}>标签:</span>
              <div style={styles.segmentWrap}>
                {tagOptions.slice(0, 18).map(item => <button key={item} onMouseDown={e => {
              self.preventButtonFocus(e);
            }} onClick={e => {
              self.clearButtonFocus(e);
              self.setTagFilter(_customState.tagFilter === item ? '全部' : item);
            }} style={Object.assign({}, styles.segment, _customState.tagFilter === item ? styles.tagSegmentActive : {})}>{item}</button>)}
              </div>
            </div>}
          {hasFilters && <button onMouseDown={e => {
          self.preventButtonFocus(e);
        }} onClick={e => {
          self.clearButtonFocus(e);
          self.resetFilters();
        }} style={styles.clearFilters}>× 清除筛选</button>}
        </div>}
    </div>;
}
export function renderMetrics(isMobile) {
  var metric = this.getMetricData();
  var cards = [{
    title: '联系人',
    value: metric.total,
    sub: isMobile ? '活跃 ' + metric.active : '活跃 ' + metric.active + ' 人',
    tone: 'blue'
  }, {
    title: '待维护',
    value: metric.incomplete,
    sub: isMobile ? '资料不足' : '资料完整度低于80%',
    tone: 'orange'
  }, {
    title: '拜访风险',
    value: metric.overdue + metric.soon,
    sub: isMobile ? '超期' + metric.overdue + ' 即将' + metric.soon : '超期 ' + metric.overdue + ' / 即将 ' + metric.soon,
    tone: 'red'
  }];
  return <div style={isMobile ? styles.metricGridMobile : styles.metricGrid}>
      {cards.map(item => <div key={item.title} style={styles.metricCard}>
          <div style={styles.metricLabel}>{item.title}</div>
          <div style={Object.assign({}, styles.metricValue, item.tone === 'red' ? styles.metricRed : item.tone === 'orange' ? styles.metricOrange : styles.metricBlue)}>{item.value}</div>
          <div style={styles.metricSub}>{item.sub}</div>
        </div>)}
    </div>;
}
export function renderCompletion(contact) {
  var value = this.getCompletion(contact);
  var tone = value < 60 ? styles.progressDanger : value < 80 ? styles.progressWarning : styles.progressSuccess;
  var tips = this.getMissingTips(contact);
  return <div style={styles.progressWrap} title={tips} aria-label={tips}>
      <div style={styles.progressTrack}>
        <div style={Object.assign({}, styles.progressBar, tone, {
        width: value + '%'
      })}></div>
      </div>
      <span style={styles.progressText}>{value}%</span>
    </div>;
}
export function renderTags(contact, compact) {
  var list = this.getContactTags(contact);
  if (!list.length) return <span style={styles.emptyInline}>-</span>;
  var visibleCount = compact ? 2 : 2;
  return <div style={styles.tagList}>
      {list.slice(0, visibleCount).map(tag => <span key={tag} style={styles.tag}>{tag}</span>)}
      {list.length > visibleCount && <span style={styles.moreText}>+{list.length - visibleCount}</span>}
    </div>;
}
export function renderVisitStatus(contact) {
  var status = this.getVisitRisk(contact);
  var date = this.formatDate(this.getValue(contact, FIELDS.contact.lastVisit));
  var tone = this.statusTone(status);
  var icon = tone === 'success' ? '✓' : tone === 'warning' ? '◷' : tone === 'danger' ? '!' : '';
  return <div style={styles.visitCell}>
      <div style={Object.assign({}, styles.visitStatusLine, tone === 'success' ? styles.visitSuccess : tone === 'warning' ? styles.visitWarning : tone === 'danger' ? styles.visitDanger : styles.visitDefault)}>
        {icon && <span style={styles.visitIcon}>{icon}</span>}
        <span>{status}</span>
      </div>
      <div style={styles.dateText}>{date}</div>
    </div>;
}
export function renderTable(isMobile) {
  var self = this;
  var list = this.getCurrentPageContacts();
  var filtered = this.getFilteredContacts();
  var totalPage = this.getTotalPage(filtered.length);
  return <div style={styles.tablePanel}>
      {filtered.length === 0 ? this.renderEmpty('暂无匹配联系人') : <div style={styles.tableScroll}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={Object.assign({}, styles.th, {
              width: '22%'
            })}>联系人</th>
                <th style={Object.assign({}, styles.th, {
              width: '17%'
            })}>单位/岗位</th>
                <th style={Object.assign({}, styles.th, {
              width: '9%'
            })}>星级</th>
                <th style={Object.assign({}, styles.th, {
              width: '8%'
            })}>状态</th>
                <th style={Object.assign({}, styles.th, {
              width: '13%'
            })}>最近拜访</th>
                <th style={Object.assign({}, styles.th, {
              width: '9%'
            })}>完整度</th>
                <th style={Object.assign({}, styles.th, {
              width: '16%'
            })}>标签</th>
                <th style={Object.assign({}, styles.th, {
              width: '6%',
              textAlign: 'right'
            })}>操作</th>
              </tr>
            </thead>
            <tbody>
              {list.map(item => {
            var name = self.getValue(item, FIELDS.contact.name);
            var ageText = self.calculateAge(self.rawValue(item, FIELDS.contact.birthDate));
            var ownerText = '主维护人：' + self.getValue(item, FIELDS.contact.owner);
            var selected = item.formInstId === _customState.selectedContactId;
            return <tr key={item.formInstId} onClick={e => {
              self.openContactDetail(item.formInstId);
            }} style={selected ? styles.trActive : styles.tr}>
                    <td style={styles.td}>
                      <div style={styles.personCell}>
                        {self.renderAvatar(item)}
                        <div style={styles.personText}>
                          <div style={styles.nameLine}>
                            <span style={styles.nameText}>{name}</span>
                            <span style={styles.aliasText}>{self.getValue(item, FIELDS.contact.alias) !== '-' ? '（' + self.getValue(item, FIELDS.contact.alias) + '）' : ''}</span>
                            {self.getValue(item, FIELDS.contact.stage) === '关键关系' && self.renderBadge('决策', 'danger')}
                          </div>
                          <div style={styles.subText}>{ownerText}{ageText !== '-' ? ' · 年龄：' + ageText : ''}</div>
                        </div>
                      </div>
                    </td>
                    <td style={styles.td}>
                      <div style={styles.primaryText}>{self.getValue(item, FIELDS.contact.position)}</div>
                      <div style={styles.subText}>{self.getUnitName(item)}</div>
                    </td>
                    <td style={styles.td}>{self.renderStars(item)}</td>
                    <td style={styles.td}>{self.renderBadge(self.getValue(item, FIELDS.contact.status), self.statusTone(self.getValue(item, FIELDS.contact.status)))}</td>
                    <td style={styles.td}>{self.renderVisitStatus(item)}</td>
                    <td style={styles.td}>{self.renderCompletion(item)}</td>
                    <td style={styles.td}>{self.renderTags(item, false)}</td>
                    <td style={Object.assign({}, styles.td, {
                textAlign: 'right'
              })}>
                      <button onClick={e => {
                  e.stopPropagation();
                  self.openContactDetail(item.formInstId);
                }} style={styles.linkButton}>
                        详情 ›
                      </button>
                    </td>
                  </tr>;
          })}
            </tbody>
          </table>
        </div>}
      <div style={styles.pager}>
        <span>第 {_customState.currentPage} / {totalPage} 页，共 {filtered.length} 条</span>
        <div style={styles.pagerActions}>
          <button onClick={e => {
          self.goPage(-1);
        }} style={styles.pagerButton}>上一页</button>
          <button onClick={e => {
          self.goPage(1);
        }} style={styles.pagerButton}>下一页</button>
        </div>
      </div>
    </div>;
}
export function renderMobileList() {
  var self = this;
  var list = this.getFilteredContacts();
  return <div style={styles.mobileList}>
      {list.length === 0 ? this.renderEmpty('暂无匹配联系人') : list.map(item => <div key={item.formInstId} style={styles.mobileCard} onClick={e => {
      self.openContactDetail(item.formInstId);
    }}>
          <div style={styles.mobileCardHead}>
            <div style={styles.personCell}>
              {self.renderAvatar(item)}
              <div style={styles.personText}>
                <div style={styles.nameLine}>
                  <span style={styles.nameText}>{self.getValue(item, FIELDS.contact.name)}</span>
                  {self.renderBadge(self.getValue(item, FIELDS.contact.status), self.statusTone(self.getValue(item, FIELDS.contact.status)))}
                </div>
                <div style={styles.subText}>{self.getValue(item, FIELDS.contact.position)} · {self.getUnitName(item)}{self.calculateAge(self.rawValue(item, FIELDS.contact.birthDate)) !== '-' ? ' · 年龄：' + self.calculateAge(self.rawValue(item, FIELDS.contact.birthDate)) : ''}</div>
              </div>
            </div>
            <button onClick={e => {
          e.stopPropagation();
          self.openContactDetail(item.formInstId);
        }} style={styles.linkButton}>
              详情
            </button>
          </div>
          <div style={styles.mobileMeta}>
            <div>{self.renderStars(item)}</div>
            <div>{self.renderVisitStatus(item)}</div>
            <div>{self.renderCompletion(item)}</div>
          </div>
          <div style={styles.mobileTags}>{self.renderTags(item, true)}</div>
        </div>)}
    </div>;
}
export function renderMiniStat(label, value) {
  return <div style={styles.miniStat}>
      <b>{value}</b>
      <span>{label}</span>
    </div>;
}
export function renderInsightBlock(title, children) {
  return <div style={styles.insightBlock}>
      <div style={styles.insightBlockTitle}>{title}</div>
      {children}
    </div>;
}
export function renderContactInsightPanel(isMobile) {
  var contact = this.getSelectedContact();
  if (!contact) return null;
  var visits = this.getRelatedVisits(contact);
  var relations = this.getRelatedRelations(contact);
  var reminders = this.getRelatedReminders(contact);
  var intel = this.getRelatedIntel(contact);
  var ageText = this.calculateAge(this.rawValue(contact, FIELDS.contact.birthDate));
  var latestVisit = visits[0];
  var nextReminder = reminders.filter(item => {
    var status = this.getValue(item, FIELDS.reminder.status);
    return status !== '已处理' && status !== '无需处理';
  })[0];
  return <div style={styles.insightPanel}>
      <div style={isMobile ? styles.insightHeadMobile : styles.insightHead}>
        <div>
          <div style={styles.insightTitle}>{this.getValue(contact, FIELDS.contact.name)} 的关系总览</div>
          <div style={styles.insightSub}>{this.getUnitName(contact)} · {this.getValue(contact, FIELDS.contact.position)}{ageText !== '-' ? ' · 年龄：' + ageText : ''}</div>
        </div>
        <div style={styles.miniStatRow}>
          {this.renderMiniStat('拜访', visits.length)}
          {this.renderMiniStat('项目', relations.length)}
          {this.renderMiniStat('提醒', reminders.length)}
          {this.renderMiniStat('情报', intel.length)}
        </div>
      </div>
      <div style={isMobile ? styles.insightGridMobile : styles.insightGrid}>
        {this.renderInsightBlock('最近拜访', latestVisit ? <div>
            <div style={styles.insightPrimary}>{this.getValue(latestVisit, FIELDS.visit.title)}</div>
            <div style={styles.insightSub}>{this.formatDate(this.rawValue(latestVisit, FIELDS.visit.time))} · {this.getValue(latestVisit, FIELDS.visit.method)}</div>
            <div style={styles.insightText}>{this.getValue(latestVisit, FIELDS.visit.content)}</div>
          </div> : <div style={styles.emptyInline}>暂无拜访记录</div>)}
        {this.renderInsightBlock('关联项目角色', relations.length ? <div style={styles.relationList}>
            {relations.slice(0, 3).map(item => <div key={this.getRowId(item)} style={styles.relationItem}>
                <div style={styles.insightPrimary}>{this.getProjectNameFromRelation(item)}</div>
                <div style={styles.insightSub}>{this.getValue(item, FIELDS.relation.role)} · 影响 {this.getValue(item, FIELDS.relation.influence)} · {this.getValue(item, FIELDS.relation.attitude)}</div>
                <div style={styles.insightText}>{this.getValue(item, FIELDS.relation.nextAction)}</div>
              </div>)}
          </div> : <div style={styles.emptyInline}>暂无项目关系</div>)}
        {this.renderInsightBlock('下一步提醒', nextReminder ? <div>
            <div style={styles.insightPrimary}>{this.getValue(nextReminder, FIELDS.reminder.title)}</div>
            <div style={styles.insightSub}>{this.formatDate(this.rawValue(nextReminder, FIELDS.reminder.date))} · {this.getValue(nextReminder, FIELDS.reminder.status)}</div>
          </div> : <div style={styles.emptyInline}>暂无待处理提醒</div>)}
      </div>
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
    width: '220px',
    minHeight: '100vh',
    background: '#101828',
    color: '#FFFFFF',
    flexShrink: 0,
    position: 'relative'
  },
  brand: {
    height: '56px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '0 14px',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
    boxSizing: 'border-box'
  },
  brandMark: {
    width: '32px',
    height: '32px',
    borderRadius: '8px',
    background: '#2563FF',
    color: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '15px',
    fontWeight: 800,
    flexShrink: 0
  },
  brandTitle: {
    fontSize: '14px',
    lineHeight: '18px',
    fontWeight: 800
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
    borderRadius: '8px',
    padding: '0 12px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '14px',
    cursor: 'pointer',
    boxSizing: 'border-box'
  },
  navIcon: {
    width: '18px',
    display: 'inline-flex',
    justifyContent: 'center'
  },
  navActive: {
    background: '#155EEF',
    color: '#FFFFFF',
    borderColor: '#155EEF'
  },
  userBox: {
    position: 'absolute',
    left: '8px',
    right: '8px',
    bottom: '52px',
    minHeight: '40px',
    borderRadius: '8px',
    background: 'rgba(255,255,255,0.08)',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '8px',
    boxSizing: 'border-box'
  },
  userAvatar: {
    width: '28px',
    height: '28px',
    borderRadius: '8px',
    background: '#2563FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 800,
    flexShrink: 0
  },
  userText: {
    minWidth: 0
  },
  userName: {
    fontSize: '13px',
    color: '#FFFFFF',
    fontWeight: 700
  },
  userRole: {
    fontSize: '11px',
    color: '#D0D5DD',
    marginTop: '1px'
  },
  mobileNav: {
    display: 'flex',
    gap: '8px',
    overflowX: 'auto',
    background: '#101828',
    padding: '10px 12px',
    boxSizing: 'border-box'
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
    padding: '0 14px 0 16px',
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
    fontSize: '17px',
    fontWeight: 800,
    color: '#111827'
  },
  topRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  topSearch: {
    width: '260px',
    height: '32px',
    borderRadius: '8px',
    background: '#F2F4F7',
    display: 'flex',
    alignItems: 'center',
    padding: '0 10px',
    boxSizing: 'border-box'
  },
  topSearchMobile: {
    width: '100%',
    height: '34px',
    borderRadius: '8px',
    background: '#F2F4F7',
    display: 'flex',
    alignItems: 'center',
    padding: '0 10px',
    boxSizing: 'border-box'
  },
  iconButton: {
    width: '32px',
    height: '32px',
    borderRadius: '8px',
    border: '1px solid #EAECF0',
    background: '#FFFFFF',
    color: '#344054',
    cursor: 'pointer',
    fontSize: '15px'
  },
  searchIcon: {
    color: '#98A2B3',
    fontSize: '15px',
    marginRight: '8px',
    flexShrink: 0
  },
  searchInput: {
    width: '100%',
    border: 'none',
    outline: 'none',
    background: 'transparent',
    fontSize: '13px',
    color: '#344054',
    height: '30px',
    boxSizing: 'border-box'
  },
  content: {
    padding: '24px 32px 36px',
    maxWidth: '1280px',
    margin: '0 auto',
    boxSizing: 'border-box'
  },
  contentMobile: {
    padding: '14px 12px',
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
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
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
  buttonIcon: {
    fontSize: '18px',
    lineHeight: '16px',
    fontWeight: 500
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
  filterPanel: {
    background: '#FFFFFF',
    border: '1px solid #EAECF0',
    borderRadius: '12px',
    padding: '16px',
    marginBottom: '16px',
    boxSizing: 'border-box'
  },
  filterRow: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  },
  filterRowMobile: {
    display: 'grid',
    gap: '10px'
  },
  mainSearch: {
    flex: 1,
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
  filterActions: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  filterButtonActive: {
    borderColor: '#B9D6FF',
    background: '#EFF6FF',
    color: '#155EEF'
  },
  filterIcon: {
    fontSize: '15px',
    lineHeight: '14px'
  },
  filterDot: {
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    background: '#155EEF',
    color: '#FFFFFF',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    lineHeight: '18px'
  },
  clearSearch: {
    width: '22px',
    height: '22px',
    border: 'none',
    background: 'transparent',
    color: '#98A2B3',
    cursor: 'pointer',
    fontSize: '18px',
    lineHeight: '20px',
    padding: '0'
  },
  filterLine: {
    display: 'flex',
    gap: '14px',
    flexWrap: 'wrap',
    marginTop: '16px',
    paddingTop: '16px',
    borderTop: '1px solid #F2F4F7',
    alignItems: 'center'
  },
  filterGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    minHeight: '28px'
  },
  filterGroupWide: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px',
    minHeight: '28px',
    maxWidth: '100%'
  },
  filterLabel: {
    color: '#667085',
    fontSize: '12px',
    whiteSpace: 'nowrap',
    lineHeight: '28px'
  },
  segmentWrap: {
    display: 'flex',
    gap: '6px',
    flexWrap: 'wrap',
    minWidth: 0
  },
  segment: {
    height: '28px',
    borderRadius: '999px',
    padding: '0 12px',
    border: '1px solid #EAECF0',
    background: '#FFFFFF',
    color: '#475467',
    fontSize: '13px',
    cursor: 'pointer',
    outline: 'none',
    outlineOffset: 0,
    boxShadow: 'none',
    WebkitAppearance: 'none',
    WebkitTapHighlightColor: 'transparent'
  },
  segmentActive: {
    color: '#155EEF',
    background: '#EAF2FF',
    borderColor: '#B9D6FF',
    fontWeight: 700
  },
  starSegment: {
    color: '#92400E'
  },
  starSegmentActive: {
    color: '#FFFFFF',
    background: '#F59E0B',
    borderColor: '#F59E0B',
    fontWeight: 700
  },
  riskSegmentActive: {
    color: '#FFFFFF',
    background: '#D92D20',
    borderColor: '#D92D20',
    fontWeight: 700
  },
  tagSegmentActive: {
    color: '#FFFFFF',
    background: '#7C3AED',
    borderColor: '#7C3AED',
    fontWeight: 700
  },
  clearFilters: {
    border: 'none',
    background: 'transparent',
    color: '#F04438',
    fontSize: '12px',
    cursor: 'pointer',
    height: '28px',
    padding: '0 4px',
    outline: 'none'
  },
  sortDropdown: {
    position: 'relative',
    height: '38px'
  },
  sortButton: {
    height: '38px',
    minWidth: '132px',
    borderRadius: '8px',
    border: '1px solid #D0D5DD',
    background: '#FFFFFF',
    color: '#344054',
    padding: '0 10px 0 12px',
    fontSize: '14px',
    outline: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '8px',
    boxSizing: 'border-box'
  },
  sortCaret: {
    color: '#667085',
    fontSize: '13px',
    lineHeight: '13px'
  },
  sortMenu: {
    position: 'absolute',
    top: '42px',
    right: 0,
    minWidth: '144px',
    padding: '4px',
    borderRadius: '8px',
    border: '1px solid #EAECF0',
    background: '#FFFFFF',
    boxShadow: '0 10px 24px rgba(16, 24, 40, 0.14)',
    zIndex: 20,
    boxSizing: 'border-box'
  },
  sortOption: {
    width: '100%',
    height: '32px',
    border: 'none',
    borderRadius: '6px',
    background: '#FFFFFF',
    color: '#344054',
    fontSize: '13px',
    textAlign: 'left',
    padding: '0 10px',
    cursor: 'pointer',
    outline: 'none',
    boxSizing: 'border-box'
  },
  sortOptionActive: {
    background: '#EFF6FF',
    color: '#155EEF',
    fontWeight: 700
  },
  selectSmall: {
    height: '30px',
    borderRadius: '8px',
    border: '1px solid #EAECF0',
    background: '#FFFFFF',
    color: '#475467',
    padding: '0 10px',
    fontSize: '13px',
    outline: 'none'
  },
  metricGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: '12px',
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
    boxSizing: 'border-box',
    minHeight: '86px',
    boxShadow: '0 6px 18px rgba(16,24,40,0.04)'
  },
  metricLabel: {
    color: '#667085',
    fontSize: '12px',
    marginBottom: '6px'
  },
  metricValue: {
    fontSize: '26px',
    lineHeight: '28px',
    fontWeight: 800
  },
  metricBlue: {
    color: '#155EEF'
  },
  metricOrange: {
    color: '#B54708'
  },
  metricRed: {
    color: '#B42318'
  },
  metricSub: {
    color: '#667085',
    fontSize: '12px',
    marginTop: '6px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  tablePanel: {
    background: '#FFFFFF',
    border: '1px solid #EAECF0',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 8px 22px rgba(16,24,40,0.04)'
  },
  tableScroll: {
    overflowX: 'auto'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    tableLayout: 'fixed'
  },
  th: {
    height: '42px',
    padding: '0 16px',
    borderBottom: '1px solid #EAECF0',
    background: '#FCFCFD',
    color: '#667085',
    fontSize: '13px',
    fontWeight: 600,
    textAlign: 'left',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box'
  },
  tr: {
    cursor: 'pointer',
    background: '#FFFFFF'
  },
  trActive: {
    cursor: 'pointer',
    background: '#F8FBFF'
  },
  td: {
    minHeight: '64px',
    padding: '12px 16px',
    borderBottom: '1px solid #F2F4F7',
    color: '#101828',
    fontSize: '14px',
    verticalAlign: 'middle',
    boxSizing: 'border-box'
  },
  personCell: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    minWidth: 0
  },
  avatar: {
    width: '36px',
    height: '36px',
    borderRadius: '18px',
    background: '#4087FF',
    color: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    fontWeight: 800,
    flexShrink: 0
  },
  personText: {
    minWidth: 0
  },
  nameLine: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    minWidth: 0,
    overflow: 'hidden'
  },
  nameText: {
    fontWeight: 800,
    color: '#101828',
    whiteSpace: 'nowrap'
  },
  aliasText: {
    color: '#667085',
    fontSize: '13px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  primaryText: {
    fontWeight: 700,
    color: '#344054',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  subText: {
    color: '#667085',
    fontSize: '12px',
    lineHeight: '18px',
    marginTop: '2px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    minHeight: '22px',
    borderRadius: '8px',
    padding: '1px 8px',
    fontSize: '12px',
    lineHeight: '18px',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box'
  },
  stars: {
    whiteSpace: 'nowrap',
    letterSpacing: '1px',
    fontSize: '17px',
    lineHeight: '20px',
    fontWeight: 800
  },
  starOn: {
    color: '#F59E0B',
    marginRight: '1px'
  },
  starOff: {
    color: '#D0D5DD',
    marginRight: '1px'
  },
  dateText: {
    color: '#667085',
    fontSize: '12px',
    marginTop: '3px',
    whiteSpace: 'nowrap'
  },
  visitCell: {
    display: 'grid',
    gap: '2px',
    alignContent: 'center'
  },
  visitStatusLine: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '12px',
    lineHeight: '18px',
    fontWeight: 600,
    whiteSpace: 'nowrap'
  },
  visitIcon: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    border: '1px solid currentColor',
    fontSize: '9px',
    lineHeight: '10px',
    boxSizing: 'border-box'
  },
  visitSuccess: {
    color: '#039855'
  },
  visitWarning: {
    color: '#DC6803'
  },
  visitDanger: {
    color: '#D92D20'
  },
  visitDefault: {
    color: '#98A2B3'
  },
  progressWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    minWidth: '86px',
    cursor: 'help'
  },
  progressTrack: {
    flex: 1,
    minWidth: '34px',
    height: '6px',
    borderRadius: '3px',
    background: '#EAECF0',
    overflow: 'hidden'
  },
  progressBar: {
    height: '6px',
    borderRadius: '3px'
  },
  progressSuccess: {
    background: '#12B76A'
  },
  progressWarning: {
    background: '#F59E0B'
  },
  progressDanger: {
    background: '#F04438'
  },
  progressText: {
    color: '#475467',
    fontSize: '12px',
    minWidth: '32px'
  },
  tagList: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    flexWrap: 'nowrap',
    maxWidth: '100%',
    overflow: 'hidden'
  },
  tag: {
    display: 'inline-flex',
    alignItems: 'center',
    maxWidth: '98px',
    minHeight: '22px',
    borderRadius: '8px',
    background: '#EAF2FF',
    color: '#155EEF',
    fontSize: '12px',
    padding: '1px 7px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    boxSizing: 'border-box'
  },
  moreText: {
    color: '#667085',
    fontSize: '12px',
    whiteSpace: 'nowrap',
    flexShrink: 0
  },
  emptyInline: {
    color: '#98A2B3',
    fontSize: '13px'
  },
  linkButton: {
    border: 'none',
    background: 'transparent',
    color: '#155EEF',
    fontSize: '13px',
    fontWeight: 700,
    padding: '0',
    cursor: 'pointer',
    whiteSpace: 'nowrap'
  },
  pager: {
    minHeight: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '12px',
    padding: '0 16px',
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
    padding: '0 10px',
    borderRadius: '8px',
    border: '1px solid #D0D5DD',
    background: '#FFFFFF',
    color: '#344054',
    cursor: 'pointer'
  },
  mobileList: {
    display: 'grid',
    gap: '10px'
  },
  mobileCard: {
    background: '#FFFFFF',
    border: '1px solid #EAECF0',
    borderRadius: '8px',
    padding: '12px',
    boxSizing: 'border-box',
    boxShadow: '0 4px 14px rgba(16,24,40,0.04)'
  },
  mobileCardHead: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px',
    alignItems: 'flex-start'
  },
  mobileMeta: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
    marginTop: '12px',
    color: '#475467',
    fontSize: '12px'
  },
  mobileTags: {
    marginTop: '10px'
  },
  insightPanel: {
    background: '#FFFFFF',
    border: '1px solid #EAECF0',
    borderRadius: '8px',
    padding: '16px',
    marginTop: '16px',
    boxSizing: 'border-box',
    boxShadow: '0 6px 18px rgba(16,24,40,0.04)'
  },
  insightHead: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '16px',
    alignItems: 'center',
    marginBottom: '14px'
  },
  insightHeadMobile: {
    display: 'grid',
    gap: '12px',
    marginBottom: '14px'
  },
  insightTitle: {
    fontSize: '16px',
    fontWeight: 800,
    color: '#101828'
  },
  insightSub: {
    fontSize: '12px',
    color: '#667085',
    lineHeight: '18px',
    marginTop: '2px'
  },
  miniStatRow: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
  },
  miniStat: {
    minWidth: '58px',
    height: '42px',
    borderRadius: '8px',
    border: '1px solid #EEF2F6',
    background: '#F8FAFC',
    display: 'grid',
    alignContent: 'center',
    justifyItems: 'center',
    boxSizing: 'border-box'
  },
  insightGrid: {
    display: 'grid',
    gridTemplateColumns: '1.1fr 1.4fr 0.9fr',
    gap: '12px'
  },
  insightGridMobile: {
    display: 'grid',
    gap: '10px'
  },
  insightBlock: {
    border: '1px solid #EEF2F6',
    background: '#FCFCFD',
    borderRadius: '8px',
    padding: '12px',
    boxSizing: 'border-box',
    minWidth: 0
  },
  insightBlockTitle: {
    fontSize: '12px',
    color: '#667085',
    fontWeight: 700,
    marginBottom: '8px'
  },
  insightPrimary: {
    fontSize: '14px',
    color: '#101828',
    lineHeight: '20px',
    fontWeight: 800,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  insightText: {
    fontSize: '13px',
    color: '#475467',
    lineHeight: '20px',
    marginTop: '6px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  relationList: {
    display: 'grid',
    gap: '10px'
  },
  relationItem: {
    minWidth: 0
  },
  empty: {
    padding: '44px 12px',
    color: '#98A2B3',
    textAlign: 'center',
    fontSize: '13px'
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
      {isMobile ? <div>
          {this.renderTopbar(true)}
          <div style={styles.contentMobile}>
            {this.renderHero(true)}
            {_customState.loading && <div style={styles.notice}>正在加载数据...</div>}
            {_customState.error && <div style={styles.error}>{_customState.error}</div>}
            {this.renderFilterBar(true)}
            {this.renderMobileList()}
          </div>
        </div> : <div>
          {this.renderTopbar(false)}
          <div style={styles.content}>
            {this.renderHero(false)}
            {_customState.loading && <div style={styles.notice}>正在加载数据...</div>}
            {_customState.error && <div style={styles.error}>{_customState.error}</div>}
            {this.renderFilterBar(false)}
            {this.renderTable(false)}
          </div>
        </div>}
    </div>;
}
