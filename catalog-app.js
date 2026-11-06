(() => {
  'use strict';
  const icons = {
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    layers: '<path d="m12 3 10 6-10 6L2 9l10-6ZM3 14l9 5 9-5M3 19l9 5 9-5"/>',
    box: '<path d="m12 3 9 5v9l-9 5-9-5V8l9-5ZM3 8l9 5 9-5M12 13v9M7 5l9 5"/>',
    flag: '<path d="M5 22V3c5-4 9 4 14 0v11c-5 4-9-4-14 0"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
    spark: '<path d="m13 3 2.2 6.8L22 12l-6.8 2.2L13 21l-2.2-6.8L4 12l6.8-2.2L13 3ZM4 2v4M2 4h4"/>',
    arrow: '<path d="M5 12h14m-5-5 5 5-5 5"/>',
    close: '<path d="m6 6 12 12M6 18 18 6"/>',
    file: '<path d="M14 2H5v20h14V7l-5-5ZM14 2v5h5M8 12h8M8 16h8"/>',
    alert: '<path d="m12 3 10 18H2L12 3ZM12 9v5M12 17h.01"/>',
    cursor: '<path d="m4 3 16 9-8 2-4 8-4-19Z"/>',
    undo: '<path d="M9 5 4 10l5 5M4 10h10a6 6 0 0 1 0 12"/>'
  };
  const icon = name => `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[name] || icons.box}</svg>`;
  const $ = id => document.getElementById(id);
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  document.querySelectorAll('[data-icon]').forEach(el => { el.innerHTML = icon(el.dataset.icon); });

  const initialProducts = [
    {id:'CD-1042',name:'Arc ceramic mug',art:'mug',status:'needs',issue:'Title & description',title:'Mug 14 green',material:'',description:'Green mug.',facts:[['Material','Stoneware'],['Capacity','350 ml'],['Finish','Matte moss glaze'],['Care','Dishwasher safe']],draft:{title:'Arc stoneware mug · Moss',material:'Stoneware',description:'A 350 ml stoneware mug finished in a matte moss glaze. A simple everyday piece for your kitchen or desk. Dishwasher safe.'}},
    {id:'CD-1043',name:'Canvas weekender',art:'bag',status:'needs',issue:'Unverified material',title:'Canvas weekender · Sand',material:'',description:'A sand-coloured weekend bag with an inside pocket.',facts:[['Material','Not provided'],['Dimensions','48 × 28 × 22 cm'],['Colour','Sand'],['Features','Inside zip pocket']],missing:true,draft:{title:'Weekender bag · Sand',material:'',description:'A sand-coloured weekender bag measuring 48 × 28 × 22 cm, with an inside zip pocket to keep smaller essentials together.'}},
    {id:'CD-1044',name:'Pillar table lamp',art:'lamp',status:'needs',issue:'Incomplete description',title:'Pillar table lamp',material:'Powder-coated steel',description:'A table lamp.',facts:[['Material','Powder-coated steel'],['Height','32 cm'],['Colour','Oat'],['Light fitting','E27 · bulb not included']],draft:{title:'Pillar steel table lamp · Oat',material:'Powder-coated steel',description:'A 32 cm table lamp in oat powder-coated steel. Uses an E27 bulb, sold separately. A compact light for a shelf or bedside table.'}},
    {id:'CD-1045',name:'Trail water bottle',art:'bottle',status:'reviewed',issue:'No open issues',title:'Trail steel water bottle · Slate',material:'Stainless steel',description:'A 600 ml stainless steel bottle in slate blue with a screw-top lid. Hand wash only.',facts:[['Material','Stainless steel'],['Capacity','600 ml'],['Colour','Slate blue'],['Care','Hand wash only']],draft:{title:'Trail steel water bottle · Slate',material:'Stainless steel',description:'A 600 ml stainless steel bottle in slate blue with a screw-top lid. Hand wash only.'}},
    {id:'CD-1046',name:'Waffle hand towel',art:'towel',status:'needs',issue:'Material missing',title:'Waffle hand towel · Clay',material:'',description:'A waffle hand towel in clay.',facts:[['Material','100% cotton'],['Dimensions','50 × 70 cm'],['Colour','Clay'],['Care','Machine wash at 40°C']],draft:{title:'Cotton waffle hand towel · Clay',material:'100% cotton',description:'A soft 100% cotton waffle hand towel in clay, sized 50 × 70 cm. Machine washable at 40°C.'}},
    {id:'CD-1047',name:'Oval serving tray',art:'tray',status:'waiting',issue:'Supplier confirmation',title:'Oval serving tray · Natural',material:'',description:'An oval serving tray with a natural finish.',facts:[['Material','Awaiting supplier confirmation'],['Dimensions','28 × 18 cm'],['Finish','Natural'],['Care','Not provided']],missing:true,draft:{title:'Oval serving tray · Natural',material:'',description:'An oval serving tray measuring 28 × 18 cm, with a natural finish. Composition and care details await supplier confirmation.'}},
    {id:'CD-1048',name:'Field notebook',art:'notebook',status:'reviewed',issue:'No open issues',title:'Field A5 notebook · Plum',material:'Recycled paper',description:'An A5 notebook with 120 ruled pages of recycled paper and a plum soft cover.',facts:[['Paper','Recycled paper'],['Size','A5'],['Pages','120 · ruled'],['Cover','Plum soft cover']],draft:{title:'Field A5 notebook · Plum',material:'Recycled paper',description:'An A5 notebook with 120 ruled pages of recycled paper and a plum soft cover.'}}
  ];
  const clone = value => JSON.parse(JSON.stringify(value));
  let products = clone(initialProducts);
  let filter = 'all';
  let query = '';
  let activeProduct = null;
  let lastTrigger = null;
  let undoAction = null;
  let activity = [];
  const statusLabels = {needs:'Needs review',reviewed:'Reviewed',waiting:'Waiting for info'};

  function renderProducts() {
    const counts = {total:products.length,needs:0,reviewed:0,waiting:0};
    products.forEach(p => counts[p.status]++);
    Object.entries(counts).forEach(([key,value]) => { $(`count-${key}`).textContent = value; });
    $('nav-count').textContent = counts.needs;
    const visible = products.filter(p => (filter === 'all' || p.status === filter) && `${p.name} ${p.id} ${p.title}`.toLowerCase().includes(query.toLowerCase()));
    $('visible-count').textContent = visible.length;
    $('product-rows').innerHTML = visible.map(p => `<tr><td><div class="product-cell"><span class="product-art ${p.art}" aria-hidden="true"></span><div><span class="product-name">${escape(p.name)}</span><span class="sku">${p.id}</span></div></div></td><td><span class="issue-label ${p.status === 'reviewed' ? 'neutral' : ''}">${escape(p.status === 'reviewed' ? 'No open issues' : p.issue)}</span></td><td><span class="badge ${p.status}">${statusLabels[p.status]}</span></td><td><button class="row-action" type="button" data-review="${p.id}" aria-label="${p.status === 'reviewed' ? 'View' : 'Review'} ${escape(p.name)}">${p.status === 'reviewed' ? 'View' : 'Review'}${icon('arrow')}</button></td></tr>`).join('');
    $('empty-state').hidden = visible.length > 0;
    document.querySelector('.table-wrap').hidden = !visible.length;
    $('queue-summary').textContent = `Showing ${visible.length} of ${products.length} products`;
  }

  function setFilter(next) {
    filter = next;
    document.querySelectorAll('[data-filter]').forEach(button => { const selected = button.dataset.filter === next; button.classList.toggle('active',selected); button.setAttribute('aria-pressed',String(selected)); });
    renderProducts();
  }

  function switchView(view) {
    $('queue-view').hidden = view !== 'queue';
    $('activity-view').hidden = view !== 'activity';
    $('breadcrumb-label').textContent = view === 'queue' ? 'Review queue' : 'Activity';
    document.querySelectorAll('[data-view]').forEach(button => { const selected = button.dataset.view === view; button.classList.toggle('active',selected); if (selected) button.setAttribute('aria-current','page'); else button.removeAttribute('aria-current'); });
    if (view === 'activity') renderActivity();
  }

  function renderActivity() {
    $('activity-list').innerHTML = activity.length ? activity.map(item => `<article class="activity-item"><span>${icon(item.kind === 'undo' ? 'undo' : item.kind === 'waiting' ? 'clock' : 'check')}</span><div><strong>${escape(item.title)}</strong><p>${escape(item.detail)} · Sample reviewer Alex Morgan</p></div><time datetime="${item.time.toISOString()}">${item.time.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}</time></article>`).join('') : '<div class="activity-empty"><strong>No decisions yet</strong><p>Review a product to see your actions here. This history is limited to this demo session.</p></div>';
  }

  function addActivity(kind,title,detail) { activity.unshift({kind,title,detail,time:new Date()}); renderActivity(); }

  function resetErrors() {
    ['title','material','description'].forEach(key => { $(`edit-${key}`).removeAttribute('aria-invalid'); $(`${key}-error`).hidden = true; });
    $('confirm-error').hidden = true;
    $('confirm-facts').removeAttribute('aria-invalid');
    $('save-error').hidden = true;
  }

  function openReview(id,trigger) {
    activeProduct = products.find(p => p.id === id);
    lastTrigger = trigger;
    const p = activeProduct;
    $('review-title').textContent = p.name;
    $('detail-sku').textContent = `${p.id} / Everyday collection`;
    $('detail-thumb').className = `product-art ${p.art}`;
    $('detail-thumb').setAttribute('aria-hidden','true');
    $('detail-badges').innerHTML = `<span class="badge ${p.status}">${statusLabels[p.status]}</span>`;
    $('source-facts').innerHTML = p.facts.map(([key,value]) => `<div><dt>${escape(key)}</dt><dd>${escape(value)}</dd></div>`).join('');
    $('source-warning').hidden = !p.missing;
    $('draft-evidence').textContent = p.missing ? 'Missing evidence' : 'Source-backed draft';
    $('draft-evidence').className = `badge ${p.missing ? 'needs' : 'reviewed'}`;
    $('draft-description').textContent = p.missing ? 'The description can use the known dimensions and colour. Material stays empty until the supplier confirms it.' : 'A clearer title and description, using the sample supplier facts above. Check every detail before saving.';
    $('draft-title').textContent = p.draft.title;
    ['title','material','description'].forEach(key => { $(`edit-${key}`).value = p[key]; });
    $('confirm-facts').checked = false;
    $('fail-next-save').checked = false;
    $('request-info').disabled = p.status === 'waiting';
    $('request-info').textContent = p.status === 'waiting' ? 'Information requested' : 'Request information';
    $('save-review').disabled = false;
    resetErrors();
    $('review-dialog').showModal();
    document.querySelector('.drawer-body').scrollTop = 0;
    document.body.style.overflow = 'hidden';
  }

  function focusReviewReturn(id = activeProduct?.id) {
    const rowButton = id && document.querySelector(`[data-review="${id}"]`);
    if (rowButton) rowButton.focus();
    else $('main').focus();
  }

  function closeReview() {
    $('review-dialog').close();
    focusReviewReturn();
  }
  function showToast(message,undo = null) {
    undoAction = undo;
    $('toast-text').textContent = message;
    $('toast-undo').hidden = !undo;
    $('toast').hidden = false;
  }

  function validateReview() {
    resetErrors();
    const values = {title:$('edit-title').value.trim(),material:$('edit-material').value.trim(),description:$('edit-description').value.trim()};
    let firstInvalid = null;
    const fail = (key,message) => { const input = $(`edit-${key}`); input.setAttribute('aria-invalid','true'); $(`${key}-error`).textContent = message; $(`${key}-error`).hidden = false; firstInvalid ||= input; };
    if (values.title.length < 3) fail('title','Enter a product title with at least 3 characters.');
    if (!values.material) fail('material',activeProduct.missing ? 'Material is not verified. Request information or enter a supplier-confirmed value.' : 'Enter the verified material from the source facts.');
    if (values.description.length < 20) fail('description','Add a useful description of at least 20 characters.');
    if (!$('confirm-facts').checked) { $('confirm-error').textContent = 'Confirm you checked the source facts before saving.'; $('confirm-error').hidden = false; $('confirm-facts').setAttribute('aria-invalid','true'); firstInvalid ||= $('confirm-facts'); }
    if (firstInvalid) { firstInvalid.focus(); return null; }
    return values;
  }

  function saveReview(event) {
    if (event) event.preventDefault();
    const values = validateReview();
    if (!values) return;
    if ($('fail-next-save').checked) { $('fail-next-save').checked = false; $('save-error').hidden = false; $('retry-save').focus(); return; }
    const before = clone(activeProduct);
    Object.assign(activeProduct,values,{status:'reviewed',issue:'No open issues'});
    const id = activeProduct.id;
    const name = activeProduct.name;
    addActivity('reviewed',`Reviewed ${name}`,`${id} · Saved checked title, material and description`);
    renderProducts();
    closeReview();
    showToast(`${name} marked as reviewed.`, () => undoProduct(id,before));
  }

  function undoProduct(id,before) {
    products[products.findIndex(p => p.id === id)] = clone(before);
    addActivity('undo',`Undid review for ${before.name}`,`${id} · Previous product state restored`);
    renderProducts();
    showToast(`Previous version restored for ${before.name}.`);
    focusReviewReturn(id);
  }

  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click',() => setFilter(button.dataset.filter)));
  document.querySelectorAll('[data-view]').forEach(button => button.addEventListener('click',() => switchView(button.dataset.view)));
  $('product-search').addEventListener('input',event => { query = event.target.value; renderProducts(); });
  $('clear-filters').addEventListener('click',() => { query = ''; $('product-search').value = ''; setFilter('all'); $('product-search').focus(); });
  $('product-rows').addEventListener('click',event => { const button = event.target.closest('[data-review]'); if (button) openReview(button.dataset.review,button); });
  $('close-review').addEventListener('click',closeReview);
  $('review-dialog').addEventListener('click',event => { if (event.target === $('review-dialog')) { const rect = $('review-dialog').getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeReview(); } });
  $('review-dialog').addEventListener('close',() => {
    document.body.style.overflow = '';
    focusReviewReturn();
  });
  $('apply-draft').addEventListener('click',() => {
    ['title','material','description'].forEach(key => { $(`edit-${key}`).value = activeProduct.draft[key]; });
    $('confirm-facts').checked = false;
    resetErrors();
    $('edit-title').focus();
    const original = $('apply-draft').innerHTML;
    $('apply-draft').innerHTML = `Draft applied ${icon('check')}`;
    setTimeout(() => { $('apply-draft').innerHTML = original; },1800);
  });
  $('review-form').addEventListener('submit',saveReview);
  $('retry-save').addEventListener('click',saveReview);
  $('request-info').addEventListener('click',() => {
    const before = clone(activeProduct);
    const id = activeProduct.id;
    const name = activeProduct.name;
    activeProduct.status = 'waiting'; activeProduct.issue = 'Supplier confirmation';
    addActivity('waiting',`Requested information for ${name}`,`${id} · Sample supplier request recorded; no message was sent`);
    renderProducts(); closeReview();
    showToast(`${name} moved to Waiting for info.`,() => undoProduct(id,before));
  });
  $('toast-undo').addEventListener('click',() => { const action = undoAction; undoAction = null; if (action) action(); });
  $('toast-close').addEventListener('click',() => { $('toast').hidden = true; undoAction = null; });
  $('reset-demo').addEventListener('click',() => { products = clone(initialProducts); activity = []; query = ''; $('product-search').value = ''; setFilter('all'); switchView('queue'); showToast('Demo reset. All sample products restored.'); });
  renderProducts();
  renderActivity();
})();
