import React from 'react';

/**
 * - parameter is the value present in the context initially. Can be an object, string, ...
 * - AuthContext is an object which contains components
 */
const EligibilityTestContext = React.createContext({
  performNewTest: () => {},
});

export default EligibilityTestContext;
