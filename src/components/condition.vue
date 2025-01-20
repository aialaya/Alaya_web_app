<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const dialogVisible = ref(false)
const dialogWidth = ref('800px')


const updateDialogWidth = () => {
  dialogWidth.value = window.innerWidth <= 440 ? '350px' : '800px'
}

onMounted(() => {
  updateDialogWidth()
  window.addEventListener('resize', updateDialogWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateDialogWidth)
})

defineExpose({
  openDialog: () => {
    dialogVisible.value = true
  }
})
</script>

<template>
  <el-dialog 
    v-model="dialogVisible" 
    :width="dialogWidth"
    class="terms-dialog"
  >
    <template #header>
      <div style="color: #1ae28e; font-size: 20px; font-weight: 700;">Terms & Conditions</div>
    </template>
    <div class="condition-content">
      <h2>Alaya AI</h2>
      <h3>End User Terms and Conditions Agreement</h3>
      <p class="update-date">Last Updated: 16/01/2025</p>

      <p class="intro">This End User Terms and Conditions Agreement ("Agreement") governs the relationship between Alaya AI ("Alaya AI", "we", "us", or "our") and you ("User", "you", or "your") regarding your access to and use of Alaya AI's decentralised AI data labelling services and related functionalities (collectively, the "Platform").</p>
      <p>By accessing or using the Platform, you acknowledge that you have read, understood, and agree to be bound by this Agreement. If you do not agree with any part of this Agreement, you must not access or use the Platform.</p>

      <div class="section">
        <h3>1. Definitions</h3>
        <ul>
          <li><strong>Platform:</strong> Refers to the decentralised infrastructure, including any associated websites, decentralised applications (dApps), mobile applications, or alternative interfaces (e.g., a Telegram-based data-labelling interface) provided by Alaya AI for AI data labelling and related services.</li>
          <li><strong>User:</strong> Any individual, entity, or organisation accessing or utilising the Platform's services as an end user (i.e., for personal or organisational data-labelling tasks).</li>
          <li><strong>Data:</strong> Any content, including text, images, audio, video, or other media, submitted or labelled by Users for processing, annotation, or other purposes on the Platform.</li>
          <li><strong>Rewards:</strong> Any tokens, digital assets, or in-app experience points distributed to Users in exchange for valid data labelling contributions to the Platform.</li>
          <li><strong>Blockchain:</strong> A distributed ledger technology utilised by the Platform to record transactions, manage on-chain functions, and provide transparency.</li>
          <li><strong>Smart Contracts:</strong> Self-executing contracts deployed on a blockchain to facilitate on-chain processes necessary to enable Platform features.</li>
          <li><strong>NFT (Non-Fungible Token):</strong> A unique non-fungible blockchain-based digital asset.</li>
          <li><strong>Soul-Bound NFT:</strong> A non-transferable NFT permanently linked to a specific wallet address.</li>
          <li><strong>$AGT:</strong> The native utility and governance token of the Platform.</li>
        </ul>
      </div>

      
      <div class="section">
        <h3>2. Purpose and Scope</h3>
        <p>This Agreement:</p>
        <ul>
          <li>Establishes the terms under which Users may access or use the Platform's data labelling services.</li>
          <li>Outlines the respective rights, obligations, and limitations of both Users and Alaya AI.</li>
          <li>Does not constitute a partnership, employment, or agency agreement and shall not constitute any form of financial or investment advice.</li>
        </ul>
      </div>

      <div class="section">
        <h3>3. Platform Channels and Access</h3>
        
        <h4>Channels</h4>
        <p>The Platform may be accessed through browser-based dApps, mobile applications, or a Telegram-based interface designed for data labelling tasks. Feature availability may vary by channel. Additional access channels or blockchain support may be released in the future.</p>
        
        <h4>Wallet Connection</h4>
        <p>Users must connect a compatible cryptocurrency wallet to interact with certain on-chain features or functionalities, such as claiming token rewards or NFTs. Alaya AI is not responsible for incorrect wallet configurations or any loss arising from User error, such as mismanagement of private keys, inadequate device security, and incorrect transaction addresses, etc.</p>
        
        <h4>Platform Updates</h4>
        <p>Alaya AI may update, modify, or discontinue any channel or feature of the Platform without prior notice. Where feasible, Users will be notified of significant changes via suitable interfaces and official channels. Users are responsible for their own information due-diligence. Alaya AI will take all reasonable preventative measures to ensure Users are properly informed of Platform updates or other associated events through the correct official channels. Alaya AI is not responsible for losses incurred by the User due to negligence or malicious third-party activity, such as phishing activity facilitated by fake channels or accounts impersonating official Alaya AI channels or representatives.</p>
      </div>

      <div class="section">
        <h3>4. Eligibility</h3>
        
        <h4>Legal Compliance</h4>
        <p>By accessing the Platform, you represent and warrant that your use of the Platform complies with all applicable laws and regulation relevant to your jurisdiction or primary location of residence.</p>
        
        <h4>Sanctioned Jurisdictions</h4>
        <p>Access to the Platform is strictly prohibited for individuals or entities located in countries or territories subject to comprehensive embargoes or sanctions imposed by the United Nations, the European Union, the United Kingdom, the United States, or other relevant authorities.</p>
        
        <h4>Criminal History</h4>
        <p>By using the Platform, you affirm that you have no prior criminal record involving fraud, terrorism, or other offences harmful to the integrity of the Platform or its community.</p>
        
        <h4>Local Content/Activities</h4>
        <p>Users are solely responsible for ensuring that the nature of their activities, content submissions, or data-labelling activities and contributions do not violate local laws, including restrictions on content that may be pornographic, classified, or otherwise sensitive/regulated in their jurisdiction.</p>
      </div>

      <div class="section">
        <h3>5. AML and Compliance</h3>
        
        <h4>Anti-Money Laundering (AML)</h4>
        <p>Alaya AI may, for necessary regulatory compliance, implement AML protocols consistent with the laws of the Republic of Seychelles and relevant international regulations at the request of relevant authorities or in assistance with legal investigation procedures. These protocols may include monitoring or flagging suspicious activities and, if required, reporting such activities to the Seychelles Financial Intelligence Unit (FIU) or other authorities. Alaya AI does not impose mandatory Know-Your-Customer (KYC) requirements unless explicitly required by law or as part of an authorised legal process under special conditions and in select jurisdictions where necessary. Users are free to participate in data labelling without disclosing personal information beyond optional profile data.</p>
        
        <h4>User Privacy and Anonymity</h4>
        <p>The platform will endeavour to protect the privacy of its Users and will not require identifying details for most data labelling functions. Users remain responsible for any personal information they choose to disclose.</p>
        
        <h4>Service Accessibility</h4>
        <p>Alaya AI's service is accessible by default to any internet-enabled device, subject to these Terms and applicable law. However, Alaya AI may restrict certain activities or users if legally mandated to do so based on relevant jurisdictional requirements, international law, or other legal, regulatory, or geopolitical circumstances to best protect the interests of the Platform and its Users and minimise risk. This may include service restrictions to IP addresses originating from certain jurisdictions or flagged devices.</p>
      </div>

      <div class="section">
        <h3>6. User Obligations and Prohibited Activities</h3>
        
        <h4>Information Integrity</h4>
        <p>You must not provide any false, illegal, or otherwise misleading information that may present risk or harm to the Platform and its Users for any purpose, including but not limited to Platform registration, affiliate promotion, data labelling, data uploading, or data requests, etc.</p>
        
        <h4>Prohibited Content</h4>
        <p>You must not submit or label any content containing:</p>
        <ul class="indented-list">
          <li>Pornographic or sexual materials that violate local or international legislation or depict minors in any manner;</li>
          <li>Classified or proprietary information that you lack legal authority to disclose;</li>
          <li>Material that infringes on third-party intellectual property rights;</li>
          <li>Content promoting hate speech, terrorism, or other criminal acts.</li>
        </ul>
        
        <h4>Prohibited Activities</h4>
        <p>Prohibited activities include but are not restricted to:</p>
        <ul class="indented-list">
          <li><strong>Botting:</strong> Using automated scripts, bots, or programs to manipulate data labelling tasks or any other Platform feature beyond the reasonable scope or functionality in which the Platform is designed for is strictly forbidden.</li>
          <li><strong>Hacking/Exploitation:</strong> Gaining unauthorised access to or exploiting vulnerabilities in Alaya AI systems, smart contracts, or any other infrastructure is strictly prohibited.</li>
          <li><strong>Data Contamination:</strong> Submitting false, malicious, or intentionally misleading data to disrupt AI model training or undermine the Platform's functionality is not allowed.</li>
          <li><strong>Terrorist or Illegal Use:</strong> Any activity that promotes or materially supports terrorism, organised crime, or other illegal undertakings is barred.</li>
          <li><strong>Sale of Sensitive Data:</strong> You must not utilise the Platform to sell, distribute, or traffic in sensitive personal data or other regulated data categories without explicit legal authority.</li>
        </ul>
        
        <h4>Consequences of Violation</h4>
        <p>Violations of any obligations under this Agreement may result in account suspension, termination, and/or referral to relevant law enforcement authorities in the Republic of Seychelles or other applicable jurisdictions. Alaya AI reserves the right to implement automation technology for screening, identifying, and restricting Platform access to Users in violation. Alaya AI reserves the final right of definition of prohibited activities to protect the interests of the Platform and its Users or to satisfy legal or regulatory requirements by official entities.</p>
      </div>

      <div class="section">
        <h3>7. Platform Responsibilities and Disclaimers</h3>
        
        <h4>Service Overview</h4>
        <p>Alaya AI offers a decentralised data-labelling environment, employing various algorithms and technology stacks to streamline data annotation and maintain optimal data output quality.</p>
        
        <h4>External Contingencies</h4>
        <p>Alaya AI is not liable for external factors beyond its control, including but not limited to:</p>
        <ul class="indented-list">
          <li>Blockchain or Cloud Outages: Network downtime or cloud service failures.</li>
          <li>Market Volatility: Price fluctuations or lack of liquidity for any cryptocurrency or digital asset.</li>
          <li>Regulatory Amendments: Global or regional laws that may impact the Platform or User access.</li>
          <li>Malicious Activity: Exploits, hacking incidents, or third-party attacks that cannot reasonably be prevented.</li>
        </ul>
        
        <h4>No Guarantee of Continuous Service</h4>
        <p>Alaya AI will endeavour to maintain steady operations but cannot guarantee uninterrupted access to its services for all Users at all times. Users should employ adequate security measures and risk management strategies when using the Platform.</p>
        
        <h4>No Messaging/Communication Liability for Third-Party Service Providers</h4>
        <p>Although a Telegram-based interface is provided for data labelling tasks, Alaya AI is not responsible for Telegram's operation, downtime, or updates. Alaya AI is not responsible for any losses incurred due to incorrect, fraudulent, or misleading communication or information resulting from errors or vulnerabilities of the Telegram app itself or any other third-party communications or service platforms. Users access Alaya AI through third-party platforms at their own risk.</p>
      </div>

      <div class="section">
        <h3>8. Data Usage, Model Training, and Data Ownership</h3>
        
        <h4>Ownership of User Data</h4>
        <p>Users retain ownership rights of any original Data submitted to the Platform. Alaya AI does not claim ownership over User-submitted Data. Original Data does not include data labels, segmentation brackets, tracking identifiers, or any other form of processing or manipulation activity applied to existing datasets for the purpose of the Platform's services.</p>
        
        <h4>Licence Grant</h4>
        <p>By submitting Data or provide labelling services, you grant Alaya AI a perpetual, worldwide, royalty-free, and sublicensable licence to use, reproduce, modify, and distribute such Data for improving AI models, research, or development of additional features.</p>
        
        <h4>Model Training</h4>
        <p>Alaya AI may train or refine AI models using submitted Data. Where feasible, Alaya AI will employ anonymisation or pseudonymisation procedures to protect personal privacy by default.</p>
        
        <h4>Use of Models</h4>
        <p>AI models trained on Data from the Platform may be offered to third parties on a commercial or Software-as-a-Service (SaaS) basis. Any personally identifying information is removed to the extent reasonably possible before such usage.</p>
        
        <h4>Data Retention</h4>
        <p>Alaya AI stores Data in compliance with recognised security standards. Where local laws confer a right of erasure, Alaya AI will endeavour to comply, subject to technical and legal constraints.</p>
      </div>

      <div class="section">
        <h3>9. Digital Assets, NFTs, and Utility Token ($AGT)</h3>
        
        <h4>Nature of $AGT</h4>
        <p>$AGT is a strictly utility-based ecosystem token intended to facilitate certain Platform activities (e.g., NFT upgrades, Platform governance). It does not grant ownership, profit-sharing, or any right analogous to company shares or securities.</p>
        
        <h4>NFTs</h4>
        <ul class="indented-list">
          <li>Non-Fungible Tokens on the Platform may represent unique user attributes, achievements, or in-game functionalities. NFTs may be identified and processed as a part of Alaya AI's optimisation algorithm to enhance data task distribution efficiency. NFTs may be airdropped to qualifying Users under special circumstances such as promotional or community events.</li>
          <li>Soul-Bound NFTs are permanently linked to a specific wallet address and cannot be transferred. Soul-Bound NFTs may be identified and processed as a part of Alaya AI's optimisation algorithm to enhance data task distribution efficiency and may be required for Users to access certain tasks.</li>
          <li>NFTs may be upgraded or consumed in conjunction with $AGT or other resources, such as in-game experience points. Alaya AI makes no representations about the future value or utility of such NFTs.</li>
        </ul>
        
        <h4>Third-Party Services</h4>
        <p>Users engaging in NFT or token transactions on external marketplaces or third-party services assume sole responsibility for those activities, including compliance with local regulations.</p>
      </div>

      <div class="section">
        <h3>10. Incentives and Rewards</h3>
        
        <h4>Reward Distribution</h4>
        <p>Rewards (including $AGT) are determined by task complexity, difficulty, required expertise, and data quality. Task Rewards may be calculated and distributed with up to a one-day delay to enable internal algorithmic evaluation of data input quality and Reward amount. Alaya AI may amend Reward structures at any time with reasonable notice to Users in accordance with the best interests of the Platform and its Users or through governance voting.</p>
        
        <h4>Quality Control</h4>
        <p>Task Rewards are only distributed for valid data input. Invalid data input is not rewarded, and continuous or deliberate input of invalid data by Users, whether intentional or not, may be flagged for review. Alaya AI employs optimisation algorithms and data validation procedures to assess the accuracy and integrity of submitted work, and where necessary, may involve human intervention for manual validation of expert data tasks. Alaya AI may restrict access of Users deemed to be acting maliciously on the Platform, such as engagement in spamming or deliberate Data contamination.</p>
        
        <h4>No Guarantee of Income</h4>
        <p>The Platform does not guarantee any specific level of earnings nor guarantee expectations of income sustenance through the use of its services. Rewards are offered for completed tasks but are subject to factors such as data quality, data complexity, and the fair market price for data labelling services in general.</p>
        
        <h4>Transaction and Gas Fees</h4>
        <p>Users are responsible for any blockchain transaction fees (e.g., gas fees) incurred when withdrawing or transferring Rewards from the Platform to their own wallets. Alaya AI may offer limited assistance or compensation for gas fees through task Rewards at its sole discretion, but is not obligated to do so.</p>
      </div>

      <div class="section">
        <h3>11. Intellectual Property Rights</h3>
        
        <h4>Platform IP</h4>
        <p>Alaya AI retains all rights, title, and interest in its proprietary technology, branding, algorithms, and documentation. Unauthorised use is strictly prohibited.</p>
        
        <h4>Third-Party Contributions</h4>
        <p>The Platform may incorporate third-party software or open-source components, each subject to its respective licence terms. Users must comply with such terms when using the Platform.</p>
        
        <h4>Breach by Malicious Actors</h4>
        <p>Alaya AI is not liable for intellectual property infringements arising from hacking, data theft, or other malicious acts by third parties beyond its reasonable control. Alaya AI will undertake commercially reasonable steps to notify affected parties and mitigate such incidents.</p>
      </div>

      <div class="section">
        <h3>12. Indemnification</h3>
        
        <h4>User Indemnity</h4>
        <p>You agree to indemnify and hold harmless Alaya AI, its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, losses, or expenses (including reasonable legal fees) arising out of or in connection with:</p>
        <ul class="indented-list">
          <li>Your breach of this Agreement;</li>
          <li>Your violation of any third-party right, including intellectual property or privacy rights;</li>
          <li>Your engagement in prohibited or illegal conduct on the Platform;</li>
          <li>Any dispute between you and a third party regarding your use of the Platform.</li>
        </ul>
        
        <h4>Alaya AI's Right to Defence</h4>
        <p>Alaya AI may assume defence of any matter subject to indemnification at its own expense. You agree to cooperate fully with any such defence.</p>
      </div>

      <div class="section">
        <h3>13. Termination of Access</h3>
        
        <h4>Termination by Alaya AI</h4>
        <p>Alaya AI reserves the right to suspend, restrict, or terminate User access without notice for serious breaches of this Agreement, including but not limited to:</p>
        <ul class="indented-list">
          <li>Hacking, exploitation, or other security violations;</li>
          <li>Persistent submission of illegal or harmful content;</li>
          <li>Engagement in fraudulent or collusive behaviour;</li>
          <li>Facilitation or support of terrorist or criminal activities.</li>
        </ul>
        
        <h4>User Termination</h4>
        <p>You may discontinue use of the Platform at any time at your sole discretion. Certain obligations, including indemnification and data usage rights, shall survive termination. Alaya AI reserves the right to retain certain User information if required by law or in accordance with regulatory or to assist with criminal investigations.</p>
        
        <h4>Consequences</h4>
        <p>Upon termination, you may lose access to your account and any remaining unclaimed Rewards or unutilised experience points. NFTs and other digital assets held in your personal wallet remain under your control. Any unclaimed Rewards, including but not limited to $AGT, shall be redistributed to the Platform's User incentives pool upon account termination. Users are responsible for any and all consequences arising from voluntary account termination, Alaya AI shall not be held accountable for any losses incurred by the User under any such scenario.</p>
      </div>

      <div class="section">
        <h3>14. Liability and Disclaimers</h3>
        
        <h4>Limitation of Liability</h4>
        <p>The Platform is provided "as is" and "as available", without warranties or conditions of any kind, whether express or implied, including merchantability, fitness for a particular purpose, or non-infringement.</p>
        <p>To the fullest extent permitted by the laws of the Republic of Seychelles, Alaya AI shall not be liable for any indirect, incidental, consequential, or punitive damages related to your use or inability to use the Platform.</p>
        <p>The maximum aggregate liability of Alaya AI to any User for any claim arising from this Agreement shall not exceed the total Rewards the User received during the twelve (12) months preceding the event giving rise to liability.</p>
        
        <h4>No Security or Investment Advice</h4>
        <p>Alaya AI does not provide financial, securities, or investment advice. $AGT and NFTs are not offered as securities, and the Platform does not endorse any token purchase, sale, or holding decision.</p>
      </div>

      <div class="section">
        <h3>15. Force Majeure</h3>
        <p>Alaya AI shall not be held liable for any failure or delay in the performance of its obligations under this Agreement if such failure or delay results from events beyond its reasonable control, including but not limited to natural disasters, terrorism, government orders, widespread communication or network errors, acts of God, alien invasion, zombie apocalypse, runaway artificial superintelligence, or other catastrophic world-ending events such as the destruction of the solar system by relativistic projectiles launched by hostile extraterrestrial civilisations, etc. (*Congratulations for reading this far!)</p>
      </div>

      <div class="section">
        <h3>16. Dispute Resolution</h3>
        
        <h4>Arbitration</h4>
        <p>Any dispute, controversy, or claim arising out of or in connection with this Agreement shall be resolved by binding arbitration conducted in accordance with the United Nations Commission on International Trade Law (UNCITRAL) Arbitration Rules, unless otherwise required by mandatory local law.</p>
        
        <h4>Seat of Arbitration</h4>
        <p>The seat of arbitration shall be Victoria, Republic of Seychelles, conducted in English unless otherwise agreed by the parties.</p>
        
        <h4>Consumer Protection Rights</h4>
        <p>Users retain the right to seek remedies under applicable consumer protection laws if such laws prohibit mandatory arbitration or provide alternate legal avenues.</p>
      </div>

      <div class="section">
        <h3>17. Governing Law</h3>
        <p>Unless otherwise mandated by local law, this Agreement and any dispute or claim arising out of or relating to it (including non-contractual disputes or claims) shall be governed by and construed in accordance with the laws of the Republic of Seychelles.</p>
      </div>

      <div class="section">
        <h3>18. Modifications to this Agreement</h3>
        
        <h4>Right to Modify</h4>
        <p>Alaya AI reserves the right to amend or update this Agreement as necessary for the continued operation of the Platform or to comply with legal obligations. Notice of such changes will be provided where feasible.</p>
        
        <h4>Acceptance of Amendments</h4>
        <p>If you do not agree with any amendments, you must discontinue use of the Platform. Continued use following notice of a revised Agreement constitutes acceptance of such changes.</p>
      </div>

      <div class="section">
        <h3>19. Miscellaneous Provisions</h3>
        
        <h4>Severability</h4>
        <p>If any provision of this Agreement is deemed invalid or unenforceable, the remaining provisions shall continue in full force and effect.</p>
        
        <h4>Entire Agreement</h4>
        <p>This Agreement constitutes the entire understanding between you and Alaya AI regarding your use of the Platform and supersedes any prior agreements or representations.</p>
        
        <h4>No Waiver</h4>
        <p>Failure by Alaya AI to enforce any right or provision of this Agreement does not constitute a waiver of that right or provision.</p>
        
        <h4>Assignment</h4>
        <p>Alaya AI may assign its rights and obligations under this Agreement to any affiliate or in connection with a merger, acquisition, or sale of assets. You may not assign or transfer your rights without Alaya AI's prior written consent.</p>
      </div>

      <div class="section">
        <p class="agreement-footer">By accessing or using Alaya AI, you acknowledge that you have read, understood, and agree to be bound by this End User Terms and Conditions Agreement under the laws of the Republic of Seychelles.</p>
      </div>
    </div>
  </el-dialog>
