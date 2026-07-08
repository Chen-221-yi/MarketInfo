// 普通员工联系人详情 - 自定义页面

var APP_TYPE = 'APP_LC7BU43GCVLSI0TH8POE';
var FORMS = {
  contactManage: 'FORM-99CDE5F8732145A29304285F2E0A9B05D5CM',
  contactDetail: 'FORM-89CA116EA0134CACB77EAA0F87AA7AB8MD1C',
  visitDetail: 'FORM-6CC5A6BBE39F439CA213B8CC3BD7E429GQW1',
  projectDetail: 'FORM-3367C1CD6BDB4FE995BCA69ECFF03419Q0A4',
  unit: 'FORM-A96B2187A20640C68C9F7806CC1FEADDZZZ8',
  contact: 'FORM-87B25B011DC14AA5ACC39BE4077D520AITQS',
  project: 'FORM-DC58D4D9EB714ACBB421A34ADFB418ABJCVO',
  visit: 'FORM-5C9373CB6EA5468FA607352B96908C87WHBW',
  career: 'FORM-F6F6E0D90D344240B744CB8FF06CC25BGA7K',
  relation: 'FORM-FB6E6BA777E84128A96E567646E5733DXI0O',
  reminder: 'FORM-320958D6AD8443E68B139C537C452222OGMX',
  intel: 'FORM-76909065F1B5460E872D3834D95B2DFFK8F0',
  album: 'FORM-8810B996367344EABC2BE83EF736CF12O5E8',
  tagConfig: 'FORM-6CAE1527A36B48F68D2FDFB4D6DF1873DTY7',
  privateProfile: 'FORM-CF98038EB6324662B420006AA269AE35ACTH',
  socialRelation: 'FORM-454981908729480982F37D41E98584D3RAXW'
};
var FIELDS = {
  contact: {
    serial: 'serialNumberField_ibw41ppid',
    name: 'textField_ibw42mevu',
    alias: 'textField_ibw43dvjm',
    gender: 'radioField_ibw44tava',
    star: 'selectField_ibw457hck',
    type: 'selectField_ibw56nd6d',
    status: 'selectField_ibw57natj',
    stage: 'selectField_ibw58zzom',
    smoking: 'radioField_smokeinccd',
    drinking: 'radioField_drinkinccd',
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
    creator: 'employeeField_ibw5l5fgu',
    birthDate: 'dateField_mpp8m6hw',
    lastVisit: 'dateField_ibw5mkmv9',
    nextDue: 'dateField_ibw5nexxj',
    visitStatus: 'selectField_ibw5o8pd5',
    secrecy: 'selectField_ibw5rildh',
    source: 'textareaField_ibw5swzca',
    remark: 'textareaField_ibw5tkal2'
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
    nextAction: 'textareaField_0usd1fstw',
    recorder: 'employeeField_kyv3ln90f'
  },
  career: {
    serial: 'serialNumberField_719d1x4ji',
    contact: 'associationFormField_719q2bt3k',
    unit: 'associationFormField_719r37ln3',
    department: 'textField_719r4dpak',
    position: 'textField_719r5dqn6',
    level: 'textField_719r6wjfb',
    business: 'textareaField_719r7pxjz',
    status: 'selectField_719r8snun',
    startDate: 'dateField_719r9tdy1',
    endDate: 'dateField_719raweqi',
    sourceDesc: 'textareaField_719rfh4xq',
    sourceDate: 'dateField_719rgxa7p',
    recorder: 'employeeField_719rhov6o',
    recordTime: 'dateField_719siqjnh',
    remark: 'textareaField_719sjbne2'
  },
  relation: {
    project: 'associationFormField_m7me25hdh',
    contact: 'associationFormField_m7me3i0ht',
    role: 'selectField_m7me6h495',
    influence: 'selectField_m7me7mn98',
    attitude: 'selectField_m7mf8jeyu',
    familiar: 'selectField_m7mf9bxwf',
    nextAction: 'textareaField_m7mfevfco',
    recorder: 'employeeField_m7mfgzmpf'
  },
  privateProfile: {
    contact: 'associationFormField_mdimjugb3',
    familyAddress: 'textField_mdimk3kfb',
    spouse: 'textField_mdimlxbf4',
    children: 'textField_mdimmrye7',
    relatives: 'textField_mdimny6va',
    familyNote: 'textareaField_mdimolbeq',
    hobbies: 'textField_mdimpaqi1',
    personalPreference: 'textField_mdimqdtwi',
    foodPreference: 'textField_mdimrcpk3',
    taboo: 'textField_mdims2sm9',
    interestNote: 'textareaField_mdimtkz0v',
    officeHabit: 'textareaField_mdimwvn6f',
    vehicle: 'textareaField_mdimx5d1j',
    habitNote: 'textareaField_mdimyyya5',
    permission: 'selectField_mdimzde8a',
    auth: 'employeeField_mdim10g9sr'
  },
  socialRelation: {
    contact: 'associationFormField_ml4abui38',
    type: 'selectField_ml4acmqv6',
    target: 'textField_ml4adtz5k',
    identity: 'textField_ml4aefrl1',
    description: 'textareaField_ml4afvyg1',
    strength: 'selectField_ml4ag2luq',
    canAssist: 'selectField_ml4ahtgox',
    internalContact: 'employeeField_ml4aiij0b',
    source: 'textareaField_ml4ajkwhe',
    remark: 'textareaField_ml4akgxr9'
  },
  reminder: {
    contact: 'associationFormField_n31w2yat4',
    title: 'textField_n31w37t96',
    date: 'dateField_n31w580q6',
    status: 'selectField_n31wb0qv0',
    recorder: 'employeeField_n31we3y6c'
  },
  intel: {
    serial: 'serialNumberField_o5hf11mwc',
    contact: 'associationFormField_o5hf21sgj',
    project: 'associationFormField_o5hf3lnak',
    category: 'selectField_o5hf4u689',
    title: 'textField_o5hf51ir9',
    content: 'textareaField_o5hf6dkbq',
    date: 'dateField_o5hfgz10c',
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
    nextAction: 'textareaField_5szd8976q'
  },
  album: {
    contact: 'associationFormField_20vo99wel',
    images: 'imageField_20voacrri',
    category: 'selectField_20voblczw',
    description: 'textareaField_20vocvkdo',
    uploader: 'employeeField_20vod39vq',
    uploadTime: 'dateField_20voef13t',
    permission: 'selectField_20vofqbf9',
    auth: 'employeeField_20voge53f'
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
var ALBUM_UPLOAD_CATEGORIES = ['工作照', '办公室/办公位', '车辆', '新闻截图', '公示文件', '家庭/子女相关', '其他'];
var ALBUM_CATEGORIES = ['全部'].concat(ALBUM_UPLOAD_CATEGORIES);
var ALBUM_PERMISSIONS = ['公开', '内部', '授权', '项目机密', '高敏'];
var ALBUM_IMAGE_ACCEPT = 'image/jpeg,image/jpg,image/png,image/webp,image/gif';
var TAB_ITEMS = [{
  key: 'basic',
  label: '基本信息',
  icon: 'user'
}, {
  key: 'album',
  label: '相册',
  icon: 'image'
}, {
  key: 'career',
  label: '任职履历',
  icon: 'briefcase'
}, {
  key: 'profile',
  label: '私密画像',
  icon: 'heart'
}, {
  key: 'social',
  label: '社会关系',
  icon: 'users'
}, {
  key: 'visits',
  label: '拜访记录',
  icon: 'file'
}, {
  key: 'projects',
  label: '关联项目',
  icon: 'building'
}, {
  key: 'dates',
  label: '重要日期',
  icon: 'bell'
}, {
  key: 'intel',
  label: '市场线索',
  icon: 'info'
}];
var _customState = {
  loading: true,
  error: '',
  accessDenied: false,
  contactId: '',
  activeTab: 'basic',
  contacts: [],
  units: [],
  projects: [],
  visits: [],
  careers: [],
  relations: [],
  reminders: [],
  intel: [],
  albums: [],
  tagConfigs: [],
  privateProfiles: [],
  socialRelations: [],
  privateProfileSaving: false,
  wechatClaimSaving: false,
  tagEditorOpen: false,
  tagSaving: false,
  tagDraft: '',
  tagEditing: [],
  tagNewNames: [],
  albumCategoryFilter: '全部',
  albumUploadOpen: false,
  albumUploading: false,
  albumSaving: false,
  albumAttachments: [],
  albumDraft: {
    category: '工作照',
    description: '',
    permission: '内部'
  },
  albumPreview: null
};
export function forceUpdate() {
  this.setState({
    timestamp: new Date().getTime()
  });
}
export function getCustomState(key) {
  if (key) return _customState[key];
  return Object.assign({}, _customState);
}
export function setCustomState(newState) {
  Object.keys(newState || {}).forEach(key => {
    _customState[key] = newState[key];
  });
  this.forceUpdate();
}
export function didUnmount() {}
export function didMount() {
  _customState.contactId = this.getUrlParam('contactId') || this.getUrlParam('formInstId') || this.getUrlParam('id') || '';
  this.loadData();
}
export function loadData() {
  var self = this;
  _customState.loading = true;
  _customState.error = '';
  _customState.accessDenied = false;
  this.forceUpdate();
  Promise.all([self.loadForm(FORMS.contact, 'contacts'), self.loadForm(FORMS.unit, 'units')]).then(() => {
    if (!_customState.contactId && _customState.contacts.length) {
      _customState.contactId = self.getRowId(_customState.contacts[0]);
    }
    var contact = self.findById(_customState.contacts, _customState.contactId);
    _customState.accessDenied = !!(contact && self.getStarNumber(contact) >= 4);
    _customState.loading = false;
    _customState.error = '';
    self.forceUpdate();
  }).catch(err => {
    _customState.loading = false;
    _customState.error = self.getErrorMessage(err);
    self.forceUpdate();
    self.utils.toast({
      title: '联系人详情加载失败',
      type: 'error'
    });
  });
}
export function loadForm(formUuid, key) {
  return this.utils.yida.searchFormDatas({
    formUuid: formUuid,
    currentPage: 1,
    pageSize: 50
  }).then(res => {
    _customState[key] = this.normalizeRows(res);
    return _customState[key];
  }).catch(err => {
    _customState[key] = [];
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
export function getIsMobile() {
  if (this.utils && this.utils.isMobile) return this.utils.isMobile();
  if (typeof window !== 'undefined' && window.innerWidth) return window.innerWidth <= 768;
  return false;
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
  var value = this.rawValue(row, fieldId);
  return this.formatValue(value);
}
export function formatAddressValue(value) {
  var parsed = this.parseMaybeJson(value);
  if (!parsed || typeof parsed !== 'object') return '-';
  if (Array.isArray(parsed)) {
    var listText = parsed.map(item => this.formatAddressValue(item)).filter(item => item && item !== '-');
    return listText.length ? listText.join('、') : '-';
  }
  var parts = [];
  if (Array.isArray(parsed.regionText)) {
    parsed.regionText.forEach(item => {
      var region = this.formatValue(item);
      if (region && region !== '-') parts.push(region);
    });
  }
  var address = this.formatValue(parsed.address);
  if (address && address !== '-') parts.push(address);
  return parts.length ? parts.join('/') : '-';
}
export function formatValue(value) {
  var parsed = this.parseMaybeJson(value);
  if (parsed === undefined || parsed === null || parsed === '') return '-';
  if (Array.isArray(parsed)) {
    if (!parsed.length) return '-';
    return parsed.map(item => this.formatValue(item)).join('、');
  }
  if (typeof parsed === 'object') {
    var addressText = this.formatAddressValue(parsed);
    if (addressText !== '-') return addressText;
    if (parsed.title) return this.formatValue(parsed.title);
    if (parsed.name) return this.formatValue(parsed.name);
    if (parsed.label) return this.formatValue(parsed.label);
    if (parsed.text) return this.formatValue(parsed.text);
    if (parsed.value !== undefined && parsed.value !== null && parsed.value !== '') return this.formatValue(parsed.value);
    if (parsed.zh_CN !== undefined && parsed.zh_CN !== null && parsed.zh_CN !== '') return this.formatValue(parsed.zh_CN);
    if (parsed.pureEn_US !== undefined && parsed.pureEn_US !== null && parsed.pureEn_US !== '') return this.formatValue(parsed.pureEn_US);
    if (parsed.en_US !== undefined && parsed.en_US !== null && parsed.en_US !== '') return this.formatValue(parsed.en_US);
    if (parsed.displayName !== undefined && parsed.displayName !== null && parsed.displayName !== '') return this.formatValue(parsed.displayName);
    if (parsed.userName !== undefined && parsed.userName !== null && parsed.userName !== '') return this.formatValue(parsed.userName);
    if (parsed.nickName !== undefined && parsed.nickName !== null && parsed.nickName !== '') return this.formatValue(parsed.nickName);
    return '-';
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
export function getRowId(row) {
  return row && (row.formInstId || row.formInstanceId || row.instanceId || row.id) || '';
}
export function findById(list, id) {
  if (!id) return null;
  var matched = list.filter(item => this.getRowId(item) === id);
  return matched[0] || null;
}
export function getAssociationItems(value) {
  var parsed = this.parseMaybeJson(value);
  if (!parsed) return [];
  var list = Array.isArray(parsed) ? parsed : [parsed];
  return list.filter(item => item);
}
export function getAssociationId(value) {
  var items = this.getAssociationItems(value);
  if (!items.length) return '';
  var item = items[0];
  if (typeof item !== 'object') return '';
  return item.instanceId || item.formInstId || item.formInstanceId || item.id || '';
}
export function getAssociationItemId(item) {
  if (!item || typeof item !== 'object') return '';
  return item.instanceId || item.formInstId || item.formInstanceId || item.id || '';
}
export function getAssociationIds(value) {
  return this.getAssociationItems(value).map(item => {
    if (!item || typeof item !== 'object') return '';
    return item.instanceId || item.formInstId || item.formInstanceId || item.id || '';
  }).filter(id => id);
}
export function associationText(value) {
  var items = this.getAssociationItems(value);
  if (!items.length) return this.formatValue(value);
  return items.map(item => {
    if (typeof item !== 'object') return this.formatValue(item);
    return this.formatValue(item.title || item.name || item.label || item.text || '-');
  }).join('、');
}
export function rowMatchesAssociation(row, fieldId, id) {
  if (!id) return false;
  var ids = this.getAssociationIds(this.rawAssociation(row, fieldId));
  return ids.indexOf(id) >= 0;
}
export function getContact() {
  return this.findById(_customState.contacts, _customState.contactId);
}
export function getCurrentLoginUser() {
  var id = this.utils.getLoginUserId ? this.utils.getLoginUserId() : '';
  var name = this.utils.getLoginUserName ? this.utils.getLoginUserName() : '';
  if ((!id || !name) && typeof window !== 'undefined' && window.loginUser) {
    id = id || window.loginUser.userId || window.loginUser.employeeId || '';
    name = name || window.loginUser.userName || window.loginUser.nickName || window.loginUser.name || '';
    if (name && typeof name === 'object') name = name.zh_CN || name.pureEn_US || name.en_US || '';
  }
  return {
    id: id ? String(id) : '',
    name: name ? String(name) : ''
  };
}
export function normalizeEmployeeId(item, allowPlainString) {
  if (item === undefined || item === null || item === '') return '';
  if (typeof item === 'string' || typeof item === 'number') return allowPlainString ? String(item).trim() : '';
  if (typeof item !== 'object') return '';
  var id = item.userId || item.key || item.employeeId || item.id || item.value || item.login || item.workNo || '';
  return id ? String(id).trim() : '';
}
export function collectEmployeeIds(value, allowPlainString) {
  var parsed = this.parseMaybeJson(value);
  if (!parsed) return [];
  var list = Array.isArray(parsed) ? parsed : [parsed];
  var ids = [];
  list.forEach(item => {
    var id = this.normalizeEmployeeId(item, allowPlainString);
    if (id && ids.indexOf(id) < 0) ids.push(id);
  });
  return ids;
}
export function getFamiliarUserIds(contact) {
  var ids = this.collectEmployeeIds(this.rawValue(contact, FIELDS.contact.familiar + '_id'), true);
  if (ids.length) return ids;
  return this.collectEmployeeIds(this.rawValue(contact, FIELDS.contact.familiar), false);
}
export function isCurrentUserFamiliar(contact) {
  var user = this.getCurrentLoginUser();
  if (!user.id) return false;
  return this.getFamiliarUserIds(contact).indexOf(user.id) >= 0;
}
export function normalizeSingleRow(res) {
  if (!res) return null;
  if (res.formData) return res;
  if (res.content && res.content.formData) return res.content;
  if (res.data && res.data.formData) return res.data;
  if (res.content && res.content.data && res.content.data.formData) return res.content.data;
  return null;
}
export function fetchLatestContact(id) {
  return this.utils.yida.getFormDataById({
    formInstId: id
  }).then(res => {
    var row = this.normalizeSingleRow(res);
    if (!row) throw new Error('未获取到联系人最新数据');
    return row;
  }).catch(error => {
    this.utils.toast({
      title: this.getErrorMessage(error) || '读取联系人最新数据失败',
      type: 'error'
    });
    throw error;
  });
}
export function toggleWechatClaim(shouldClaim) {
  var contact = this.getContact();
  var id = this.getRowId(contact);
  var user = this.getCurrentLoginUser();
  if (!id) {
    this.utils.toast({
      title: '未找到联系人，无法认领',
      type: 'error'
    });
    return;
  }
  if (!user.id) {
    this.utils.toast({
      title: '无法识别当前登录用户',
      type: 'error'
    });
    return;
  }
  if (_customState.wechatClaimSaving) return;
  _customState.wechatClaimSaving = true;
  this.forceUpdate();
  this.fetchLatestContact(id).then(latest => {
    var ids = this.getFamiliarUserIds(latest);
    var exists = ids.indexOf(user.id) >= 0;
    var next = ids.slice(0);
    if (shouldClaim && !exists) next.push(user.id);
    if (!shouldClaim && exists) next = next.filter(item => item !== user.id);
    if (this.sameIdList(ids, next)) return {
      skipped: true,
      ids: next
    };
    var payload = {};
    payload[FIELDS.contact.familiar] = next;
    return this.utils.yida.updateFormData({
      formInstId: id,
      updateFormDataJson: JSON.stringify(payload),
      useLatestVersion: 'y'
    }).then(() => {
      return {
        skipped: false,
        ids: next
      };
    });
  }).then(() => {
    return this.loadForm(FORMS.contact, 'contacts');
  }).then(() => {
    _customState.wechatClaimSaving = false;
    this.forceUpdate();
    this.utils.toast({
      title: shouldClaim ? '已认领该联系人微信' : '已取消认领',
      type: 'success'
    });
  }).catch(error => {
    _customState.wechatClaimSaving = false;
    this.forceUpdate();
    this.utils.toast({
      title: this.getErrorMessage(error) || '认领操作失败',
      type: 'error'
    });
  });
}
export function normalizeTagName(value) {
  var text = this.formatValue(value);
  if (!text || text === '-') return '';
  return String(text).trim();
}
export function getContactTags(contact) {
  var raw = this.rawAssociation(contact, FIELDS.contact.tagAssociation);
  var parsed = this.parseMaybeJson(raw);
  if (Array.isArray(parsed)) {
    return parsed.map(item => this.normalizeTagName(item)).filter(item => item);
  }
  var text = this.normalizeTagName(parsed);
  if (!text) return [];
  return text.split(/[，,]/).map(item => this.normalizeTagName(item)).filter(item => item);
}
export function getTagConfigName(row) {
  return this.normalizeTagName(this.getValue(row, FIELDS.tagConfig.name));
}
export function getKnownTagNames(contact) {
  var all = [];
  _customState.tagConfigs.forEach(item => {
    var name = this.getTagConfigName(item);
    if (name && all.indexOf(name) < 0) all.push(name);
  });
  this.getContactTags(contact).forEach(name => {
    if (name && all.indexOf(name) < 0) all.push(name);
  });
  return all;
}
export function getAvailableTags(contact) {
  var all = [];
  _customState.tagConfigs.forEach(item => {
    var name = this.getTagConfigName(item);
    var status = this.getValue(item, FIELDS.tagConfig.status);
    if (name && status !== '停用' && all.indexOf(name) < 0) all.push(name);
  });
  this.getContactTags(contact).forEach(name => {
    if (name && all.indexOf(name) < 0) all.push(name);
  });
  all.sort((a, b) => a.localeCompare(b));
  return all;
}
export function hasTagName(list, name) {
  var target = this.normalizeTagName(name).toLowerCase();
  if (!target) return false;
  return (list || []).map(item => this.normalizeTagName(item).toLowerCase()).indexOf(target) >= 0;
}
export function getUnitName(contact) {
  var rawUnit = this.rawAssociation(contact, FIELDS.contact.unit);
  var unitId = this.getAssociationId(rawUnit);
  var unit = this.findById(_customState.units, unitId);
  if (unit) return this.getValue(unit, FIELDS.unit.name);
  var text = this.associationText(rawUnit);
  if (text !== '-') return text;
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
export function isFilled(value) {
  var parsed = this.parseMaybeJson(value);
  if (parsed === undefined || parsed === null || parsed === '' || parsed === '-') return false;
  if (Array.isArray(parsed)) {
    return parsed.filter(item => this.isFilled(item)).length > 0;
  }
  if (typeof parsed === 'object') {
    if (this.formatValue(parsed) !== '-') return true;
    var text = parsed.title || parsed.name || parsed.label || parsed.text || parsed.value || parsed.displayName || parsed.userName;
    return this.isFilled(text);
  }
  if (typeof parsed === 'string') return parsed.trim() !== '' && parsed.trim() !== '-';
  return true;
}
export function hasFieldValue(row, fieldId) {
  return this.isFilled(this.rawAssociation(row, fieldId));
}
export function getMissingFieldLabels(row, fields) {
  return fields.filter(item => !this.hasFieldValue(row, item.fieldId)).map(item => item.label);
}
export function getEffectiveIntel(contact) {
  return this.getRelatedIntel(contact);
}
export function getCompletenessResult(contact) {
  var score = 0;
  var missing = [];
  var basicMissing = this.getMissingFieldLabels(contact, [{
    label: '姓名',
    fieldId: FIELDS.contact.name
  }, {
    label: '客户职务',
    fieldId: FIELDS.contact.star
  }, {
    label: '客户类型',
    fieldId: FIELDS.contact.type
  }, {
    label: '客户状态',
    fieldId: FIELDS.contact.status
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
    fieldId: FIELDS.contact.creator
  }, {
    label: '主要熟悉同事',
    fieldId: FIELDS.contact.familiar
  }]));
  if (contactMissing.length) missing = missing.concat(contactMissing);else score += 15;
  if (this.getRelatedCareers(contact).length) score += 10;else missing.push('任职履历');
  if (this.getRelatedVisits(contact).length || this.hasFieldValue(contact, FIELDS.contact.lastVisit)) score += 10;else missing.push('拜访记录');
  if (this.getEffectiveIntel(contact).length) score += 10;else missing.push('画像/情报记录');
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
  if (text === '即将超期' || text === '待维护' || text === '需维护' || text === '暂缓') return 'warning';
  if (text === '活跃' || text === '未超期' || text === '公开') return 'success';
  if (text === '重点决策人' || text === '关键关系' || text === '授权' || text === '熟悉') return 'primary';
  return 'default';
}
export function getVisitStatusStyle(status) {
  var tone = this.statusTone(status);
  if (tone === 'danger') return {
    bg: '#FEF3F2',
    label: '#B42318',
    value: '#D92D20',
    sub: '#F04438'
  };
  if (tone === 'warning') return {
    bg: '#FFFAEB',
    label: '#B54708',
    value: '#DC6803',
    sub: '#F79009'
  };
  if (tone === 'success') return {
    bg: '#ECFDF3',
    label: '#027A48',
    value: '#039855',
    sub: '#12B76A'
  };
  return {
    bg: '#F8FAFC',
    label: '#667085',
    value: '#344054',
    sub: '#667085'
  };
}
export function getProgressColor(value) {
  if (value < 60) return '#F04438';
  if (value < 80) return '#F79009';
  return '#12B76A';
}
export function getRelatedVisits(contact) {
  var id = this.getRowId(contact);
  return _customState.visits.filter(item => this.rowMatchesAssociation(item, FIELDS.visit.contact, id)).sort((a, b) => {
    return (Number(this.rawValue(b, FIELDS.visit.time)) || 0) - (Number(this.rawValue(a, FIELDS.visit.time)) || 0);
  });
}
export function getRelatedCareers(contact) {
  var id = this.getRowId(contact);
  return _customState.careers.filter(item => this.rowMatchesAssociation(item, FIELDS.career.contact, id)).sort((a, b) => {
    var aStatus = this.getValue(a, FIELDS.career.status);
    var bStatus = this.getValue(b, FIELDS.career.status);
    if (aStatus === '当前' && bStatus !== '当前') return -1;
    if (bStatus === '当前' && aStatus !== '当前') return 1;
    var aTime = Math.max(Number(this.rawValue(a, FIELDS.career.startDate)) || 0, Number(this.rawValue(a, FIELDS.career.endDate)) || 0, Number(this.rawValue(a, FIELDS.career.recordTime)) || 0, Number(a && a.gmtModified) || 0, Number(a && a.gmtCreate) || 0);
    var bTime = Math.max(Number(this.rawValue(b, FIELDS.career.startDate)) || 0, Number(this.rawValue(b, FIELDS.career.endDate)) || 0, Number(this.rawValue(b, FIELDS.career.recordTime)) || 0, Number(b && b.gmtModified) || 0, Number(b && b.gmtCreate) || 0);
    return bTime - aTime;
  });
}
export function getRelatedRelations(contact) {
  var id = this.getRowId(contact);
  return _customState.relations.filter(item => this.rowMatchesAssociation(item, FIELDS.relation.contact, id));
}
export function getRowUpdateTime(row) {
  return Number(row && row.gmtModified) || Number(row && row.modifiedTime) || Number(row && row.gmtCreate) || Number(row && row.createTime) || 0;
}
export function getRelatedPrivateProfiles(contact) {
  var id = this.getRowId(contact);
  return _customState.privateProfiles.filter(item => this.rowMatchesAssociation(item, FIELDS.privateProfile.contact, id)).sort((a, b) => {
    return this.getRowUpdateTime(b) - this.getRowUpdateTime(a);
  });
}
export function getCurrentPrivateProfile(contact) {
  var profiles = this.getRelatedPrivateProfiles(contact);
  return profiles.length ? profiles[0] : null;
}
export function getRelatedSocialRelations(contact) {
  var id = this.getRowId(contact);
  return _customState.socialRelations.filter(item => this.rowMatchesAssociation(item, FIELDS.socialRelation.contact, id)).sort((a, b) => {
    return this.getRowUpdateTime(b) - this.getRowUpdateTime(a);
  });
}
export function getRelatedReminders(contact) {
  var id = this.getRowId(contact);
  return _customState.reminders.filter(item => this.rowMatchesAssociation(item, FIELDS.reminder.contact, id)).sort((a, b) => {
    return (Number(this.rawValue(a, FIELDS.reminder.date)) || 9999999999999) - (Number(this.rawValue(b, FIELDS.reminder.date)) || 9999999999999);
  });
}
export function getRelatedIntel(contact) {
  var id = this.getRowId(contact);
  return _customState.intel.filter(item => this.rowMatchesAssociation(item, FIELDS.intel.contact, id)).sort((a, b) => {
    return (Number(this.rawValue(b, FIELDS.intel.date)) || 0) - (Number(this.rawValue(a, FIELDS.intel.date)) || 0);
  });
}
export function getTodayStart() {
  var today = new Date();
  return new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();
}
export function isClosedIntel(row) {
  var status = this.getValue(row, FIELDS.intel.status);
  return status === '已转项目' || status === '已归档';
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
  return this.statusTone(status);
}
export function getAlbumTime(row) {
  return Number(this.rawValue(row, FIELDS.album.uploadTime)) || Number(row && row.gmtCreate) || Number(row && row.gmtModified) || 0;
}
export function getRelatedAlbums(contact) {
  var id = this.getRowId(contact);
  return _customState.albums.filter(item => this.rowMatchesAssociation(item, FIELDS.album.contact, id)).sort((a, b) => {
    return this.getAlbumTime(b) - this.getAlbumTime(a);
  });
}
export function getAlbumImageItems(row) {
  return this.getAssociationItems(this.rawValue(row, FIELDS.album.images));
}
export function getAlbumImageUrl(image) {
  var parsed = this.parseMaybeJson(image);
  var url = '';
  if (typeof parsed === 'string') {
    url = parsed;
  } else if (parsed && typeof parsed === 'object') {
    url = parsed.previewUrl || parsed.url || parsed.downloadUrl || parsed.thumbUrl || parsed.thumbnail || '';
  }
  if (!url) return '';
  if (/^https?:\/\//.test(url)) return url;
  if (url.charAt(0) === '/') {
    var base = typeof window !== 'undefined' && window.location ? window.location.origin : '';
    return base + url;
  }
  return url;
}
export function getAlbumImageName(image, index) {
  var parsed = this.parseMaybeJson(image);
  if (parsed && typeof parsed === 'object') return this.formatValue(parsed.name || parsed.fileName || parsed.title || '照片 ' + (index + 1));
  return '照片 ' + (index + 1);
}
export function getAlbumImageCards(contact) {
  var cards = [];
  this.getRelatedAlbums(contact).forEach(row => {
    var images = this.getAlbumImageItems(row);
    images.forEach((image, index) => {
      cards.push({
        row: row,
        image: image,
        index: index,
        key: this.getRowId(row) + '-' + index
      });
    });
  });
  return cards;
}
export function getFilteredAlbumImages(contact) {
  var category = _customState.albumCategoryFilter || '全部';
  var cards = this.getAlbumImageCards(contact);
  if (category === '全部') return cards;
  return cards.filter(card => this.getValue(card.row, FIELDS.album.category) === category);
}
export function setAlbumCategoryFilter(category) {
  _customState.albumCategoryFilter = category || '全部';
  this.forceUpdate();
}
export function toggleAlbumUpload() {
  _customState.albumUploadOpen = !_customState.albumUploadOpen;
  if (!_customState.albumUploadOpen) this.resetAlbumDraft();
  this.forceUpdate();
}
export function resetAlbumDraft() {
  _customState.albumUploading = false;
  _customState.albumSaving = false;
  _customState.albumAttachments = [];
  _customState.albumDraft = {
    category: '工作照',
    description: '',
    permission: '内部'
  };
}
export function isAllowedAlbumFile(file) {
  if (!file) return false;
  var type = (file.type || '').toLowerCase();
  var name = (file.name || '').toLowerCase();
  if (type.indexOf('image/') === 0) return true;
  return /\.(jpg|jpeg|png|webp|gif)$/.test(name);
}
export function buildUploadObjectName(fileName) {
  var now = new Date();
  var monthDay = now.getFullYear() + '/' + (now.getMonth() + 1) + '-' + now.getDate();
  var safeName = (fileName || 'image').replace(/[\\\/]/g, '_');
  return APP_TYPE + '/contact-album/' + monthDay + '/' + Date.now() + '-' + safeName;
}
export function requestAlbumImageSign(file) {
  var csrfToken = window.g_config && window.g_config._csrf_token || '';
  var stamp = Date.now();
  var query = ['scene=AttachmentField', '_api=nattyFetch', '_mock=false', '_csrf_token=' + encodeURIComponent(csrfToken), 'appType=' + encodeURIComponent(APP_TYPE), 'fileName=' + encodeURIComponent(file.name), 'fileSize=' + encodeURIComponent(file.size), 'contentType=' + encodeURIComponent(file.type || 'application/octet-stream'), 'isOpen=n', 'newContext=y', 'objectName=' + encodeURIComponent(this.buildUploadObjectName(file.name)), 'procInstId=', 'businessType=', 'accelerate=y', '_stamp=' + stamp].join('&');
  return fetch(window.location.origin + '/ossSign?' + query, {
    method: 'GET',
    credentials: 'include',
    headers: {
      accept: 'application/json, text/json',
      'x-requested-with': 'XMLHttpRequest'
    }
  }).then(res => res.json()).then(json => {
    if (!json || json.success === false || !json.content) {
      throw new Error(json && json.errorMsg ? json.errorMsg : '图片上传签名失败');
    }
    return json.content;
  });
}
export function decodeBase64Utf8(base64Text) {
  try {
    var binary = atob(base64Text || '');
    var bytes = [];
    for (var i = 0; i < binary.length; i += 1) {
      bytes.push(binary.charCodeAt(i));
    }
    if (typeof TextDecoder !== 'undefined') {
      return new TextDecoder('utf-8').decode(new Uint8Array(bytes));
    }
    return decodeURIComponent(bytes.map(byte => '%' + ('00' + byte.toString(16)).slice(-2)).join(''));
  } catch (error) {
    return atob(base64Text || '');
  }
}
export function resolveSignedContentDisposition(signInfo, file) {
  try {
    var policyText = this.decodeBase64Utf8(signInfo.policy || '');
    var matchedText = policyText.match(/"Content-Disposition":"([^"]+)"/);
    if (matchedText && matchedText[1]) {
      return matchedText[1].replace(/\\"/g, '"').replace(/\\\\/g, '\\');
    }
    var normalizedPolicyText = policyText.replace(/\\\$/g, '$');
    var policy = JSON.parse(normalizedPolicyText);
    var conditions = policy && policy.conditions || [];
    var matched = '';
    conditions.forEach(item => {
      if (item && typeof item === 'object' && item['Content-Disposition']) {
        matched = item['Content-Disposition'];
      }
    });
    if (matched) return matched;
  } catch (error) {}
  return 'attachment; filename=' + encodeURIComponent(file.name);
}
export function uploadSingleAlbumImage(file) {
  return this.requestAlbumImageSign(file).then(signInfo => {
    var form = new FormData();
    form.append('key', signInfo.objectName);
    form.append('policy', signInfo.policy);
    form.append('OSSAccessKeyId', signInfo.accessid);
    form.append('signature', signInfo.signature);
    form.append('success_action_status', '200');
    form.append('Content-Disposition', this.resolveSignedContentDisposition(signInfo, file));
    form.append('file', file, file.name);
    return fetch(signInfo.host, {
      method: 'POST',
      body: form
    }).then(uploadRes => {
      if (!uploadRes.ok) throw new Error('图片上传失败');
      return {
        name: file.name,
        size: file.size,
        type: file.type,
        fileUuid: signInfo.objectName,
        url: signInfo.url,
        downloadUrl: signInfo.downloadUrl,
        previewUrl: signInfo.previewUrl
      };
    });
  });
}
export function handleAlbumFilesChange(e) {
  var files = Array.prototype.slice.call(e && e.target && e.target.files || []);
  if (e && e.target) e.target.value = '';
  if (!files.length) return;
  var invalid = files.filter(file => !this.isAllowedAlbumFile(file));
  if (invalid.length) {
    this.utils.toast({
      title: '仅支持 jpg、jpeg、png、webp、gif 图片',
      type: 'error'
    });
    return;
  }
  _customState.albumUploading = true;
  this.forceUpdate();
  Promise.all(files.map(file => this.uploadSingleAlbumImage(file))).then(uploaded => {
    _customState.albumAttachments = (_customState.albumAttachments || []).concat(uploaded);
    _customState.albumUploading = false;
    this.forceUpdate();
    this.utils.toast({
      title: '图片已上传',
      type: 'success'
    });
  }).catch(error => {
    _customState.albumUploading = false;
    this.forceUpdate();
    this.utils.toast({
      title: this.getErrorMessage(error) || '图片上传失败',
      type: 'error'
    });
  });
}
export function removeAlbumAttachment(fileUuid) {
  _customState.albumAttachments = (_customState.albumAttachments || []).filter(item => item.fileUuid !== fileUuid);
  this.forceUpdate();
}
export function buildContactAssociation(contact) {
  return [{
    appType: APP_TYPE,
    formUuid: FORMS.contact,
    instanceId: this.getRowId(contact),
    formType: 'receipt',
    title: this.getValue(contact, FIELDS.contact.name),
    subTitle: this.getValue(contact, FIELDS.contact.position)
  }];
}
export function submitAlbumUpload() {
  var contact = this.getContact();
  if (!contact || !this.getRowId(contact)) {
    this.utils.toast({
      title: '未找到联系人，无法上传照片',
      type: 'error'
    });
    return;
  }
  if (!_customState.albumAttachments || !_customState.albumAttachments.length) {
    this.utils.toast({
      title: '请先选择图片',
      type: 'error'
    });
    return;
  }
  var payload = {};
  payload[FIELDS.album.contact] = this.buildContactAssociation(contact);
  payload[FIELDS.album.images] = _customState.albumAttachments;
  payload[FIELDS.album.category] = _customState.albumDraft.category || '工作照';
  payload[FIELDS.album.description] = _customState.albumDraft.description || '';
  payload[FIELDS.album.uploadTime] = new Date().getTime();
  payload[FIELDS.album.permission] = _customState.albumDraft.permission || '内部';
  var userId = this.utils.getLoginUserId ? this.utils.getLoginUserId() : window.loginUser && window.loginUser.userId || '';
  if (userId) payload[FIELDS.album.uploader] = [String(userId)];
  _customState.albumSaving = true;
  this.forceUpdate();
  this.utils.yida.saveFormData({
    appType: APP_TYPE,
    formUuid: FORMS.album,
    formDataJson: JSON.stringify(payload)
  }).then(() => {
    this.resetAlbumDraft();
    _customState.albumUploadOpen = false;
    return this.loadForm(FORMS.album, 'albums');
  }).then(() => {
    this.forceUpdate();
    this.utils.toast({
      title: '照片已保存到相册',
      type: 'success'
    });
  }).catch(error => {
    _customState.albumSaving = false;
    this.forceUpdate();
    this.utils.toast({
      title: this.getErrorMessage(error) || '相册保存失败',
      type: 'error'
    });
  });
}
export function openAlbumPreview(card) {
  _customState.albumPreview = card;
  this.forceUpdate();
}
export function closeAlbumPreview() {
  _customState.albumPreview = null;
  this.forceUpdate();
}
export function getProjectName(row) {
  var raw = this.rawAssociation(row, FIELDS.relation.project);
  var id = this.getAssociationId(raw);
  var project = this.findById(_customState.projects, id);
  if (project) return this.getValue(project, FIELDS.project.name);
  return this.associationText(raw);
}
export function getProject(row) {
  var id = this.getAssociationId(this.rawAssociation(row, FIELDS.relation.project));
  return this.findById(_customState.projects, id);
}
export function getCareerUnitName(row) {
  var raw = this.rawAssociation(row, FIELDS.career.unit);
  var id = this.getAssociationId(raw);
  var unit = this.findById(_customState.units, id);
  if (unit) return this.getValue(unit, FIELDS.unit.name);
  return this.associationText(raw);
}
export function formatDateRange(startValue, endValue) {
  var start = this.formatDate(startValue);
  var end = this.formatDate(endValue);
  if (start === '-' && end === '-') return '任职时间未填写';
  return (start === '-' ? '未知' : start) + ' 至 ' + (end === '-' ? '至今' : end);
}
export function getContributor(row, fieldId) {
  var value = this.parseMaybeJson(this.rawValue(row, fieldId));
  if (Array.isArray(value)) value = value[0];
  if (!value || value === '-') value = row && row.originator;
  if (!value) return {
    key: 'unknown',
    name: '未识别记录人'
  };
  if (typeof value === 'string') {
    return {
      key: value,
      name: value
    };
  }
  var name = this.formatValue(value.name || value.userName || value.nickName || value.label || value.text || value.displayName || value.value || '未识别记录人');
  var key = value.userId || value.employeeId || value.id || value.workNo || value.value || name;
  return {
    key: this.formatValue(key || name),
    name: name
  };
}
export function addContribution(bucket, row, fieldId, source) {
  var contributor = this.getContributor(row, fieldId);
  if (!bucket[contributor.key]) {
    bucket[contributor.key] = {
      name: contributor.name,
      count: 0,
      sources: {}
    };
  }
  bucket[contributor.key].count += 1;
  bucket[contributor.key].sources[source] = (bucket[contributor.key].sources[source] || 0) + 1;
}
export function getMaintenanceContributions(contact) {
  var bucket = {};
  var sources = [{
    name: '拜访',
    rows: this.getRelatedVisits(contact),
    fieldId: FIELDS.visit.recorder
  }, {
    name: '履历',
    rows: this.getRelatedCareers(contact),
    fieldId: FIELDS.career.recorder
  }, {
    name: '关系画像',
    rows: this.getRelatedRelations(contact),
    fieldId: FIELDS.relation.recorder
  }, {
    name: '重要提醒',
    rows: this.getRelatedReminders(contact),
    fieldId: FIELDS.reminder.recorder
  }, {
    name: '情报',
    rows: this.getRelatedIntel(contact),
    fieldId: FIELDS.intel.recorder
  }];
  var total = 0;
  sources.forEach(source => {
    source.rows.forEach(row => {
      total += 1;
      this.addContribution(bucket, row, source.fieldId, source.name);
    });
  });
  var list = Object.keys(bucket).map(key => {
    var item = bucket[key];
    var percent = total ? Math.round(item.count * 1000 / total) / 10 : 0;
    return {
      name: item.name,
      count: item.count,
      percent: percent,
      percentText: percent % 1 === 0 ? parseInt(percent, 10) + '%' : percent + '%',
      sourceText: Object.keys(item.sources).map(name => name + item.sources[name]).join(' · ')
    };
  });
  list.sort((a, b) => {
    if (b.count !== a.count) return b.count - a.count;
    return a.name.localeCompare(b.name);
  });
  return {
    total: total,
    list: list
  };
}
export function setActiveTab(key) {
  _customState.activeTab = key;
  this.forceUpdate();
}
export function goBack() {
  this.utils.router.push(FORMS.contactManage, {}, false);
}
export function openForm(formUuid, params, openNew) {
  this.utils.router.push(formUuid, params || {}, openNew === true);
}
export function openSubmissionForm(formUuid, params) {
  var base = typeof window !== 'undefined' && window.location ? window.location.origin : '';
  var query = [];
  if (params) {
    Object.keys(params).forEach(key => {
      if (params[key]) query.push(encodeURIComponent(key) + '=' + encodeURIComponent(params[key]));
    });
  }
  window.location.href = base + '/' + APP_TYPE + '/submission/' + formUuid + (query.length ? '?' + query.join('&') : '');
}
export function openNativeEditForm(formUuid, formInstId) {
  if (!formInstId) return;
  var base = typeof window !== 'undefined' && window.location ? window.location.origin : '';
  window.location.href = base + '/' + APP_TYPE + '/formDetail/' + formUuid + '?formInstId=' + encodeURIComponent(formInstId) + '&mode=edit';
}
export function editContact() {
  var contact = this.getContact();
  var id = this.getRowId(contact);
  if (!id) return;
  this.openNativeEditForm(FORMS.contact, id);
}
export function openTagEditor() {
  var contact = this.getContact();
  _customState.tagEditorOpen = true;
  _customState.tagDraft = '';
  _customState.tagEditing = this.getContactTags(contact);
  _customState.tagNewNames = [];
  this.forceUpdate();
}
export function closeTagEditor() {
  _customState.tagEditorOpen = false;
  _customState.tagSaving = false;
  _customState.tagDraft = '';
  _customState.tagEditing = [];
  _customState.tagNewNames = [];
  this.forceUpdate();
}
export function toggleEditingTag(name) {
  var tag = this.normalizeTagName(name);
  if (!tag || _customState.tagSaving) return;
  var list = _customState.tagEditing || [];
  if (this.hasTagName(list, tag)) {
    _customState.tagEditing = list.filter(item => this.normalizeTagName(item).toLowerCase() !== tag.toLowerCase());
  } else {
    _customState.tagEditing = list.concat([tag]);
  }
  this.forceUpdate();
}
export function handleTagDraftChange(e) {
  _customState.tagDraft = e && e.target ? e.target.value : '';
}
export function handleTagDraftKeyDown(e) {
  if (e && e.key === 'Enter') {
    if (e.preventDefault) e.preventDefault();
    this.saveContactTags();
  }
}
export function getTagDraftValue() {
  var value = _customState.tagDraft || '';
  var input = document.getElementById('contact-tag-draft');
  if (input && input.value !== undefined) value = input.value;
  return this.normalizeTagName(value);
}
export function createTagConfig(name) {
  var payload = {};
  var userId = this.utils.getLoginUserId ? this.utils.getLoginUserId() : window.loginUser && window.loginUser.userId || '';
  payload[FIELDS.tagConfig.name] = name;
  payload[FIELDS.tagConfig.category] = '';
  if (userId) payload[FIELDS.tagConfig.creator] = [String(userId)];
  payload[FIELDS.tagConfig.createTime] = new Date().getTime();
  payload[FIELDS.tagConfig.status] = '启用';
  payload[FIELDS.tagConfig.usageCount] = 1;
  return this.utils.yida.saveFormData({
    appType: APP_TYPE,
    formUuid: FORMS.tagConfig,
    formDataJson: JSON.stringify(payload)
  }).catch(error => {
    this.utils.toast({
      title: this.getErrorMessage(error) || '标签创建失败',
      type: 'error'
    });
    throw error;
  });
}
export function createNewTagConfigs(names) {
  var self = this;
  var queue = Promise.resolve();
  (names || []).forEach(name => {
    queue = queue.then(() => self.createTagConfig(name));
  });
  return queue;
}
export function buildTagAssociations(names) {
  var self = this;
  var result = [];
  (names || []).forEach(name => {
    var tagName = self.normalizeTagName(name);
    var row = (_customState.tagConfigs || []).filter(item => self.getTagConfigName(item).toLowerCase() === tagName.toLowerCase())[0];
    var id = self.getRowId(row);
    if (tagName && id) {
      result.push({
        formType: 'receipt',
        formUuid: FORMS.tagConfig,
        instanceId: id,
        subTitle: '',
        appType: APP_TYPE,
        title: tagName
      });
    }
  });
  return result;
}
export function getCurrentTagAssociationIds(contact) {
  return this.getAssociationItems(this.rawAssociation(contact, FIELDS.contact.tagAssociation)).map(item => this.getAssociationItemId(item)).filter(id => id);
}
export function getSelectedTagIds(names) {
  return this.buildTagAssociations(names).map(item => item.instanceId).filter(id => id);
}
export function sameIdList(a, b) {
  if ((a || []).length !== (b || []).length) return false;
  var left = (a || []).slice(0).sort();
  var right = (b || []).slice(0).sort();
  for (var i = 0; i < left.length; i += 1) {
    if (left[i] !== right[i]) return false;
  }
  return true;
}
export function collectTagSaveState(contact) {
  var unique = [];
  var newNames = (_customState.tagNewNames || []).slice(0);
  var selected = (_customState.tagEditing || []).map(item => this.normalizeTagName(item)).filter(item => item);
  selected.forEach(item => {
    if (!this.hasTagName(unique, item)) unique.push(item);
  });
  var draft = this.getTagDraftValue();
  if (draft) {
    if (draft.length > 20) {
      return {
        error: '标签名称不能超过20个字符'
      };
    }
    if (!this.hasTagName(unique, draft)) unique.push(draft);
    if (!this.hasTagName(this.getKnownTagNames(contact), draft) && !this.hasTagName(newNames, draft)) {
      newNames.push(draft);
    }
  }
  return {
    tags: unique,
    newNames: newNames
  };
}
export function saveContactTags() {
  var contact = this.getContact();
  var id = this.getRowId(contact);
  if (!id || _customState.tagSaving) return;
  var saveState = this.collectTagSaveState(contact);
  if (saveState.error) {
    this.utils.toast({
      title: saveState.error,
      type: 'error'
    });
    return;
  }
  var unique = saveState.tags;
  _customState.tagSaving = true;
  this.forceUpdate();
  this.createNewTagConfigs(saveState.newNames).then(() => {
    return this.loadForm(FORMS.tagConfig, 'tagConfigs');
  }).then(() => {
    var payload = {};
    payload[FIELDS.contact.tagAssociation] = this.buildTagAssociations(unique);
    return this.utils.yida.updateFormData({
      formInstId: id,
      updateFormDataJson: JSON.stringify(payload),
      useLatestVersion: 'y'
    }).catch(error => {
      this.utils.toast({
        title: this.getErrorMessage(error) || '联系人标签更新失败',
        type: 'error'
      });
      throw error;
    });
  }).then(() => {
    return Promise.all([this.loadForm(FORMS.contact, 'contacts'), this.loadForm(FORMS.tagConfig, 'tagConfigs')]);
  }).then(() => {
    var updated = this.findById(_customState.contacts, id);
    var savedIds = this.getCurrentTagAssociationIds(updated);
    var expectedIds = this.getSelectedTagIds(unique);
    if (!this.sameIdList(savedIds, expectedIds)) {
      throw new Error('标签保存后未在联系人表中生效，请重试');
    }
    _customState.tagSaving = false;
    _customState.tagEditorOpen = false;
    _customState.tagDraft = '';
    _customState.tagEditing = [];
    _customState.tagNewNames = [];
    this.forceUpdate();
    this.utils.toast({
      title: '标签已更新',
      type: 'success'
    });
  }).catch(error => {
    _customState.tagSaving = false;
    this.forceUpdate();
    this.utils.toast({
      title: this.getErrorMessage(error) || '标签保存失败',
      type: 'error'
    });
  });
}
export function openVisitForm() {
  var contact = this.getContact();
  var params = this.getContactContextOpenParams(contact);
  if (params.contactId) params.mainContactId = params.contactId;
  this.openSubmissionForm(FORMS.visit, params);
}
export function openAlbumForm() {
  var contact = this.getContact();
  this.openSubmissionForm(FORMS.album, this.getContactOpenParams(contact));
}
export function openVisitDetail(row) {
  var id = this.getRowId(row);
  if (!id) return;
  this.openForm(FORMS.visitDetail, {
    formInstId: id
  }, false);
}
export function openCareerForm() {
  var contact = this.getContact();
  this.openSubmissionForm(FORMS.career, this.getContactContextOpenParams(contact));
}
export function openCareerDetail(row) {
  var id = this.getRowId(row);
  if (!id) return;
  var base = typeof window !== 'undefined' && window.location ? window.location.origin : '';
  window.location.href = base + '/' + APP_TYPE + '/formDetail/' + FORMS.career + '?formInstId=' + encodeURIComponent(id);
}
export function openProjectDetail(row) {
  var id = this.getRowId(row);
  if (!id) return;
  this.openForm(FORMS.projectDetail, {
    projectId: id
  }, false);
}
export function openRelationForm() {
  var contact = this.getContact();
  this.openSubmissionForm(FORMS.relation, this.getContactContextOpenParams(contact));
}
export function openRelationDetail(row) {
  var id = this.getRowId(row);
  if (!id) return;
  this.openForm(FORMS.relation, {
    formInstId: id
  }, true);
}
export function getContactOpenParams(contact) {
  var id = this.getRowId(contact);
  var params = {};
  if (id) {
    params.contactId = id;
    params.contactTitle = this.getValue(contact, FIELDS.contact.name);
    var contactNo = this.getValue(contact, FIELDS.contact.serial);
    if (contactNo && contactNo !== '-') params.contactNo = contactNo;
  }
  return params;
}
export function getContactContextOpenParams(contact) {
  var params = this.getContactOpenParams(contact);
  if (!contact || !this.getRowId(contact)) return params;
  var unitId = this.getAssociationId(this.rawAssociation(contact, FIELDS.contact.unit));
  if (unitId) {
    params.unitId = unitId;
    params.unitTitle = this.getUnitName(contact);
  }
  var department = this.getValue(contact, FIELDS.contact.department);
  if (department && department !== '-') params.department = department;
  var position = this.getValue(contact, FIELDS.contact.position);
  if (position && position !== '-') {
    params.position = position;
    params.contactPosition = position;
  }
  var level = this.getValue(contact, FIELDS.contact.level);
  if (level && level !== '-') params.level = level;
  var region = this.getValue(contact, FIELDS.contact.region);
  if (region && region !== '-') params.region = region;
  return params;
}
export function openPrivateProfileForm() {
  var contact = this.getContact();
  var profile = this.getCurrentPrivateProfile(contact);
  var id = this.getRowId(profile);
  if (id) {
    this.openNativeEditForm(FORMS.privateProfile, id);
    return;
  }
  if (!contact || !this.getRowId(contact)) return;
  this.openSubmissionForm(FORMS.privateProfile, this.getContactContextOpenParams(contact));
}
export function openSocialRelationForm() {
  var contact = this.getContact();
  this.openSubmissionForm(FORMS.socialRelation, this.getContactContextOpenParams(contact));
}
export function openSocialRelationDetail(row) {
  var id = this.getRowId(row);
  if (!id) return;
  this.openForm(FORMS.socialRelation, {
    formInstId: id
  }, true);
}
export function openReminderForm() {
  var contact = this.getContact();
  this.openSubmissionForm(FORMS.reminder, this.getContactContextOpenParams(contact));
}
export function openReminderDetail(row) {
  var id = this.getRowId(row);
  if (!id) return;
  this.openForm(FORMS.reminder, {
    formInstId: id
  }, true);
}
export function openIntelForm() {
  var contact = this.getContact();
  this.openSubmissionForm(FORMS.intel, this.getContactContextOpenParams(contact));
}
export function openIntelDetail(row) {
  var id = this.getRowId(row);
  if (!id) return;
  this.openForm(FORMS.intel, {
    formInstId: id
  }, true);
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
export function renderStars(contact) {
  var count = this.getStarNumber(contact);
  var stars = [1, 2, 3, 4, 5];
  return <span style={styles.stars}>
      {stars.map(item => <span key={item} style={item <= count ? styles.starOn : styles.starOff}>★</span>)}
    </span>;
}
export function renderAvatar(contact, isMobile) {
  var name = this.getValue(contact, FIELDS.contact.name);
  return <div style={isMobile ? styles.avatarMobile : styles.avatar}>{this.getInitial(name)}</div>;
}
export function renderMiniIcon(name, color, size) {
  var iconColor = color || '#667085';
  var iconSize = size || 14;
  var common = {
    width: iconSize,
    height: iconSize,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: iconColor,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    style: styles.svgIcon
  };
  if (name === 'user') return <svg {...common}><path d="M20 21a8 8 0 0 0-16 0"></path><circle cx="12" cy="7" r="4"></circle></svg>;
  if (name === 'briefcase') return <svg {...common}><rect x="3" y="7" width="18" height="13" rx="2"></rect><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><path d="M3 12h18"></path></svg>;
  if (name === 'phone') return <svg {...common}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.91.33 1.8.63 2.65a2 2 0 0 1-.45 2.11L8 9.77a16 16 0 0 0 6 6l1.29-1.29a2 2 0 0 1 2.11-.45c.85.3 1.74.51 2.65.63A2 2 0 0 1 22 16.92z"></path></svg>;
  if (name === 'image') return <svg {...common}><rect x="3" y="3" width="18" height="18" rx="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><path d="M21 15l-5-5L5 21"></path></svg>;
  if (name === 'heart') return <svg {...common}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"></path></svg>;
  if (name === 'users') return <svg {...common}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;
  if (name === 'file') return <svg {...common}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path><path d="M8 13h8"></path><path d="M8 17h5"></path></svg>;
  if (name === 'building') return <svg {...common}><rect x="4" y="2" width="16" height="20" rx="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M8 10h.01"></path><path d="M16 10h.01"></path><path d="M8 14h.01"></path><path d="M16 14h.01"></path></svg>;
  if (name === 'bell') return <svg {...common}><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>;
  if (name === 'info') return <svg {...common}><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>;
  if (name === 'clock') return <svg {...common}><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>;
  if (name === 'edit') return <svg {...common}><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"></path></svg>;
  if (name === 'arrowLeft') return <svg {...common}><path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path></svg>;
  return <svg {...common}><circle cx="12" cy="12" r="9"></circle></svg>;
}
export function renderButton(label, type, onClick) {
  var primary = type === 'primary';
  return <button onClick={e => {
    if (onClick) onClick(e);
  }} style={Object.assign({}, styles.button, primary ? styles.buttonPrimary : styles.buttonDefault)}>
      {this.renderMiniIcon(label === '编辑' ? 'edit' : 'file', primary ? '#FFFFFF' : '#344054', 14)}{label}
    </button>;
}
export function renderTabHeader(title, actionLabel, onAction, secure) {
  return <div style={styles.tabHeader}>
      <div style={styles.tabHeaderLeft}>
        <span style={styles.tabHeaderTitle}>{title}</span>
        {secure && <span style={styles.secureBadge}>授权可见</span>}
      </div>
      {actionLabel && <button style={styles.inlineAction} onClick={e => {
      if (onAction) onAction(e);
    }}><span style={styles.inlineActionIcon}>+</span>{actionLabel}</button>}
    </div>;
}
export function renderProgress(value) {
  return <div style={styles.progressLine}>
      <div style={styles.progressBar}>
        <div style={Object.assign({}, styles.progressFill, {
        width: value + '%',
        background: this.getProgressColor(value)
      })}></div>
      </div>
      <span style={styles.progressText}>{value}%</span>
    </div>;
}
export function openMissingSuggestion(missing) {
  var target = 'edit';
  var list = missing || [];
  if (list.indexOf('任职履历') >= 0) target = 'career';else if (list.indexOf('拜访记录') >= 0) target = 'visits';else if (list.indexOf('画像/情报记录') >= 0) target = 'intel';else if (list.indexOf('项目/社会关系') >= 0) target = 'social';else if (list.indexOf('重要提醒') >= 0) target = 'dates';
  if (target === 'edit') {
    this.editContact();
    return;
  }
  this.setActiveTab(target);
}
export function renderMissingSuggestionCard(contact, isMobile) {
  var result = this.getCompletenessResult(contact);
  var missing = result.missing || [];
  var fullText = this.getMissingTips(contact);
  var visible = missing.slice(0, isMobile ? 4 : 3);
  return <div style={missing.length ? styles.missingCard : styles.missingCardDone} title={fullText}>
      <div style={styles.missingCardHead}>
        <span style={styles.missingCardIcon}>{this.renderMiniIcon('info', missing.length ? '#B54708' : '#027A48', 14)}</span>
        <span style={styles.missingCardTitle}>资料补充建议</span>
        <span style={missing.length ? styles.missingCount : styles.missingCountDone}>{missing.length ? missing.length + '项' : '完整'}</span>
      </div>
      <div style={styles.missingCardText}>{missing.length ? '缺少：' + visible.join('、') + (missing.length > visible.length ? '等' : '') : '资料完整'}</div>
      {missing.length > 0 && <button style={styles.missingCardAction} onClick={e => {
      this.openMissingSuggestion(missing);
    }}>去补充</button>}
    </div>;
}
export function renderTags(contact) {
  var list = this.getContactTags(contact);
  return <div style={styles.tagBlock}>
      <div style={styles.tagList}>
        {list.length ? list.slice(0, 8).map(tag => <span key={tag} style={styles.tag}>{tag}</span>) : <span style={styles.emptyTagText}>暂无标签</span>}
      </div>
    </div>;
}
export function renderTagEditor(contact) {
  var self = this;
  var options = this.getAvailableTags(contact);
  var selected = _customState.tagEditing || [];
  selected.forEach(tag => {
    var name = self.normalizeTagName(tag);
    if (name && !self.hasTagName(options, name)) options.push(name);
  });
  options.sort((a, b) => a.localeCompare(b));
  return <div style={styles.tagEditor}>
      {options.length > 0 && <div style={styles.tagOptionWrap}>
          {options.map(tag => {
        var active = self.hasTagName(selected, tag);
        return <button key={tag} onClick={e => {
          self.toggleEditingTag(tag);
        }} style={Object.assign({}, styles.tagOption, active ? styles.tagOptionActive : {})}>{tag}</button>;
      })}
        </div>}
      <div style={styles.tagInputRow}>
        <input id="contact-tag-draft" defaultValue={_customState.tagDraft} placeholder="输入新标签，20字以内，保存后生效" maxLength="20" onChange={e => {
        self.handleTagDraftChange(e);
      }} onKeyDown={e => {
        self.handleTagDraftKeyDown(e);
      }} style={styles.tagInput} />
      </div>
      <div style={styles.tagEditorFooter}>
        <span style={styles.tagEditorHint}>停用标签不会出现在新增列表；联系人已有旧标签仍保留展示。</span>
        <div style={styles.tagEditorActions}>
          <button onClick={e => {
          self.closeTagEditor();
        }} style={styles.tagCancelButton}>取消</button>
          <button onClick={e => {
          self.saveContactTags();
        }} disabled={_customState.tagSaving} style={Object.assign({}, styles.tagSaveButton, _customState.tagSaving ? styles.tagSaveButtonDisabled : {})}>{_customState.tagSaving ? '保存中...' : '保存'}</button>
        </div>
      </div>
    </div>;
}
export function renderInfoRow(label, value, last) {
  return <div style={Object.assign({}, styles.infoRow, last ? styles.infoRowLast : {})}>
      <div style={styles.infoLabel}>{label}</div>
      <div style={styles.infoValue}>{value || '-'}</div>
    </div>;
}
export function renderWechatClaimRow(contact) {
  var user = this.getCurrentLoginUser();
  var claimed = this.isCurrentUserFamiliar(contact);
  var familiarText = this.getValue(contact, FIELDS.contact.familiar);
  return this.renderInfoRow('熟悉同事', <div style={styles.claimValue}>
      <span style={styles.claimNames}>{familiarText}</span>
      {user.id ? <span style={styles.claimActions}>
        {claimed && <span style={styles.claimedBadge}>已认领</span>}
        <button disabled={_customState.wechatClaimSaving} style={Object.assign({}, claimed ? styles.claimCancelButton : styles.claimButton, _customState.wechatClaimSaving ? styles.claimButtonDisabled : {})} onClick={e => {
          this.toggleWechatClaim(!claimed);
        }}>{_customState.wechatClaimSaving ? '处理中...' : claimed ? '取消认领' : '我有他的微信'}</button>
      </span> : <span style={styles.claimHint}>未识别当前用户</span>}
    </div>);
}
export function getPrivateProfilePermissionText(profile) {
  var value = this.getValue(profile, FIELDS.privateProfile.permission);
  if (!value || value === '-') return '授权可见';
  return value.indexOf('可见') >= 0 ? value : value + '可见';
}
export function getPrivateProfileValue(profile, fieldId) {
  var value = this.getValue(profile, fieldId);
  return value && value !== '-' ? value : '未填写';
}
export function isPrivateProfileGroupEmpty(profile, fields) {
  return fields.filter(item => this.isFilled(this.rawValue(profile, item.fieldId))).length === 0;
}
export function renderPrivateProfileHeader(profile) {
  return <div style={styles.privateProfileHeader}>
      <div style={styles.privateProfileTitleWrap}>
        <span style={styles.privateProfileTitle}>私密画像</span>
        <span style={styles.privateProfileSecureBadge}>{profile ? this.getPrivateProfilePermissionText(profile) : '授权可见'}</span>
      </div>
      <button style={styles.privateProfileAction} onClick={e => {
      this.openPrivateProfileForm();
    }}>{profile ? '编辑画像' : _customState.privateProfileSaving ? '创建中...' : '新增画像'}</button>
    </div>;
}
export function renderPrivateProfileField(profile, field) {
  var value = this.getPrivateProfileValue(profile, field.fieldId);
  var empty = value === '未填写';
  return <div key={field.label} style={field.wide ? styles.privateProfileFieldWide : styles.privateProfileField}>
      <div style={styles.privateProfileFieldLabel}>{field.label}</div>
      <div style={empty ? styles.privateProfileFieldValueEmpty : styles.privateProfileFieldValue}>{value}</div>
    </div>;
}
export function renderPrivateProfileCard(profile, title, icon, tag, tone, fields, emptyText) {
  var empty = this.isPrivateProfileGroupEmpty(profile, fields);
  return <div style={Object.assign({}, styles.privateProfileCard, tone === 'orange' ? styles.privateProfileCardOrange : tone === 'green' ? styles.privateProfileCardGreen : styles.privateProfileCardBlue)}>
      <div style={styles.privateProfileCardHead}>
        <div style={styles.privateProfileCardTitleWrap}>
          <span style={Object.assign({}, styles.privateProfileCardIcon, tone === 'orange' ? styles.privateProfileCardIconOrange : tone === 'green' ? styles.privateProfileCardIconGreen : styles.privateProfileCardIconBlue)}>{this.renderMiniIcon(icon, tone === 'orange' ? '#DC6803' : tone === 'green' ? '#039855' : '#155EEF', 15)}</span>
          <span style={styles.privateProfileCardTitle}>{title}</span>
        </div>
        <span style={Object.assign({}, styles.privateProfileCardTag, tone === 'orange' ? styles.privateProfileCardTagOrange : tone === 'green' ? styles.privateProfileCardTagGreen : styles.privateProfileCardTagBlue)}>{tag}</span>
      </div>
      {empty ? <div style={styles.privateProfileCardEmpty}>{emptyText}</div> : <div style={styles.privateProfileGrid}>
        {fields.map(field => this.renderPrivateProfileField(profile, field))}
      </div>}
    </div>;
}
export function renderSection(title, icon, children, wide) {
  return <div style={Object.assign({}, styles.section, wide ? styles.sectionWide : {})}>
      <div style={styles.sectionTitle}><span style={styles.sectionIcon}>{this.renderMiniIcon(icon, '#101828', 14)}</span>{title}</div>
      {children}
    </div>;
}
export function renderEmpty(text) {
  return <div style={styles.empty}>{text}</div>;
}
export function renderAccessDenied() {
  return <div style={styles.accessDenied}>
      <div style={styles.accessDeniedTitle}>暂无查看权限</div>
      <div style={styles.accessDeniedText}>四星/五星联系人详情仅管理层可查看。你仍可在联系人列表查看基础摘要。</div>
    </div>;
}
export function renderOwnerContribution(contact) {
  var data = this.getMaintenanceContributions(contact);
  var top = data.list[0];
  return <div style={styles.ownerValue}>
      <span style={styles.ownerName}>{top ? top.name : '-'}</span>
      <span style={top ? styles.ownerHintOk : styles.ownerHintWarn}>{top ? '贡献最高 · ' + top.percentText : '暂无贡献记录'}</span>
    </div>;
}
export function renderMaintenanceContribution(contact) {
  var data = this.getMaintenanceContributions(contact);
  if (!data.total) return <div style={styles.contributionSummary}>暂无可计算的维护贡献记录</div>;
  return <div style={styles.contributionInline}>
      <div style={styles.contributionInlineTitle}>维护贡献 · 共 {data.total} 次</div>
      {data.list.slice(0, 4).map(item => <div key={item.name} style={styles.contributionMiniRow}>
          <div style={styles.contributionPerson}>
            <b>{item.name}</b>
            <span style={styles.contributionSource}>{item.sourceText}</span>
          </div>
          <div style={styles.contributionRatio}>
            <div style={styles.contributionTrack}>
              <div style={Object.assign({}, styles.contributionFill, {
            width: item.percent + '%'
          })}></div>
            </div>
            <span>{item.count}次 · {item.percentText}</span>
          </div>
        </div>)}
    </div>;
}
export function renderProfileHeader(contact, isMobile) {
  var name = this.getValue(contact, FIELDS.contact.name);
  var alias = this.getValue(contact, FIELDS.contact.alias);
  var stage = this.getValue(contact, FIELDS.contact.stage);
  var status = this.getValue(contact, FIELDS.contact.status);
  var visitStatus = this.getVisitRisk(contact);
  var complete = this.getCompletion(contact);
  var ageText = this.calculateAge(this.rawValue(contact, FIELDS.contact.birthDate));
  var visitStyle = this.getVisitStatusStyle(visitStatus);
  return <div>
      <div style={isMobile ? styles.backRowMobile : styles.backRow}>
        <button style={styles.backLink} onClick={e => {
        this.goBack();
      }}>
          {this.renderMiniIcon('arrowLeft', '#667085', 16)}
          <span>返回联系人列表</span>
        </button>
      </div>
      <div style={isMobile ? styles.heroMobile : styles.hero}>
        <div style={isMobile ? styles.heroTopMobile : styles.heroTop}>
          <div style={styles.identity}>
            {this.renderAvatar(contact, isMobile)}
            <div style={styles.identityText}>
              <div style={styles.titleLine}>
                <span style={styles.name}>{name}</span>
                {alias !== '-' && <span style={styles.alias}>（{alias}）</span>}
                {this.renderBadge(status, this.statusTone(status))}
                {stage === '关键关系' && this.renderBadge('关键决策人', 'danger')}
              </div>
              <div style={styles.subLine}>
                {this.renderStars(contact)}
                <span>{this.getValue(contact, FIELDS.contact.type)}</span>
                <span>·</span>
                <span>{stage}</span>
                {ageText !== '-' && <span>·</span>}
                {ageText !== '-' && <span>年龄：{ageText}</span>}
              </div>
            </div>
          </div>
          <div style={styles.actions}>
            {this.renderButton('记录拜访', 'primary', e => {
          this.openVisitForm();
        })}
          </div>
        </div>
        <div style={isMobile ? styles.summaryGridMobile : styles.summaryGrid}>
          <div style={styles.summaryCard}>
            <div style={styles.summaryLabel}>当前单位</div>
            <div style={styles.summaryValue}>{this.getUnitName(contact)}</div>
          </div>
          <div style={styles.summaryCard}>
            <div style={styles.summaryLabel}>岗位职务</div>
            <div style={styles.summaryValue}>{this.getValue(contact, FIELDS.contact.position)}</div>
          </div>
          <div style={Object.assign({}, styles.summaryCard, {
          background: visitStyle.bg
        })}>
            <div style={Object.assign({}, styles.summaryLabel, {
            color: visitStyle.label
          })}>拜访状态</div>
            <div style={Object.assign({}, styles.summaryValueStatus, {
            color: visitStyle.value
          })}>{visitStatus}</div>
            <div style={Object.assign({}, styles.summarySub, {
            color: visitStyle.sub
          })}>上次: {this.formatDate(this.rawValue(contact, FIELDS.contact.lastVisit))}</div>
          </div>
          <div style={styles.summarySideStack}>
            <div style={styles.summaryCardCompact}>
              <div style={styles.summaryLabel}>资料完整度</div>
              {this.renderProgress(complete)}
            </div>
            {this.renderMissingSuggestionCard(contact, isMobile)}
          </div>
        </div>
        {this.renderTags(contact)}
      </div>
    </div>;
}
export function renderTabs() {
  var self = this;
  return <div style={styles.tabs}>
      {TAB_ITEMS.map(item => {
      var active = _customState.activeTab === item.key;
      return <button key={item.key} style={active ? styles.tabActive : styles.tab} onClick={e => {
        self.setActiveTab(item.key);
      }}>
            <span style={styles.tabIcon}>{self.renderMiniIcon(item.icon, active ? '#155EEF' : '#667085', 14)}</span>{item.label}
          </button>;
    })}
    </div>;
}
export function renderBasicTab(contact, isMobile) {
  var basicSection = this.renderSection('基础信息', 'user', <div>
        {this.renderInfoRow('联系人编号', this.getValue(contact, FIELDS.contact.serial))}
        {this.renderInfoRow('姓名', this.getValue(contact, FIELDS.contact.name))}
        {this.renderInfoRow('别名', this.getValue(contact, FIELDS.contact.alias))}
        {this.renderInfoRow('性别', this.getValue(contact, FIELDS.contact.gender))}
        {this.renderInfoRow('出生日期', this.formatDate(this.rawValue(contact, FIELDS.contact.birthDate)))}
        {this.renderInfoRow('年龄', this.calculateAge(this.rawValue(contact, FIELDS.contact.birthDate)))}
        {this.renderInfoRow('客户类型', this.getValue(contact, FIELDS.contact.type))}
        {this.renderInfoRow('办公地点', this.getValue(contact, FIELDS.contact.office), true)}
      </div>);
  var positionSection = this.renderSection('当前岗位', 'briefcase', <div>
        {this.renderInfoRow('当前单位', this.getUnitName(contact))}
        {this.renderInfoRow('当前部门', this.getValue(contact, FIELDS.contact.department))}
        {this.renderInfoRow('岗位职务', this.getValue(contact, FIELDS.contact.position))}
        {this.renderInfoRow('职级', this.getValue(contact, FIELDS.contact.level))}
        {this.renderInfoRow('分管业务', this.getValue(contact, FIELDS.contact.business), true)}
      </div>);
  var contactSection = this.renderSection('办公习惯', 'briefcase', <div>
        {this.renderInfoRow('是否抽烟', this.getValue(contact, FIELDS.contact.smoking))}
        {this.renderInfoRow('是否喝酒', this.getValue(contact, FIELDS.contact.drinking), true)}
      </div>);
  var visitSection = this.renderSection('拜访状态', 'clock', <div>
        {this.renderInfoRow('最近拜访', this.formatDate(this.rawValue(contact, FIELDS.contact.lastVisit)))}
        {this.renderInfoRow('下次截止', this.formatDate(this.getVisitDeadline(contact)))}
        {this.renderInfoRow('超期状态', this.getVisitRisk(contact))}
        {this.renderInfoRow('关系阶段', this.getValue(contact, FIELDS.contact.stage), true)}
      </div>);
  var maintenanceSection = this.renderSection('维护信息', 'users', <div>
        {this.renderInfoRow('主维护人', this.renderOwnerContribution(contact))}
        {this.renderWechatClaimRow(contact)}
        {this.renderInfoRow('建档人', this.getValue(contact, FIELDS.contact.creator))}
        {this.renderInfoRow('建档时间', this.formatDate(contact && contact.gmtCreate))}
        {this.renderInfoRow('最近更新', this.formatDate(contact && contact.gmtModified), true)}
        {this.renderMaintenanceContribution(contact)}
      </div>, true);
  if (isMobile) {
    return <div style={styles.basicGridMobile}>
        {basicSection}
        {positionSection}
        {contactSection}
        {visitSection}
        {maintenanceSection}
      </div>;
  }
  return <div style={styles.basicLayout}>
      <div style={styles.basicColumns}>
        {basicSection}
        {positionSection}
        {contactSection}
        {visitSection}
      </div>
      {maintenanceSection}
    </div>;
}
export function renderCareerTab(contact) {
  var careers = this.getRelatedCareers(contact);
  return <div style={styles.stack}>
      {this.renderTabHeader('任职履历（' + careers.length + '）', '添加履历', e => {
      this.openCareerForm();
    }, false)}
      {careers.length ? <div style={styles.careerTimeline}>
        {careers.map((row, index) => {
        var status = this.getValue(row, FIELDS.career.status);
        var isCurrent = status === '当前';
        var roleText = this.getValue(row, FIELDS.career.department) + ' · ' + this.getValue(row, FIELDS.career.position) + ' · ' + this.getValue(row, FIELDS.career.level);
        var sourceDesc = this.getValue(row, FIELDS.career.sourceDesc);
        var sourceText = sourceDesc === '-' ? '来源说明：未填写' : '来源说明：' + sourceDesc;
        return <div key={this.getRowId(row)} style={styles.careerTimelineRow}>
              <div style={styles.careerRail}>
                <div style={isCurrent ? styles.careerDotCurrent : styles.careerDotHistory}></div>
                {index < careers.length - 1 && <div style={styles.careerLine}></div>}
              </div>
              <div style={Object.assign({}, styles.careerCard, isCurrent ? styles.careerCardCurrent : {})} onClick={e => {
            this.openCareerDetail(row);
          }} onMouseEnter={e => {
            e.currentTarget.style.borderColor = isCurrent ? '#84ADFF' : '#D0D5DD';
            e.currentTarget.style.boxShadow = isCurrent ? '0 10px 24px rgba(21,94,239,0.10)' : '0 8px 20px rgba(16,24,40,0.06)';
          }} onMouseLeave={e => {
            e.currentTarget.style.borderColor = isCurrent ? '#D6E8FF' : '#EAECF0';
            e.currentTarget.style.boxShadow = isCurrent ? '0 6px 16px rgba(21,94,239,0.07)' : '0 4px 12px rgba(16,24,40,0.03)';
          }}>
                <div style={styles.careerCardHead}>
                  <div style={styles.careerUnitName}>{this.getCareerUnitName(row)}</div>
                  <span style={isCurrent ? styles.careerBadgeCurrent : styles.careerBadgeHistory}>{status}</span>
                </div>
                <div style={styles.careerMetaLine}>
                  <span style={styles.careerTime}>{this.formatDateRange(this.rawValue(row, FIELDS.career.startDate), this.rawValue(row, FIELDS.career.endDate))}</span>
                  <span style={styles.careerRole}>{roleText}</span>
                </div>
                <div style={styles.careerDescription}>{this.getValue(row, FIELDS.career.business) === '-' ? '暂无职责描述' : this.getValue(row, FIELDS.career.business)}</div>
                <div style={styles.careerSource}>{sourceText} · 更新：{this.formatDate(this.rawValue(row, FIELDS.career.recordTime))}</div>
              </div>
            </div>;
      })}
      </div> : <div>
        <div style={styles.careerTimelineRow}>
          <div style={styles.careerRail}>
            <div style={styles.careerDotCurrent}></div>
          </div>
          <div style={Object.assign({}, styles.careerCard, styles.careerCardCurrent)}>
            <div style={styles.careerCardHead}>
              <div style={styles.careerUnitName}>{this.getUnitName(contact)}</div>
              <span style={styles.careerBadgeCurrent}>当前</span>
            </div>
            <div style={styles.careerMetaLine}>
              <span style={styles.careerTime}>任职时间未填写</span>
              <span style={styles.careerRole}>{this.getValue(contact, FIELDS.contact.department)} · {this.getValue(contact, FIELDS.contact.position)} · {this.getValue(contact, FIELDS.contact.level)}</span>
            </div>
            <div style={styles.careerDescription}>{this.getValue(contact, FIELDS.contact.business) === '-' ? '暂无职责描述' : this.getValue(contact, FIELDS.contact.business)}</div>
            <div style={styles.careerSource}>来源：联系人主档案</div>
          </div>
        </div>
        {this.renderEmpty('暂无任职履历表记录，当前岗位以联系人主档案为准')}
      </div>}
    </div>;
}
export function renderAlbumUploadPanel(contact, isMobile) {
  var self = this;
  var attachments = _customState.albumAttachments || [];
  return <div style={styles.albumUploadPanel}>
      <div style={isMobile ? styles.albumFormGridMobile : styles.albumFormGrid}>
        <div style={styles.albumField}>
          <div style={styles.albumLabel}>图片分类</div>
          <div style={styles.albumChoiceRow}>
            {ALBUM_UPLOAD_CATEGORIES.map(item => {
            var active = _customState.albumDraft.category === item;
            return <button key={item} style={Object.assign({}, styles.albumChoice, active ? styles.albumChoiceActive : {})} onClick={e => {
              _customState.albumDraft.category = item;
              self.forceUpdate();
            }}>{item}</button>;
          })}
          </div>
        </div>
        <div style={styles.albumField}>
          <div style={styles.albumLabel}>权限级别</div>
          <div style={styles.albumChoiceRow}>
            {ALBUM_PERMISSIONS.map(item => {
            var active = _customState.albumDraft.permission === item;
            return <button key={item} style={Object.assign({}, styles.albumChoice, active ? styles.albumChoiceActive : {})} onClick={e => {
              _customState.albumDraft.permission = item;
              self.forceUpdate();
            }}>{item}</button>;
          })}
          </div>
        </div>
      </div>
      <div style={styles.albumField}>
        <div style={styles.albumLabel}>图片说明</div>
        <textarea defaultValue={_customState.albumDraft.description} placeholder="补充图片来源、场景或备注" onChange={e => {
        _customState.albumDraft.description = e.target.value;
      }} style={styles.albumTextarea}></textarea>
      </div>
      <div style={styles.albumFileRow}>
        <label style={Object.assign({}, styles.button, styles.buttonDefault, _customState.albumUploading ? styles.buttonDisabled : {})}>
          {_customState.albumUploading ? '上传中...' : '选择图片'}
          <input type="file" multiple={true} accept={ALBUM_IMAGE_ACCEPT} disabled={_customState.albumUploading || _customState.albumSaving} style={{
          display: 'none'
        }} onChange={e => {
          self.handleAlbumFilesChange(e);
        }} />
        </label>
        {this.renderButton(_customState.albumSaving ? '保存中...' : '保存到相册', 'primary', e => {
        if (!_customState.albumSaving) self.submitAlbumUpload();
      })}
      </div>
      {attachments.length ? <div style={styles.albumAttachmentList}>
        {attachments.map((item, index) => <div key={item.fileUuid || index} style={styles.albumAttachmentItem}>
            <span>{this.getAlbumImageName(item, index)}</span>
            <button style={styles.albumRemoveButton} onClick={e => {
          self.removeAlbumAttachment(item.fileUuid);
        }}>移除</button>
          </div>)}
      </div> : null}
    </div>;
}
export function renderAlbumPreview() {
  var card = _customState.albumPreview;
  if (!card) return null;
  var row = card.row;
  var url = this.getAlbumImageUrl(card.image);
  var title = this.getAlbumImageName(card.image, card.index);
  var meta = this.getValue(row, FIELDS.album.category) + ' · ' + this.formatDate(this.rawValue(row, FIELDS.album.uploadTime)) + ' · ' + this.getValue(row, FIELDS.album.uploader);
  return <div style={styles.albumPreviewMask} onClick={e => {
    this.closeAlbumPreview();
  }}>
      <div style={styles.albumPreviewDialog} onClick={e => {
      e.stopPropagation();
    }}>
        <button style={styles.albumPreviewClose} onClick={e => {
        this.closeAlbumPreview();
      }}>关闭</button>
        {url ? <img src={url} alt={title} style={styles.albumPreviewImage} /> : <div style={styles.albumThumbEmpty}>无法预览图片</div>}
        <div style={styles.albumPreviewMeta}>
          <div style={styles.itemTitle}>{title}</div>
          <div style={styles.itemMeta}>{meta}</div>
          <div style={styles.itemText}>{this.getValue(row, FIELDS.album.description) === '-' ? '暂无说明' : this.getValue(row, FIELDS.album.description)}</div>
        </div>
      </div>
    </div>;
}
export function renderAlbumCard(card, isMobile) {
  var row = card.row;
  var image = card.image;
  var url = this.getAlbumImageUrl(image);
  var title = this.getAlbumImageName(image, card.index);
  var description = this.getValue(row, FIELDS.album.description);
  var uploadTime = this.formatDate(this.rawValue(row, FIELDS.album.uploadTime));
  var uploader = this.getValue(row, FIELDS.album.uploader);
  return <div key={card.key} style={styles.albumCard}>
      <div style={styles.albumThumb} onClick={e => {
      this.openAlbumPreview(card);
    }}>
        {url ? <img src={url} alt={title} style={styles.albumImage} /> : <div style={styles.albumThumbEmpty}>无法预览</div>}
      </div>
      <div style={styles.albumCardBody}>
        <div style={styles.itemHead}>
          <div style={styles.albumCardTitle}>{this.getValue(row, FIELDS.album.category)}</div>
          {this.renderBadge(this.getValue(row, FIELDS.album.permission), this.statusTone(this.getValue(row, FIELDS.album.permission)))}
        </div>
        <div style={styles.albumDescription}>{description === '-' ? title : description}</div>
        <div style={styles.albumMeta}>{uploadTime} · {uploader}</div>
      </div>
    </div>;
}
export function renderAlbumTab(contact, isMobile) {
  var self = this;
  var albums = this.getRelatedAlbums(contact);
  var cards = this.getFilteredAlbumImages(contact);
  return <div style={styles.stack}>
      {this.renderTabHeader('联系人相册（' + cards.length + '）', _customState.albumUploadOpen ? '收起上传' : '上传照片', e => {
      this.toggleAlbumUpload();
    }, true)}
      <div style={styles.albumToolbar}>
        <div style={styles.albumFilterBar}>
          {ALBUM_CATEGORIES.map(item => {
          var active = _customState.albumCategoryFilter === item;
          return <button key={item} style={Object.assign({}, styles.albumSegment, active ? styles.albumSegmentActive : {})} onClick={e => {
            self.setAlbumCategoryFilter(item);
          }}>{item}</button>;
        })}
        </div>
      </div>
      {_customState.albumUploadOpen && this.renderAlbumUploadPanel(contact, isMobile)}
      {cards.length ? <div style={isMobile ? styles.albumGridMobile : styles.albumGrid}>
        {cards.map(card => this.renderAlbumCard(card, isMobile))}
      </div> : this.renderEmpty(albums.length ? '当前分类暂无相册图片' : '暂无相册图片，可上传工作照、办公位、车辆、新闻截图等资料。')}
      {this.renderAlbumPreview()}
    </div>;
}
export function renderProfileTab(contact) {
  var profile = this.getCurrentPrivateProfile(contact);
  var familyFields = [{
    label: '家庭住址',
    fieldId: FIELDS.privateProfile.familyAddress
  }, {
    label: '配偶信息',
    fieldId: FIELDS.privateProfile.spouse
  }, {
    label: '子女信息',
    fieldId: FIELDS.privateProfile.children
  }, {
    label: '亲属信息',
    fieldId: FIELDS.privateProfile.relatives
  }, {
    label: '家庭说明',
    fieldId: FIELDS.privateProfile.familyNote,
    wide: true
  }];
  var interestFields = [{
    label: '兴趣爱好',
    fieldId: FIELDS.privateProfile.hobbies
  }, {
    label: '个人喜好',
    fieldId: FIELDS.privateProfile.personalPreference
  }, {
    label: '饮食偏好',
    fieldId: FIELDS.privateProfile.foodPreference
  }, {
    label: '忌讳事项',
    fieldId: FIELDS.privateProfile.taboo
  }, {
    label: '兴趣说明',
    fieldId: FIELDS.privateProfile.interestNote,
    wide: true
  }];
  var habitFields = [{
    label: '办公习惯',
    fieldId: FIELDS.privateProfile.officeHabit
  }, {
    label: '车辆信息',
    fieldId: FIELDS.privateProfile.vehicle
  }, {
    label: '习惯说明',
    fieldId: FIELDS.privateProfile.habitNote,
    wide: true
  }];
  return <div style={styles.privateProfileWrap}>
      {this.renderPrivateProfileHeader(profile)}
      {!profile ? <div style={styles.privateProfileEmpty}>
        <div style={styles.privateProfileEmptyTitle}>暂无私密画像档案</div>
        <div style={styles.privateProfileEmptyText}>可沉淀家庭亲属、兴趣偏好和办公习惯等长期档案信息。</div>
      </div> : <div style={styles.privateProfileCards}>
        {this.renderPrivateProfileCard(profile, '家庭与亲属', 'users', '家庭', 'blue', familyFields, '暂无家庭与亲属信息')}
        {this.renderPrivateProfileCard(profile, '兴趣爱好', 'heart', '偏好', 'orange', interestFields, '暂无兴趣爱好信息')}
        {this.renderPrivateProfileCard(profile, '办公习惯', 'briefcase', '习惯', 'green', habitFields, '暂无办公习惯信息')}
      </div>}
    </div>;
}
export function renderSocialTab(contact) {
  var relations = this.getRelatedSocialRelations(contact);
  return <div style={styles.stack}>
      {this.renderTabHeader('社会关系（' + relations.length + '）', '添加关系', e => {
      this.openSocialRelationForm();
    }, true)}
      {relations.length ? relations.map(row => <div key={this.getRowId(row)} style={Object.assign({}, styles.cardItem, styles.clickableCard)} onClick={e => {
      this.openSocialRelationDetail(row);
    }}>
          <div style={styles.itemHead}>
            <div style={styles.itemTitle}>{this.getValue(row, FIELDS.socialRelation.target)}</div>
            {this.renderBadge(this.getValue(row, FIELDS.socialRelation.type), 'primary')}
          </div>
          <div style={styles.itemMeta}>对象身份：{this.getValue(row, FIELDS.socialRelation.identity)} · 熟悉程度：{this.getValue(row, FIELDS.socialRelation.strength)} · 可协助对接：{this.getValue(row, FIELDS.socialRelation.canAssist)}</div>
          <div style={styles.itemText}>关系说明：{this.getValue(row, FIELDS.socialRelation.description)}</div>
          <div style={styles.itemNext}>我方联系人：{this.getValue(row, FIELDS.socialRelation.internalContact)} · 信息来源：{this.getValue(row, FIELDS.socialRelation.source)}</div>
        </div>) : this.renderEmpty('暂无社会关系记录')}
    </div>;
}
export function renderVisitsTab(contact) {
  var visits = this.getRelatedVisits(contact);
  return <div style={styles.stack}>
      {this.renderTabHeader('拜访记录（' + visits.length + '）', '记录拜访', e => {
      this.openVisitForm();
    }, false)}
      {visits.length ? visits.map(row => <div key={this.getRowId(row)} style={Object.assign({}, styles.cardItem, styles.clickableCard)} onClick={e => {
      this.openVisitDetail(row);
    }}>
          <div style={styles.itemHead}>
            <div style={styles.itemTitle}>{this.getValue(row, FIELDS.visit.title)}</div>
            {this.renderBadge(this.getValue(row, FIELDS.visit.method), 'default')}
          </div>
          <div style={styles.itemMeta}>{this.formatDate(this.rawValue(row, FIELDS.visit.time))}</div>
          <div style={styles.itemText}>{this.getValue(row, FIELDS.visit.content)}</div>
          <div style={styles.itemNext}>下一步：{this.getValue(row, FIELDS.visit.nextAction)}</div>
        </div>) : this.renderEmpty('暂无拜访记录')}
    </div>;
}
export function renderProjectsTab(contact) {
  var relations = this.getRelatedRelations(contact);
  return <div style={styles.stack}>
      {this.renderTabHeader('关联项目', '', null, true)}
      {relations.length ? relations.map(row => {
      var project = this.getProject(row);
      return <div key={this.getRowId(row)} style={Object.assign({}, styles.cardItem, styles.clickableCard)} onClick={e => {
        if (project) this.openProjectDetail(project);else this.openRelationDetail(row);
      }}>
            <div style={styles.itemHead}>
              <div style={styles.itemTitle}>{this.getProjectName(row)}</div>
              {this.renderBadge(project ? this.getValue(project, FIELDS.project.status) : this.getValue(row, FIELDS.relation.role), 'primary')}
            </div>
            <div style={styles.itemMeta}>角色：{this.getValue(row, FIELDS.relation.role)} · 影响力：{this.getValue(row, FIELDS.relation.influence)} · 态度：{this.getValue(row, FIELDS.relation.attitude)}</div>
            <div style={styles.itemText}>{project ? this.getValue(project, FIELDS.project.nextAction) : this.getValue(row, FIELDS.relation.nextAction)}</div>
          </div>;
    }) : this.renderEmpty('暂无关联项目')}
    </div>;
}
export function renderDatesTab(contact) {
  var reminders = this.getRelatedReminders(contact);
  return <div style={styles.stack}>
      {this.renderTabHeader('重要日期提醒', '添加日期', e => {
      this.openReminderForm();
    }, true)}
      <div style={styles.dateGrid}>
        <div style={styles.dateCard}>
          <span>出生日期</span>
          <b>{this.formatDate(this.rawValue(contact, FIELDS.contact.birthDate))}</b>
          <span>{this.calculateAge(this.rawValue(contact, FIELDS.contact.birthDate))}</span>
        </div>
        <div style={styles.dateCard}>
          <span>最近拜访</span>
          <b>{this.formatDate(this.rawValue(contact, FIELDS.contact.lastVisit))}</b>
        </div>
        <div style={styles.dateCard}>
          <span>下次拜访截止</span>
          <b>{this.formatDate(this.getVisitDeadline(contact))}</b>
        </div>
      </div>
      {reminders.length ? reminders.map(row => <div key={this.getRowId(row)} style={Object.assign({}, styles.cardItem, styles.clickableCard)} onClick={e => {
      this.openReminderDetail(row);
    }}>
          <div style={styles.itemHead}>
            <div style={styles.itemTitle}>{this.getValue(row, FIELDS.reminder.title)}</div>
            {this.renderBadge(this.getValue(row, FIELDS.reminder.status), this.statusTone(this.getValue(row, FIELDS.reminder.status)))}
          </div>
          <div style={styles.itemMeta}>{this.formatDate(this.rawValue(row, FIELDS.reminder.date))}</div>
        </div>) : this.renderEmpty('暂无重要日期提醒')}
    </div>;
}
export function renderIntelTab(contact) {
  var intel = this.getRelatedIntel(contact);
  return <div style={styles.stack}>
      {this.renderTabHeader('市场线索', '添加线索', e => {
      this.openIntelForm();
    }, false)}
      {intel.length ? intel.map(row => <div key={this.getRowId(row)} style={Object.assign({}, styles.cardItem, styles.clickableCard)} onClick={e => {
      this.openIntelDetail(row);
    }}>
          <div style={styles.itemHead}>
            <div style={styles.itemTitle}>{this.getValue(row, FIELDS.intel.title)}</div>
            <div style={styles.ownerValue}>
              {this.isIntelOverdue(row) && this.renderBadge('已过期', 'danger')}
              {!this.isIntelOverdue(row) && this.isIntelReminderDue(row) && this.renderBadge('待提醒', 'warning')}
              {this.renderBadge(this.getValue(row, FIELDS.intel.status), this.getIntelTone(row))}
            </div>
          </div>
          <div style={styles.itemMeta}>{this.getValue(row, FIELDS.intel.category)} · 提醒：{this.formatDate(this.rawValue(row, FIELDS.intel.remindDate))} · 有效期：{this.formatDate(this.rawValue(row, FIELDS.intel.validUntil))}</div>
          <div style={styles.itemText}>{this.getValue(row, FIELDS.intel.content)}</div>
          {this.getValue(row, FIELDS.intel.nextAction) !== '-' && <div style={styles.itemNext}>下一步：{this.getValue(row, FIELDS.intel.nextAction)}</div>}
        </div>) : this.renderEmpty('暂无市场线索')}
    </div>;
}
export function getEntryTabConfig(key) {
  if (key === 'album') return {
    title: '相册',
    action: '上传照片',
    note: '普通员工仅可新增相册资料，不展示已有相册内容。',
    handler: 'openAlbumForm'
  };
  if (key === 'career') return {
    title: '任职履历',
    action: '添加履历',
    note: '普通员工仅可新增任职履历，不展示已有履历内容。',
    handler: 'openCareerForm'
  };
  if (key === 'profile') return {
    title: '私密画像',
    action: '新增画像',
    note: '普通员工仅可新增画像线索，不展示已有私密画像。',
    handler: 'openPrivateProfileForm'
  };
  if (key === 'social') return {
    title: '社会关系',
    action: '添加关系',
    note: '普通员工仅可新增社会关系线索，不展示已有社会关系。',
    handler: 'openSocialRelationForm'
  };
  if (key === 'visits') return {
    title: '拜访记录',
    action: '记录拜访',
    note: '普通员工仅可提交拜访记录，提交后不提供回看入口。',
    handler: 'openVisitForm'
  };
  if (key === 'projects') return {
    title: '关联项目',
    action: '关联项目',
    note: '普通员工仅可新增项目联系人关系，不展示已有关联项目。',
    handler: 'openRelationForm'
  };
  if (key === 'dates') return {
    title: '重要日期',
    action: '添加日期',
    note: '普通员工仅可新增重要日期提醒，不展示已有日期内容。',
    handler: 'openReminderForm'
  };
  return {
    title: '市场线索',
    action: '添加线索',
    note: '普通员工仅可新增市场线索，提交后不提供回看入口。',
    handler: 'openIntelForm'
  };
}
export function renderEntryOnlyTab(contact, key) {
  var self = this;
  var config = this.getEntryTabConfig(key);
  return <div style={styles.stack}>
      {this.renderTabHeader(config.title, config.action, e => {
      self[config.handler]();
    }, true)}
      <div style={{ padding: '32px 24px', background: '#FFFFFF', border: '1px solid #EAECF0', borderRadius: '8px', textAlign: 'center' }}>
        <div style={{ fontSize: '16px', fontWeight: 750, color: '#1D2939', marginBottom: '8px' }}>{config.title}仅开放新增入口</div>
        <div style={{ fontSize: '14px', color: '#667085', lineHeight: '22px', marginBottom: '18px' }}>{config.note}</div>
        <button style={styles.inlineAction} onClick={e => {
        self[config.handler]();
      }}><span style={styles.inlineActionIcon}>+</span>{config.action}</button>
      </div>
    </div>;
}
export function renderTabContent(contact, isMobile) {
  if (_customState.activeTab !== 'basic') return this.renderEntryOnlyTab(contact, _customState.activeTab);
  return this.renderBasicTab(contact, isMobile);
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
    maxWidth: '1152px',
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
    boxSizing: 'border-box'
  },
  heroMobile: {
    background: '#FFFFFF',
    border: '1px solid #EAECF0',
    borderRadius: '10px',
    padding: '16px',
    boxShadow: '0 8px 22px rgba(16,24,40,0.04)',
    boxSizing: 'border-box'
  },
  heroTop: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '18px',
    alignItems: 'flex-start'
  },
  heroTopMobile: {
    display: 'grid',
    gap: '14px'
  },
  identity: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '22px',
    minWidth: 0
  },
  identityText: {
    minWidth: 0
  },
  avatar: {
    width: '80px',
    height: '80px',
    borderRadius: '14px',
    background: 'linear-gradient(135deg, #4B8BFF 0%, #155EEF 100%)',
    color: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '42px',
    fontWeight: 900,
    flexShrink: 0
  },
  avatarMobile: {
    width: '58px',
    height: '58px',
    borderRadius: '12px',
    background: 'linear-gradient(135deg, #4B8BFF 0%, #155EEF 100%)',
    color: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '30px',
    fontWeight: 900,
    flexShrink: 0
  },
  titleLine: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    flexWrap: 'wrap'
  },
  name: {
    fontSize: '26px',
    lineHeight: '34px',
    fontWeight: 900,
    color: '#101828'
  },
  alias: {
    fontSize: '16px',
    color: '#475467',
    fontWeight: 600
  },
  subLine: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginTop: '6px',
    fontSize: '14px',
    color: '#667085',
    flexWrap: 'wrap'
  },
  stars: {
    display: 'inline-flex',
    gap: '1px',
    fontSize: '14px'
  },
  starOn: {
    color: '#F59E0B'
  },
  starOff: {
    color: '#D0D5DD'
  },
  svgIcon: {
    display: 'block',
    flexShrink: 0
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
    gap: '8px',
    height: '38px',
    borderRadius: '8px',
    padding: '0 16px',
    fontSize: '14px',
    fontWeight: 700,
    cursor: 'pointer',
    lineHeight: '20px',
    boxSizing: 'border-box'
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
  buttonDisabled: {
    opacity: 0.64,
    cursor: 'not-allowed'
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    height: '24px',
    padding: '0 10px',
    borderRadius: '999px',
    fontSize: '12px',
    fontWeight: 700,
    boxSizing: 'border-box',
    whiteSpace: 'nowrap'
  },
  summaryGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gap: '16px',
    marginTop: '20px',
    alignItems: 'start'
  },
  summaryGridMobile: {
    display: 'grid',
    gap: '10px',
    marginTop: '16px'
  },
  summaryCard: {
    minHeight: '80px',
    borderRadius: '8px',
    background: '#F8FAFC',
    padding: '12px',
    boxSizing: 'border-box'
  },
  summaryCardCompact: {
    minHeight: '44px',
    borderRadius: '8px',
    background: '#F8FAFC',
    padding: '10px 12px',
    boxSizing: 'border-box'
  },
  summarySideStack: {
    display: 'grid',
    gap: '8px',
    minWidth: 0
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
    fontWeight: 800
  },
  summaryValueStatus: {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 800
  },
  summarySub: {
    marginTop: '2px',
    fontSize: '12px'
  },
  progressLine: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  progressBar: {
    height: '8px',
    flex: 1,
    borderRadius: '999px',
    background: '#E4E7EC',
    overflow: 'hidden'
  },
  progressFill: {
    height: '8px',
    borderRadius: '999px',
    background: '#12B76A'
  },
  progressText: {
    fontSize: '14px',
    color: '#344054',
    minWidth: '34px'
  },
  missingCard: {
    position: 'relative',
    minHeight: '58px',
    borderRadius: '8px',
    border: '1px solid #FEDF89',
    background: '#FFFCF5',
    padding: '9px 10px 9px 12px',
    boxSizing: 'border-box',
    boxShadow: '0 6px 14px rgba(16,24,40,0.05)',
    overflow: 'hidden'
  },
  missingCardDone: {
    position: 'relative',
    minHeight: '58px',
    borderRadius: '8px',
    border: '1px solid #ABEFC6',
    background: '#F6FEF9',
    padding: '9px 10px 9px 12px',
    boxSizing: 'border-box',
    boxShadow: '0 6px 14px rgba(16,24,40,0.05)',
    overflow: 'hidden'
  },
  missingCardHead: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    minWidth: 0
  },
  missingCardIcon: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '16px',
    height: '16px',
    flexShrink: 0
  },
  missingCardTitle: {
    color: '#344054',
    fontSize: '12px',
    lineHeight: '18px',
    fontWeight: 800,
    minWidth: 0,
    flex: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  missingCount: {
    display: 'inline-flex',
    alignItems: 'center',
    height: '20px',
    borderRadius: '999px',
    background: '#FFF1D6',
    color: '#B54708',
    fontSize: '12px',
    fontWeight: 800,
    padding: '0 7px',
    whiteSpace: 'nowrap'
  },
  missingCountDone: {
    display: 'inline-flex',
    alignItems: 'center',
    height: '20px',
    borderRadius: '999px',
    background: '#ECFDF3',
    color: '#027A48',
    fontSize: '12px',
    fontWeight: 800,
    padding: '0 7px',
    whiteSpace: 'nowrap'
  },
  missingCardText: {
    color: '#667085',
    fontSize: '12px',
    lineHeight: '18px',
    marginTop: '5px',
    paddingRight: '52px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  missingCardAction: {
    position: 'absolute',
    right: '10px',
    bottom: '8px',
    border: 'none',
    background: 'transparent',
    color: '#155EEF',
    fontSize: '12px',
    fontWeight: 800,
    lineHeight: '18px',
    padding: 0,
    cursor: 'pointer'
  },
  tagBlock: {
    marginTop: '18px'
  },
  tagList: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  tag: {
    height: '24px',
    padding: '0 10px',
    borderRadius: '999px',
    background: '#EAF2FF',
    color: '#155EEF',
    fontSize: '12px',
    display: 'inline-flex',
    alignItems: 'center',
    fontWeight: 700
  },
  emptyTagText: {
    color: '#98A2B3',
    fontSize: '13px'
  },
  tagManageButton: {
    height: '24px',
    borderRadius: '8px',
    border: '1px dashed #84ADFF',
    background: '#FFFFFF',
    color: '#155EEF',
    fontSize: '12px',
    fontWeight: 700,
    padding: '0 10px',
    cursor: 'pointer'
  },
  tagEditor: {
    marginTop: '10px',
    border: '1px solid #D6E8FF',
    borderRadius: '10px',
    background: '#F8FAFF',
    padding: '12px',
    boxSizing: 'border-box'
  },
  tagOptionWrap: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '10px'
  },
  tagOption: {
    minHeight: '26px',
    borderRadius: '999px',
    border: '1px solid #D0D5DD',
    background: '#FFFFFF',
    color: '#344054',
    fontSize: '12px',
    fontWeight: 700,
    padding: '2px 10px',
    cursor: 'pointer'
  },
  tagOptionActive: {
    border: '1px solid #155EEF',
    background: '#EAF2FF',
    color: '#155EEF'
  },
  tagInputRow: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  },
  tagInput: {
    flex: 1,
    minWidth: 0,
    height: '34px',
    borderRadius: '8px',
    border: '1px solid #D0D5DD',
    padding: '0 10px',
    outline: 'none',
    fontSize: '13px',
    boxSizing: 'border-box'
  },
  tagEditorFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '12px',
    marginTop: '10px',
    flexWrap: 'wrap'
  },
  tagEditorHint: {
    color: '#667085',
    fontSize: '12px',
    lineHeight: '18px'
  },
  tagEditorActions: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  },
  tagCancelButton: {
    height: '32px',
    borderRadius: '8px',
    border: '1px solid #D0D5DD',
    background: '#FFFFFF',
    color: '#344054',
    fontSize: '13px',
    fontWeight: 700,
    padding: '0 12px',
    cursor: 'pointer'
  },
  tagSaveButton: {
    height: '32px',
    borderRadius: '8px',
    border: '1px solid #155EEF',
    background: '#155EEF',
    color: '#FFFFFF',
    fontSize: '13px',
    fontWeight: 700,
    padding: '0 14px',
    cursor: 'pointer'
  },
  tagSaveButtonDisabled: {
    opacity: 0.6,
    cursor: 'not-allowed'
  },
  detailPanel: {
    marginTop: '14px',
    background: '#FFFFFF',
    border: '1px solid #EAECF0',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 8px 22px rgba(16,24,40,0.04)'
  },
  tabs: {
    display: 'flex',
    overflowX: 'auto',
    borderBottom: '1px solid #EAECF0',
    background: '#FFFFFF'
  },
  tab: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    height: '50px',
    padding: '0 16px',
    border: 'none',
    borderBottom: '2px solid transparent',
    background: 'transparent',
    color: '#667085',
    fontSize: '14px',
    fontWeight: 500,
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box'
  },
  tabActive: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    height: '50px',
    padding: '0 16px',
    border: 'none',
    borderBottom: '2px solid #155EEF',
    background: '#F7FAFF',
    color: '#155EEF',
    fontSize: '14px',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    fontWeight: 600,
    boxSizing: 'border-box'
  },
  tabIcon: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '14px',
    height: '14px',
    flexShrink: 0
  },
  tabBody: {
    padding: '24px',
    boxSizing: 'border-box'
  },
  tabBodyMobile: {
    padding: '16px',
    boxSizing: 'border-box'
  },
  tabHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '12px',
    marginBottom: '16px'
  },
  tabHeaderLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    flexWrap: 'wrap',
    minWidth: 0
  },
  tabHeaderTitle: {
    color: '#344054',
    fontSize: '14px',
    lineHeight: '22px',
    fontWeight: 700
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
  inlineAction: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    border: 'none',
    background: 'transparent',
    color: '#155EEF',
    fontSize: '14px',
    fontWeight: 700,
    cursor: 'pointer',
    padding: '0',
    lineHeight: '22px',
    whiteSpace: 'nowrap'
  },
  inlineActionIcon: {
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '18px'
  },
  basicLayout: {
    display: 'grid',
    gap: '16px'
  },
  basicColumns: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
    gap: '16px',
    alignItems: 'stretch'
  },
  basicGridMobile: {
    display: 'grid',
    gap: '16px'
  },
  section: {
    minWidth: 0,
    background: '#FFFFFF',
    border: '1px solid #E4E7EC',
    borderRadius: '12px',
    padding: '18px 20px',
    boxSizing: 'border-box',
    boxShadow: '0 1px 3px rgba(16,24,40,0.04)'
  },
  sectionWide: {
    gridColumn: '1 / -1',
    minWidth: 0,
    paddingBottom: '24px',
    overflow: 'visible'
  },
  sectionTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: '7px',
    color: '#101828',
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 700,
    marginBottom: '8px',
    paddingBottom: '12px',
    borderBottom: '1px solid #EAECF0'
  },
  sectionIcon: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '14px',
    height: '14px',
    color: '#101828',
    flexShrink: 0
  },
  infoRow: {
    display: 'grid',
    gridTemplateColumns: '104px minmax(0, 1fr)',
    minHeight: '40px',
    alignItems: 'center',
    borderBottom: '1px solid #F2F4F7',
    gap: '12px',
    padding: '6px 0',
    boxSizing: 'border-box'
  },
  infoRowLast: {
    borderBottom: 'none'
  },
  infoLabel: {
    color: '#98A2B3',
    fontSize: '13px',
    lineHeight: '20px'
  },
  infoValue: {
    minWidth: 0,
    color: '#101828',
    fontSize: '14px',
    lineHeight: '20px',
    wordBreak: 'break-word'
  },
  claimValue: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '10px',
    minWidth: 0,
    width: '100%',
    flexWrap: 'wrap'
  },
  claimNames: {
    minWidth: 0,
    flex: '1 1 240px',
    color: '#101828',
    fontSize: '14px',
    lineHeight: '20px',
    wordBreak: 'break-word'
  },
  claimActions: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    flexShrink: 0,
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    marginLeft: 'auto'
  },
  claimedBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    height: '22px',
    borderRadius: '999px',
    background: '#ECFDF3',
    color: '#027A48',
    fontSize: '12px',
    fontWeight: 800,
    padding: '0 8px',
    boxSizing: 'border-box',
    whiteSpace: 'nowrap'
  },
  claimButton: {
    height: '28px',
    borderRadius: '8px',
    border: '1px solid #155EEF',
    background: '#EAF2FF',
    color: '#155EEF',
    padding: '0 10px',
    fontSize: '12px',
    fontWeight: 800,
    cursor: 'pointer',
    boxSizing: 'border-box',
    whiteSpace: 'nowrap'
  },
  claimCancelButton: {
    height: '28px',
    borderRadius: '8px',
    border: '1px solid #D0D5DD',
    background: '#FFFFFF',
    color: '#667085',
    padding: '0 10px',
    fontSize: '12px',
    fontWeight: 800,
    cursor: 'pointer',
    boxSizing: 'border-box',
    whiteSpace: 'nowrap'
  },
  claimButtonDisabled: {
    opacity: 0.58,
    cursor: 'not-allowed'
  },
  claimHint: {
    color: '#98A2B3',
    fontSize: '12px',
    lineHeight: '18px'
  },
  noteBox: {
    minHeight: '52px',
    borderRadius: '8px',
    background: '#F8FAFC',
    color: '#475467',
    padding: '14px 16px',
    lineHeight: '22px',
    fontSize: '14px',
    boxSizing: 'border-box'
  },
  privateProfileWrap: {
    display: 'grid',
    gap: '14px'
  },
  privateProfileHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '12px',
    padding: '2px 0 4px',
    flexWrap: 'wrap'
  },
  privateProfileTitleWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    flexWrap: 'wrap',
    minWidth: 0
  },
  privateProfileTitle: {
    color: '#101828',
    fontSize: '18px',
    lineHeight: '26px',
    fontWeight: 900
  },
  privateProfileSecureBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    height: '22px',
    padding: '0 9px',
    borderRadius: '999px',
    background: '#FFF7E6',
    color: '#B54708',
    fontSize: '12px',
    fontWeight: 700,
    lineHeight: '22px',
    whiteSpace: 'nowrap'
  },
  privateProfileAction: {
    border: 'none',
    background: 'transparent',
    color: '#155EEF',
    fontSize: '14px',
    lineHeight: '22px',
    fontWeight: 800,
    cursor: 'pointer',
    padding: '0',
    whiteSpace: 'nowrap'
  },
  privateProfileCards: {
    display: 'grid',
    gap: '14px'
  },
  privateProfileCard: {
    border: '1px solid #EAECF0',
    background: '#FFFFFF',
    borderRadius: '8px',
    padding: '16px',
    boxShadow: '0 6px 16px rgba(16,24,40,0.04)',
    boxSizing: 'border-box'
  },
  privateProfileCardBlue: {
    background: '#FBFDFF',
    borderColor: '#D6E8FF'
  },
  privateProfileCardOrange: {
    background: '#FFFCF7',
    borderColor: '#FEDF89'
  },
  privateProfileCardGreen: {
    background: '#F8FFFB',
    borderColor: '#A6F4C5'
  },
  privateProfileCardHead: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '12px',
    marginBottom: '14px',
    flexWrap: 'wrap'
  },
  privateProfileCardTitleWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: '9px',
    minWidth: 0
  },
  privateProfileCardIcon: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '30px',
    height: '30px',
    borderRadius: '8px',
    flexShrink: 0
  },
  privateProfileCardIconBlue: {
    background: '#EAF2FF'
  },
  privateProfileCardIconOrange: {
    background: '#FFF1D6'
  },
  privateProfileCardIconGreen: {
    background: '#E7F8EF'
  },
  privateProfileCardTitle: {
    color: '#101828',
    fontSize: '15px',
    lineHeight: '22px',
    fontWeight: 900,
    wordBreak: 'break-word'
  },
  privateProfileCardTag: {
    display: 'inline-flex',
    alignItems: 'center',
    height: '22px',
    padding: '0 9px',
    borderRadius: '999px',
    fontSize: '12px',
    fontWeight: 700,
    lineHeight: '22px',
    whiteSpace: 'nowrap'
  },
  privateProfileCardTagBlue: {
    background: '#EAF2FF',
    color: '#155EEF'
  },
  privateProfileCardTagOrange: {
    background: '#FFF1D6',
    color: '#DC6803'
  },
  privateProfileCardTagGreen: {
    background: '#E7F8EF',
    color: '#039855'
  },
  privateProfileGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px 24px'
  },
  privateProfileField: {
    minWidth: 0
  },
  privateProfileFieldWide: {
    gridColumn: '1 / -1',
    minWidth: 0
  },
  privateProfileFieldLabel: {
    color: '#98A2B3',
    fontSize: '12px',
    lineHeight: '18px',
    marginBottom: '4px'
  },
  privateProfileFieldValue: {
    color: '#101828',
    fontSize: '14px',
    lineHeight: '22px',
    fontWeight: 600,
    wordBreak: 'break-word',
    whiteSpace: 'pre-wrap'
  },
  privateProfileFieldValueEmpty: {
    color: '#B7C0CC',
    fontSize: '14px',
    lineHeight: '22px',
    fontWeight: 500
  },
  privateProfileCardEmpty: {
    minHeight: '54px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    background: 'rgba(255,255,255,0.7)',
    color: '#98A2B3',
    fontSize: '14px',
    lineHeight: '22px'
  },
  privateProfileEmpty: {
    minHeight: '136px',
    border: '1px dashed #D0D5DD',
    background: '#FFFFFF',
    borderRadius: '8px',
    display: 'grid',
    alignContent: 'center',
    justifyItems: 'center',
    gap: '6px',
    padding: '24px',
    boxSizing: 'border-box'
  },
  privateProfileEmptyTitle: {
    color: '#344054',
    fontSize: '15px',
    lineHeight: '22px',
    fontWeight: 800
  },
  privateProfileEmptyText: {
    color: '#98A2B3',
    fontSize: '13px',
    lineHeight: '20px',
    textAlign: 'center'
  },
  stack: {
    display: 'grid',
    gap: '12px'
  },
  careerTimeline: {
    display: 'grid',
    gap: '14px',
    width: '100%'
  },
  careerTimelineRow: {
    display: 'grid',
    gridTemplateColumns: '22px minmax(0, 1fr)',
    gap: '12px',
    width: '100%',
    boxSizing: 'border-box'
  },
  careerRail: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '19px',
    minHeight: '100%',
    boxSizing: 'border-box'
  },
  careerLine: {
    position: 'absolute',
    top: '31px',
    bottom: '-15px',
    width: '1px',
    background: '#E4E7EC'
  },
  careerDotCurrent: {
    position: 'relative',
    zIndex: 1,
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: '#155EEF',
    boxShadow: '0 0 0 4px #EAF2FF',
    flexShrink: 0
  },
  careerDotHistory: {
    position: 'relative',
    zIndex: 1,
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: '#98A2B3',
    boxShadow: '0 0 0 4px #F2F4F7',
    flexShrink: 0
  },
  careerCard: {
    width: '100%',
    minWidth: 0,
    border: '1px solid #EAECF0',
    background: '#FFFFFF',
    borderRadius: '8px',
    padding: '16px',
    boxSizing: 'border-box',
    boxShadow: '0 4px 12px rgba(16,24,40,0.03)',
    cursor: 'pointer',
    transition: 'border-color 0.16s ease, box-shadow 0.16s ease',
    overflow: 'hidden'
  },
  careerCardCurrent: {
    borderColor: '#D6E8FF',
    background: '#F8FBFF',
    boxShadow: '0 6px 16px rgba(21,94,239,0.07)'
  },
  careerCardHead: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '12px',
    flexWrap: 'wrap',
    marginBottom: '8px'
  },
  careerUnitName: {
    minWidth: 0,
    color: '#101828',
    fontWeight: 800,
    fontSize: '15px',
    lineHeight: '22px',
    wordBreak: 'break-word'
  },
  careerBadgeCurrent: {
    display: 'inline-flex',
    alignItems: 'center',
    height: '22px',
    padding: '0 9px',
    borderRadius: '999px',
    background: '#EAF2FF',
    color: '#155EEF',
    fontSize: '12px',
    fontWeight: 700,
    lineHeight: '20px',
    whiteSpace: 'nowrap'
  },
  careerBadgeHistory: {
    display: 'inline-flex',
    alignItems: 'center',
    height: '22px',
    padding: '0 9px',
    borderRadius: '999px',
    background: '#F2F4F7',
    color: '#475467',
    fontSize: '12px',
    fontWeight: 700,
    lineHeight: '20px',
    whiteSpace: 'nowrap'
  },
  careerMetaLine: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    flexWrap: 'wrap',
    color: '#667085',
    fontSize: '13px',
    lineHeight: '20px',
    marginBottom: '8px'
  },
  careerTime: {
    color: '#344054',
    fontWeight: 600,
    whiteSpace: 'nowrap'
  },
  careerRole: {
    minWidth: 0,
    color: '#667085',
    wordBreak: 'break-word'
  },
  careerDescription: {
    color: '#344054',
    fontSize: '14px',
    lineHeight: '22px',
    marginTop: '2px',
    wordBreak: 'break-word'
  },
  careerSource: {
    marginTop: '10px',
    color: '#98A2B3',
    fontSize: '12px',
    lineHeight: '18px',
    wordBreak: 'break-word'
  },
  timelineItem: {
    display: 'flex',
    gap: '12px',
    padding: '14px',
    background: '#FCFCFD',
    border: '1px solid #EEF2F6',
    borderRadius: '8px'
  },
  timelineDot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: '#155EEF',
    marginTop: '6px',
    flexShrink: 0
  },
  timelineDotMuted: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: '#98A2B3',
    marginTop: '6px',
    flexShrink: 0
  },
  timelineContent: {
    minWidth: 0
  },
  cardItem: {
    border: '1px solid #EEF2F6',
    background: '#FCFCFD',
    borderRadius: '8px',
    padding: '14px',
    boxSizing: 'border-box'
  },
  clickableCard: {
    cursor: 'pointer'
  },
  itemHead: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '6px'
  },
  itemTitle: {
    color: '#101828',
    fontWeight: 900,
    fontSize: '15px',
    lineHeight: '22px'
  },
  itemMeta: {
    color: '#667085',
    fontSize: '13px',
    lineHeight: '20px'
  },
  itemText: {
    color: '#344054',
    fontSize: '14px',
    lineHeight: '22px',
    marginTop: '6px'
  },
  itemNext: {
    color: '#155EEF',
    fontSize: '13px',
    lineHeight: '20px',
    marginTop: '8px'
  },
  ownerValue: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    flexWrap: 'wrap',
    minWidth: 0
  },
  ownerName: {
    color: '#101828',
    fontWeight: 700
  },
  ownerHintOk: {
    display: 'inline-flex',
    alignItems: 'center',
    minHeight: '22px',
    borderRadius: '8px',
    background: '#ECFDF3',
    color: '#027A48',
    fontSize: '12px',
    lineHeight: '18px',
    padding: '1px 8px',
    boxSizing: 'border-box'
  },
  ownerHintWarn: {
    display: 'inline-flex',
    alignItems: 'center',
    minHeight: '22px',
    borderRadius: '8px',
    background: '#FFF7E6',
    color: '#B54708',
    fontSize: '12px',
    lineHeight: '18px',
    padding: '1px 8px',
    boxSizing: 'border-box'
  },
  contributionSummary: {
    minHeight: '46px',
    border: '1px solid #E4E7EC',
    borderRadius: '10px',
    background: '#F8FAFC',
    color: '#98A2B3',
    fontSize: '12px',
    lineHeight: '18px',
    padding: '13px 16px',
    boxSizing: 'border-box',
    marginTop: '14px'
  },
  contributionInline: {
    border: '1px solid #E4E7EC',
    borderRadius: '10px',
    background: '#F8FAFC',
    padding: '14px 16px 16px',
    marginTop: '14px',
    boxSizing: 'border-box',
    overflow: 'visible'
  },
  contributionInlineTitle: {
    color: '#98A2B3',
    fontSize: '12px',
    fontWeight: 700,
    lineHeight: '18px',
    marginBottom: '6px'
  },
  contributionMiniRow: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr) 168px',
    gap: '10px',
    alignItems: 'center',
    minHeight: '40px',
    padding: '9px 0',
    borderTop: '1px solid #F2F4F7',
    boxSizing: 'border-box'
  },
  contributionPerson: {
    display: 'grid',
    gap: '1px',
    minWidth: 0,
    color: '#101828',
    fontSize: '13px',
    lineHeight: '19px'
  },
  contributionSource: {
    color: '#98A2B3',
    fontSize: '12px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  contributionRatio: {
    display: 'grid',
    gap: '5px',
    justifyItems: 'end',
    color: '#475467',
    fontSize: '12px',
    lineHeight: '18px'
  },
  contributionTrack: {
    height: '8px',
    borderRadius: '999px',
    background: '#EEF2F6',
    overflow: 'hidden',
    width: '100%'
  },
  contributionFill: {
    height: '8px',
    borderRadius: '999px',
    background: '#155EEF'
  },
  dateGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px'
  },
  dateCard: {
    minHeight: '78px',
    borderRadius: '8px',
    background: '#F8FAFC',
    border: '1px solid #EEF2F6',
    padding: '14px',
    boxSizing: 'border-box',
    display: 'grid',
    gap: '8px'
  },
  albumToolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '12px',
    flexWrap: 'wrap'
  },
  albumFilterBar: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    flexWrap: 'wrap'
  },
  albumSegment: {
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
  albumSegmentActive: {
    background: '#EAF2FF',
    color: '#155EEF',
    borderColor: '#B9D6FF',
    fontWeight: 700
  },
  albumUploadPanel: {
    border: '1px solid #EAECF0',
    background: '#FCFCFD',
    borderRadius: '8px',
    padding: '14px',
    display: 'grid',
    gap: '12px',
    boxSizing: 'border-box'
  },
  albumFormGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px'
  },
  albumFormGridMobile: {
    display: 'grid',
    gap: '12px'
  },
  albumField: {
    display: 'grid',
    gap: '6px',
    minWidth: 0
  },
  albumLabel: {
    color: '#667085',
    fontSize: '12px',
    fontWeight: 700,
    lineHeight: '18px'
  },
  albumChoiceRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px'
  },
  albumChoice: {
    minHeight: '32px',
    borderRadius: '8px',
    border: '1px solid #D0D5DD',
    background: '#FFFFFF',
    color: '#344054',
    padding: '0 10px',
    fontSize: '13px',
    fontWeight: 600,
    cursor: 'pointer',
    boxSizing: 'border-box'
  },
  albumChoiceActive: {
    borderColor: '#2E90FA',
    background: '#EFF8FF',
    color: '#175CD3'
  },
  albumTextarea: {
    width: '100%',
    minHeight: '72px',
    borderRadius: '8px',
    border: '1px solid #D0D5DD',
    background: '#FFFFFF',
    color: '#344054',
    padding: '10px 12px',
    fontSize: '14px',
    lineHeight: '22px',
    outline: 'none',
    resize: 'vertical',
    boxSizing: 'border-box',
    fontFamily: 'inherit'
  },
  albumFileRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    flexWrap: 'wrap'
  },
  albumAttachmentList: {
    display: 'grid',
    gap: '8px'
  },
  albumAttachmentItem: {
    minHeight: '36px',
    border: '1px solid #EEF2F6',
    background: '#FFFFFF',
    borderRadius: '8px',
    padding: '8px 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '12px',
    color: '#344054',
    fontSize: '13px',
    boxSizing: 'border-box'
  },
  albumRemoveButton: {
    border: 'none',
    background: 'transparent',
    color: '#F04438',
    fontSize: '13px',
    fontWeight: 700,
    cursor: 'pointer',
    padding: 0,
    whiteSpace: 'nowrap'
  },
  albumGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
    gap: '14px'
  },
  albumGridMobile: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: '10px'
  },
  albumCard: {
    border: '1px solid #EAECF0',
    background: '#FFFFFF',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(16,24,40,0.03)',
    minWidth: 0
  },
  albumThumb: {
    position: 'relative',
    width: '100%',
    paddingTop: '72%',
    background: '#F2F4F7',
    cursor: 'zoom-in',
    overflow: 'hidden'
  },
  albumImage: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block'
  },
  albumThumbEmpty: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#98A2B3',
    fontSize: '13px',
    textAlign: 'center',
    padding: '12px',
    boxSizing: 'border-box'
  },
  albumCardBody: {
    padding: '12px',
    display: 'grid',
    gap: '6px',
    boxSizing: 'border-box'
  },
  albumCardTitle: {
    color: '#101828',
    fontWeight: 900,
    fontSize: '14px',
    lineHeight: '20px',
    minWidth: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  albumDescription: {
    color: '#344054',
    fontSize: '13px',
    lineHeight: '20px',
    minHeight: '40px',
    wordBreak: 'break-word'
  },
  albumMeta: {
    color: '#667085',
    fontSize: '12px',
    lineHeight: '18px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  albumPreviewMask: {
    position: 'fixed',
    inset: 0,
    zIndex: 9999,
    background: 'rgba(16,24,40,0.76)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
    boxSizing: 'border-box'
  },
  albumPreviewDialog: {
    position: 'relative',
    maxWidth: '920px',
    width: '100%',
    maxHeight: '92vh',
    background: '#FFFFFF',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 24px 60px rgba(16,24,40,0.24)'
  },
  albumPreviewImage: {
    width: '100%',
    maxHeight: '72vh',
    objectFit: 'contain',
    background: '#101828',
    display: 'block'
  },
  albumPreviewClose: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    zIndex: 1,
    height: '30px',
    borderRadius: '8px',
    border: '1px solid rgba(255,255,255,0.34)',
    background: 'rgba(16,24,40,0.72)',
    color: '#FFFFFF',
    fontSize: '13px',
    fontWeight: 700,
    padding: '0 10px',
    cursor: 'pointer'
  },
  albumPreviewMeta: {
    padding: '14px 16px 16px',
    background: '#FFFFFF',
    boxSizing: 'border-box'
  },
  empty: {
    padding: '28px 12px',
    color: '#98A2B3',
    textAlign: 'center',
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
  sensitiveNotice: {
    padding: '14px',
    borderRadius: '8px',
    background: '#F8FAFC',
    color: '#667085',
    fontSize: '14px',
    lineHeight: '22px',
    border: '1px solid #E4E7EC'
  },
  accessDenied: {
    maxWidth: '680px',
    margin: '80px auto',
    padding: '32px 24px',
    background: '#FFFFFF',
    border: '1px solid #EAECF0',
    borderRadius: '8px',
    textAlign: 'center',
    boxSizing: 'border-box'
  },
  accessDeniedTitle: {
    fontSize: '20px',
    fontWeight: 750,
    color: '#1D2939',
    marginBottom: '8px'
  },
  accessDeniedText: {
    fontSize: '14px',
    color: '#667085',
    lineHeight: '22px'
  }
};
export function renderJsx() {
  var timestamp = this.state && this.state.timestamp;
  var isMobile = this.getIsMobile();
  var contact = this.getContact();
  return <div style={styles.page}>
      <div style={{
      display: 'none'
    }}>{timestamp}</div>
      <div style={isMobile ? styles.shellMobile : styles.shell}>
        {_customState.loading && <div style={styles.notice}>正在加载联系人详情...</div>}
        {_customState.error && <div style={styles.error}>{_customState.error}</div>}
        {!_customState.loading && _customState.accessDenied && this.renderAccessDenied()}
        {!_customState.loading && !_customState.accessDenied && !contact && this.renderEmpty('未找到联系人，请返回列表重新选择')}
        {!_customState.loading && !_customState.accessDenied && contact && <div>
          {this.renderProfileHeader(contact, isMobile)}
          <div style={styles.detailPanel}>
            {this.renderTabs()}
            <div style={isMobile ? styles.tabBodyMobile : styles.tabBody}>
              {this.renderTabContent(contact, isMobile)}
            </div>
          </div>
        </div>}
      </div>
    </div>;
}
