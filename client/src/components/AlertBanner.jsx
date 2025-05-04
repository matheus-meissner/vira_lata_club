import React from 'react';
import {
  BannerWrapper,
  BannerContent,
  Marquee,
  Message,
  Icon,
  ReportButton
} from '../styles/AlertBanner.styles';

import { FaExclamationTriangle, FaDog } from 'react-icons/fa';

const alerts = [
  'Luna - Vira-lata caramelo, perdida em Vila Mariana',
  'Thor - Gato preto, desaparecido em Pinheiros',
  'Max - Golden Retriever, perdido em Moema',
];

const AlertBanner = () => {
  const handleReportClick = () => {
    alert('Obrigado por sua colaboração! 🧡 Em breve entraremos em contato.');
  };

  return (
    <BannerWrapper>
      <BannerContent>
        <Icon><FaExclamationTriangle /></Icon>
        <Marquee>
          {alerts.map((alert, index) => (
            <Message key={index}>
              <FaDog style={{ marginRight: '0.5rem' }} />
              {alert}
            </Message>
          ))}
        </Marquee>
        <ReportButton onClick={handleReportClick}>Reportar</ReportButton>
      </BannerContent>
    </BannerWrapper>
  );
};

export default AlertBanner;
