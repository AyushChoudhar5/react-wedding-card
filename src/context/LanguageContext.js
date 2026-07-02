import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    // Envelope
    envelopeTitle: "Wedding Invitation",
    envelopeNames: "Yogesh & Dipali",
    envelopeDate: "July 7, 2026",
    envelopePlace: "Alephata",
    envelopeInvite: "You are cordially invited",
    envelopeTap: "Tap to Open Envelope",
    
    // Cover
    coverEyebrow: "Two Hearts, One Beginning",
    coverMainTitle: "We Are Getting Married",
    groomName: "Mr. Yogesh S Ugle",
    brideName: "Ms. Dipali G Sable",
    coverDate: "Tuesday, July 7, 2026 at 1:45 PM",
    coverPlace: "Saileela Garden Mangal Karyalaya, Alephata",
    
    // Invitation
    invitationTitle: "You are Invited",
    invitationLine1: "We have cherished our precious relationship until now.",
    invitationLine2: "For the rest of our lives, we want to become a family,",
    invitationLine3: "look in the same direction,",
    invitationLine4: "and walk together.",
    invitationLine5: "We would be deeply grateful",
    invitationLine6: "if you would join us to bless our new beginning.",
    
    // Family
    familyTitle: "With Blessings From",
    groomDad: "Mr. Sakharam Ugle",
    groomMom: "Mrs. Suman Ugle",
    groomRelation: "Son",
    groomLabel: "Groom: Yogesh S Ugle",
    
    brideDad: "Mr. Gabaji Sable",
    brideMom: "Mrs. Sughandabai Sable",
    brideRelation: "Daughter",
    brideLabel: "Bride: Dipali G Sable",
    
    contactBtn: "Contact Us",
    downloadBtn: "Download Invitation",
    
    // Contact Modal
    contactTitle: "Contact Details",
    groomBrother: "Mr. Mangesh S Ugle (Brother of Groom)",
    backBtn: "Back",
    
    // Calendar
    calTitleDate: "Tuesday, July 7, 2026 at 1:45 PM",
    countdownTitle: "Countdown to our Special Day",
    days: "Days",
    hours: "Hours",
    mins: "Mins",
    secs: "Secs",
    countdownFooter: "The wedding of Yogesh ♥ Dipali is {days} days away",
    weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    
    // Location
    locTitle: "Location & Directions",
    locVenue: "Saileela Garden Mangal Karyalaya",
    locAddr: "Nashik Road, Alephata",
    locMapBtn: "Open in Google Maps",
    locHighway: "Located on the Pune-Nashik Highway",
    
    // Events
    eventsTitle: "More Events",
    engagementBadge: "Engagement",
    engagementName: "Engagement Ceremony",
    engagementDate: "Monday, July 6, 2026",
    engagementTime: "11:00 AM",
    engagementLoc: "Bride's Home",
    
    haldiBadge: "Haldi Ceremony",
    haldiName: "Haldi Ceremony",
    haldiDate: "Monday, July 6, 2026",
    haldiTime: "7:00 PM",
    haldiLoc: "Groom's House, Shendiwadi",
    
    // LoveLetters
    loveLettersSentence: "Please do attend our wedding and bless us with your warm presence as we begin our new journey together!",
    
    // LoveStory
    storyTitle: "Our Love Story",
    meetTitle: "First Meet",
    meetDate: "August 2024",
    meetDesc: "Where it all began... A sweet conversation and a chance encounter that instantly bloomed into something special.",
    dateTitle: "First Date",
    dateDate: "September 2024",
    dateDesc: "An unforgettable evening filled with endless laughter, shared dreams, and the quiet realization of a lifetime connection.",
    engTitle: "Our Engagement",
    engDate: "July 6, 2026",
    engDesc: "Exchanging rings and promising to walk hand-in-hand forever under the blessings of our parents and loved ones.",
    wedTitle: "The Wedding Day",
    wedDate: "July 7, 2026",
    wedDesc: "The beginning of our new chapter—starting our journey as husband and wife, bound by love, forever and always.",
    
    // Quiz
    quizTitle: "Surprise Quiz",
    quizScoreText: "You answered {score} out of {total} questions correctly!",
    quizTryAgain: "Try Again",
    quizQuestionCount: "Question {current}/{total}",
    quizCorrect: "Correct!",
    quizIncorrect: "Incorrect! {correctAnswer}",
    
    q1Text: "Which of the following is our honeymoon destination?",
    q1Correct: "We are traveling to the UK and Spain.",
    q1Options: ["Australia", "Canada", "Switzerland", "United Kingdom", "Spain"],
    
    q2Text: "Which country have we NOT traveled to together?",
    q2Correct: "We have never traveled to Vietnam together.",
    q2Options: ["Japan", "Hong Kong", "Macau", "Laos", "Vietnam"],
    
    q3Text: "Which activity have we NOT done together?",
    q3Correct: "We have never been to Lotte World together. We have been to Gyeongju World, E-World, and Disneyland together.",
    q3Options: [
      "Running a 10km marathon",
      "Hiking Hallasan Mountain",
      "Surfing at Mallipo Beach",
      "Riding amusement rides at Lotte World",
      "Playing games at a PC bang (gaming cafe)"
    ],
    
    // Footer
    footerDesigned: "Designed by Ayush Choudhar",
    footerRights: "© 2026 All rights reserved by Ayush Choudhar.",
    
    // Gallery
    galleryTitle: "Moments of Love",
    galleryNext: "Next Photo",
    cap1: "Laughter & Joy",
    cap2: "Together Forever",
    cap3: "Sweet Memories",
    cap4: "Love & Happiness",
    cap5: "Our Journey",
    
    // Survey (RSVP)
    surveyTitle: "RSVP",
    surveySide: "Side",
    surveyGroomSide: "Groom's Side",
    surveyBrideSide: "Bride's Side",
    surveyName: "Name",
    surveyContact: "Contact No.",
    surveyAttendance: "RSVP",
    surveyAttending: "Attending",
    surveyNotAttending: "Not Attending",
    surveyUndecided: "Undecided",
    surveyGuests: "Guests",
    surveyGuestsPlaceholder: "Total guests including yourself",
    surveyMeal: "Meal",
    surveyYes: "Yes",
    surveyNo: "No",
    surveyConsent: "Consent to Personal Information Collection (Required)",
    surveyConsentDetail1: "Collected items: Name, Contact number",
    surveyConsentDetail2: "Retention period: Until the wedding invitation service ends",
    surveySubmit: "Submit",
    surveyAlertConsent: "Please agree to the privacy policy.",
    surveyAlertFields: "Please fill in all the required fields.",
    surveyAlertSuccess: "Your RSVP has been submitted."
  },
  mr: {
    // Envelope
    envelopeTitle: "लग्नपत्रिका",
    envelopeNames: "योगेश आणि दिपाली",
    envelopeDate: "७ जुलै, २०२६",
    envelopePlace: "आळफाटा",
    envelopeInvite: "आपल्याला आग्रहाचे आमंत्रण आहे",
    envelopeTap: "लिफाफा उघडण्यासाठी टॅप करा",
    
    // Cover
    coverEyebrow: "दोन मने, एक नवी सुरुवात",
    coverMainTitle: "आमचे लग्न ठरले आहे",
    groomName: "श्री. योगेश स. उगले",
    brideName: "कु. दिपाली ग. साबळे",
    coverDate: "मंगळवार, ७ जुलै, २०२६ दुपारी १:४५ वाजता",
    coverPlace: "साईलीला गार्डन मंगल कार्यालय, आळफाटा",
    
    // Invitation
    invitationTitle: "स्नेहभरे आमंत्रण",
    invitationLine1: "आम्ही आजवर आमच्या नातेसंबंधांचा मनापासून आदर केला आहे.",
    invitationLine2: "उर्वरित आयुष्यासाठी, आम्हाला एक कुटुंब बनून,",
    invitationLine3: "एकाच दिशेने पाहत,",
    invitationLine4: "एकत्र चालायचे आहे.",
    invitationLine5: "आपण आमच्या नवीन प्रवासाला आशीर्वाद देण्यासाठी",
    invitationLine6: "आमच्यासोबत सामील झालात तर आम्हाला मनापासून आनंद होईल.",
    
    // Family
    familyTitle: "स्नेहकांक्षी व शुभ आशीर्वाद",
    groomDad: "श्री. सखाराम उगले",
    groomMom: "सौ. सुमन उगले",
    groomRelation: "सुपुत्र",
    groomLabel: "वर: योगेश स. उगले",
    
    brideDad: "श्री. गाबाजी साबळे",
    brideMom: "सौ. सुगंधाबाई साबळे",
    brideRelation: "सुकन्या",
    brideLabel: "वधू: दिपाली ग. साबळे",
    
    contactBtn: "संपर्क साधा",
    downloadBtn: "लग्नपत्रिका डाउनलोड करा",
    
    // Contact Modal
    contactTitle: "संपर्क तपशील",
    groomBrother: "श्री. मंगेश स. उगले (वराचे बंधू)",
    backBtn: "मागे",
    
    // Calendar
    calTitleDate: "मंगळवार, ७ जुलै, २०२६ दुपारी १:४५ वाजता",
    countdownTitle: "आमच्या विशेष दिवसाचे काउंटडाउन",
    days: "दिवस",
    hours: "तास",
    mins: "मिनिटे",
    secs: "सेकंद",
    countdownFooter: "योगेश ♥ दिपाली यांच्या लग्नाला अजून {days} दिवस बाकी आहेत",
    weekdays: ['रवि', 'सोम', 'मंगळ', 'बुध', 'गुरु', 'शुक्र', 'शनि'],
    
    // Location
    locTitle: "स्थान आणि मार्ग",
    locVenue: "साईलीला गार्डन मंगल कार्यालय",
    locAddr: "नाशिक रोड, आळफाटा",
    locMapBtn: "गुगल मॅप्सवर पहा",
    locHighway: "पुणे-नाशिक महामार्गावर स्थित",
    
    // Events
    eventsTitle: "इतर कार्यक्रम",
    engagementBadge: "साखरपुडा",
    engagementName: "साखरपुडा समारंभ",
    engagementDate: "सोमवार, ६ जुलै, २०२६",
    engagementTime: "सकाळी ११:०० वाजता",
    engagementLoc: "वधूचे निवासस्थान",
    
    haldiBadge: "हळद समारंभ",
    haldiName: "हळद समारंभ",
    haldiDate: "सोमवार, ६ जुलै, २०२६",
    haldiTime: "संध्याकाळी ७:०० वाजता",
    haldiLoc: "वराचे निवासस्थान, शेंडीवाडी",
    
    // LoveLetters
    loveLettersSentence: "आम्ही आमच्या नवीन आयुष्याची सुरुवात करत असताना, आपण आमच्या विवाहास उपस्थित राहून आम्हाला आपल्या शुभाशीर्वादांनी उपकृत करावे, ही नम्र विनंती!",
    
    // LoveStory
    storyTitle: "आमची प्रेम कहाणी",
    meetTitle: "पहिली भेट",
    meetDate: "ऑगस्ट २०२४",
    meetDesc: "जिथून सर्व काही सुरू झाले... एक गोड संभाषण आणि एक अनपेक्षित भेट ज्याचे झटपट एका खास नात्यात रूपांतर झाले.",
    dateTitle: "पहिली डेट",
    dateDate: "सप्टेंबर २०२४",
    dateDesc: "अनंत हास्य, सामायिक स्वप्ने आणि आयुष्यभराच्या ऋणानुबंधाची जाणीव करून देणारी एक अविस्मरणीय संध्याकाळ.",
    engTitle: "आमचा साखरपुडा",
    engDate: "६ जुलै, २०२६",
    engDesc: "आमच्या पालकांच्या आणि प्रियजनांच्या आशीर्वादाने एकमेकांना अंगठ्या घालून सदैव हातात हात धरून चालण्याचे वचन दिले.",
    wedTitle: "लग्नाचा दिवस",
    wedDate: "७ जुलै, २०२६",
    wedDesc: "आमच्या नवीन अध्यायाची सुरुवात—पती-पत्नी म्हणून आमच्या नवीन प्रवासाची सुरुवात, प्रेमाच्या बंधनात, सदैव आणि कायमचे.",
    
    // Quiz
    quizTitle: "सरप्राईज क्विझ",
    quizScoreText: "तुम्ही {total} पैकी {score} प्रश्नांची उत्तरे बरोबर दिली आहेत!",
    quizTryAgain: "पुन्हा प्रयत्न करा",
    quizQuestionCount: "प्रश्न {current}/{total}",
    quizCorrect: "बरोबर!",
    quizIncorrect: "चुकीचे! {correctAnswer}",
    
    q1Text: "खालीलपैकी आमचे हनिमून डेस्टिनेशन (Honeymoon Destination) कोणते आहे?",
    q1Correct: "आम्ही युनायटेड किंगडम (UK) आणि स्पेनला जाणार आहोत.",
    q1Options: ["ऑस्ट्रेलिया", "कॅनडा", "स्वित्झर्लंड", "युनायटेड किंगडम", "स्पेन"],
    
    q2Text: "आम्ही दोघांनी मिळून कोणत्या देशात एकत्र प्रवास केलेला नाही?",
    q2Correct: "आम्ही कधीही व्हिएतनामला एकत्र प्रवास केलेला नाही.",
    q2Options: ["जपान", "हाँगकाँग", "मकाऊ", "लाओस", "व्हिएतनाम"],
    
    q3Text: "आम्ही दोघांनी मिळून खालीलपैकी कोणती गोष्ट एकत्र केलेली नाही?",
    q3Correct: "आम्ही कधीही एकत्र लोटे वर्ल्डला (Lotte World) गेलो नाही. आम्ही ग्याँगजू वर्ल्ड, ई-वर्ल्ड आणि डिझनीलँडला एकत्र गेलो आहोत.",
    q3Options: [
      "१० किमी मॅरेथॉन धावणे",
      "हॅलासन पर्वतावर चढणे",
      "मलीपो बीचवर सर्फिंग करणे",
      "लोटे वर्ल्डमधील अम्युझमेंट राइड्सचा आनंद घेणे",
      "गेमिंग कॅफेमध्ये गेम खेळणे"
    ],
    
    // Footer
    footerDesigned: "आयुष चौधरी यांनी डिझाइन केले आहे",
    footerRights: "© २०२६ सर्व हक्क राखीव आयुष चौधरी.",
    
    // Gallery
    galleryTitle: "प्रेमाचे सुंदर क्षण",
    galleryNext: "पुढील फोटो",
    cap1: "हास्य आणि आनंद",
    cap2: "सदैव एकत्र",
    cap3: "गोड आठवणी",
    cap4: "प्रेम आणि सुख",
    cap5: "आमचा प्रवास",
    
    // Survey (RSVP)
    surveyTitle: "उपस्थितीची नोंद (RSVP)",
    surveySide: "बाजू",
    surveyGroomSide: "नवरदेवाकडील",
    surveyBrideSide: "नवरीकडील",
    surveyName: "नाव",
    surveyContact: "संपर्क क्रमांक",
    surveyAttendance: "उपस्थिती",
    surveyAttending: "उपस्थित राहणार",
    surveyNotAttending: "उपस्थित राहू शकणार नाही",
    surveyUndecided: "अजून निश्चित नाही",
    surveyGuests: "पाहुणे",
    surveyGuestsPlaceholder: "स्वतःसह एकूण पाहुणे",
    surveyMeal: "जेवण",
    surveyYes: "होय",
    surveyNo: "नाही",
    surveyConsent: "वैयक्तिक माहिती गोळा करण्यास संमती (आवश्यक)",
    surveyConsentDetail1: "गोळा केलेली माहिती: नाव, संपर्क क्रमांक",
    surveyConsentDetail2: "माहिती साठवण्याचा कालावधी: लग्नपत्रिका सेवा संपेपर्यंत",
    surveySubmit: "सबमिट करा",
    surveyAlertConsent: "कृपया वैयक्तिक माहिती गोळा करण्याच्या संमतीला सहमती द्या.",
    surveyAlertFields: "कृपया सर्व आवश्यक फील्ड भरा.",
    surveyAlertSuccess: "तुमचे RSVP यशस्वीरित्या सबमिट केले गेले आहे."
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(null); // null means language select screen is visible

  const t = (key, variables = {}) => {
    const lang = language || 'en';
    let text = translations[lang]?.[key] || translations['en']?.[key] || key;
    
    Object.keys(variables).forEach(vKey => {
      text = text.replace(`{${vKey}}`, variables[vKey]);
    });
    
    return text;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