</template>

<style scoped>
.terms-dialog :deep(.el-dialog) {
  max-width: 90vw;
  margin: 15vh auto !important;
}

.condition-content {
  padding: 20px;
  color: #333;
  line-height: 1.6;
  max-height: 70vh;
  overflow-y: auto;
}

.condition-content::-webkit-scrollbar {
  width: 6px;
}

.condition-content::-webkit-scrollbar-thumb {
  background-color: #1ae28e;
  border-radius: 3px;
}

.condition-content::-webkit-scrollbar-track {
  background-color: #f5f5f5;
}

.condition-content h2 {
  color: #1ae28e;
  font-size: 24px;
  margin-bottom: 10px;
}

.condition-content h3 {
  color: #1ae28e;
  font-size: 20px;
  margin: 20px 0 10px;
}

.condition-content p {
  margin: 10px 0;
}

.condition-content ul {
  margin: 10px 0;
  padding-left: 20px;
}

.condition-content li {
  margin: 8px 0;
}

.update-date {
  color: #666;
  font-style: italic;
}

.section {
  margin: 20px 0;
}

.agreement-footer {
  margin-top: 30px;
  font-weight: bold;
}

.condition-content h4 {
  color: #1ae28e;
  font-size: 18px;
  margin: 15px 0 8px;
  font-weight: 600;
}

.indented-list {
  padding-left: 40px;
  margin: 10px 0;
}

.indented-list li {
  margin: 8px 0;
  list-style-type: disc;
}

@media screen and (max-width: 440px) {
  .terms-dialog :deep(.el-dialog) {
    width: 350px !important;
    margin: 10vh auto !important;
  }
  
  .condition-content {
    padding: 15px;
    max-height: 60vh;
  }
  
  .condition-content h2 {
    font-size: 20px;
  }
  
  .condition-content h3 {
    font-size: 16px;
  }

  .condition-content p,
  .condition-content li {
    font-size: 14px;
  }

  .condition-content h4 {
    font-size: 15px;
  }
}
</style>