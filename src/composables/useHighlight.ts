import type { Ref } from "vue";
import { highlighter, getCodeBlockDetails } from "@/modules/shiki";

export const useHighlight = (...elements: Ref<HTMLElement>[]): void => {
  elements.forEach((element) => {
    const { snippet, ...options } = getCodeBlockDetails(element.value);
    element.value.innerHTML = highlighter.codeToHtml(snippet, options);
  });
};
