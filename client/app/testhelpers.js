// Returns an element based on a parent element and selector
export const findIn = (element, selector) => {
  return angular.element(element[0].querySelector(selector));
};

// Returns a compiled element for a given markup
export const getCompiledElement = (compile, parentScope, markup) => {
  const element = angular.element(markup);
  const compiledElement = compile(element)(parentScope);
  parentScope.$digest();
  return compiledElement;
};
