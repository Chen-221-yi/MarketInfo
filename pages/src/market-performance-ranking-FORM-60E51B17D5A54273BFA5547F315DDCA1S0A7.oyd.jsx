// 市场绩效排行榜

var APP_TYPE = 'APP_LC7BU43GCVLSI0TH8POE';
var FORMS = {
  performanceDetail: 'FORM-9819BDE9EFDC49378833DD8E4B45C187JK7U'
};
var MARKET_PERFORMANCE_FIELDS = {
  monthDate: 'dateField_9sln139kx',
  personName: 'employeeField_e9kq1wib9',
  amount: 'numberField_9sln37rah'
};
var NAV_ITEMS = ['首页概览', '数据看板', '市场绩效', '绩效排行榜', '绩效明细', '数据报表', '系统设置'];
var _customState = {
  loading: false,
  error: '',
  rows: [],
  page: 1,
  pageSize: 10,
  monthDropdownOpen: false,
  filters: {
    months: [],
    personName: '',
    rankDimension: 'amount',
    sortDirection: 'desc'
  }
};
var styles = {
  page: {
    minHeight: '100vh',
    display: 'block',
    background: '#f3f7fc',
    color: '#172033',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", Arial, sans-serif'
  },
  sidebar: {
    width: 200,
    flexShrink: 0,
    background: '#ffffff',
    borderRight: '1px solid #e3ebf5',
    padding: '18px 12px',
    boxSizing: 'border-box',
    boxShadow: '8px 0 24px rgba(47, 79, 117, 0.05)'
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '0 8px 26px'
  },
  brandMark: {
    width: 38,
    height: 38,
    borderRadius: 8,
    background: 'linear-gradient(135deg, #0f6bff, #2f88ff)',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 700
  },
  brandTitle: {
    fontSize: 15,
    fontWeight: 700,
    color: '#12233d'
  },
  brandSub: {
    marginTop: 2,
    fontSize: 11,
    color: '#8a98aa'
  },
  navItem: {
    height: 44,
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '0 12px',
    marginBottom: 8,
    borderRadius: 8,
    color: '#64748b',
    fontSize: 13,
    boxSizing: 'border-box'
  },
  navActive: {
    background: 'linear-gradient(90deg, #e8f1ff, #f4f8ff)',
    color: '#0f6bff',
    fontWeight: 700
  },
  navDot: {
    width: 20,
    height: 20,
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#8aa0b8',
    fontSize: 13,
    fontWeight: 700
  },
  navDotActive: {
    color: '#1677ff',
    background: '#dbeafe'
  },
  sidebarHint: {
    margin: '42px 10px 0',
    height: 150,
    borderRadius: 8,
    background: 'linear-gradient(160deg, #eff6ff, #ffffff)',
    border: '1px solid #e2ecf8',
    position: 'relative',
    overflow: 'hidden'
  },
  hintSheet: {
    position: 'absolute',
    left: 28,
    top: 34,
    width: 78,
    height: 84,
    borderRadius: 8,
    background: '#ffffff',
    border: '1px solid #cfe0f7',
    boxShadow: '0 12px 24px rgba(45, 103, 183, 0.12)'
  },
  hintLine: {
    height: 5,
    borderRadius: 8,
    background: '#b8cff2',
    margin: '12px 12px 0'
  },
  hintBars: {
    position: 'absolute',
    right: 24,
    bottom: 26,
    width: 44,
    height: 54,
    display: 'flex',
    alignItems: 'flex-end',
    gap: 5
  },
  hintBar: {
    width: 8,
    borderRadius: 8,
    background: 'linear-gradient(180deg, #90c2ff, #4389ff)'
  },
  main: {
    width: '100%',
    padding: '16px 18px 24px',
    boxSizing: 'border-box',
    minWidth: 0
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
    marginBottom: 14
  },
  title: {
    fontSize: 22,
    lineHeight: '32px',
    fontWeight: 800,
    color: '#10213a'
  },
  subtitle: {
    marginTop: 4,
    fontSize: 12,
    color: '#6f7f95'
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: 10
  },
  primaryButton: {
    height: 36,
    padding: '0 16px',
    border: '1px solid #dce7f5',
    borderRadius: 8,
    color: '#183153',
    background: '#ffffff',
    fontSize: 13,
    fontWeight: 700,
    cursor: 'pointer',
    boxShadow: '0 8px 18px rgba(40, 78, 119, 0.08)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8
  },
  disabledButton: {
    height: 36,
    padding: '0 16px',
    border: '1px solid #0f6bff',
    borderRadius: 8,
    color: '#ffffff',
    background: 'linear-gradient(135deg, #1677ff, #0b64e8)',
    fontSize: 13,
    cursor: 'pointer',
    boxShadow: '0 8px 16px rgba(15, 107, 255, 0.18)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8
  },
  filterCard: {
    background: '#ffffff',
    border: '1px solid #e3ebf5',
    borderRadius: 8,
    padding: '14px 16px 16px',
    boxShadow: '0 8px 22px rgba(34, 64, 96, 0.06)',
    marginBottom: 12
  },
  filterGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(160px, 1fr))',
    gap: 24,
    alignItems: 'end'
  },
  fieldLabel: {
    display: 'block',
    fontSize: 12,
    color: '#69798f',
    marginBottom: 6
  },
  select: {
    width: '100%',
    height: 38,
    border: '1px solid #d8e2ee',
    borderRadius: 8,
    background: '#ffffff',
    color: '#1e2b3f',
    padding: '0 12px',
    boxSizing: 'border-box',
    outline: 'none'
  },
  fixedSelect: {
    width: '100%',
    height: 38,
    border: '1px solid #d8e2ee',
    borderRadius: 8,
    background: '#f6f9fd',
    color: '#39516f',
    padding: '0 12px',
    boxSizing: 'border-box'
  },
  rangeSelectWrap: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 8
  },
  monthDropdown: {
    position: 'relative'
  },
  monthDropdownButton: {
    width: '100%',
    height: 38,
    border: '1px solid #d8e2ee',
    borderRadius: 8,
    background: '#ffffff',
    color: '#1e2b3f',
    padding: '0 34px 0 34px',
    boxSizing: 'border-box',
    outline: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: 13
  },
  monthDropdownPanel: {
    position: 'absolute',
    left: 0,
    top: 44,
    width: '100%',
    maxHeight: 250,
    overflowY: 'auto',
    background: '#ffffff',
    border: '1px solid #d8e2ee',
    borderRadius: 8,
    boxShadow: '0 14px 28px rgba(30, 64, 105, 0.14)',
    padding: 8,
    zIndex: 20,
    boxSizing: 'border-box'
  },
  monthOption: {
    height: 32,
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '0 8px',
    borderRadius: 6,
    color: '#26384f',
    fontSize: 13,
    cursor: 'pointer',
    boxSizing: 'border-box'
  },
  monthCheckbox: {
    width: 14,
    height: 14,
    margin: 0
  },
  monthPanelActions: {
    height: 34,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 6px',
    borderBottom: '1px solid #edf2f7',
    marginBottom: 6,
    boxSizing: 'border-box'
  },
  monthActionButton: {
    border: 0,
    background: 'transparent',
    color: '#1677ff',
    fontSize: 12,
    cursor: 'pointer',
    padding: 0
  },
  filterControl: {
    position: 'relative'
  },
  filterIcon: {
    position: 'absolute',
    left: 12,
    bottom: 10,
    width: 16,
    height: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#45627f',
    fontSize: 14,
    pointerEvents: 'none'
  },
  selectWithIcon: {
    paddingLeft: 34
  },
  metricGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
    gap: 12,
    marginBottom: 12
  },
  metricCard: {
    height: 96,
    background: '#ffffff',
    border: '1px solid #e4ecf5',
    borderRadius: 8,
    padding: '16px 18px',
    boxSizing: 'border-box',
    boxShadow: '0 10px 24px rgba(42, 80, 124, 0.07)',
    display: 'flex',
    alignItems: 'center',
    gap: 16
  },
  metricTop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  metricContent: {
    minWidth: 0,
    flex: 1
  },
  metricLabel: {
    fontSize: 13,
    color: '#738299'
  },
  metricIcon: {
    width: 58,
    height: 58,
    borderRadius: 32,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#eaf2ff',
    color: '#0f6bff',
    fontWeight: 800,
    fontSize: 22,
    boxShadow: 'inset 0 0 0 6px rgba(255, 255, 255, 0.34), 0 8px 18px rgba(15, 107, 255, 0.18)'
  },
  metricIconBlue: {
    background: 'linear-gradient(135deg, #5ca8ff, #176dff)',
    color: '#ffffff'
  },
  metricIconPurple: {
    background: 'linear-gradient(135deg, #a78bfa, #6d45e7)',
    color: '#ffffff'
  },
  metricIconCyan: {
    background: 'linear-gradient(135deg, #43d5de, #08a7b4)',
    color: '#ffffff'
  },
  metricIconGold: {
    background: 'linear-gradient(135deg, #ffc94a, #f59e0b)',
    color: '#ffffff'
  },
  metricValue: {
    marginTop: 5,
    fontSize: 27,
    lineHeight: '34px',
    fontWeight: 800,
    color: '#14243a',
    wordBreak: 'break-word'
  },
  metricUnit: {
    marginLeft: 6,
    fontSize: 13,
    fontWeight: 500,
    color: '#50647f'
  },
  metricSub: {
    marginTop: 4,
    fontSize: 12,
    color: '#8a98aa'
  },
  gridMain: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1.55fr) minmax(320px, 0.95fr)',
    gap: 16,
    marginBottom: 12
  },
  gridBottom: {
    display: 'grid',
    gridTemplateColumns: 'minmax(360px, 0.95fr) minmax(420px, 1.25fr)',
    gap: 16
  },
  card: {
    background: '#ffffff',
    border: '1px solid #e4ecf5',
    borderRadius: 8,
    boxShadow: '0 10px 24px rgba(42, 80, 124, 0.07)',
    overflow: 'hidden'
  },
  cardHeader: {
    height: 46,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 18px',
    borderBottom: '1px solid #edf2f7',
    boxSizing: 'border-box'
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 800,
    color: '#17263c'
  },
  cardMeta: {
    fontSize: 12,
    color: '#8a98aa'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    tableLayout: 'fixed'
  },
  th: {
    height: 34,
    padding: '0 14px',
    background: '#f5f8fc',
    color: '#66758a',
    fontSize: 12,
    fontWeight: 700,
    textAlign: 'left',
    borderBottom: '1px solid #edf2f7'
  },
  td: {
    height: 36,
    padding: '0 14px',
    borderBottom: '1px solid #f0f4f8',
    fontSize: 13,
    color: '#24344d',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  right: {
    textAlign: 'right'
  },
  rankCell: {
    display: 'flex',
    alignItems: 'center',
    gap: 8
  },
  rankBadge: {
    width: 22,
    height: 22,
    borderRadius: 14,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 12,
    fontWeight: 800,
    color: '#4b5870',
    background: '#edf2f7',
    boxShadow: 'inset 0 -1px 0 rgba(0,0,0,0.05)'
  },
  badgeGold: {
    color: '#ffffff',
    background: 'linear-gradient(135deg, #ffd66b, #f59e0b)'
  },
  badgeSilver: {
    color: '#ffffff',
    background: 'linear-gradient(135deg, #cbd5e1, #7c93b0)'
  },
  badgeBronze: {
    color: '#ffffff',
    background: 'linear-gradient(135deg, #ffb077, #c2410c)'
  },
  trendUp: {
    color: '#16a34a',
    fontWeight: 800
  },
  trendFlat: {
    color: '#64748b',
    fontWeight: 800
  },
  trendDown: {
    color: '#dc2626',
    fontWeight: 800
  },
  eliteBody: {
    padding: 14
  },
  eliteCard: {
    minHeight: 88,
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    boxSizing: 'border-box',
    border: '1px solid transparent',
    display: 'grid',
    gridTemplateColumns: '64px minmax(0, 1fr) 64px',
    alignItems: 'center',
    gap: 10,
    overflow: 'hidden',
    position: 'relative'
  },
  eliteGold: {
    background: 'linear-gradient(135deg, #fff8dd, #fffdf6)',
    borderColor: '#f3c654'
  },
  eliteSilver: {
    background: 'linear-gradient(135deg, #eef6ff, #fbfdff)',
    borderColor: '#b8cce7'
  },
  eliteBronze: {
    background: 'linear-gradient(135deg, #fff0e7, #fffaf7)',
    borderColor: '#efb28c'
  },
  eliteHead: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  eliteName: {
    fontSize: 16,
    fontWeight: 800,
    color: '#16253b'
  },
  eliteRank: {
    fontSize: 12,
    fontWeight: 800,
    color: '#2563eb'
  },
  eliteAmount: {
    marginTop: 4,
    fontSize: 25,
    fontWeight: 800,
    color: '#1e40af'
  },
  eliteMedal: {
    width: 48,
    height: 48,
    borderRadius: 26,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 900,
    boxShadow: '0 8px 18px rgba(0, 0, 0, 0.12)'
  },
  eliteMedalGold: {
    background: 'linear-gradient(135deg, #ffd66b, #f59e0b)'
  },
  eliteMedalSilver: {
    background: 'linear-gradient(135deg, #dbeafe, #7c93b0)'
  },
  eliteMedalBronze: {
    background: 'linear-gradient(135deg, #fdba74, #c2410c)'
  },
  eliteCup: {
    width: 50,
    height: 50,
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 28,
    fontWeight: 900,
    color: '#b45309',
    background: 'rgba(255,255,255,0.62)'
  },
  miniGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 10,
    marginTop: 4
  },
  miniBlock: {
    borderRadius: 8,
    background: '#f6f9fd',
    padding: 12,
    boxSizing: 'border-box'
  },
  miniLabel: {
    fontSize: 12,
    color: '#738299'
  },
  miniValue: {
    marginTop: 6,
    fontSize: 14,
    lineHeight: '20px',
    fontWeight: 800,
    color: '#1e2b3f'
  },
  chartBody: {
    padding: '12px 18px 18px'
  },
  barRow: {
    display: 'grid',
    gridTemplateColumns: '24px 72px minmax(120px, 1fr) 76px',
    gap: 8,
    alignItems: 'center',
    height: 27
  },
  barRank: {
    fontSize: 12,
    color: '#5f7188',
    textAlign: 'right'
  },
  barName: {
    fontSize: 13,
    color: '#24344d',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  },
  barTrack: {
    height: 10,
    borderRadius: 8,
    background: '#e8f0fa',
    overflow: 'hidden'
  },
  barFill: {
    height: '100%',
    borderRadius: 8,
    background: 'linear-gradient(90deg, #74b5ff, #1677ff, #155ee8)'
  },
  barValue: {
    fontSize: 12,
    color: '#53657d',
    textAlign: 'right'
  },
  chartAxis: {
    display: 'grid',
    gridTemplateColumns: '104px 1fr 76px',
    gap: 8,
    marginTop: 8,
    color: '#6b7f99',
    fontSize: 11
  },
  chartScale: {
    display: 'flex',
    justifyContent: 'space-between',
    borderTop: '1px dashed #dbe5f1',
    paddingTop: 8
  },
  detailBody: {
    minHeight: 302
  },
  tableFooter: {
    height: 42,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 18px',
    color: '#53657d',
    fontSize: 12,
    boxSizing: 'border-box'
  },
  tableFooterPages: {
    display: 'flex',
    alignItems: 'center',
    gap: 8
  },
  pageChip: {
    minWidth: 28,
    height: 28,
    padding: '0 8px',
    borderRadius: 7,
    border: '1px solid #dbe6f2',
    background: '#ffffff',
    color: '#52667d',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box'
  },
  pageChipActive: {
    color: '#1677ff',
    background: '#edf5ff',
    borderColor: '#b9d8ff'
  },
  pager: {
    height: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 16px',
    borderTop: '1px solid #edf2f7',
    boxSizing: 'border-box'
  },
  pageButton: {
    height: 30,
    padding: '0 12px',
    border: '1px solid #d8e2ee',
    borderRadius: 8,
    color: '#2563eb',
    background: '#ffffff',
    cursor: 'pointer'
  },
  pageButtonDisabled: {
    height: 30,
    padding: '0 12px',
    border: '1px solid #e4eaf2',
    borderRadius: 8,
    color: '#a7b2c2',
    background: '#f7f9fc',
    cursor: 'not-allowed'
  },
  pageText: {
    fontSize: 12,
    color: '#7d8da3'
  },
  empty: {
    minHeight: 160,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#8a98aa',
    fontSize: 13
  },
  loading: {
    padding: '10px 14px',
    marginBottom: 12,
    borderRadius: 8,
    background: '#eaf2ff',
    color: '#1d4ed8',
    fontSize: 13
  },
  error: {
    padding: '10px 14px',
    marginBottom: 12,
    borderRadius: 8,
    background: '#fff1f2',
    color: '#be123c',
    fontSize: 13
  }
};
export function didMount() {
  this.loadMarketPerformanceData();
}
export function getCustomState(key) {
  if (key) return _customState[key];
  return _customState;
}
export function setCustomState(nextState) {
  Object.keys(nextState || {}).forEach(key => {
    _customState[key] = nextState[key];
  });
  this.forceUpdate();
}
export function forceUpdate() {
  this.setState({
    timestamp: new Date().getTime()
  });
}
export function mergeStyle() {
  var result = {};
  for (var i = 0; i < arguments.length; i++) {
    var source = arguments[i] || {};
    Object.keys(source).forEach(key => {
      result[key] = source[key];
    });
  }
  return result;
}
export function loadMarketPerformanceData() {
  var self = this;
  this.setCustomState({
    loading: true,
    error: ''
  });
  return this.fetchPerformancePage(1, []).then(rows => {
    var normalized = rows.map(row => self.normalizePerformanceRow(row));
    self.setCustomState({
      rows: normalized,
      loading: false,
      error: ''
    });
    return normalized;
  }).catch(err => {
    self.setCustomState({
      loading: false,
      error: self.getErrorMessage(err)
    });
  });
}
export function fetchPerformancePage(page, collected) {
  var self = this;
  var pageSize = 50;
  return this.utils.yida.searchFormDatas({
    formUuid: FORMS.performanceDetail,
    currentPage: page,
    pageSize: pageSize
  }).then(res => {
    var rows = self.normalizeRows(res);
    var total = self.normalizeTotal(res, collected.length + rows.length);
    var nextRows = collected.concat(rows);
    if (rows.length > 0 && nextRows.length < total) {
      return self.fetchPerformancePage(page + 1, nextRows);
    }
    return nextRows;
  }).catch(err => {
    throw err;
  });
}
export function normalizeRows(res) {
  return res && res.data || res && res.content && res.content.data || res && res.content && res.content.list || [];
}
export function normalizeTotal(res, fallback) {
  return res && res.totalCount || res && res.content && res.content.totalCount || fallback || 0;
}
export function normalizePerformanceRow(row) {
  var monthInfo = this.getMonthInfo(this.getFieldValue(row, MARKET_PERFORMANCE_FIELDS.monthDate));
  var personName = this.getPersonText(this.getFieldValue(row, MARKET_PERFORMANCE_FIELDS.personName));
  var amount = this.toNumber(this.getFieldValue(row, MARKET_PERFORMANCE_FIELDS.amount));
  return {
    id: row && (row.formInstId || row.instanceId || row.id) || monthInfo.key + personName + amount,
    monthText: monthInfo.text,
    monthKey: monthInfo.key,
    personName: personName,
    amount: amount
  };
}
export function getFieldValue(row, fieldId) {
  var data = row && row.formData || {};
  var value = data[fieldId];
  if (value === undefined || value === null || value === '') {
    value = data[fieldId + '_value'];
  }
  if (value !== undefined && value !== null && value !== '') {
    return value;
  }
  var list = this.parseInstValue(row && row.instValue);
  for (var i = 0; i < list.length; i++) {
    if (list[i] && list[i].fieldId === fieldId) {
      return list[i].fieldData && list[i].fieldData.value;
    }
  }
  return value;
}
export function parseInstValue(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  if (typeof value !== 'string') return [];
  try {
    var parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
  }
}
export function safeText(value, fallback) {
  if (value === undefined || value === null) return fallback;
  var text = String(value).trim();
  return text || fallback;
}

