import styled from '@emotion/styled';

import { Text } from '../../design-system';
import { getCurlTriggerSnippet } from '../../pages/templates/components/TriggerSnippetTabs';

const TriggerTitle = styled(Text)`
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  padding-bottom: 20px;
`;

export const ExecutionDetailTrigger = ({ identifier, step, subscriberVariables, actorVariables }) => {
  const { payload, overrides } = step || {};

  const curlSnippet = getCurlTriggerSnippet(identifier, subscriberVariables, actorVariables, payload, overrides);

  return (
    <>
      <TriggerTitle>Trigger information</TriggerTitle>
      {curlSnippet}
    </>
  );
};
