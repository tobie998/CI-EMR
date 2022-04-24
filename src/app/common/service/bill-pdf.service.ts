import { DatePipe } from "@angular/common";
import { Injectable } from "@angular/core";
import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
declare var jsPDF: any;

@Injectable({
  providedIn: "root",
})
export class BillPdfService {
  constructor(public datepipe: DatePipe) {}
  /**
   *
   * @param FullName patient detail
   * @param PatientId patient detail
   * @param CreatedOn createdon bll
   * @param payerName payer name
   * @param payerPhone payer phone
   * @param payerAddress payer address
   * @param billInvoice bill Invoice
   * @param isBill from bill
   */
  createPDF(
    FullName,
    PatientId,
    CreatedOn,
    payerName,
    payerPhone,
    payerAddress,
    billInvoice,
    isBill?
  ) {
    const company = JSON.parse(localStorage.getItem("company"));
    if (company.MediaURL) {
      var prefixURL =
        "https://calm-harbor-94527.herokuapp.com/images/?output=image&path=";
      let herf = this;
      this.getBase64ImageUrl(
        prefixURL + company.MediaURL,
        function (imgAva) {
          herf.html(
            company,
            FullName,
            PatientId,
            CreatedOn,
            payerName,
            payerPhone,
            payerAddress,
            billInvoice,
            isBill
          );

          htmlToImage
            .toPng(document.getElementById("ccs1"))
            .then(function (dataUrl) {
              console.log(dataUrl);
              var doc = new jsPDF();
              var img = new Image();
              doc.output("datauri");
              doc.addImage(imgAva, "JPEG", 10, 30, 50, 50);
              img.src = dataUrl;
              doc.addImage(img, "png", 10, 0);
              doc.save("bill.pdf");
            });
        }
      );
    } else {
      this.html(
        company,
        FullName,
        PatientId,
        CreatedOn,
        payerName,
        payerPhone,
        payerAddress,
        billInvoice,
        isBill
      );

      htmlToImage
        .toPng(document.getElementById("ccs1"))
        .then(function (dataUrl) {
          console.log(dataUrl);
          var doc = new jsPDF();
          var img = new Image();
          img.src = dataUrl;
          doc.addImage(img, "png", 10, 0);
          doc.save("bill.pdf");
        });
    }
  }
  html(
    company,
    FullName,
    PatientId,
    CreatedOn,
    payerName,
    payerPhone,
    payerAddress,
    billInvoice,
    isBill
  ) {
    let string1 = `<div style="padding: 10px; width: 375px;">
    <p style="color: #4d4d4d;font-size: 12px;font-weight: bold;padding-top: 0.5em;">Medical bill</p>
    <p style="color: #4d4d4d;font-size: 8px;font-weight: bold;margin-top: 0.5em;">Company information</p>
    <div style="display: flex;color: #707070;font-size: 10px; margin-top: 0.5em;">
        <div style="width: 33.3333%;">
            <div style="display: inline-block;width: 100%;height: 100px;"></div>
        </div>
        <div style="width: 66.6666%;padding-left: 20px;">
            <div style="display: flex;height: 18px;">
                <div style="width: 50%;">Company Name:</div>
                <div style="width: 50%;">${company.TradeName}</div>
            </div>
            <div style="display: flex;height: 18px;">
                <div style="width: 50%;">Address:</div>
                <div style="width: 50%;">${company.AddressLine1}</div>
            </div>
        </div>
    </div>
    <p style="color: #4d4d4d;font-size: 8px;font-weight: bold;margin-top: 0.5em;">Client's information</p>
    <div style="display: flex;align-items: center;color: #707070;font-size: 8px; margin-top: 0.5em;">
        <div style="width: 25%;">Patient Name:</div>
        <div style="width: 25%;">${FullName}</div>
        <div style="width: 25%;">Bill date:</div>
        <div style="width: 25%;">${
          CreatedOn ? this.datepipe.transform(CreatedOn, "MM/dd/yyyy") : ""
        }</div>
    </div>
    <div style="display: flex;align-items: center;color: #707070;font-size: 8px; margin-top: 0.5em;">
        <div style="width: 25%;">Patient ID:</div>
        <div style="width: 25%;">${PatientId}</div>
        <div style="width: 25%;">Time:</div>
        <div style="width: 25%;">${
          CreatedOn ? this.datepipe.transform(CreatedOn, "hh:mm aa") : ""
        }</div>
    </div>`
    let string5 = 
    `<hr style="margin: 0.5rem auto; background: #707070; max-width: 90%;">
    <p style="color: #4d4d4d;font-size: 8px;font-weight: bold;margin-top: 0.5em;">Payment information</p>
    <div style="display: flex;align-items: center;color: #707070;font-size: 8px; margin-top: 0.5em;">
        <div style="width: 25%;">Payer name:</div>
        <div style="width: 75%;"><span>${payerName}</span></div>
    </div>
    <div style="display: flex;align-items: center;color: #707070;font-size: 8px; margin-top: 0.5em;">
        <div style="width: 25%;">Payer Phone:</div>
        <div style="width: 75%;"><span>${payerPhone}</span></div>
    </div>
    <div style="display: flex;align-items: center;color: #707070;font-size: 8px; margin-top: 0.5em;">
        <div style="width: 25%;">Payer Address:</div>
        <div style="width: 75%;"><span>${payerAddress}</span></div>
    </div>`;
    let string6 =`
     <hr style="margin: 0.5rem auto; background: #707070; max-width: 90%;">
    <table style="text-align: center;border-collapse: 1px;width: 100%" >
        <tr style="background-color: #9fb9c8;font-size: 7px;color: white;text-align: center !important;font-weight: 200 !important;height: 18px;">
            <td style="width: 150px;border-top-left-radius: 15px;border-bottom-left-radius: 15px;">No.</td>
            <td style="width: 315px;">Invoice</td>
            <td style="width: 425px;border-top-right-radius: 15px;border-bottom-right-radius: 15px;">Amount</td>
        </tr>`;
        let string2 = "";
        let string3 =   `
    </table>
</div>`;
    const b = document.getElementById("ccs1");
    billInvoice.forEach((x, index) => {
      string2 = string2 +  `<tr style="font-size: 7px;color: rgba(0,0,0,.87);height: 35px;">
      <td>${index + 1}</td>
      <td>${x.InvoiceId}</td>
      <td>${x.Amount ? x.Amount : x.Price}</td>
  </tr>
  `;
    });
    if (isBill !== true) {
      string5 = '';
    }
    let stringSUb = string1 + string5 + string6 + string2 + string3;
    console.log(stringSUb);
    
    b.innerHTML = stringSUb;
  }

