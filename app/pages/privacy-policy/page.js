import React from "react";

export default function PrivacyPolicy() {
	return (
		<div className="relative">
			<div className="relative py-16">
				<div className="relative flex justify-center font-bold text-3xl">Privacy And Policy</div>
				<div className="relative text-sm flex justify-center">
					<div className="flex items-center gap-2 mt-2 text-gray-700">
						<div className="relative">Home</div>
						<div className="relative">{">"}</div>
						<div className="relative">Privacy & Policy</div>
					</div>
				</div>
			</div>

			<div className="px-4 pb-14 text-gray-800 dark:text-gray-100">
				<div className="relative border rounded-xl px-8 py-8 max-w-3xl mx-auto space-y-8">
					{/* Intro */}
					<div className="text-sm">
						This Privacy Policy explains how Notary Nepal ({`"`}we,{`"`} {`"`}us,{`"`} or {`"`}our{`"`})
						collects, uses, and protects your personal information when you visit our website at
						https://notarynepal.com/ or use our services (collectively, the {`"`}Services{`"`}).
					</div>

					{/* Section 1 */}
					<div className="space-y-2">
						<div className="text-base font-semibold">What Information Do We Collect?</div>
						<div className="text-sm">
							<span className="font-semibold">Personal Information:</span> This identifies you as an
							individual, such as your name, email address, phone number, address, payment details, and
							any information you provide in documents uploaded for notarization.
						</div>
						<div className="text-sm">
							<span className="font-semibold">Non-Personal Information:</span> This doesn{"'"}t identify
							you as an individual, including your IP address, browser type, device type, operating
							system, language preference, pages viewed, time spent on the website, and similar usage
							data. We collect non-personal information automatically when you use our Services. We use
							cookies and other tracking technologies for this purpose. You can usually disable cookies in
							your browser settings, but this may affect some functionalities.
						</div>
					</div>

					{/* Section 2 */}
					<div className="space-y-2">
						<div className="text-base font-semibold">How We Use Your Information</div>
						<div className="text-sm">We use the information we collect for various purposes:</div>
						<div className="text-sm">
							<span className="font-semibold">To provide and improve our Services:</span> We use your
							information to operate the website, process your transactions, fulfill requests, communicate
							with you, and personalize your experience.
						</div>
						<div className="text-sm">
							<span className="font-semibold">Marketing and Communication:</span> We may use your
							information to send you newsletters, promotions, and marketing materials (with your
							consent).
						</div>
						<div className="text-sm">
							<span className="font-semibold">Legal Compliance:</span> We may use your information to
							comply with legal obligations and enforce our terms and conditions.
						</div>
						<div className="text-sm">
							<span className="font-semibold">Security and Fraud Prevention:</span> We use your
							information to protect our rights and interests, and prevent fraud or abuse.
						</div>
					</div>

					{/* Section 3 */}
					<div className="space-y-2">
						<div className="text-base font-semibold">Sharing Your Information</div>
						<div className="text-sm">
							We do not sell, rent, or trade your personal information to third parties without your
							consent. However, we may share your information with:
						</div>
						<div className="text-sm">
							<span className="font-semibold">Service Providers:</span> Third-party companies who help us
							operate the website and deliver services (e.g., payment processing, hosting, analytics). We
							share only the minimum information necessary and require them to protect your information
							and comply with this policy.
						</div>
						<div className="text-sm">
							<span className="font-semibold">Legal Requirements:</span> Authorities or law enforcement
							when required by law or to protect our or others{"'"} rights and interests.
						</div>
						<div className="text-sm">
							<span className="font-semibold">With Your Consent:</span> We may share your information with
							other parties when you explicitly permit it.
						</div>
					</div>

					{/* Section 4 */}
					<div className="space-y-2">
						<div className="text-base font-semibold">Protecting Your Information</div>
						<div className="text-sm">
							We implement reasonable security measures (encryption, firewalls, etc.) to protect your
							information from unauthorized access, use, disclosure, alteration, or destruction. However,
							no internet transmission or storage method is 100% secure.
						</div>
					</div>

					{/* Section 5 */}
					<div className="space-y-2">
						<div className="text-base font-semibold">Data Retention</div>
						<div className="text-sm">
							We retain your information for as long as it{"'"}s necessary to fulfill the purposes for
							which it was collected or as required by law. When your information is no longer needed, we
							may delete or anonymize it.
						</div>
					</div>

					{/* Section 6 */}
					<div className="space-y-2">
						<div className="text-base font-semibold">Your Rights and Choices</div>
						<div className="text-sm">You have certain rights regarding your information:</div>
						<div className="text-sm">
							<span className="font-semibold">Access and Update:</span> You can access, update, or correct
							your personal information through your account or by contacting us.
						</div>
						<div className="text-sm">
							<span className="font-semibold">Marketing Opt-Out:</span> You can unsubscribe from marketing
							emails by following the link in the email or contacting us.
						</div>
						<div className="text-sm">
							<span className="font-semibold">Cookie Settings:</span> You can manage cookie settings in
							your browser or device settings.
						</div>
					</div>

					{/* Section 7 */}
					<div className="space-y-2">
						<div className="text-base font-semibold">Policy Updates</div>
						<div className="text-sm">
							We may update this policy periodically to reflect changes in our practices or applicable
							laws. We will notify you of any material changes by posting on the website or sending you an
							email. Your continued use of the Services after the updated policy becomes effective
							constitutes your acceptance of the changes.
						</div>
					</div>

					{/* Section 8 */}
					<div className="space-y-2">
						<div className="text-base font-semibold">Contact Us</div>
						<div className="text-sm">
							If you have any questions or comments about this Privacy Policy or our data practices,
							please contact us at:
						</div>
						<div className="text-sm font-bold">Notary Nepal</div>
						<div className="text-sm">info@notarynepal.com</div>
					</div>
				</div>
			</div>
		</div>
	);
}