export function getPersonText(value) {
  if (Array.isArray(value)) {
    if (!value.length) return '未填写人员';
    return this.safeText(value[0], '未填写人员');
  }
  if (typeof value === 'object' && value) {
    return this.safeText(value.name || value.label || value.userName || value.value, '未填写人员');
  }
  return this.safeText(value, '未填写人员');
}

export function getMonthInfo(value) {
  if (!value) {
    return {
      text: '-',
      key: ''
    };
  }
  var date = null;
  if (typeof value === 'number') {
    date = new Date(value);
  } else if (typeof value === 'string' && /^\d+$/.test(value)) {
    date = new Date(Number(value));
  } else {
    date = new Date(value);
  }
  if (!date || isNaN(date.getTime())) {
    var text = this.safeText(value, '-');
    return {
      text: text,
      key: ''
    };
  }
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var monthText = month < 10 ? '0' + month : '' + month;
  return {
    text: year + '年' + month + '月',
    key: year + '-' + monthText
  };
}
export function toNumber(value) {
  var normalized = String(value || 0).replace(/,/g, '');
  var n = Number(normalized);
  return Number.isFinite(n) ? n : 0;
}
export function formatAmount(value) {
  var number = this.toNumber(value);
  return number.toLocaleString('zh-CN', {
    maximumFractionDigits: 2
  }) + ' 元';
}
export function formatPercent(value) {
  var number = this.toNumber(value);
  if (!number) return '0%';
  return (number * 100).toFixed(1).replace('.0', '') + '%';
}
export function getErrorMessage(err) {
  if (!err) return '数据加载失败';
  return err.message || err.errorMsg || '数据加载失败';
}
export function updateFilter(name, value) {
  var filters = this.mergeStyle(_customState.filters);
  filters[name] = value;
  this.setCustomState({
    filters: filters,
    page: 1
  });
}

