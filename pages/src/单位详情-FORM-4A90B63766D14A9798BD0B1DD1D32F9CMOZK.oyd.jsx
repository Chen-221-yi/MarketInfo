// 单位详情 - 自定义页面
var APP_TYPE = 'APP_LC7BU43GCVLSI0TH8POE';
var FORMS = {
  unitManage: 'FORM-CA9908793C7C4EA3997B43B5BF5FAA34KEAC',
  unitDetail: 'FORM-4A90B63766D14A9798BD0B1DD1D32F9CMOZK',
  unit: 'FORM-A96B2187A20640C68C9F7806CC1FEADDZZZ8',
  projectDetail: 'FORM-3367C1CD6BDB4FE995BCA69ECFF03419Q0A4',
  project: 'FORM-DC58D4D9EB714ACBB421A34ADFB418ABJCVO',
  contactDetail: 'FORM-89CA116EA0134CACB77EAA0F87AA7AB8MD1C',
  contact: 'FORM-87B25B011DC14AA5ACC39BE4077D520AITQS',
  visitDetail: 'FORM-6CC5A6BBE39F439CA213B8CC3BD7E429GQW1',
  visit: 'FORM-5C9373CB6EA5468FA607352B96908C87WHBW'
};
var FIELDS = {
  unit: {
    code: 'serialNumberField_gqb710eyb',
    name: 'textField_gqbk2dh1r',
    shortName: 'textField_gqbk3q3b8',
    type: 'selectField_gqbk4xyoq',
    system: 'selectField_gqbk5upc2',
    region: 'addressField_mq52xi6b',
    level: 'selectField_gqbk73418',
    address: 'addressField_gqbk80a21',
    business: 'textareaField_gqbk9dwrh',
    remark: 'textareaField_gqbkbwydj'
  },
  contact: {
    unit: 'associationFormField_ibw594k2s',
    name: 'textField_ibw42mevu',
    alias: 'textField_ibw43dvjm',
    star: 'selectField_ibw457hck',
    position: 'textField_ibw5bqqub',
    department: 'textField_ibw5a32dk',
    region: 'addressField_mq52ftwy',
    status: 'selectField_ibw57natj',
    followStatus: 'selectField_ibw58zzom',
    owner: 'employeeField_ibw5k2k03',
    recentDate: 'dateField_ibw5mkmv9'
  },
  project: {
    unit: 'associationFormField_jpjn5lpv8',
    name: 'textField_jpjm21hie',
    shortName: 'textField_jpjm3hpoz',
    phase: 'selectField_jpjn73b05',
    status: 'selectField_jpjnm9c66',
    star: 'selectField_jpjn8e1tu',
    owner: 'employeeField_jpjn9lyh5',
    nextAction: 'textareaField_jpjnh16i8',
    nextDate: 'dateField_jpjnjcxmp'
  },
  visit: {
    title: 'textField_kyv32ess0',
    contact: 'associationFormField_kyv33bc8s',
    unit: 'associationFormField_2yle119gl',
    project: 'associationFormField_kyv35uxhy',
    method: 'selectField_kyv378rc2',
    time: 'dateField_kyv38g8dw',
    content: 'textareaField_kyv3acyym',
    nextAction: 'textareaField_0usd1fstw',
    recorder: 'employeeField_kyv3ln90f',
    recordTime: 'dateField_kyv3mec5i'
  }
};
var _customState = {
  loading: true,
  error: '',
  unitId: '',
  activeTab: 'overview',
  units: [],
  contacts: [],
  projects: [],
  visits: []
};
export function forceUpdate() {
  this.setState({
    timestamp: new Date().getTime()
  });
}
export function didMount() {
  _customState.unitId = this.getUrlParam('unitId') || this.getUrlParam('formInstId') || this.getUrlParam('id') || '';
  this.loadData();
}
export function loadData() {
  var self = this;
  _customState.loading = true;
  _customState.error = '';
  this.forceUpdate();
  Promise.all([self.fetchRows(FORMS.unit), self.fetchRows(FORMS.contact), self.fetchRows(FORMS.project), self.fetchRows(FORMS.visit), self.fetchUnitById(_customState.unitId)]).then(res => {
    _customState.units = self.normalizeRows(res[0]);
    _customState.contacts = self.normalizeRows(res[1]);
    _customState.projects = self.normalizeRows(res[2]);
    _customState.visits = self.normalizeRows(res[3]);
    if (res[4] && !self.findById(_customState.units, _customState.unitId)) {
      _customState.units.unshift(res[4]);
    }
    if (!_customState.unitId && _customState.units.length) {
      _customState.unitId = self.getRowId(_customState.units[0]);
    }
    _customState.loading = false;
    _customState.error = '';
    self.forceUpdate();
  }).catch(err => {
    _customState.loading = false;
    _customState.error = self.getErrorMessage(err);
    self.forceUpdate();
    self.utils.toast({
      title: '单位详情加载失败',
      type: 'error'
    });
  });
}
export function fetchRows(formUuid) {
  return this.utils.yida.searchFormDatas({
    formUuid: formUuid,
    currentPage: 1,
    pageSize: 100
  }).catch(err => {
    this.utils.toast({
      title: '关联数据加载失败',
      type: 'error'
    });
    throw err;
  });
}
export function normalizeSingleRow(res) {
  if (!res) return null;
  if (res.formData) return res;
  if (res.content && res.content.formData) return res.content;
  if (res.data && res.data.formData) return res.data;
  if (res.content && res.content.data && res.content.data.formData) return res.content.data;
  return null;
}
export function fetchUnitById(id) {
  if (!id) return Promise.resolve(null);
  return this.utils.yida.getFormDataById({
    formInstId: id
  }).then(res => this.normalizeSingleRow(res)).catch(() => null);
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
    var keys = ['title', 'name', 'label', 'text', 'value', 'displayName', 'userName', 'nickName', 'address', 'zh_CN', 'pureEn_US', 'en_US'];
    for (var i = 0; i < keys.length; i += 1) {
      var next = this.formatValue(parsed[keys[i]]);
      if (next !== '-') return next;
    }
    return '-';
  }
  return parsed;
}
export function formatAddressText(value) {
  var parsed = this.parseMaybeJson(value);
  if (parsed === undefined || parsed === null || parsed === '') return '';
  if (Array.isArray(parsed)) {
    return parsed.map(item => this.formatAddressText(item)).filter(Boolean).join(' / ');
  }
  if (typeof parsed === 'object') {
    var keys = ['zh_CN', 'pureEn_US', 'en_US', 'name', 'label', 'title', 'text', 'value', 'displayName', 'adName', 'address'];
    for (var i = 0; i < keys.length; i += 1) {
      var text = this.formatAddressText(parsed[keys[i]]);
      if (text) return text;
    }
    return '';
  }
  return String(parsed).trim();
}
export function appendRegionText(parts, value) {
  var text = this.formatAddressText(value);
  if (!text || text === '-' || text === '--') return;
  String(text).split(/\s*[\/,，、>＞]\s*/).forEach(item => {
    var part = String(item || '').replace(/^["']|["']$/g, '').trim();
    if (!part || !/[\u4e00-\u9fa5]/.test(part)) return;
    if (parts.indexOf(part) < 0) parts.push(part);
  });
}
export function collectRegionParts(value, parts) {
  var parsed = this.parseMaybeJson(value);
  if (parsed === undefined || parsed === null || parsed === '') return;
  if (Array.isArray(parsed)) {
    parsed.forEach(item => {
      this.collectRegionParts(item, parts);
    });
    return;
  }
  if (typeof parsed === 'object') {
    if (parsed.regionText !== undefined && parsed.regionText !== null && parsed.regionText !== '') {
      this.collectRegionParts(parsed.regionText, parts);
      return;
    }
    if (parsed.regionIds !== undefined && parsed.regionIds !== null && parsed.regionIds !== '') {
      this.collectRegionParts(parsed.regionIds, parts);
      if (parts.length) return;
    }
    var keys = ['province', 'provinceName', 'state', 'stateName', 'city', 'cityName', 'district', 'districtName', 'county', 'countyName', 'area', 'areaName'];
    var before = parts.length;
    keys.forEach(key => {
      this.appendRegionText(parts, parsed[key]);
    });
    if (parts.length > before) return;
  }
  this.appendRegionText(parts, parsed);
}
export function getAddressRegionParts(row) {
  var candidates = [this.rawValue(row, FIELDS.unit.region), this.rawValue(row, FIELDS.unit.region + '_id')];
  for (var i = 0; i < candidates.length; i += 1) {
    var parts = [];
    this.collectRegionParts(candidates[i], parts);
    if (parts.length) return parts.slice(0, 3);
  }
  return [];
}
export function getRegionText(row) {
  var parts = this.getAddressRegionParts(row);
  return parts.length ? parts.join(' / ') : '--';
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
export function rowMatchesAssociation(row, fieldId, id) {
  var items = this.getAssociationItems(this.rawAssociation(row, fieldId));
  var matched = items.filter(item => {
    if (!item || typeof item !== 'object') return false;
    var itemId = item.instanceId || item.formInstId || item.formInstanceId || item.id || '';
    return itemId === id;
  });
  return matched.length > 0;
}
export function getRowId(row) {
  return row && (row.formInstId || row.formInstanceId || row.instanceId || row.id) || '';
}
export function findById(list, id) {
  if (!id) return null;
  var matched = list.filter(item => this.getRowId(item) === id);
  return matched[0] || null;
}
export function getUnit() {
  return this.findById(_customState.units, _customState.unitId);
}
export function getRelatedContacts(unit) {
  var id = this.getRowId(unit);
  var list = _customState.contacts.filter(row => this.rowMatchesAssociation(row, FIELDS.contact.unit, id));
  list.sort((a, b) => (parseInt(this.getValue(b, FIELDS.contact.star), 10) || 0) - (parseInt(this.getValue(a, FIELDS.contact.star), 10) || 0));
  return list;
}
export function getRelatedProjects(unit) {
  var id = this.getRowId(unit);
  var list = _customState.projects.filter(row => this.rowMatchesAssociation(row, FIELDS.project.unit, id));
  list.sort((a, b) => (parseInt(this.getValue(b, FIELDS.project.star), 10) || 0) - (parseInt(this.getValue(a, FIELDS.project.star), 10) || 0));
  return list;
}
export function getRelatedVisits(unit) {
  var id = this.getRowId(unit);
  var list = _customState.visits.filter(row => this.rowMatchesAssociation(row, FIELDS.visit.unit, id));
  list.sort((a, b) => (Number(this.rawValue(b, FIELDS.visit.time)) || Number(this.rawValue(b, FIELDS.visit.recordTime)) || 0) - (Number(this.rawValue(a, FIELDS.visit.time)) || Number(this.rawValue(a, FIELDS.visit.recordTime)) || 0));
  return list;
}
export function formatDate(value) {
  if (!value || value === '-') return '-';
  var num = Number(value);
  if (!num) return '-';
  var d = new Date(num);
  var month = d.getMonth() + 1;
  var day = d.getDate();
  return d.getFullYear() + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day);
}
export function tone(text) {
  if (text === '省级' || text === '市级') return 'primary';
  if (text === '政府' || text === '政府机关' || text === '事业单位') return 'success';
  if (text === '国企' || text === '高校/科研') return 'warning';
  return 'default';
}
export function setTab(tab) {
  _customState.activeTab = tab;
  this.forceUpdate();
}
export function backToList() {
  this.utils.router.push(FORMS.unitManage, {}, false);
}
export function openNativeEditForm(formUuid, formInstId) {
  if (!formInstId) return;
  var base = typeof window !== 'undefined' && window.location ? window.location.origin : '';
  window.location.href = base + '/' + APP_TYPE + '/formDetail/' + formUuid + '?formInstId=' + encodeURIComponent(formInstId) + '&mode=edit';
}
export function editUnit(unit) {
  var id = this.getRowId(unit);
  if (!id) return;
  this.openNativeEditForm(FORMS.unit, id);
}
export function openContact(row) {
  var id = this.getRowId(row);
  if (!id) return;
  this.utils.router.push(FORMS.contactDetail, {
    contactId: id
  }, false);
}
export function openProject(row) {
  var id = this.getRowId(row);
  if (!id) return;
  this.utils.router.push(FORMS.projectDetail, {
    projectId: id
  }, false);
}
export function openVisit(row) {
  var id = this.getRowId(row);
  if (!id) return;
  this.utils.router.push(FORMS.visitDetail, {
    visitId: id
  }, false);
}
export function renderBadge(text, toneName) {
  var colors = {
    primary: { bg: '#EAF2FF', color: '#155EEF', border: '#D6E8FF' },
    success: { bg: '#ECFDF3', color: '#027A48', border: '#ABEFC6' },
    warning: { bg: '#FFF7E6', color: '#B54708', border: '#FEDF89' },
    default: { bg: '#F2F4F7', color: '#475467', border: '#EAECF0' }
  };
  var c = colors[toneName] || colors.default;
  return <span style={Object.assign({}, styles.badge, {
    background: c.bg,
    color: c.color,
    border: '1px solid ' + c.border
  })}>{text || '-'}</span>;
}
export function renderMiniIcon(name, color, size) {
  var s = size || 14;
  var common = {
    width: s,
    height: s,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color || '#667085',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    style: {
      display: 'inline-block',
      verticalAlign: 'middle',
      flexShrink: 0
    }
  };
  if (name === 'arrowLeft') return <svg {...common}><path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path></svg>;
  if (name === 'map') return <svg {...common}><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
  if (name === 'building') return <svg {...common}><rect x="4" y="2" width="16" height="20" rx="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M8 10h.01"></path><path d="M16 10h.01"></path></svg>;
  if (name === 'edit') return <svg {...common}><path d="M12 20h9"></path><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z"></path></svg>;
  return null;
}
export function renderButton(label, type, onClick) {
  var edit = type === 'edit';
  return <button onClick={e => {
    if (onClick) onClick(e);
  }} style={Object.assign({}, styles.button, edit ? styles.buttonEdit : styles.buttonDefault)}>{label}</button>;
}
export function renderInfoRow(label, value) {
  return <div style={styles.infoRow}>
      <div style={styles.infoLabel}>{label}</div>
      <div style={styles.infoValue}>{value && value !== '-' ? value : '-'}</div>
    </div>;
}
export function renderMetric(label, value, toneName) {
  var valueStyle = toneName === 'purple' ? styles.metricValuePurple : toneName === 'green' ? styles.metricValueGreen : styles.metricValueBlue;
  return <div style={Object.assign({}, styles.metricCard, toneName === 'purple' ? styles.metricPurple : toneName === 'green' ? styles.metricGreen : styles.metricBlue)}>
      <div style={styles.metricLabel}>{label}</div>
      <div style={Object.assign({}, styles.metricValue, valueStyle)}>{value}</div>
    </div>;
}
export function renderTop(unit, contacts, projects, visits, isMobile) {
  var self = this;
  var type = this.getValue(unit, FIELDS.unit.type);
  var level = this.getValue(unit, FIELDS.unit.level);
  var region = this.getRegionText(unit);
  var system = this.getValue(unit, FIELDS.unit.system);
  return <div style={isMobile ? styles.heroMobile : styles.hero}>
      <div style={isMobile ? styles.heroTopMobile : styles.heroTop}>
        <div style={styles.heroMain}>
          <div style={styles.badgeLine}>
            {this.renderBadge(type, this.tone(type))}
            {this.renderBadge(level, this.tone(level))}
          </div>
          <h1 style={styles.title}>{this.getValue(unit, FIELDS.unit.name)}</h1>
          {this.getValue(unit, FIELDS.unit.shortName) !== '-' && <div style={styles.subtitle}>{this.getValue(unit, FIELDS.unit.shortName)}</div>}
          <div style={styles.metaLine}>
            <span style={styles.metaItem}>{this.renderMiniIcon('map', '#667085', 14)}所属地区：{region}</span>
            <span style={styles.metaItem}>{this.renderMiniIcon('building', '#667085', 14)}所属系统：{system}</span>
            <span style={styles.metaItem}>单位类型：{type}</span>
            <span style={styles.metaItem}>单位级别：{level}</span>
          </div>
        </div>
        <div style={styles.heroRight}>
          <div style={styles.serial}>{this.getValue(unit, FIELDS.unit.code)}</div>
          {this.renderButton(<span style={styles.buttonInner}>{this.renderMiniIcon('edit', '#344054', 14)}<span>编辑</span></span>, 'edit', e => {
          self.editUnit(unit);
        })}
        </div>
      </div>
        <div style={isMobile ? styles.metricGridMobile : styles.metricGrid}>
          {this.renderMetric('联系人', contacts.length, 'blue')}
          {this.renderMetric('项目', projects.length, 'purple')}
          {this.renderMetric('拜访', visits.length, 'green')}
        </div>
    </div>;
}
export function renderBack(isMobile) {
  var self = this;
  return <div style={isMobile ? styles.backRowMobile : styles.backRow}>
      <button style={styles.backLink} onClick={e => {
      self.backToList();
    }}>
        {this.renderMiniIcon('arrowLeft', '#667085', 16)}
        <span>返回单位档案</span>
      </button>
    </div>;
}
export function renderOverview(unit) {
  return <div style={styles.section}>
      <div style={styles.sectionTitle}>单位信息</div>
      <div style={styles.infoGrid}>
        {this.renderInfoRow('单位全称', this.getValue(unit, FIELDS.unit.name))}
        {this.renderInfoRow('单位简称', this.getValue(unit, FIELDS.unit.shortName))}
        {this.renderInfoRow('单位类型', this.getValue(unit, FIELDS.unit.type))}
        {this.renderInfoRow('所属系统', this.getValue(unit, FIELDS.unit.system))}
        {this.renderInfoRow('所属地区', this.getRegionText(unit))}
        {this.renderInfoRow('单位级别', this.getValue(unit, FIELDS.unit.level))}
        {this.renderInfoRow('办公地址', this.getValue(unit, FIELDS.unit.address))}
        {this.renderInfoRow('单位编号', this.getValue(unit, FIELDS.unit.code))}
      </div>
      <div style={styles.blockTitle}>业务范围</div>
      <div style={styles.textBlock}>{this.getValue(unit, FIELDS.unit.business)}</div>
      <div style={styles.blockTitle}>备注</div>
      <div style={styles.textBlock}>{this.getValue(unit, FIELDS.unit.remark)}</div>
    </div>;
}
export function renderContacts(list) {
  return <div style={styles.section}>
      <div style={styles.sectionTitle}>关联联系人</div>
      {list.length === 0 ? this.renderEmpty('暂无关联联系人') : <div style={styles.itemList}>
          {list.map(item => <div key={this.getRowId(item)} style={styles.item} onClick={e => {
          this.openContact(item);
        }}>
              <div style={styles.itemMain}>
                <div style={styles.itemTitle}>{this.getValue(item, FIELDS.contact.name)}</div>
                <div style={styles.itemSub}>{this.getValue(item, FIELDS.contact.department)} · {this.getValue(item, FIELDS.contact.position)}</div>
              </div>
              <div style={styles.itemMeta}>
                {this.renderBadge(this.getValue(item, FIELDS.contact.star), 'primary')}
                <span>{this.getValue(item, FIELDS.contact.status)}</span>
              </div>
              <div style={styles.chevron}>›</div>
            </div>)}
        </div>}
    </div>;
}
export function renderProjects(list) {
  return <div style={styles.section}>
      <div style={styles.sectionTitle}>相关项目</div>
      {list.length === 0 ? this.renderEmpty('暂无相关项目') : <div style={styles.itemList}>
          {list.map(item => <div key={this.getRowId(item)} style={styles.item} onClick={e => {
          this.openProject(item);
        }}>
              <div style={styles.itemMain}>
                <div style={styles.itemTitle}>{this.getValue(item, FIELDS.project.name)}</div>
                <div style={styles.itemSub}>负责人：{this.getValue(item, FIELDS.project.owner)} · 下一步：{this.getValue(item, FIELDS.project.nextAction)}</div>
              </div>
              <div style={styles.itemMeta}>
                {this.renderBadge(this.getValue(item, FIELDS.project.phase), this.tone(this.getValue(item, FIELDS.project.phase)))}
                {this.renderBadge(this.getValue(item, FIELDS.project.status), this.tone(this.getValue(item, FIELDS.project.status)))}
              </div>
              <div style={styles.chevron}>›</div>
            </div>)}
        </div>}
    </div>;
}
export function renderVisits(list) {
  return <div style={styles.section}>
      <div style={styles.sectionTitle}>拜访记录</div>
      {list.length === 0 ? this.renderEmpty('暂无拜访记录') : <div style={styles.itemList}>
          {list.map(item => <div key={this.getRowId(item)} style={styles.item} onClick={e => {
          this.openVisit(item);
        }}>
              <div style={styles.itemMain}>
                <div style={styles.itemTitle}>{this.getValue(item, FIELDS.visit.title)}</div>
                <div style={styles.itemSub}>{this.formatDate(this.rawValue(item, FIELDS.visit.time))} · {this.getValue(item, FIELDS.visit.method)} · 记录人：{this.getValue(item, FIELDS.visit.recorder)}</div>
                <div style={styles.itemSummary}>{this.getValue(item, FIELDS.visit.content)}</div>
              </div>
              <div style={styles.itemMeta}>{this.renderBadge(this.getValue(item, FIELDS.visit.nextAction) !== '-' ? '待跟进' : '已记录', this.getValue(item, FIELDS.visit.nextAction) !== '-' ? 'warning' : 'success')}</div>
              <div style={styles.chevron}>›</div>
            </div>)}
        </div>}
    </div>;
}
export function renderTabs(contacts, projects, visits) {
  var self = this;
  var tabs = [{
    key: 'overview',
    label: '单位详情'
  }, {
    key: 'contacts',
    label: '关联联系人 (' + contacts.length + ')'
  }, {
    key: 'projects',
    label: '相关项目 (' + projects.length + ')'
  }, {
    key: 'visits',
    label: '拜访记录 (' + visits.length + ')'
  }];
  return <div style={styles.tabs}>
      {tabs.map(item => <button key={item.key} style={Object.assign({}, styles.tab, _customState.activeTab === item.key ? styles.tabActive : {})} onClick={e => {
      self.setTab(item.key);
    }}>{item.label}</button>)}
    </div>;
}
export function renderEmpty(text) {
  return <div style={styles.empty}>{text}</div>;
}
export function renderPanel(unit, contacts, projects, visits) {
  return <div style={styles.panel}>
      {this.renderTabs(contacts, projects, visits)}
      <div style={styles.panelBody}>
        {_customState.activeTab === 'overview' && this.renderOverview(unit)}
        {_customState.activeTab === 'contacts' && this.renderContacts(contacts)}
        {_customState.activeTab === 'projects' && this.renderProjects(projects)}
        {_customState.activeTab === 'visits' && this.renderVisits(visits)}
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
  content: {
    maxWidth: '1088px',
    margin: '0 auto',
    padding: '12px 0 0',
    boxSizing: 'border-box'
  },
  contentMobile: {
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
    cursor: 'pointer',
    padding: '0',
    height: '24px'
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
  heroMain: {
    minWidth: 0,
    flex: 1
  },
  badgeLine: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    flexWrap: 'wrap',
    marginBottom: '8px'
  },
  title: {
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: 900,
    color: '#101828',
    margin: 0
  },
  subtitle: {
    fontSize: '14px',
    color: '#667085',
    marginTop: '2px'
  },
  metaLine: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    flexWrap: 'wrap',
    marginTop: '12px',
    color: '#667085',
    fontSize: '14px',
    lineHeight: '20px'
  },
  metaItem: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px'
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
  metricGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: '12px',
    marginTop: '20px'
  },
  metricGridMobile: {
    display: 'grid',
    gap: '10px',
    marginTop: '14px'
  },
  metricCard: {
    minHeight: '76px',
    borderRadius: '8px',
    padding: '12px',
    boxSizing: 'border-box'
  },
  metricBlue: {
    background: '#EAF2FF',
    border: '1px solid #D6E8FF'
  },
  metricPurple: {
    background: '#F4EBFF',
    border: '1px solid #E9D7FE'
  },
  metricGreen: {
    background: '#ECFDF3',
    border: '1px solid #ABEFC6'
  },
  metricLabel: {
    fontSize: '12px',
    color: '#667085'
  },
  metricValue: {
    fontSize: '20px',
    lineHeight: '26px',
    fontWeight: 900,
    marginTop: '6px',
    wordBreak: 'break-word'
  },
  metricValueBlue: {
    color: '#155EEF'
  },
  metricValuePurple: {
    color: '#7F56D9'
  },
  metricValueGreen: {
    color: '#027A48'
  },
  panel: {
    background: '#FFFFFF',
    border: '1px solid #EAECF0',
    borderRadius: '12px',
    boxShadow: '0 8px 22px rgba(16,24,40,0.04)',
    overflow: 'hidden'
  },
  tabs: {
    display: 'flex',
    borderBottom: '1px solid #EAECF0',
    overflowX: 'auto'
  },
  tab: {
    height: '48px',
    border: 'none',
    borderBottom: '2px solid transparent',
    background: '#FFFFFF',
    color: '#667085',
    padding: '0 22px',
    fontSize: '14px',
    fontWeight: 700,
    whiteSpace: 'nowrap',
    cursor: 'pointer'
  },
  tabActive: {
    color: '#155EEF',
    background: '#EFF6FF',
    fontWeight: 800,
    borderBottom: '2px solid #155EEF'
  },
  panelBody: {
    padding: '24px',
    boxSizing: 'border-box'
  },
  section: {
    boxSizing: 'border-box'
  },
  sectionTitle: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 800,
    marginBottom: '14px'
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: '12px'
  },
  infoRow: {
    borderRadius: '8px',
    background: '#F8FAFC',
    padding: '12px',
    boxSizing: 'border-box'
  },
  infoLabel: {
    fontSize: '12px',
    color: '#667085',
    marginBottom: '6px'
  },
  infoValue: {
    fontSize: '14px',
    lineHeight: '20px',
    color: '#101828',
    fontWeight: 700,
    wordBreak: 'break-word'
  },
  blockTitle: {
    marginTop: '18px',
    marginBottom: '8px',
    fontSize: '14px',
    fontWeight: 800
  },
  textBlock: {
    borderRadius: '8px',
    background: '#F8FAFC',
    padding: '12px',
    color: '#344054',
    fontSize: '14px',
    lineHeight: '22px',
    minHeight: '46px',
    boxSizing: 'border-box'
  },
  itemList: {
    display: 'grid',
    gap: '10px'
  },
  item: {
    border: '1px solid #EAECF0',
    borderRadius: '8px',
    padding: '14px 16px',
    display: 'grid',
    gridTemplateColumns: '1fr auto 16px',
    gap: '12px',
    alignItems: 'center',
    cursor: 'pointer',
    boxSizing: 'border-box'
  },
  itemMain: {
    minWidth: 0
  },
  itemTitle: {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 800,
    color: '#101828'
  },
  itemSub: {
    fontSize: '12px',
    lineHeight: '18px',
    color: '#667085',
    marginTop: '3px'
  },
  itemSummary: {
    fontSize: '13px',
    lineHeight: '20px',
    color: '#344054',
    marginTop: '8px'
  },
  itemMeta: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '8px',
    color: '#667085',
    fontSize: '12px',
    flexWrap: 'wrap'
  },
  chevron: {
    color: '#98A2B3',
    fontSize: '22px'
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    minHeight: '22px',
    padding: '1px 8px',
    borderRadius: '999px',
    fontSize: '12px',
    lineHeight: '18px',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box'
  },
  empty: {
    padding: '36px 12px',
    color: '#98A2B3',
    textAlign: 'center',
    fontSize: '14px'
  },
  notice: {
    background: '#EFF6FF',
    border: '1px solid #B9D6FF',
    color: '#155EEF',
    borderRadius: '8px',
    padding: '12px',
    fontSize: '13px'
  },
  error: {
    background: '#FEF3F2',
    border: '1px solid #FECDCA',
    color: '#B42318',
    borderRadius: '8px',
    padding: '12px',
    fontSize: '13px'
  }
};
export function renderJsx() {
  var timestamp = this.state && this.state.timestamp;
  var isMobile = this.utils.isMobile();
  var unit = this.getUnit();
  var contacts = unit ? this.getRelatedContacts(unit) : [];
  var projects = unit ? this.getRelatedProjects(unit) : [];
  var visits = unit ? this.getRelatedVisits(unit) : [];
  return <div style={styles.page}>
      <div style={{
      display: 'none'
    }}>{timestamp}</div>
      <div style={isMobile ? styles.contentMobile : styles.content}>
        {_customState.loading && <div style={styles.notice}>正在加载单位详情...</div>}
        {_customState.error && <div style={styles.error}>{_customState.error}</div>}
        {!_customState.loading && !unit && this.renderEmpty('未找到单位记录')}
        {!_customState.loading && unit && <div>
            {this.renderBack(isMobile)}
            {this.renderTop(unit, contacts, projects, visits, isMobile)}
            {this.renderPanel(unit, contacts, projects, visits)}
          </div>}
      </div>
    </div>;
}
