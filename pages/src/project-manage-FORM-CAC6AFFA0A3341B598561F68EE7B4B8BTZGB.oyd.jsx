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
  project: 'FORM-DC58D4D9EB714ACBB421A34ADFB418ABJCVO',
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
    remark: 'textareaField_jpjnn9kdi'
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
export function didMount() {
  var self = this;
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
  Promise.all([self.loadProjects(), self.loadUnits(), self.loadLightForm(FORMS.contact, 'contacts'), self.loadLightForm(FORMS.relation, 'relations')]).then(() => {
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
export function findById(list, id) {
  if (!id) return null;
  var matched = list.filter(item => {
    return this.getRowId(item) === id;
  });
  return matched[0] || null;
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