export function toggleMonthDropdown() {
  this.setCustomState({
    monthDropdownOpen: !_customState.monthDropdownOpen
  });
}

export function toggleMonthSelection(monthKey) {
  var filters = this.mergeStyle(_customState.filters);
  var months = (filters.months || []).slice();
  var index = months.indexOf(monthKey);
  if (index >= 0) {
    months.splice(index, 1);
  } else {
    months.push(monthKey);
  }
  filters.months = months.sort();
  this.setCustomState({
    filters: filters,
    page: 1
  });
}

export function clearMonthSelection() {
  var filters = this.mergeStyle(_customState.filters);
  filters.months = [];
  this.setCustomState({
    filters: filters,
    page: 1
  });
}

export function selectAllMonths(view) {
  var filters = this.mergeStyle(_customState.filters);
  filters.months = (view.months || []).map(item => item.key);
  this.setCustomState({
    filters: filters,
    page: 1
  });
}
export function changePage(delta) {
  var view = this.getMarketView();
  var nextPage = _customState.page + delta;
  if (nextPage < 1 || nextPage > view.totalPages) return;
  this.setCustomState({
    page: nextPage
  });
}

export function exportData(view) {
  var targetView = view || this.getMarketView();
  var rows = targetView.detailRows || [];
  var header = ['年月', '人员', '金额（元）'];
  var csvRows = [header.join(',')];
  rows.forEach(row => {
    var line = [row.monthText || '-', row.personName || '未填写人员', this.toNumber(row.amount)];
    csvRows.push(line.map(item => '"' + String(item).replace(/"/g, '""') + '"').join(','));
  });
  var content = '\ufeff' + csvRows.join('\n');
  var blob = new Blob([content], {
    type: 'text/csv;charset=utf-8;'
  });
  var url = URL.createObjectURL(blob);
  var link = document.createElement('a');
  link.href = url;
  link.download = '市场绩效排行榜.csv';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function getMarketView() {
  var rows = _customState.rows || [];
  var months = this.getMonthOptions(rows);
  var people = this.getPersonOptions(rows);
  var filteredRows = this.filterRows(rows);
  var ranking = this.buildRanking(filteredRows);
  var totalAmount = filteredRows.reduce((sum, row) => sum + this.toNumber(row.amount), 0);
  var latestChampion = this.getLatestMonthChampion(filteredRows);
  var highestGrowth = this.getHighestGrowth(filteredRows);
  var detailRows = filteredRows.slice().sort((a, b) => {
    var monthCompare = this.safeText(b.monthKey, '').localeCompare(this.safeText(a.monthKey, ''));
    if (monthCompare !== 0) return monthCompare;
    return this.toNumber(b.amount) - this.toNumber(a.amount);
  });
  var pageSize = _customState.pageSize || 10;
  var totalPages = Math.max(1, Math.ceil(detailRows.length / pageSize));
  var currentPage = Math.min(Math.max(_customState.page || 1, 1), totalPages);
  var start = (currentPage - 1) * pageSize;
  return {
    months: months,
    people: people,
    filteredRows: filteredRows,
    ranking: ranking,
    top3: ranking.slice(0, 3),
    top10: ranking.slice(0, 10),
    detailRows: detailRows,
    pageRows: detailRows.slice(start, start + pageSize),
    currentPage: currentPage,
    totalPages: totalPages,
    totalAmount: totalAmount,
    peopleCount: this.countUniquePeople(filteredRows),
    recordCount: filteredRows.length,
    latestChampion: latestChampion,
    highestGrowth: highestGrowth
  };
}
export function getMonthOptions(rows) {
  var map = {};
  rows.forEach(row => {
    if (!row.monthKey) return;
    map[row.monthKey] = row.monthText || row.monthKey;
  });
  return Object.keys(map).sort().map(key => {
    return {
      key: key,
      text: map[key]
    };
  });
}
export function getPersonOptions(rows) {
  var map = {};
  rows.forEach(row => {
    map[row.personName || '未填写人员'] = true;
  });
  return Object.keys(map).sort((a, b) => a.localeCompare(b, 'zh-CN'));
}

export function getMonthDropdownText(view, selectedMonths) {
  var selected = (selectedMonths || []).slice().sort();
  if (!selected.length) return '全部月份';
  var monthMap = {};
  (view.months || []).forEach(item => {
    monthMap[item.key] = item.text;
  });
  if (selected.length === 1) {
    return monthMap[selected[0]] || selected[0];
  }
  return (monthMap[selected[0]] || selected[0]) + ' - ' + (monthMap[selected[selected.length - 1]] || selected[selected.length - 1]);
}

export function filterRows(rows) {
  var filters = _customState.filters || {};
  var selectedMonths = filters.months || [];
  return rows.filter(row => {
    if (selectedMonths.length && selectedMonths.indexOf(row.monthKey) < 0) return false;
    if (filters.personName && row.personName !== filters.personName) return false;
    return true;
  });
}
export function countUniquePeople(rows) {
  var map = {};
  rows.forEach(row => {
    map[row.personName || '未填写人员'] = true;
  });
  return Object.keys(map).length;
}
export function buildRanking(rows) {
  var grouped = {};
  rows.forEach(row => {
    var name = row.personName || '未填写人员';
    if (!grouped[name]) {
      grouped[name] = {
        personName: name,
        amount: 0,
        count: 0,
        recentMonth: '-',
        recentMonthKey: '',
        monthAmounts: {}
      };
    }
    grouped[name].amount += this.toNumber(row.amount);
    grouped[name].count += 1;
    if (row.monthKey && row.monthKey >= grouped[name].recentMonthKey) {
      grouped[name].recentMonthKey = row.monthKey;
      grouped[name].recentMonth = row.monthText || row.monthKey;
    }
    var monthKey = row.monthKey || '';
    grouped[name].monthAmounts[monthKey] = (grouped[name].monthAmounts[monthKey] || 0) + this.toNumber(row.amount);
  });
  var totalAmount = rows.reduce((sum, row) => sum + this.toNumber(row.amount), 0);
  var list = Object.keys(grouped).map(name => {
    var item = grouped[name];
    item.percent = totalAmount ? item.amount / totalAmount : 0;
    item.trend = this.getTrend(item.monthAmounts);
    return item;
  });
  var direction = _customState.filters && _customState.filters.sortDirection === 'asc' ? 1 : -1;
  list.sort((a, b) => {
    var diff = a.amount - b.amount;
    if (diff !== 0) return diff * direction;
    return a.personName.localeCompare(b.personName, 'zh-CN');
  });
  return list.map((item, index) => {
    item.rank = index + 1;
    return item;
  });
}
export function getTrend(monthAmounts) {
  var keys = Object.keys(monthAmounts || {}).filter(key => key).sort();
  if (keys.length < 2) {
    return {
      symbol: '→',
      type: 'flat'
    };
  }
  var current = this.toNumber(monthAmounts[keys[keys.length - 1]]);
  var previous = this.toNumber(monthAmounts[keys[keys.length - 2]]);
  if (current > previous) {
    return {
      symbol: '↗',
      type: 'up'
    };
  }
  if (current < previous) {
    return {
      symbol: '↘',
      type: 'down'
    };
  }
  return {
    symbol: '→',
    type: 'flat'
  };
}
export function getLatestMonthChampion(rows) {
  var latestKey = '';
  rows.forEach(row => {
    if (row.monthKey && row.monthKey > latestKey) latestKey = row.monthKey;
  });
  if (!latestKey) {
    return {
      personName: '-',
      amount: 0,
      monthText: '-'
    };
  }
  var grouped = {};
  var monthText = '-';
  rows.forEach(row => {
    if (row.monthKey !== latestKey) return;
    var name = row.personName || '未填写人员';
    grouped[name] = (grouped[name] || 0) + this.toNumber(row.amount);
    monthText = row.monthText || latestKey;
  });
  var champion = {
    personName: '-',
    amount: 0,
    monthText: monthText
  };
  Object.keys(grouped).forEach(name => {
    if (grouped[name] > champion.amount || champion.personName === '-') {
      champion.personName = name;
      champion.amount = grouped[name];
    }
  });
  return champion;
}
export function getHighestGrowth(rows) {
  var grouped = {};
  rows.forEach(row => {
    var name = row.personName || '未填写人员';
    if (!grouped[name]) grouped[name] = {};
    var monthKey = row.monthKey || '';
    grouped[name][monthKey] = (grouped[name][monthKey] || 0) + this.toNumber(row.amount);
  });
  var best = null;
  Object.keys(grouped).forEach(name => {
    var keys = Object.keys(grouped[name]).filter(key => key).sort();
    if (keys.length < 2) return;
    var current = this.toNumber(grouped[name][keys[keys.length - 1]]);
    var previous = this.toNumber(grouped[name][keys[keys.length - 2]]);
    if (previous <= 0 || current <= previous) return;
    var growth = (current - previous) / previous;
    if (!best || growth > best.growth) {
      best = {
        personName: name,
        growth: growth
      };
    }
  });
  return best;
}
export function renderRankBadge(rank) {
  var style = styles.rankBadge;
  if (rank === 1) style = this.mergeStyle(style, styles.badgeGold);
  if (rank === 2) style = this.mergeStyle(style, styles.badgeSilver);
  if (rank === 3) style = this.mergeStyle(style, styles.badgeBronze);
  return <span style={style}>{rank}</span>;
}
export function renderTrend(trend) {
  var style = styles.trendFlat;
  if (trend && trend.type === 'up') style = styles.trendUp;
  if (trend && trend.type === 'down') style = styles.trendDown;
  return <span style={style}>{trend && trend.symbol || '→'}</span>;
}
export function renderNavIcon(item) {
  var map = {
    '首页概览': '⌂',
    '数据看板': '▦',
    '市场绩效': '◎',
    '绩效排行榜': '榜',
    '绩效明细': '明',
    '数据报表': '表',
    '系统设置': '⚙'
  };
  return map[item] || '•';
}
export function renderEmpty(text) {
  return <div style={styles.empty}>{text || '暂无市场绩效数据'}</div>;
}
export function renderMetricCards(view) {
  var champion = view.latestChampion || {};
  var cards = [{
    label: '金额合计',
    value: this.formatAmount(view.totalAmount).replace(' 元', ''),
    unit: '元',
    sub: '当前筛选条件',
    icon: '¥',
    iconStyle: styles.metricIconBlue
  }, {
    label: '参与人数',
    value: view.peopleCount,
    unit: '人',
    sub: '去重人员数',
    icon: '人',
    iconStyle: styles.metricIconPurple
  }, {
    label: '记录总数',
    value: view.recordCount,
    unit: '条',
    sub: '明细记录数量',
    icon: '条',
    iconStyle: styles.metricIconCyan
  }, {
    label: '本月冠军',
    value: champion.personName || '-',
    unit: '',
    sub: this.formatAmount(champion.amount),
    icon: '冠',
    iconStyle: styles.metricIconGold
  }];
  return <div style={styles.metricGrid}>
      {cards.map(card => <div key={card.label} style={styles.metricCard}>
          <div style={this.mergeStyle(styles.metricIcon, card.iconStyle)}>
            {card.icon}
          </div>
          <div style={styles.metricContent}>
            <div style={styles.metricLabel}>{card.label}</div>
            <div style={styles.metricValue}>{card.value}<span style={styles.metricUnit}>{card.unit}</span></div>
            <div style={styles.metricSub}>{card.sub}</div>
          </div>
        </div>)}
    </div>;
}
export function renderFilters(view) {
  var self = this;
  var filters = _customState.filters || {};
  var selectedMonths = filters.months || [];
  var monthText = this.getMonthDropdownText(view, selectedMonths);
  return <div style={styles.filterCard}>
      <div style={styles.filterGrid}>
        <label style={styles.filterControl}>
          <span style={styles.fieldLabel}>月份范围</span>
          <div style={styles.monthDropdown}>
            <span style={styles.filterIcon}>▣</span>
            <button type="button" onClick={() => {
              self.toggleMonthDropdown();
            }} style={styles.monthDropdownButton}>
              <span>{monthText}</span>
              <span>⌄</span>
            </button>
            {_customState.monthDropdownOpen && <div style={styles.monthDropdownPanel}>
                <div style={styles.monthPanelActions}>
                  <button type="button" onClick={() => {
                    self.selectAllMonths(view);
                  }} style={styles.monthActionButton}>全选</button>
                  <button type="button" onClick={() => {
                    self.clearMonthSelection();
                  }} style={styles.monthActionButton}>清空</button>
                </div>
                {view.months.map(item => <label key={item.key} style={styles.monthOption}>
                    <input type="checkbox" checked={selectedMonths.indexOf(item.key) >= 0} onChange={() => {
                      self.toggleMonthSelection(item.key);
                    }} style={styles.monthCheckbox} />
                    <span>{item.text}</span>
                  </label>)}
              </div>}
          </div>
        </label>
        <label style={styles.filterControl}>
          <span style={styles.fieldLabel}>人员姓名</span>
          <span style={styles.filterIcon}>人</span>
          <select value={filters.personName || ''} onChange={e => {
          self.updateFilter('personName', e.target.value);
        }} style={this.mergeStyle(styles.select, styles.selectWithIcon)}>
            <option value="">全部人员</option>
            {view.people.map(name => <option key={name} value={name}>{name}</option>)}
          </select>
        </label>
        <label style={styles.filterControl}>
          <span style={styles.fieldLabel}>排行维度</span>
          <span style={styles.filterIcon}>▥</span>
          <select value="amount" disabled={true} style={this.mergeStyle(styles.fixedSelect, styles.selectWithIcon)}>
            <option value="amount">金额</option>
          </select>
        </label>
        <label style={styles.filterControl}>
          <span style={styles.fieldLabel}>排序方式</span>
          <span style={styles.filterIcon}>↕</span>
          <select value={filters.sortDirection || 'desc'} onChange={e => {
          self.updateFilter('sortDirection', e.target.value);
        }} style={this.mergeStyle(styles.select, styles.selectWithIcon)}>
            <option value="desc">降序</option>
            <option value="asc">升序</option>
          </select>
        </label>
      </div>
    </div>;
}
export function renderRankingTable(view) {
  if (!view.ranking.length) return this.renderEmpty();
  var visibleRows = view.ranking.slice(0, 10);
  return <div>
      <table style={styles.table}>
      <colgroup>
        <col style={{ width: '7%' }} />
        <col style={{ width: '18%' }} />
        <col style={{ width: '17%' }} />
        <col style={{ width: '12%' }} />
        <col style={{ width: '12%' }} />
        <col style={{ width: '22%' }} />
        <col style={{ width: '12%' }} />
      </colgroup>
      <thead>
        <tr>
          <th style={this.mergeStyle(styles.th, {
          width: '7%'
        })}>排名</th>
          <th style={this.mergeStyle(styles.th, { width: '18%' })}>人员</th>
          <th style={this.mergeStyle(styles.th, styles.right)}>金额（元）</th>
          <th style={this.mergeStyle(styles.th, styles.right, {
          width: '12%'
        })}>占比</th>
          <th style={this.mergeStyle(styles.th, styles.right, {
          width: '12%'
        })}>记录数</th>
          <th style={this.mergeStyle(styles.th, {
          width: '22%'
        })}>最近月份</th>
          <th style={this.mergeStyle(styles.th, {
          width: '12%'
        })}>趋势</th>
        </tr>
      </thead>
      <tbody>
        {visibleRows.map(item => <tr key={item.personName}>
            <td style={styles.td}>
              <span style={styles.rankCell}>{this.renderRankBadge(item.rank)}</span>
            </td>
            <td style={styles.td}>{item.personName}</td>
            <td style={this.mergeStyle(styles.td, styles.right, { color: '#2563eb', fontWeight: 700 })}>{this.formatAmount(item.amount).replace(' 元', '')}</td>
            <td style={this.mergeStyle(styles.td, styles.right)}>{this.formatPercent(item.percent)}</td>
            <td style={this.mergeStyle(styles.td, styles.right)}>{item.count}</td>
            <td style={styles.td}>{item.recentMonth || '-'}</td>
            <td style={styles.td}>{this.renderTrend(item.trend)}</td>
          </tr>)}
      </tbody>
    </table>
      <div style={styles.tableFooter}>
        <span>共 {view.ranking.length} 条</span>
        <div style={styles.tableFooterPages}>
          <span style={styles.pageChip}>‹</span>
          <span style={this.mergeStyle(styles.pageChip, styles.pageChipActive)}>1</span>
          <span style={styles.pageChip}>2</span>
          <span style={styles.pageChip}>›</span>
          <span style={styles.pageChip}>10条/页⌄</span>
        </div>
      </div>
    </div>;
}
export function renderElite(view) {
  var cardStyles = [styles.eliteGold, styles.eliteSilver, styles.eliteBronze];
  var medalStyles = [styles.eliteMedalGold, styles.eliteMedalSilver, styles.eliteMedalBronze];
  if (!view.top3.length) return this.renderEmpty();
  return <div style={styles.eliteBody}>
      {view.top3.map((item, index) => <div key={item.personName} style={this.mergeStyle(styles.eliteCard, cardStyles[index])}>
          <div style={this.mergeStyle(styles.eliteMedal, medalStyles[index])}>{item.rank}</div>
          <div>
            <div style={styles.eliteHead}>
            <div style={styles.eliteName}>{item.personName}</div>
            <div style={styles.eliteRank}>第 {item.rank} 名</div>
            </div>
            <div style={styles.eliteAmount}>{this.formatAmount(item.amount).replace(' 元', '')}<span style={styles.metricUnit}>元</span></div>
          </div>
          <div style={styles.eliteCup}>🏆</div>
        </div>)}
      <div style={styles.miniGrid}>
        <div style={styles.miniBlock}>
          <div style={styles.miniLabel}>本月冠军</div>
          <div style={styles.miniValue}>{view.latestChampion.personName || '-'} / {this.formatAmount(view.latestChampion.amount)}</div>
        </div>
        {view.highestGrowth && <div style={styles.miniBlock}>
            <div style={styles.miniLabel}>最高增幅</div>
            <div style={styles.miniValue}>{view.highestGrowth.personName} / {this.formatPercent(view.highestGrowth.growth)}</div>
          </div>}
      </div>
    </div>;
}
export function renderTop10Chart(view) {
  if (!view.top10.length) return this.renderEmpty();
  var maxAmount = view.top10.reduce((max, item) => Math.max(max, this.toNumber(item.amount)), 0);
  return <div style={styles.chartBody}>
      {view.top10.map((item, index) => {
      var width = maxAmount ? Math.max(4, item.amount / maxAmount * 100) : 0;
      return <div key={item.personName} style={styles.barRow}>
            <div style={styles.barRank}>{index + 1}</div>
            <div style={styles.barName}>{item.personName}</div>
            <div style={styles.barTrack}>
              <div style={this.mergeStyle(styles.barFill, {
            width: width + '%'
          })}></div>
            </div>
            <div style={styles.barValue}>{this.formatAmount(item.amount).replace(' 元', '')}</div>
          </div>;
    })}
      <div style={styles.chartAxis}>
        <div></div>
        <div style={styles.chartScale}>
          <span>0</span>
          <span>{this.formatAmount(maxAmount / 2).replace(' 元', '')}</span>
          <span>{this.formatAmount(maxAmount).replace(' 元', '')}</span>
        </div>
        <div style={this.mergeStyle(styles.barValue, { alignSelf: 'end' })}>（元）</div>
      </div>
    </div>;
}
export function renderDetailTable(view) {
  var self = this;
  return <div>
      <div style={styles.detailBody}>
        {!view.pageRows.length ? this.renderEmpty() : <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>年月</th>
                <th style={styles.th}>人员</th>
                <th style={this.mergeStyle(styles.th, styles.right)}>金额（元）</th>
              </tr>
            </thead>
            <tbody>
              {view.pageRows.map((row, index) => <tr key={row.id + '-' + index}>
                  <td style={styles.td}>{row.monthText || '-'}</td>
                  <td style={styles.td}>{row.personName || '未填写人员'}</td>
                  <td style={this.mergeStyle(styles.td, styles.right)}>{this.formatAmount(row.amount).replace(' 元', '')}</td>
                </tr>)}
            </tbody>
          </table>}
      </div>
      <div style={styles.pager}>
        <button disabled={view.currentPage <= 1} onClick={() => {
        self.changePage(-1);
      }} style={view.currentPage <= 1 ? styles.pageButtonDisabled : styles.pageButton}>上一页</button>
        <span style={styles.pageText}>第 {view.currentPage} / {view.totalPages} 页</span>
        <button disabled={view.currentPage >= view.totalPages} onClick={() => {
        self.changePage(1);
      }} style={view.currentPage >= view.totalPages ? styles.pageButtonDisabled : styles.pageButton}>下一页</button>
      </div>
    </div>;
}
export function renderJsx() {
  var self = this;
  var view = this.getMarketView();
  return <div style={styles.page}><div style={{
      display: "none"
    }}>{this.state && this.state.timestamp}</div>
      <main style={styles.main}>
        <header style={styles.header}>
          <div>
            <div style={styles.title}>市场绩效排行榜</div>
            <div style={styles.subtitle}>按月份、人员、金额展示市场绩效排名与趋势</div>
          </div>
          <div style={styles.actions}>
            <button onClick={() => {
              self.loadMarketPerformanceData();
            }} style={styles.primaryButton}><span>↻</span><span>{_customState.loading ? '刷新中' : '刷新数据'}</span></button>
            <button onClick={() => {
              self.exportData(view);
            }} style={styles.disabledButton}><span>⇩</span><span>导出数据</span></button>
          </div>
        </header>
        {_customState.loading && <div style={styles.loading}>正在加载市场绩效数据...</div>}
        {_customState.error && <div style={styles.error}>{_customState.error}</div>}
        {this.renderFilters(view)}
        {this.renderMetricCards(view)}
        <section style={styles.gridMain}>
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <div style={styles.cardTitle}>人员排行榜</div>
              <div style={styles.cardMeta}>按金额汇总</div>
            </div>
            {this.renderRankingTable(view)}
          </div>
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <div style={styles.cardTitle}>TOP 3 精英榜</div>
              <div style={styles.cardMeta}>与排行榜同步</div>
            </div>
            {this.renderElite(view)}
          </div>
        </section>
        <section style={styles.gridBottom}>
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <div style={styles.cardTitle}>TOP10 金额排行</div>
              <div style={styles.cardMeta}>横向柱状图</div>
            </div>
            {this.renderTop10Chart(view)}
          </div>
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <div style={styles.cardTitle}>绩效明细</div>
              <div style={styles.cardMeta}>{view.recordCount} 条</div>
            </div>
            {this.renderDetailTable(view)}
          </div>
        </section>
      </main>
    </div>;
}
export function didUnmount() {}
