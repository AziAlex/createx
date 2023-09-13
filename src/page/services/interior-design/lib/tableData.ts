const tableData = {
  tableHeader: [
    { title: 'Items', style: 'small' },
    { title: 'BASIC', subtitle: '$20 per m2' },
    { title: 'STANDARD', subtitle: '$30 per m2' },
    { title: 'BUSINESS', subtitle: '$40 per m2' },
  ],
  tableBody: [
    [
      { type: 'title', body: 'Installation plan' },
      { type: 'img', body: 'okMark' },
      { type: 'img', body: 'okMark' },
      { type: 'img', body: 'okMark' },
    ],
    [
      { type: 'title', body: 'Planning solutions (2-3 options)' },
      { type: 'img', body: 'okMark' },
      { type: 'img', body: 'okMark' },
      { type: 'img', body: 'okMark' },
    ],
    [
      { type: 'title', body: 'Lighting plan' },
      { type: 'img', body: 'okMark' },
      { type: 'img', body: 'okMark' },
      { type: 'img', body: 'okMark' },
    ],
    [
      { type: 'title', body: 'Flooring plan' },
      { type: 'img', body: 'okMark' },
      { type: 'img', body: 'okMark' },
      { type: 'img', body: 'okMark' },
    ],
    [
      { type: 'title', body: 'Heating floor laying scheme' },
      { type: 'img', body: 'okMark' },
      { type: 'img', body: 'okMark' },
      { type: 'img', body: 'okMark' },
    ],
    [
      { type: 'title', body: 'Air conditioner zones layout' },
      { type: 'img', body: 'okMark' },
      { type: 'img', body: 'okMark' },
      { type: 'img', body: 'okMark' },
    ],
    [
      { type: 'title', body: '3D visualization of all rooms' },
      { type: 'text', body: 'Simplified' },
      { type: 'img', body: 'okMark' },
      { type: 'img', body: 'okMark' },
    ],
    [
      { type: 'title', body: 'Visualization of each room (3-4 angles)' },
      { type: 'img', body: 'okMark' },
      { type: 'img', body: 'okMark' },
      { type: 'img', body: 'okMark' },
    ],
    [
      { type: 'title', body: 'Terms' },
      { type: 'text', body: '10 days' },
      { type: 'text', body: '20 days' },
      { type: 'text', body: '30 days' },
    ],
  ],
  tableFooter: [
    [
      { type: 'empty', body: '' },
      { type: 'button', body: '10 days', action: 'onClick={() => console.log("work"))}' },
      { type: 'text', body: '20 days', action: 'onClick={() => console.log("work"))}' },
      { type: 'text', body: '30 days', action: 'onClick={() => console.log("work"))}' },
    ],
  ],
}