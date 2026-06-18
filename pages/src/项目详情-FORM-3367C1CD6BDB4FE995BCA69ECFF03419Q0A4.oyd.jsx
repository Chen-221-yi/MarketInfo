// 项目详情 - 自定义页面
var APP_TYPE = 'APP_LC7BU43GCVLSI0TH8POE';
var FORMS = {
  projectManage: 'FORM-CAC6AFFA0A3341B598561F68EE7B4B8BTZGB',
  projectDetail: 'FORM-3367C1CD6BDB4FE995BCA69ECFF03419Q0A4',
  project: 'FORM-DC58D4D9EB714ACBB421A34ADFB418ABJCVO',
  unitDetail: 'FORM-4A90B63766D14A9798BD0B1DD1D32F9CMOZK',
  unit: 'FORM-A96B2187A20640C68C9F7806CC1FEADDZZZ8',
  contactDetail: 'FORM-89CA116EA0134CACB77EAA0F87AA7AB8MD1C',
  contact: 'FORM-87B25B011DC14AA5ACC39BE4077D520AITQS',
  relation: 'FORM-FB6E6BA777E84128A96E567646E5733DXI0O',
  visitDetail: 'FORM-6CC5A6BBE39F439CA213B8CC3BD7E429GQW1',
  visit: 'FORM-5C9373CB6EA5468FA607352B96908C87WHBW'
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
  relation: {
    project: 'associationFormField_m7me25hdh',
    contact: 'associationFormField_m7me3i0ht',
    unitText: 'textField_m7me4dh6u',
    position: 'textField_m7me5bw47',
    role: 'selectField_m7me6h495',
    influence: 'selectField_m7me7mn98',
    attitude: 'selectField_m7mf8jeyu',
    status: 'selectField_3ipp1yq72',
    effectiveDate: 'dateField_3iq32x07p',
    endDate: 'dateField_3iq33ncir',
    changeNote: 'textareaField_3iq34k2ek',
    changeType: 'selectField_3iq35yi6g',
    familiar: 'selectField_m7mf9bxwf',
    familiarPerson: 'employeeField_m7mfaulhu',
    needs: 'textareaField_m7mfb4j6f',
    strategy: 'textareaField_m7mfc354j',
    nextAction: 'textareaField_m7mfevfco',
    recorder: 'employeeField_m7mfgzmpf',
    recordTime: 'dateField_m7mfhqcsa'
  },
  visit: {
    title: 'textField_kyv32ess0',
    contact: 'associationFormField_kyv33bc8s',
    unit: 'associationFormField_2yle119gl',
    project: 'associationFormField_kyv35uxhy',
    people: 'employeeField_kyv36zyqq',
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
  projectId: '',
  activeTab: 'overview',
  projects: [],
  relations: [],
  visits: []
};
export function forceUpdate() {
  this.setState({
    timestamp: new Date().getTime()
  });
}
export function didMount() {
  _customState.projectId = this.getUrlParam('projectId') || this.getUrlParam('formInstId') || this.getUrlParam('id') || '';
  this.loadData();
}
export function loadData() {
  var self = this;
  _customState.loading = true;
  _customState.error = '';
  this.forceUpdate();
  Promise.all([self.fetchProjects(), self.fetchFormRows(FORMS.relation), self.fetchFormRows(FORMS.visit)]).then(res => {
    _customState.projects = self.normalizeRows(res[0]);
    _customState.relations = self.normalizeRows(res[1]);
    _customState.visits = self.normalizeRows(res[2]);
    if (!_customState.projectId && _customState.projects.length) {
      _customState.projectId = self.getRowId(_customState.projects[0]);
    }
    _customState.loading = false;
    _customState.error = '';
    self.forceUpdate();
  }).catch(err => {
    _customState.loading = false;
    _customState.error = self.getErrorMessage(err);
    self.forceUpdate();
    self.utils.toast({
      title: '项目详情加载失败',
      type: 'error'
    });
  });
}
export function fetchProjects() {
  var order = {};
  order[FIELDS.project.recentDate] = '-';
  return this.utils.yida.searchFormDatas({
    formUuid: FORMS.project,
    currentPage: 1,
    pageSize: 100,
    dynamicOrder: JSON.stringify(order)
  }).catch(err => {
    this.utils.toast({
      title: '项目数据加载失败',
      type: 'error'
    });
    throw err;
  });
}
export function fetchFormRows(formUuid) {
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
    return parsed.title || parsed.name || parsed.label || parsed.text || parsed.value || parsed.displayName || parsed.userName || parsed.nickName || '-';
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
export function getAssociationId(value) {
  var items = this.getAssociationItems(value);
  if (!items.length) return '';
  var item = items[0];
  if (typeof item !== 'object') return '';
  return item.instanceId || item.formInstId || item.formInstanceId || item.id || '';
}
export function getAssociationText(row, fieldId) {
  return this.formatValue(this.rawAssociation(row, fieldId));
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
export function getProject() {
  return this.findById(_customState.projects, _customState.projectId);
}
export function getProjectRelations(project) {
  var id = this.getRowId(project);
  var list = _customState.relations.filter(row => this.rowMatchesAssociation(row, FIELDS.relation.project, id));
  list.sort((a, b) => (parseInt(this.getValue(b, FIELDS.relation.influence), 10) || 0) - (parseInt(this.getValue(a, FIELDS.relation.influence), 10) || 0));
  return list;
}
export function getRelationStatus(row) {
  var status = this.getValue(row, FIELDS.relation.status);
  return status === '-' ? '' : status;
}
export function getRelationStatusLabel(row) {
  var status = this.getRelationStatus(row);
  return status || '未设置';
}
export function isCurrentRelation(row) {
  var status = this.getRelationStatus(row);
  return !status || status === '当前';
}
export function getCurrentRelations(relations) {
  return relations.filter(row => this.isCurrentRelation(row));
}
export function getRelationChangeTime(row) {
  return Number(this.rawValue(row, FIELDS.relation.endDate)) || Number(this.rawValue(row, FIELDS.relation.effectiveDate)) || Number(this.rawValue(row, FIELDS.relation.recordTime)) || Number(row && row.gmtModified) || Number(row && row.gmtCreate) || 0;
}
export function getRelationChanges(relations) {
  var list = relations.slice(0);
  list.sort((a, b) => this.getRelationChangeTime(b) - this.getRelationChangeTime(a));
  return list;
}
export function getProjectVisits(project) {
  var id = this.getRowId(project);
  var list = _customState.visits.filter(row => this.rowMatchesAssociation(row, FIELDS.visit.project, id));
  list.sort((a, b) => (Number(this.rawValue(b, FIELDS.visit.time)) || Number(this.rawValue(b, FIELDS.visit.recordTime)) || 0) - (Number(this.rawValue(a, FIELDS.visit.time)) || Number(this.rawValue(a, FIELDS.visit.recordTime)) || 0));
  return list;
}
export function setActiveTab(tab) {
  _customState.activeTab = tab || 'overview';
  this.forceUpdate();
}
export function goBack() {
  this.utils.router.push(FORMS.projectManage, {}, false);
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
export function editProject(project) {
  var id = this.getRowId(project);
  if (!id) return;
  this.openNativeEditForm(FORMS.project, id);
}
export function editRelation(row) {
  var id = this.getRowId(row);
  if (!id) return;
  this.openNativeEditForm(FORMS.relation, id);
}
export function openUnit(project) {
  var id = this.getAssociationId(this.rawAssociation(project, FIELDS.project.unit));
  if (!id) return;
  this.utils.router.push(FORMS.unitDetail, {
    unitId: id
  }, false);
}
export function openContact(row) {
  var id = this.getAssociationId(this.rawAssociation(row, FIELDS.relation.contact));
  if (!id) return;
  this.utils.router.push(FORMS.contactDetail, {
    contactId: id
  }, false);
}
export function openVisit(row) {
  var id = this.getRowId(row);
  if (!id) return;
  this.utils.router.push(FORMS.visitDetail, {
    formInstId: id
  }, false);
}
export function createRelation(project) {
  var id = this.getRowId(project);
  this.openSubmissionForm(FORMS.relation, {
    projectId: id,
    projectTitle: this.getValue(project, FIELDS.project.name)
  });
}
export function createVisit(project) {
  var id = this.getRowId(project);
  var params = {
    projectId: id,
    projectTitle: this.getValue(project, FIELDS.project.name)
  };
  var unitId = this.getAssociationId(this.rawAssociation(project, FIELDS.project.unit));
  if (unitId) {
    params.unitId = unitId;
    params.unitTitle = this.getAssociationText(project, FIELDS.project.unit);
  }
  this.openSubmissionForm(FORMS.visit, params);
}
export function tone(text) {
  if (text === '失败' || text === '有风险' || text === '暂停') return 'danger';
  if (text === '关键节点' || text === '重点推进' || text === '招采' || text === '实施') return 'warning';
  if (text === '正常' || text === '推进' || text === '验收' || text === '成功') return 'success';
  if (text === '方案' || text === '接触') return 'primary';
  return 'default';
}
export function phaseTone(text) {
  if (text === '推进' || text === '验收' || text === '成功') return 'success';
  if (text === '关键节点' || text === '招采' || text === '实施') return 'warning';
  if (text === '方案') return 'purple';
  if (text === '接触') return 'primary';
  if (text === '暂停' || text === '失败') return 'danger';
  return 'default';
}
export function statusTone(text) {
  if (text === '重点推进') return 'danger';
  if (text === '有风险' || text === '暂停') return 'warning';
  if (text === '正常') return 'success';
  return 'default';
}
export function visitMethodTone(text) {
  if (text === '上门') return 'primary';
  if (text === '电话' || text === '微信') return 'success';
  if (text === '会议' || text === '培训会') return 'purple';
  if (text === '饭局') return 'orange';
  if (text === '活动') return 'teal';
  return 'default';
}
export function attitudeTone(text) {
  if (text === '支持') return 'success';
  if (text === '反对') return 'danger';
  if (text === '观望') return 'warning';
  return 'default';
}
export function relationStatusTone(text) {
  if (text === '当前') return 'success';
  if (text === '已结束') return 'default';
  return 'warning';
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
  if (name === 'map') return <svg {...common}><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
  if (name === 'calendar') return <svg {...common}><rect x="3" y="4" width="18" height="18" rx="2"></rect><path d="M16 2v4"></path><path d="M8 2v4"></path><path d="M3 10h18"></path></svg>;
  if (name === 'edit') return <svg {...common}><path d="M12 20h9"></path><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z"></path></svg>;
  if (name === 'star') return <svg {...common} fill={color || '#F59E0B'} stroke={color || '#F59E0B'}><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21 7 14.2 2 9.3l6.9-1L12 2Z"></path></svg>;
  return null;
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
    orange: {
      bg: '#FFF4ED',
      color: '#C4320A',
      border: '#FFD6AE'
    },
    teal: {
      bg: '#F0FDFA',
      color: '#0F766E',
      border: '#99F6E4'
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
export function renderBack(isMobile) {
  return <div style={isMobile ? styles.backRowMobile : styles.backRow}>
      <button style={styles.backLink} onClick={e => {
      this.goBack();
    }}>
        {this.renderMiniIcon('arrowLeft', '#667085', 16)}
        <span>返回项目列表</span>
      </button>
    </div>;
}
export function renderStars(starText) {
  var count = parseInt(starText, 10) || 0;
  if (!count) return null;
  var stars = [1, 2, 3, 4, 5];
  return <div style={styles.stars}>{stars.map(item => <span key={item} style={item <= count ? styles.starOn : styles.starOff}>{this.renderMiniIcon('star', item <= count ? '#F59E0B' : '#D0D5DD', 14)}</span>)}</div>;
}
export function renderHero(project, relations, visits, isMobile) {
  var phase = this.getValue(project, FIELDS.project.phase);
  var status = this.getValue(project, FIELDS.project.status);
  var unit = this.getAssociationText(project, FIELDS.project.unit);
  var owner = this.getValue(project, FIELDS.project.owner);
  var members = this.getValue(project, FIELDS.project.members);
  var star = this.getValue(project, FIELDS.project.star);
  return <div style={isMobile ? styles.heroMobile : styles.hero}>
      <div style={isMobile ? styles.heroTopMobile : styles.heroTop}>
        <div style={styles.heroMain}>
          <div style={styles.badgeLine}>
            {this.renderBadge(phase, this.phaseTone(phase))}
            {this.renderBadge(status, this.statusTone(status))}
          </div>
          <h1 style={styles.title}>{this.getValue(project, FIELDS.project.name)}</h1>
          {this.getValue(project, FIELDS.project.shortName) !== '-' && <div style={styles.shortName}>{this.getValue(project, FIELDS.project.shortName)}</div>}
          <div style={styles.metaLine}>
            <span style={styles.metaItem}>{this.renderMiniIcon('map', '#667085', 14)}{this.getValue(project, FIELDS.project.region)}</span>
            {unit !== '-' && <button style={styles.unitLink} onClick={e => {
            this.openUnit(project);
          }}>{unit}</button>}
            <span>负责人：{owner}</span>
            {members !== '-' && <span>团队：{members}</span>}
          </div>
        </div>
        <div style={styles.heroRight}>
          {this.renderStars(star)}
          <div style={styles.serial}>{this.getValue(project, FIELDS.project.code)}</div>
          {this.renderButton(<span style={styles.buttonInner}>{this.renderMiniIcon('edit', '#344054', 14)}<span>编辑</span></span>, 'edit', e => {
          this.editProject(project);
        })}
        </div>
      </div>
      <div style={isMobile ? styles.summaryGridMobile : styles.summaryGrid}>
        {this.renderSummaryCard('关联联系人', relations.length, '位关键人员', 'primary')}
        {this.renderSummaryCard('拜访记录', visits.length, '条相关记录', 'purple')}
        {this.renderSummaryCard('下一步', this.getValue(project, FIELDS.project.nextAction), this.formatDate(this.rawValue(project, FIELDS.project.nextDate)), 'warning')}
      </div>
    </div>;
}
export function renderSummaryCard(label, value, sub, tone) {
  var color = tone === 'primary' ? styles.summaryBlue : tone === 'purple' ? styles.summaryPurple : tone === 'warning' ? styles.summaryAmber : {};
  var isNumber = typeof value === 'number';
  return <div style={Object.assign({}, styles.summaryCard, color)}>
      <div style={styles.summaryLabel}>{label}</div>
      <div style={isNumber ? styles.summaryNumber : styles.summaryTextValue}>{value === '-' ? '暂无' : value}</div>
      {sub && sub !== '-' && <div style={styles.summarySub}>{sub}</div>}
    </div>;
}
export function renderTabs(relations, relationChanges, visits) {
  var self = this;
  var tabs = [{
    key: 'overview',
    label: '项目详情'
  }, {
    key: 'contacts',
    label: '关键联系人 (' + relations.length + ')'
  }, {
    key: 'changes',
    label: '联系人变更 (' + relationChanges.length + ')'
  }, {
    key: 'visits',
    label: '拜访记录 (' + visits.length + ')'
  }];
  return <div style={styles.tabs}>{tabs.map(item => {
      var active = _customState.activeTab === item.key;
      return <button key={item.key} onClick={e => {
        self.setActiveTab(item.key);
      }} style={Object.assign({}, styles.tab, active ? styles.tabActive : {})}>{item.label}</button>;
    })}</div>;
}
export function renderSection(title, children, secure) {
  return <div style={styles.section}>
      <div style={styles.sectionHead}>
        <h3 style={styles.sectionTitle}>{title}</h3>
        {secure && <span style={styles.secureBadge}>项目机密</span>}
      </div>
      {children}
    </div>;
}
export function renderTextBlock(value, tone) {
  var style = tone === 'blue' ? styles.textBlockBlue : tone === 'amber' ? styles.textBlockAmber : tone === 'red' ? styles.textBlockRed : tone === 'green' ? styles.textBlockGreen : styles.textBlock;
  return <div style={style}>{value !== '-' ? value : '暂无'}</div>;
}
export function renderOverview(project) {
  var nextDate = this.formatDate(this.rawValue(project, FIELDS.project.nextDate));
  return <div style={styles.overviewGrid}>
      <div style={styles.fullSpan}>{this.renderSection('项目摘要', this.renderTextBlock(this.getValue(project, FIELDS.project.summary), 'default'), false)}</div>
      <div style={styles.fullSpan}>{this.renderSection('最新进展', <div style={styles.textBlockBlue}>
            <div>{this.getValue(project, FIELDS.project.recent) !== '-' ? this.getValue(project, FIELDS.project.recent) : '暂无'}</div>
            {this.formatDate(this.rawValue(project, FIELDS.project.recentDate)) !== '-' && <div style={styles.blockMeta}>更新时间：{this.formatDate(this.rawValue(project, FIELDS.project.recentDate))}</div>}
          </div>, false)}</div>
      <div style={styles.fullSpan}>{this.renderSection('关键推进信息', this.renderTextBlock(this.getValue(project, FIELDS.project.keyProgress), 'amber'), true)}</div>
      {this.renderSection('决策链说明', this.renderTextBlock(this.getValue(project, FIELDS.project.decision), 'purple'), true)}
      {this.renderSection('风险点', this.renderTextBlock(this.getValue(project, FIELDS.project.risk), 'amber'), true)}
      {this.renderSection('当前卡点', this.renderTextBlock(this.getValue(project, FIELDS.project.block), 'red'), true)}
      <div style={styles.fullSpan}>{this.renderSection('下一步动作', <div style={styles.textBlockGreen}>
            <div>{this.getValue(project, FIELDS.project.nextAction) !== '-' ? this.getValue(project, FIELDS.project.nextAction) : '暂无'}</div>
            <div style={styles.blockMeta}>
              {this.getValue(project, FIELDS.project.nextOwner) !== '-' && <span>负责人：{this.getValue(project, FIELDS.project.nextOwner)}</span>}
              {nextDate !== '-' && <span style={styles.metaGap}>计划日期：{nextDate}</span>}
            </div>
          </div>, false)}</div>
    </div>;
}
export function renderContacts(relations) {
  if (!relations.length) return this.renderEmpty('暂无关联联系人');
  return <div style={styles.list}>
      {relations.map(row => {
      var contactName = this.getAssociationText(row, FIELDS.relation.contact);
      var role = this.getValue(row, FIELDS.relation.role);
      var attitude = this.getValue(row, FIELDS.relation.attitude);
      var statusLabel = this.getRelationStatusLabel(row);
      var effectiveDate = this.formatDate(this.rawValue(row, FIELDS.relation.effectiveDate));
      return <div key={this.getRowId(row)} style={styles.contactCard}>
          <div style={styles.contactHead}>
            <div>
              <button style={styles.contactName} onClick={e => {
          this.openContact(row);
        }}>{contactName}</button>
              <span style={styles.positionText}>{this.getValue(row, FIELDS.relation.position)}</span>
              <span style={styles.positionText}>{this.getValue(row, FIELDS.relation.unitText)}</span>
            </div>
            <div style={styles.contactBadges}>
              {this.renderBadge(role, 'primary')}
              {this.renderBadge(statusLabel, this.relationStatusTone(statusLabel))}
              {this.renderBadge(attitude, this.attitudeTone(attitude))}
              <button style={styles.actionLink} onClick={e => {
          this.editRelation(row);
        }}>编辑</button>
            </div>
          </div>
          <div style={styles.contactMeta}>
            <span>影响程度：{this.getValue(row, FIELDS.relation.influence)}</span>
            <span>熟悉程度：{this.getValue(row, FIELDS.relation.familiar)}</span>
            <span>我方熟悉人：{this.getValue(row, FIELDS.relation.familiarPerson)}</span>
            <span>关系状态：{statusLabel}</span>
            {effectiveDate !== '-' && <span>生效日期：{effectiveDate}</span>}
          </div>
          {this.getValue(row, FIELDS.relation.needs) !== '-' && <div style={styles.smallText}><span style={styles.muted}>关键诉求：</span>{this.getValue(row, FIELDS.relation.needs)}</div>}
          {this.getValue(row, FIELDS.relation.strategy) !== '-' && <div style={styles.strategyText}>维护策略：{this.getValue(row, FIELDS.relation.strategy)}</div>}
          {this.getValue(row, FIELDS.relation.nextAction) !== '-' && <div style={styles.smallText}><span style={styles.muted}>下一步：</span>{this.getValue(row, FIELDS.relation.nextAction)}</div>}
        </div>;
    })}
    </div>;
}
export function renderRelationChanges(relations) {
  if (!relations.length) return this.renderEmpty('暂无联系人变更记录');
  return <div style={styles.list}>
      {relations.map(row => {
      var contactName = this.getAssociationText(row, FIELDS.relation.contact);
      var role = this.getValue(row, FIELDS.relation.role);
      var statusLabel = this.getRelationStatusLabel(row);
      var changeType = this.getValue(row, FIELDS.relation.changeType);
      var effectiveDate = this.formatDate(this.rawValue(row, FIELDS.relation.effectiveDate));
      var endDate = this.formatDate(this.rawValue(row, FIELDS.relation.endDate));
      var recordTime = this.formatDate(this.rawValue(row, FIELDS.relation.recordTime));
      var changeNote = this.getValue(row, FIELDS.relation.changeNote);
      return <div key={this.getRowId(row)} style={styles.contactCard}>
          <div style={styles.contactHead}>
            <div>
              <button style={styles.contactName} onClick={e => {
          this.openContact(row);
        }}>{contactName}</button>
              <span style={styles.positionText}>{this.getValue(row, FIELDS.relation.unitText)}</span>
              <span style={styles.positionText}>{this.getValue(row, FIELDS.relation.position)}</span>
            </div>
            <div style={styles.contactBadges}>
              {this.renderBadge(statusLabel, this.relationStatusTone(statusLabel))}
              {this.renderBadge(role, 'primary')}
              {changeType !== '-' && this.renderBadge(changeType, 'purple')}
              <button style={styles.actionLink} onClick={e => {
          this.editRelation(row);
        }}>编辑</button>
            </div>
          </div>
          <div style={styles.contactMeta}>
            <span>当前单位：{this.getValue(row, FIELDS.relation.unitText)}</span>
            <span>当前岗位：{this.getValue(row, FIELDS.relation.position)}</span>
            <span>影响程度：{this.getValue(row, FIELDS.relation.influence)}</span>
            <span>当前态度：{this.getValue(row, FIELDS.relation.attitude)}</span>
            <span>熟悉程度：{this.getValue(row, FIELDS.relation.familiar)}</span>
            <span>生效日期：{effectiveDate}</span>
            <span>结束日期：{endDate}</span>
            <span>记录人：{this.getValue(row, FIELDS.relation.recorder)}</span>
            <span>记录时间：{recordTime}</span>
          </div>
          {changeNote !== '-' && <div style={styles.smallText}><span style={styles.muted}>变更说明：</span>{changeNote}</div>}
          {this.getValue(row, FIELDS.relation.nextAction) !== '-' && <div style={styles.smallText}><span style={styles.muted}>下一步：</span>{this.getValue(row, FIELDS.relation.nextAction)}</div>}
        </div>;
    })}
    </div>;
}
export function renderVisits(visits) {
  if (!visits.length) return this.renderEmpty('暂无相关拜访记录');
  return <div style={styles.list}>
      {visits.map(row => <div key={this.getRowId(row)} style={styles.visitCard} onClick={e => {
      this.openVisit(row);
    }}>
          <div style={styles.visitMain}>
            <div style={styles.visitTitleLine}>
              {this.renderBadge(this.getValue(row, FIELDS.visit.method), this.visitMethodTone(this.getValue(row, FIELDS.visit.method)))}
              <span style={styles.visitTitle}>{this.getValue(row, FIELDS.visit.title)}</span>
            </div>
            <div style={styles.visitMeta}>{this.formatDate(Number(this.rawValue(row, FIELDS.visit.time)) || Number(this.rawValue(row, FIELDS.visit.recordTime)))} · {this.getAssociationText(row, FIELDS.visit.contact)} · {this.getValue(row, FIELDS.visit.people)}</div>
            <div style={styles.visitSummary}>{this.getValue(row, FIELDS.visit.content)}</div>
          </div>
          <div style={styles.chevron}>›</div>
        </div>)}
    </div>;
}
export function renderEmpty(text) {
  return <div style={styles.empty}>{text}</div>;
}
export function renderTabToolbar(project) {
  if (_customState.activeTab === 'contacts') {
    return <div style={styles.tabToolbar}>
        <h3 style={styles.tabTitle}>关键联系人</h3>
        <button style={styles.actionLink} onClick={e => {
        this.createRelation(project);
      }}>+ 关联联系人</button>
      </div>;
  }
  if (_customState.activeTab === 'visits') {
    return <div style={styles.tabToolbar}>
        <h3 style={styles.tabTitle}>相关拜访记录</h3>
        <button style={styles.actionLink} onClick={e => {
        this.createVisit(project);
      }}>+ 记录拜访</button>
      </div>;
  }
  if (_customState.activeTab === 'changes') {
    return <div style={styles.tabToolbar}>
        <h3 style={styles.tabTitle}>联系人变更</h3>
        <button style={styles.actionLink} onClick={e => {
        this.createRelation(project);
      }}>+ 关联联系人</button>
      </div>;
  }
  return null;
}
export function renderPanel(project, relations, relationChanges, visits) {
  return <div style={styles.panel}>
      {this.renderTabs(relations, relationChanges, visits)}
      <div style={styles.panelBody}>
        {this.renderTabToolbar(project)}
        {_customState.activeTab === 'overview' && this.renderOverview(project)}
        {_customState.activeTab === 'contacts' && this.renderContacts(relations)}
        {_customState.activeTab === 'changes' && this.renderRelationChanges(relationChanges)}
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
  shortName: {
    color: '#667085',
    fontSize: '14px',
    lineHeight: '20px',
    marginTop: '2px'
  },
  metaLine: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
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
  unitLink: {
    border: 'none',
    background: 'transparent',
    padding: 0,
    color: '#667085',
    cursor: 'pointer',
    fontSize: '14px'
  },
  heroRight: {
    display: 'grid',
    justifyItems: 'end',
    gap: '10px',
    flexShrink: 0
  },
  stars: {
    display: 'flex',
    gap: '2px'
  },
  starOn: {
    display: 'inline-flex'
  },
  starOff: {
    display: 'inline-flex',
    opacity: 0.6
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
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
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
  summaryAmber: {
    background: '#FFFAEB',
    border: '1px solid #FEDF89'
  },
  summaryLabel: {
    fontSize: '12px',
    color: '#667085',
    marginBottom: '8px'
  },
  summaryNumber: {
    fontSize: '20px',
    lineHeight: '26px',
    color: '#155EEF',
    fontWeight: 900,
    wordBreak: 'break-word'
  },
  summaryTextValue: {
    fontSize: '14px',
    lineHeight: '20px',
    color: '#B54708',
    fontWeight: 700,
    wordBreak: 'break-word'
  },
  summarySub: {
    marginTop: '4px',
    fontSize: '12px',
    lineHeight: '18px',
    color: '#667085'
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
    padding: '0 22px',
    border: 'none',
    borderBottom: '2px solid transparent',
    background: '#FFFFFF',
    color: '#667085',
    fontSize: '14px',
    fontWeight: 700,
    cursor: 'pointer',
    whiteSpace: 'nowrap'
  },
  tabActive: {
    color: '#155EEF',
    background: '#EFF6FF',
    borderBottom: '2px solid #155EEF'
  },
  panelBody: {
    padding: '24px',
    boxSizing: 'border-box'
  },
  tabToolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '12px',
    marginBottom: '18px'
  },
  tabTitle: {
    margin: 0,
    color: '#101828',
    fontSize: '15px',
    lineHeight: '22px',
    fontWeight: 800
  },
  actionLink: {
    border: 'none',
    background: 'transparent',
    color: '#155EEF',
    fontSize: '14px',
    lineHeight: '22px',
    fontWeight: 700,
    padding: '4px 0',
    cursor: 'pointer',
    whiteSpace: 'nowrap'
  },
  overviewGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: '4px 24px'
  },
  fullSpan: {
    gridColumn: '1 / -1'
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
  textBlockRed: {
    minHeight: '48px',
    borderRadius: '8px',
    background: '#FEF3F2',
    border: '1px solid #FECDCA',
    color: '#B42318',
    padding: '14px 16px',
    lineHeight: '22px',
    fontSize: '14px',
    whiteSpace: 'pre-wrap',
    boxSizing: 'border-box'
  },
  textBlockGreen: {
    minHeight: '48px',
    borderRadius: '8px',
    background: '#ECFDF3',
    border: '1px solid #ABEFC6',
    color: '#027A48',
    padding: '14px 16px',
    lineHeight: '22px',
    fontSize: '14px',
    whiteSpace: 'pre-wrap',
    boxSizing: 'border-box'
  },
  blockMeta: {
    marginTop: '6px',
    fontSize: '12px',
    lineHeight: '18px',
    color: '#667085'
  },
  metaGap: {
    marginLeft: '14px'
  },
  list: {
    display: 'grid',
    gap: '12px'
  },
  contactCard: {
    border: '1px solid #EAECF0',
    borderRadius: '10px',
    padding: '16px',
    background: '#FFFFFF'
  },
  contactHead: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: '12px',
    flexWrap: 'wrap'
  },
  contactName: {
    border: 'none',
    background: 'transparent',
    padding: 0,
    color: '#155EEF',
    fontWeight: 800,
    fontSize: '14px',
    cursor: 'pointer'
  },
  positionText: {
    color: '#667085',
    fontSize: '12px',
    marginLeft: '8px'
  },
  contactBadges: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
  },
  contactMeta: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    marginTop: '10px',
    color: '#667085',
    fontSize: '12px'
  },
  smallText: {
    marginTop: '8px',
    color: '#344054',
    fontSize: '13px',
    lineHeight: '20px'
  },
  muted: {
    color: '#98A2B3'
  },
  strategyText: {
    marginTop: '8px',
    padding: '10px 12px',
    borderRadius: '8px',
    background: '#FFFAEB',
    color: '#B54708',
    fontSize: '13px',
    lineHeight: '20px'
  },
  visitCard: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    border: '1px solid #EAECF0',
    borderRadius: '10px',
    padding: '14px 16px',
    background: '#FFFFFF',
    cursor: 'pointer'
  },
  visitMain: {
    flex: 1,
    minWidth: 0
  },
  visitTitleLine: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    flexWrap: 'wrap'
  },
  visitTitle: {
    color: '#101828',
    fontSize: '14px',
    fontWeight: 800
  },
  visitMeta: {
    marginTop: '6px',
    color: '#98A2B3',
    fontSize: '12px',
    lineHeight: '18px'
  },
  visitSummary: {
    marginTop: '6px',
    color: '#475467',
    fontSize: '13px',
    lineHeight: '20px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  chevron: {
    color: '#98A2B3',
    fontSize: '22px',
    lineHeight: '24px'
  },
  empty: {
    background: '#FFFFFF',
    border: '1px solid #EAECF0',
    borderRadius: '8px',
    padding: '42px 12px',
    color: '#98A2B3',
    textAlign: 'center',
    fontSize: '14px'
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
  }
};
export function renderJsx() {
  var timestamp = this.state && this.state.timestamp;
  var isMobile = this.utils.isMobile();
  var project = this.getProject();
  var allRelations = project ? this.getProjectRelations(project) : [];
  var relations = this.getCurrentRelations(allRelations);
  var relationChanges = this.getRelationChanges(allRelations);
  var visits = project ? this.getProjectVisits(project) : [];
  return <div style={styles.page}>
      <div style={{
      display: 'none'
    }}>{timestamp}</div>
      <div style={isMobile ? styles.shellMobile : styles.shell}>
        {this.renderBack(isMobile)}
        {_customState.loading && <div style={styles.notice}>正在加载项目详情...</div>}
        {_customState.error && <div style={styles.error}>{_customState.error}</div>}
        {!_customState.loading && !project && this.renderEmpty('未找到项目，请返回列表重新选择')}
        {!_customState.loading && project && <div>
          {this.renderHero(project, relations, visits, isMobile)}
          {this.renderPanel(project, relations, relationChanges, visits)}
        </div>}
      </div>
    </div>;
}
