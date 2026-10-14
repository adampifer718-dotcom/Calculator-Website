import type { CalcCommonText } from "./en";

const ar: CalcCommonText = {
  validation: {
    required: "أدخل {labelLower}.",
    invalidNumber: "أدخل رقمًا صحيحًا، مثل {example}.",
    tooLarge: "أدخل رقمًا أصغر.",
    wholeNumber: "أدخل عددًا صحيحًا.",
    greaterThan: "يجب أن تكون القيمة أكبر من {bound}.",
    atLeast: "يجب ألا تقل القيمة عن {bound}.",
    atMost: "يجب ألا تزيد القيمة على {bound}.",
    choose: "اختر {labelLower}.",
    invalidDate: "أدخل تاريخًا صحيحًا.",
    dateAtLeast: "يجب أن يكون في {bound} أو بعده.",
    dateAtMost: "يجب أن يكون في {bound} أو قبله.",
    notFinite: "لا تُنتج هذه المدخلات نتيجة محدودة. تحقّق من القيم وحاول مرة أخرى.",
  },
  optional: "اختياري",
  currency: {
    label: "العملة",
    help: "يغيّر طريقة تنسيق المبالغ فقط، ولا يُطبَّق أي تحويل بأسعار الصرف.",
  },
  units: {
    hours: "ساعات",
    days: "أيام",
    weeks: "أسابيع",
    years: "سنوات",
    people: "أشخاص",
    h: "س",
    min: "د",
    s: "ث",
  },
  schedule: {
    hoursPerWeek: "الساعات في الأسبوع",
    hoursPerWeekHelp: "الساعات المدفوعة في أسبوع عادي.",
    daysPerWeek: "أيام العمل في الأسبوع",
    daysPerWeekHelp: "تُستخدم لحساب الأجر اليومي المكافئ.",
    weeksPerYear: "الأسابيع المدفوعة في السنة",
    weeksPerYearHelp: "52 لسنة كاملة. خفّضها لاستبعاد الأسابيع غير المدفوعة.",
    errors: {
      hoursPositive: "يجب أن تكون الساعات في الأسبوع أكبر من 0.",
      hoursMax: "لا يتجاوز الأسبوع 168 ساعة.",
      daysPositive: "يجب أن تكون أيام العمل في الأسبوع أكبر من 0.",
      daysMax: "لا يتجاوز الأسبوع 7 أيام.",
      weeksPositive: "يجب أن تكون الأسابيع في السنة أكبر من 0.",
      weeksMax: "استخدم 53 أسبوعًا في السنة أو أقل.",
      hoursPerDay: "لا يمكن أن يتجاوز ناتج قسمة الساعات الأسبوعية على أيام العمل الأسبوعية 24 ساعة في اليوم.",
    },
    notes: {
      annualHours: "يُفترض {hours} ساعة في الأسبوع × {weeks} أسبوعًا = {annual} ساعة مدفوعة في السنة.",
      daily: "يفترض الأجر اليومي {days} أيام عمل في الأسبوع، أي {perDay} ساعة لكل يوم عمل.",
      gross: "جميع المبالغ أجر إجمالي قبل الضرائب والاستقطاعات، وليست صافي الأجر.",
    },
    table: {
      caption: "الأجر الإجمالي حسب الفترة",
      period: "فترة الدفع",
      periodsPerYear: "عدد الفترات في السنة",
      grossPay: "الأجر الإجمالي",
    },
  },
  payPeriods: {
    annual: "سنوي",
    monthly: "شهري",
    semimonthly: "نصف شهري",
    biweekly: "كل أسبوعين",
    weekly: "أسبوعي",
    daily: "يومي",
    hourly: "بالساعة",
  },
  choosePayPeriod: "اختر فترة الدفع.",
};

export default ar;