  setPdf(
    doc,
    company,
    FullName,
    PatientId,
    CreatedOn,
    payerName,
    payerPhone,
    payerAddress,
    billInvoice,
    isBill?
  ) {
    doc.setFont("Times-Roman");
    let index = 10;
    doc.setTextColor(0);
    doc.setFontSize(24);
    doc.setFontType("bold");
    doc.text(10, 10, "Medical bill");
    doc.setFontSize(16);
    doc.text(10, 20, "Company information");
    doc.setFontType("normal");
    doc.text(70, 30, "Company Name:");
    doc.text(
      120,
      30,
      company.TradeName ? decodeURIComponent(company.TradeName) : ""
    );
    doc.text(70, 40, "Address:");
    doc.text(120, 40, company.AddressLine1 ? company.AddressLine1 : "");
    doc.setFontType("bold");
    doc.setFontSize(16);
    doc.text(10, 90, "Client's information");
    doc.setFontType("normal");
    doc.text(10, 100, "Patient Name:");
    doc.text(60, 100, FullName ? decodeURIComponent(FullName) : "");
    doc.text(100, 100, "Bill date:");
    doc.text(
      140,
      100,
      CreatedOn ? this.datepipe.transform(CreatedOn, "MM/dd/yyyy") : ""
    );
    doc.text(10, 110, "Patient ID:");
    doc.text(60, 110, PatientId ? PatientId.toString() : "");
    doc.text(100, 110, "Time:");
    doc.text(
      140,
      110,
      CreatedOn ? this.datepipe.transform(CreatedOn, "hh:mm aa") : ""
    );
    doc.line(60, 120, 180, 120);
    if (isBill === true) {
      doc.setFontType("bold");
      doc.setFontSize(16);
      doc.text(10, 130, "Payment information");
      doc.setFontType("normal");
      doc.text(10, 140, "Payer Name");
      doc.text(60, 140, payerName ? payerName : "");
      doc.text(10, 150, "Payer Phone");
      doc.text(60, 150, payerPhone ? payerPhone : "");
      doc.text(10, 160, "Payer Address");
      doc.text(60, 160, payerAddress ? payerAddress : "");
      doc.line(60, 170, 180, 170);
      index = 50;
    }

    var headers = [
      {
        id: "NO",
        name: "NO.",
        prompt: "NO.",
        width: 40,
        align: "center",
        padding: 0,
      },
      {
        id: "Invoice",
        name: "Invoice",
        prompt: "Invoice",
        width: 65,
        align: "center",
        padding: 0,
      },
      {
        id: "Amount",
        name: "Amount",
        prompt: "Amount",
        width: 125,
        align: "center",
        padding: 0,
      },
    ];
    let bill = billInvoice.map((x, index) => {
      return {
        "NO.": index + 1,
        Invoice: x.InvoiceId,
        Amount: x.Amount ? x.Amount : x.Price,
      };
    });
    doc.table(10, index + 60 + 70, bill, headers);
    doc.save("bill.pdf");
  }

  getBase64ImageUrl(url, callback, mine?) {
    var img = new Image();

    url = url.replace("http://", "//");

    img.setAttribute("crossOrigin", "anonymous");
    img.src = url;

    img.onload = function () {
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      var dataURL = canvas.toDataURL(mine || "image/jpeg");

      callback(dataURL);
    };

    img.onerror = function () {
      console.log("on error");
      callback("");
    };
  }
}
