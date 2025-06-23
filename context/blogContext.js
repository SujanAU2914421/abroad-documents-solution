"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const blogContext = createContext();

const blogsTranslations = {
	en: [
		{
			topic: "Why Certified Document Translation Matters in Legal Processes",
			formatted_topic: "why_certified_document_translation_matters_in_legal_processes",
			image: "https://images.unsplash.com/photo-1581090700227-1e8f7f43a08b",
			publisher: "Abroad Documents Solution Nepal",
			date: "2025-06-04",
			description: `
        <h1 class="text-2xl font-bold mb-2">Why Certified Document Translation Matters in Legal Processes</h1>
        <p class="text-sm leading-relaxed text-gray-700 mb-4">
          Legal systems rely heavily on <strong>accuracy</strong> and <strong>clarity</strong>. 
          Whether you're applying for a visa, attending court, or signing international agreements, 
          the role of <strong>certified translation</strong> is crucial. Inaccurate translations can 
          lead to rejected applications, legal disputes, or even financial penalties.
        </p>
        <h2 class="text-base font-semibold mt-6 mb-2 text-gray-800">What is a Certified Translation?</h2>
        <p class="text-sm text-gray-600 leading-relaxed mb-4">
          A certified translation is one that is officially validated by a translator or agency. 
          It includes a signed statement declaring that the translation is accurate and complete to the best of the translator’s knowledge.
        </p>
        <h2 class="text-base font-semibold mt-6 mb-2 text-gray-800">Why It’s Important in Legal Contexts:</h2>
        <ul class="list-disc list-inside text-sm text-gray-700 space-y-2 mb-4">
          <li><strong>Accuracy:</strong> Legal terms must be interpreted correctly.</li>
          <li><strong>Acceptance:</strong> Many courts and government bodies only accept certified translations.</li>
          <li><strong>Accountability:</strong> Certified translators are bound by professional ethics and legal obligations.</li>
        </ul>
        <h2 class="text-base font-semibold mt-6 mb-2 text-gray-800">Documents That Often Require Certification:</h2>
        <ul class="list-disc list-inside text-sm text-gray-700 space-y-2 mb-4">
          <li>Birth and marriage certificates</li>
          <li>Legal contracts and affidavits</li>
          <li>Immigration documents</li>
          <li>Academic transcripts</li>
          <li>Business agreements</li>
        </ul>
        <br/>
        <p class="text-sm text-gray-700 mb-4">
          Ignoring this requirement could result in document rejection or delays in important processes.
        </p>
        <p class="text-sm text-gray-700 mb-4">
          👉 <a href="/services/document-translation" class="text-blue-600 underline">Explore our Certified Document Translation Service</a>
        </p>
      `,
		},
		{
			topic: "Top 5 Mistakes to Avoid When Notarizing Documents Abroad",
			formatted_topic: "top_5_mistakes_to_avoid_when_notarizing_documents_abroad",
			image: "https://images.unsplash.com/photo-1589820296156-2454bb8b5d74",
			publisher: "Abroad Documents Solution Nepal",
			date: "2025-06-01",
			description: `
        <h1 class="text-2xl font-bold mb-2">Top 5 Mistakes to Avoid When Notarizing Documents Abroad</h1>
        <p class="text-sm text-gray-600 leading-relaxed mb-4">
          Notarizing documents overseas can feel like a maze. If you're handling <strong>legal, financial, or immigration paperwork</strong>, 
          one small error might cause weeks of delays. Let’s break down the <strong>top mistakes people make</strong> and how you can avoid them.
        </p>
        <h2 class="text-base font-semibold mt-6 mb-2 text-gray-800">1. Using a Notary Who’s Not Recognized Locally</h2>
        <p class="text-sm text-gray-700 mb-2">
          Some countries have strict laws about what counts as a “valid” notary. Always check if the notary you're using abroad is 
          officially recognized and whether their seal/signature is accepted by local authorities.
        </p>
        <h2 class="text-base font-semibold mt-6 mb-2 text-gray-800">2. Forgetting Apostille Requirements</h2>
        <p class="text-sm text-gray-700 mb-2">
          If the country you’re in is part of the <strong>Hague Apostille Convention</strong>, you might need an apostille certificate 
          for your notarized document to be accepted back home.
        </p>
        <h2 class="text-base font-semibold mt-6 mb-2 text-gray-800">3. Submitting Poorly Translated Documents</h2>
        <p class="text-sm text-gray-700 mb-2">
          If your document isn’t in the language of the country where you’re notarizing it, it might be rejected. 
          <strong>Certified translation</strong> is often required.
        </p>
        <h2 class="text-base font-semibold mt-6 mb-2 text-gray-800">4. Overlooking Document Formatting</h2>
        <p class="text-sm text-gray-700 mb-2">
          Many countries require documents to follow certain formats: margins, paper size, and even ink color may matter. 
          Don’t ignore those small details.
        </p>
        <h2 class="text-base font-semibold mt-6 mb-2 text-gray-800">5. Missing Signatures or Stamps</h2>
        <p class="text-sm text-gray-600 leading-relaxed mb-4">
          A document without all required stamps or signatures — from both you and the notary — can be instantly disqualified. 
          Double-check before submitting.
        </p>
        <br/>
        <p class="text-sm text-gray-700 mb-4">
          Want help notarizing your documents the right way?
        </p>
        <p class="text-sm text-gray-700 mb-4">
          👉 <a href="/services/documents-notarization" class="text-blue-600 underline">Check out our Notarization Services</a>
        </p>
      `,
		},
	],
	ne: [
		{
			topic: "कानूनी प्रक्रियामा प्रमाणित कागजात अनुवाद किन महत्त्वपूर्ण छ",
			formatted_topic: "kanuni_prakriyama_pramanit_kagjat_anuvad_kin_mahatwapurna_cha",
			image: "https://images.unsplash.com/photo-1581090700227-1e8f7f43a08b",
			publisher: "Abroad Documents Solution Nepal",
			date: "2025-06-04",
			description: `
        <h1 class="text-2xl font-bold mb-2">कानूनी प्रक्रियामा प्रमाणित कागजात अनुवाद किन महत्त्वपूर्ण छ</h1>
        <p class="text-sm leading-relaxed text-gray-700 mb-4">
          कानूनी प्रणालीहरू <strong>शुद्धता</strong> र <strong>स्पष्टता</strong> मा निर्भर गर्छन्। 
          तपाईं भिसा लागि आवेदन गरिरहनुभएको होस्, अदालतमा उपस्थित हुनुभएको होस् वा अन्तर्राष्ट्रिय सम्झौताहरूमा हस्ताक्षर गरिरहनुभएको होस्, 
          <strong>प्रमाणित अनुवाद</strong> को भूमिका महत्वपूर्ण छ। गलत अनुवादहरूले आवेदन अस्वीकृत, कानूनी विवाद वा आर्थिक जरिवाना निम्त्याउन सक्छ।
        </p>
        <h2 class="text-base font-semibold mt-6 mb-2 text-gray-800">प्रमाणित अनुवाद के हो?</h2>
        <p class="text-sm text-gray-600 leading-relaxed mb-4">
          प्रमाणित अनुवाद त्यो हो जुन अनुवादक वा एजेन्सीले आधिकारिक रूपमा मान्यता दिएको हुन्छ। 
          यसमा अनुवाद सही र पूर्ण भएको पुष्टि गर्ने हस्ताक्षरित विवरण हुन्छ।
        </p>
        <h2 class="text-base font-semibold mt-6 mb-2 text-gray-800">कानूनी सन्दर्भमा यसको महत्त्व:</h2>
        <ul class="list-disc list-inside text-sm text-gray-700 space-y-2 mb-4">
          <li><strong>शुद्धता:</strong> कानूनी शब्दहरू सही व्याख्या हुनुपर्छ।</li>
          <li><strong>स्वीकृति:</strong> धेरै अदालत र सरकारी निकायहरूले मात्र प्रमाणित अनुवाद स्वीकार गर्छन्।</li>
          <li><strong>जवाफदेहिता:</strong> प्रमाणित अनुवादकहरू पेशागत नैतिकता र कानूनी दायित्वमा बाँधिएका हुन्छन्।</li>
        </ul>
        <h2 class="text-base font-semibold mt-6 mb-2 text-gray-800">कागजातहरू जुन प्रायः प्रमाणित गरिनु पर्छ:</h2>
        <ul class="list-disc list-inside text-sm text-gray-700 space-y-2 mb-4">
          <li>जन्म प्रमाणपत्र र विवाह प्रमाणपत्रहरू</li>
          <li>कानूनी सम्झौता र शपथपत्रहरू</li>
          <li>आप्रवासन कागजातहरू</li>
          <li>शैक्षिक प्रतिलिपिहरू</li>
          <li>व्यापार सम्झौता</li>
        </ul>
        <br/>
        <p class="text-sm text-gray-700 mb-4">
          यस आवश्यकतालाई बेवास्ता गर्दा कागजात अस्वीकृति वा महत्वपूर्ण प्रक्रियामा ढिलाइ हुन सक्छ।
        </p>
        <p class="text-sm text-gray-700 mb-4">
          👉 <a href="/services/document-translation" class="text-blue-600 underline">हाम्रो प्रमाणित कागजात अनुवाद सेवा अन्वेषण गर्नुहोस्</a>
        </p>
      `,
		},
		{
			topic: "विदेशमा कागजात नोटराइज गर्दा बच्नुपर्ने शीर्ष ५ गल्तीहरू",
			formatted_topic: "videshma_kagjat_notarize_garda_bachnaparne_sirsha_5_galtiharu",
			image: "https://images.unsplash.com/photo-1589820296156-2454bb8b5d74",
			publisher: "Abroad Documents Solution Nepal",
			date: "2025-06-01",
			description: `
        <h1 class="text-2xl font-bold mb-2">विदेशमा कागजात नोटराइज गर्दा बच्नुपर्ने शीर्ष ५ गल्तीहरू</h1>
        <p class="text-sm text-gray-600 leading-relaxed mb-4">
          विदेशमा कागजात नोटराइज गर्नु कहिलेकाहीँ जटिल हुनसक्छ। तपाईं <strong>कानूनी, वित्तीय, वा आप्रवासन कागजातहरू</strong> सँग व्यवहार गर्दै हुनुहुन्छ भने, 
          एउटा सानो गल्तीले धेरै हप्तासम्म ढिलाइ गराउन सक्छ। यहाँ <strong>मान्छेले गर्ने शीर्ष गल्तीहरू</strong> र तिनीहरूबाट कसरी बच्ने जानौं।
        </p>
        <h2 class="text-base font-semibold mt-6 mb-2 text-gray-800">१. स्थानीय रूपमा मान्यता प्राप्त नभएको नोटरी प्रयोग गर्नु</h2>
        <p class="text-sm text-gray-700 mb-2">
          केही देशहरूले “वैध” नोटरी के हो भनेर कडा कानुनहरू बनाएका छन्। तपाईंले विदेशमा प्रयोग गरिरहेको नोटरी आधिकारिक रूपमा मान्यता प्राप्त छ कि छैन जाँच गर्नुहोस् र 
          के तिनको छाप/हस्ताक्षर स्थानीय निकायले स्वीकार्छन् कि होइन पक्का गर्नुहोस्।
        </p>
        <h2 class="text-base font-semibold mt-6 mb-2 text-gray-800">२. अपोस्टिल आवश्यकताहरू बिर्सनु</h2>
        <p class="text-sm text-gray-700 mb-2">
          यदि तपाईंको देश <strong>हेग अपोस्टिल सम्मेलन</strong>को सदस्य हो भने, तपाईंलाई नोटराइज गरिएको कागजात स्वीकार गर्न अपोस्टिल प्रमाणपत्र चाहिन सक्छ।
        </p>
        <h2 class="text-base font-semibold mt-6 mb-2 text-gray-800">३. खराब अनुवाद गरिएको कागजात पेश गर्नु</h2>
        <p class="text-sm text-gray-700 mb-2">
          यदि तपाईंको कागजात नोटराइज भइरहेको देशको भाषामा छैन भने त्यो अस्वीकृत हुन सक्छ। प्रायः <strong>प्रमाणित अनुवाद</strong> आवश्यक पर्छ।
        </p>
        <h2 class="text-base font-semibold mt-6 mb-2 text-gray-800">४. कागजातको ढाँचा बेवास्ता गर्नु</h2>
        <p class="text-sm text-gray-700 mb-2">
          धेरै देशहरूले कागजातका सानो विवरणहरू जस्तै मार्जिन, कागजको आकार, र कालो रङ्गलाई ध्यान दिन्छन्। ती विवरणहरूलाई नजरअन्दाज नगर्नुहोस्।
        </p>
        <h2 class="text-base font-semibold mt-6 mb-2 text-gray-800">५. हस्ताक्षर वा छाप छुटाउनु</h2>
        <p class="text-sm text-gray-600 leading-relaxed mb-4">
          आवश्यक सबै छाप वा हस्ताक्षर नभएको कागजात तुरुन्तै अस्वीकृत हुन सक्छ। पेश गर्नु अघि दोहोरो जाँच गर्नुहोस्।
        </p>
        <br/>
        <p class="text-sm text-gray-700 mb-4">
          तपाईंलाई सही तरिकाले कागजात नोटराइज गर्न सहयोग चाहिन्छ?
        </p>
        <p class="text-sm text-gray-700 mb-4">
          👉 <a href="/services/documents-notarization" class="text-blue-600 underline">हाम्रो नोटराइजेशन सेवाहरू जाँच गर्नुहोस्</a>
        </p>
      `,
		},
	],
};

export default function BlogContextProvider({ children }) {
	const [blogs, setBlogs] = useState(blogsTranslations.en);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const htmlLang = document.documentElement.lang || "en";
			if (htmlLang.startsWith("ne")) {
				setBlogs(blogsTranslations.ne);
			} else {
				setBlogs(blogsTranslations.en);
			}
		}
	}, []);

	return <blogContext.Provider value={{ blogs }}>{children}</blogContext.Provider>;
}

export const useBlogContext = () => {
	return useContext(blogContext);
};
