import { OFFICIAL_PRICE_LIST, CATEGORY_LABELS } from '../data/priceListData';
import { STORE_INFO } from '../data/storeData';

export function downloadPriceListCSV() {
  const categoryNames: Record<string, string> = {
    notebooks: 'Notebooks & Registers',
    pens: 'Pens, Pencils & Inks',
    paper: 'Paper, Double A & Files',
    boxes: 'Pouches, Bags & Kits',
    art: 'Art, Colors & Craft',
    adhesives: 'Adhesives, Tapes & Rolls',
    tools: 'Scales & Geometry Tools',
    electrical: 'Calculators & Hardware',
  };

  const headerLines = [
    `"MANI STATIONERY - OFFICIAL PRODUCT PRICE LIST (164 ITEMS)"`,
    `"Proprietor: ${STORE_INFO.ownerName}"`,
    `"Phone: ${STORE_INFO.formattedPhone} | WhatsApp: +${STORE_INFO.whatsappNumber}"`,
    `"Location: ${STORE_INFO.address.fullText}"`,
    `"Store Hours: ${STORE_INFO.operatingHours.weekdays} | Sunday: ${STORE_INFO.operatingHours.sunday}"`,
    `""`,
    `"S.No","Item Name","Category","Price (INR)","Unit"`
  ];

  const rows = OFFICIAL_PRICE_LIST.map((item) => {
    const cat = categoryNames[item.category] || item.category;
    const unit = item.unit || 'Per Piece';
    return `${item.sNo},"${item.name.replace(/"/g, '""')}","${cat}",${item.price},"${unit}"`;
  });

  const csvContent = "\uFEFF" + [...headerLines, ...rows].join("\r\n");
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', 'Mani_Stationery_Price_List_164_Items.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function printOrSavePriceListPDF() {
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert('Please allow popups to print/save the price list.');
    return;
  }

  const categoryNames: Record<string, string> = {
    notebooks: 'Notebooks & Registers',
    pens: 'Pens, Pencils & Inks',
    paper: 'Paper, Double A & Files',
    boxes: 'Pouches, Bags & Kits',
    art: 'Art, Colors & Craft',
    adhesives: 'Adhesives, Tapes & Rolls',
    tools: 'Scales & Geometry Tools',
    electrical: 'Calculators & Hardware',
  };

  const rowsHtml = OFFICIAL_PRICE_LIST.map((item) => `
    <tr>
      <td style="padding: 6px 10px; border-bottom: 1px solid #e2e8f0; text-align: center; font-family: monospace; font-size: 11px;">${item.sNo}</td>
      <td style="padding: 6px 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; font-size: 12px;">${item.name}</td>
      <td style="padding: 6px 10px; border-bottom: 1px solid #e2e8f0; font-size: 11px; color: #475569;">${categoryNames[item.category] || item.category}</td>
      <td style="padding: 6px 10px; border-bottom: 1px solid #e2e8f0; text-align: right; font-weight: 800; font-size: 12px; color: #b45309;">₹${item.price}</td>
      <td style="padding: 6px 10px; border-bottom: 1px solid #e2e8f0; text-align: center; font-size: 10px; color: #64748b;">${item.unit || 'Per Pc'}</td>
    </tr>
  `).join('');

  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Mani Stationery - Official Price List (164 Items)</title>
        <meta charset="utf-8">
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            margin: 20px 30px;
            color: #0f172a;
          }
          .header {
            text-align: center;
            border-bottom: 2px solid #e05a2b;
            padding-bottom: 14px;
            margin-bottom: 16px;
          }
          .header h1 {
            font-size: 24px;
            font-weight: 900;
            margin: 0;
            color: #4e2d1d;
            letter-spacing: 1px;
          }
          .header p {
            margin: 4px 0;
            font-size: 12px;
            color: #334155;
          }
          .badge {
            display: inline-block;
            background: #dbeafe;
            color: #1e40af;
            padding: 3px 10px;
            border-radius: 9999px;
            font-size: 11px;
            font-weight: bold;
            margin-top: 4px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
          }
          th {
            background-color: #f8fafc;
            padding: 8px 10px;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            border-bottom: 2px solid #cbd5e1;
            color: #334155;
          }
          @media print {
            body { margin: 10mm; }
            button { display: none; }
          }
        </style>
      </head>
      <body>
        <div style="text-align: right; margin-bottom: 10px;">
          <button onclick="window.print()" style="background: #e05a2b; color: white; border: none; padding: 8px 18px; border-radius: 8px; font-weight: bold; cursor: pointer;">
            Print / Save as PDF
          </button>
        </div>
        <div class="header">
          <h1>MANI STATIONERY</h1>
          <p><strong>Proprietor: ${STORE_INFO.ownerName}</strong> &bull; Phone: ${STORE_INFO.formattedPhone}</p>
          <p>${STORE_INFO.address.fullText}</p>
          <span class="badge">Official Dealer: AA Double A4 Paper (80 & 70 GSM) &bull; Instant Xerox Service</span>
        </div>
        <table>
          <thead>
            <tr>
              <th style="width: 50px; text-align: center;">S.No</th>
              <th style="text-align: left;">Item Description</th>
              <th style="text-align: left;">Category</th>
              <th style="text-align: right; width: 100px;">Price</th>
              <th style="width: 80px; text-align: center;">Unit</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </body>
    </html>
  `);

  printWindow.document.close();
}
