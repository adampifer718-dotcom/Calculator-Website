import type { CalcCommonText } from "./en";

/** Urdu shared calculator strings, translated from en.ts. */
const ur: CalcCommonText = {
  validation: {
    required: "{labelLower} درج کریں۔",
    invalidNumber: "درست عدد درج کریں، مثلاً {example}۔",
    tooLarge: "چھوٹا عدد درج کریں۔",
    wholeNumber: "مکمل عدد درج کریں۔",
    greaterThan: "قدر {bound} سے زیادہ ہونی چاہیے۔",
    atLeast: "قدر کم از کم {bound} ہونی چاہیے۔",
    atMost: "قدر {bound} سے زیادہ نہیں ہونی چاہیے۔",
    choose: "{labelLower} منتخب کریں۔",
    invalidDate: "درست تاریخ درج کریں۔",
    dateAtLeast: "{bound} یا اس کے بعد کی تاریخ ہونی چاہیے۔",
    dateAtMost: "{bound} یا اس سے پہلے کی تاریخ ہونی چاہیے۔",
    notFinite: "ان اندراجات سے کوئی محدود نتیجہ حاصل نہیں ہوتا۔ اقدار چیک کر کے دوبارہ کوشش کریں۔",
  },
  optional: "اختیاری",
  currency: {
    label: "کرنسی",
    help: "رقوم دکھانے کا انداز بدلتا ہے۔ شرحِ تبادلہ کے مطابق کوئی تبدیلی نہیں کی جاتی۔",
  },
  units: {
    hours: "گھنٹے",
    days: "دن",
    weeks: "ہفتے",
    years: "سال",
    people: "افراد",
    h: "گھنٹے",
    min: "منٹ",
    s: "سیکنڈ",
  },
  schedule: {
    hoursPerWeek: "ہفتہ وار گھنٹے",
    hoursPerWeekHelp: "ایک عام ہفتے میں ادا شدہ گھنٹے۔",
    daysPerWeek: "ہفتے میں کام کے دن",
    daysPerWeekHelp: "یومیہ مساوی رقم کے لیے استعمال ہوتا ہے۔",
    weeksPerYear: "سال میں ادا شدہ ہفتے",
    weeksPerYearHelp: "پورے سال کے لیے 52۔ بلا تنخواہ ہفتے نکالنے کے لیے اسے کم کریں۔",
    errors: {
      hoursPositive: "ہفتہ وار گھنٹے 0 سے زیادہ ہونے چاہییں۔",
      hoursMax: "ایک ہفتے میں زیادہ سے زیادہ 168 گھنٹے ہوتے ہیں۔",
      daysPositive: "ہفتے میں کام کے دن 0 سے زیادہ ہونے چاہییں۔",
      daysMax: "ایک ہفتے میں زیادہ سے زیادہ 7 دن ہوتے ہیں۔",
      weeksPositive: "سال میں ہفتے 0 سے زیادہ ہونے چاہییں۔",
      weeksMax: "سال میں 53 یا اس سے کم ہفتے درج کریں۔",
      hoursPerDay: "ہفتہ وار گھنٹوں کو ہفتے میں کام کے دنوں پر تقسیم کرنے سے یومیہ 24 گھنٹے سے زیادہ نہیں بننے چاہییں۔",
    },
    notes: {
      annualHours: "فرض کیا گیا ہے: ہفتے میں {hours} گھنٹے × {weeks} ہفتے = سال میں {annual} ادا شدہ گھنٹے۔",
      daily: "یومیہ تنخواہ میں ہفتے کے {days} کام کے دن فرض کیے گئے ہیں، یعنی فی کام کا دن {perDay} گھنٹے۔",
      gross: "تمام رقوم ٹیکس اور کٹوتیوں سے پہلے کی مجموعی تنخواہ ہیں، خالص تنخواہ نہیں۔",
    },
    table: {
      caption: "مدت کے لحاظ سے مجموعی تنخواہ",
      period: "ادائیگی کی مدت",
      periodsPerYear: "سال میں ادائیگیاں",
      grossPay: "مجموعی تنخواہ",
    },
  },
  payPeriods: {
    annual: "سالانہ",
    monthly: "ماہانہ",
    semimonthly: "نیم ماہانہ",
    biweekly: "دو ہفتہ وار",
    weekly: "ہفتہ وار",
    daily: "یومیہ",
    hourly: "فی گھنٹہ",
  },
  choosePayPeriod: "ادائیگی کی مدت منتخب کریں۔",
};

export default ur;
