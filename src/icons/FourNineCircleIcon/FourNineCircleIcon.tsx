import { IconProps } from "../../types"

export default function FourNineCircleIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.873046875 29.859375"
          className={className}
        >
          <path
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301C4.8667 9.3651 9.3657 4.8671 14.9297 4.8671C20.4937 4.8671 25.0057 9.3651 25.0057 14.9301C25.0057 20.4941 20.4937 24.9921 14.9297 24.9921ZM17.8557 16.4201C18.8667 16.4201 19.4547 15.6681 19.6737 14.7931H19.6877V15.5451C19.6877 17.3361 19.3727 18.2661 18.7987 18.2661C18.5117 18.2661 18.3477 18.1151 18.1427 17.7051C17.8827 17.1991 17.5547 16.9941 17.0347 16.9941C16.2557 16.9941 15.9827 17.5141 15.9827 18.0601C15.9827 18.2111 15.9957 18.4431 16.0507 18.6071C16.3927 19.7691 17.4727 20.2891 18.6897 20.2891C21.3827 20.2891 22.1757 17.5821 22.1757 14.8891C22.1757 12.5921 21.4507 9.5701 18.7307 9.5701C16.6937 9.5701 15.6267 11.2521 15.6267 13.1931C15.6267 14.8201 16.2697 16.4201 17.8557 16.4201ZM12.2637 20.1931C12.9607 20.1931 13.5077 19.8241 13.5077 18.9221V18.2931H13.6037C14.3827 18.2931 14.5877 17.8011 14.5877 17.2671C14.5877 16.6251 14.2867 16.2561 13.6167 16.2561H13.5077V11.5661C13.5077 10.3631 12.7147 9.6931 11.5117 9.6931C9.8297 9.6931 9.3517 10.9511 8.9007 12.2501L7.8337 15.2581C7.6287 15.8051 7.5057 16.3651 7.5057 16.8711C7.5057 17.8141 8.0257 18.2931 9.0097 18.2931H11.0327V18.9221C11.0327 19.7971 11.5937 20.1931 12.2637 20.1931ZM18.7847 14.5881C18.3337 14.5881 18.1017 14.0271 18.1017 13.0981C18.1017 12.1821 18.3477 11.6211 18.7847 11.6211C19.2227 11.6211 19.4547 12.1951 19.4547 13.1521C19.4547 14.0411 19.2227 14.5881 18.7847 14.5881ZM11.1157 16.3381H9.6247V16.2281L11.0607 11.6891H11.1157Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.875 28.888671875"
          className={className}
        >
          <path
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 25.2926C8.4357 25.2926 3.6097 20.4536 3.6097 14.4376C3.6097 8.4356 8.4217 3.5956 14.4377 3.5956C20.4397 3.5956 25.2797 8.4356 25.2797 14.4376C25.2797 20.4536 20.4527 25.2926 14.4377 25.2926ZM17.5687 16.0376C18.6347 16.0376 19.3457 15.2986 19.6057 14.2736H19.6467V14.7246C19.6467 16.3786 19.4007 18.2106 18.3337 18.2106C17.8967 18.2106 17.6097 17.9236 17.3767 17.4176C17.1447 16.9536 16.8437 16.7476 16.3787 16.7476C15.7087 16.7476 15.4487 17.1996 15.4487 17.7046C15.4487 17.8556 15.4767 18.0606 15.5177 18.2246C15.8457 19.4006 16.9807 20.0156 18.2657 20.0156C21.0137 20.0156 21.8207 17.1176 21.8207 14.3696C21.8207 11.9356 21.0407 8.8726 18.2927 8.8726C16.2417 8.8726 15.1077 10.5956 15.1077 12.6326C15.1077 14.3696 15.8727 16.0376 17.5687 16.0376ZM11.6487 19.9336C12.2497 19.9336 12.7417 19.5916 12.7417 18.8126V17.8146H13.0297C13.6857 17.8146 13.9177 17.3906 13.9177 16.8986C13.9177 16.3516 13.6447 15.9956 13.0427 15.9956H12.7417V10.6506C12.7417 9.5706 12.0317 8.9826 10.9787 8.9826C9.6657 8.9826 9.2007 9.8576 8.7777 10.9236L7.0277 15.0796C6.8087 15.6266 6.7127 16.0786 6.7127 16.5426C6.7127 17.3356 7.1917 17.8146 8.0257 17.8146H10.5547V18.8126C10.5547 19.6056 11.1017 19.9336 11.6487 19.9336ZM18.3337 14.3826C17.6097 14.3826 17.2947 13.5076 17.2947 12.5506C17.2947 11.5666 17.6367 10.6916 18.3337 10.6916C19.0727 10.6916 19.4007 11.5796 19.4007 12.5786C19.4007 13.5486 19.0587 14.3826 18.3337 14.3826ZM10.6227 16.0506H8.6137V15.9546L10.5687 10.8416H10.6227Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.408203125 29.408203125"
          className={className}
        >
          <path
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9277 4.2794 14.6977 4.2794C20.4667 4.2794 25.1287 8.9274 25.1287 14.7114C25.1287 20.4804 20.4807 25.1424 14.6977 25.1424ZM17.7187 16.2424C18.7577 16.2424 19.4007 15.5044 19.6467 14.5604H19.6737V15.1624C19.6737 16.8844 19.3867 18.2524 18.5797 18.2524C18.2247 18.2524 18.0057 18.0334 17.7867 17.5824C17.5407 17.0894 17.2267 16.8844 16.7347 16.8844C15.9957 16.8844 15.7367 17.3774 15.7367 17.8964C15.7367 18.0474 15.7497 18.2654 15.8047 18.4294C16.1327 19.6054 17.2407 20.1664 18.4977 20.1664C21.2047 20.1664 22.0117 17.3634 22.0117 14.6564C22.0117 12.2914 21.2597 9.2424 18.5257 9.2424C16.4747 9.2424 15.3807 10.9514 15.3807 12.9334C15.3807 14.6154 16.0777 16.2424 17.7187 16.2424ZM11.9767 20.0704C12.6327 20.0704 13.1527 19.7144 13.1527 18.8804V18.0744H13.3297C14.0547 18.0744 14.2737 17.6094 14.2737 17.1034C14.2737 16.5024 13.9867 16.1324 13.3437 16.1324H13.1527V11.1424C13.1527 9.9944 12.4007 9.3654 11.2657 9.3654C9.7477 9.3654 9.2827 10.4454 8.8457 11.6344L7.4507 15.1894C7.2457 15.7224 7.1367 16.2424 7.1367 16.7204C7.1367 17.5954 7.6287 18.0744 8.5447 18.0744H10.8007V18.8804C10.8007 19.7144 11.3617 20.0704 11.9767 20.0704ZM18.5667 14.4924C17.9917 14.4924 17.7187 13.7954 17.7187 12.8514C17.7187 11.8944 18.0057 11.1974 18.5667 11.1974C19.1547 11.1974 19.4277 11.9084 19.4277 12.8794C19.4277 13.8224 19.1407 14.4924 18.5667 14.4924ZM10.8827 16.2144H9.1467V16.1054L10.8277 11.2934H10.8827Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.42578125 27.42578125"
          className={className}
        >
          <path
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.7127 25.648C7.0957 25.648 1.7777 20.316 1.7777 13.713C1.7777 7.096 7.0957 1.764 13.6987 1.764C20.3167 1.764 25.6617 7.096 25.6617 13.713C25.6617 20.316 20.3297 25.648 13.7127 25.648ZM17.0217 15.422C18.2107 15.422 19.0447 14.588 19.3457 13.385H19.3867V13.563C19.3867 15.217 19.1677 18.17 17.4587 18.17C16.7207 18.17 16.2557 17.65 15.9957 16.926C15.8317 16.516 15.6137 16.352 15.2847 16.352C14.8207 16.352 14.6157 16.666 14.6157 17.035C14.6157 17.186 14.6567 17.363 14.7107 17.541C15.0117 18.744 16.1187 19.482 17.4317 19.482C20.1387 19.482 20.8907 16.256 20.8907 13.563C20.8907 10.992 20.0977 7.943 17.4587 7.943C15.4627 7.943 14.3277 9.707 14.3277 11.813C14.3277 13.658 15.2167 15.422 17.0217 15.422ZM10.8967 19.4C11.3067 19.4 11.6487 19.113 11.6487 18.607V16.912H12.2777C12.7007 16.912 12.9197 16.639 12.9197 16.256C12.9197 15.887 12.7007 15.613 12.2777 15.613H11.6487V9.201C11.6487 8.408 11.1287 8.012 10.4317 8.012C9.6657 8.012 9.2967 8.422 8.9827 9.105L6.1937 14.93C6.0157 15.354 5.9477 15.641 5.9477 15.982C5.9477 16.529 6.3167 16.912 6.8767 16.912H10.1307V18.607C10.1307 19.168 10.5277 19.4 10.8967 19.4ZM17.4727 14.178C16.3377 14.178 15.8457 12.893 15.8457 11.758C15.8457 10.582 16.3787 9.242 17.4727 9.242C18.6347 9.242 19.1547 10.609 19.1547 11.758C19.1547 12.947 18.5937 14.178 17.4727 14.178ZM10.1577 15.641H7.3147V15.572L10.1167 9.488H10.1577Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.24609375 28.24609375"
          className={className}
        >
          <path
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C20.3987 2.7891 25.4707 7.8341 25.4707 14.1231C25.4707 20.4121 20.4117 25.4711 14.1227 25.4711ZM17.3907 15.7911C18.4847 15.7911 19.2777 15.0531 19.5777 13.9311H19.6187V14.1911C19.6187 15.7641 19.4137 18.1701 18.0467 18.1701C17.4997 18.1701 17.1307 17.7871 16.8847 17.2261C16.6797 16.7751 16.3927 16.5841 15.9687 16.5841C15.3667 16.5841 15.1077 17.0081 15.1077 17.4731C15.1077 17.6231 15.1487 17.8011 15.1897 17.9651C15.4907 19.1541 16.6527 19.8381 18.0057 19.8381C20.7817 19.8381 21.5877 16.8031 21.5877 14.0271C21.5877 11.4981 20.7817 8.4221 18.0197 8.4221C15.9547 8.4221 14.7797 10.1581 14.7797 12.2641C14.7797 14.0681 15.6137 15.7911 17.3907 15.7911ZM11.2657 19.7561C11.7987 19.7561 12.2497 19.4281 12.2497 18.7171V17.4861H12.6597C13.2347 17.4861 13.4807 17.1171 13.4807 16.6521C13.4807 16.1741 13.2347 15.8181 12.6597 15.8181H12.2497V10.0491C12.2497 9.0641 11.5937 8.5171 10.6507 8.5171C9.5567 8.5171 9.1057 9.1461 8.7087 10.0761L6.5077 14.9571C6.2887 15.4901 6.1937 15.8871 6.1937 16.3241C6.1937 17.0351 6.6577 17.4861 7.3827 17.4861H10.2537V18.7171C10.2537 19.4691 10.7867 19.7561 11.2657 19.7561ZM18.0607 14.2321C17.1447 14.2321 16.7757 13.1801 16.7757 12.1811C16.7757 11.1701 17.1987 10.0901 18.0607 10.0901C18.9767 10.0901 19.3597 11.1831 19.3597 12.1951C19.3597 13.2211 18.9487 14.2321 18.0607 14.2321ZM10.3087 15.8731H7.9567V15.7771L10.2537 10.2811H10.3087Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.890625 27.890625"
          className={className}
        >
          <path
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9457 25.5664C7.4917 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C20.3847 2.3244 25.5667 7.4924 25.5667 13.9454C25.5667 20.3984 20.3987 25.5664 13.9457 25.5664ZM17.2817 15.6544C18.4027 15.6544 19.2367 14.9164 19.5507 13.7404H19.6057V13.8904C19.6057 15.4084 19.4137 18.1424 17.8827 18.1424C17.2677 18.1424 16.8577 17.7184 16.6117 17.1304C16.4197 16.6794 16.1467 16.5024 15.7367 16.5024C15.1617 16.5024 14.9157 16.8844 14.9157 17.3364C14.9157 17.5004 14.9567 17.6644 14.9977 17.8284C15.2847 19.0174 16.4747 19.7424 17.8417 19.7424C20.6447 19.7424 21.4647 16.6384 21.4647 13.8364C21.4647 11.2524 20.6447 8.1624 17.8687 8.1624C15.7907 8.1624 14.5877 9.9124 14.5877 12.0584C14.5877 13.9044 15.4767 15.6544 17.2817 15.6544ZM11.0327 19.6464C11.5527 19.6464 11.9627 19.3324 11.9627 18.6754V17.3084H12.4547C12.9887 17.3084 13.2347 16.9664 13.2347 16.5024C13.2347 16.0644 13.0017 15.7224 12.4547 15.7224H11.9627V9.7204C11.9627 8.7774 11.3477 8.2444 10.4587 8.2444C9.4887 8.2444 9.0367 8.7364 8.6547 9.5844L6.2207 14.8884C5.9887 15.4214 5.9067 15.7774 5.9067 16.2014C5.9067 16.8574 6.3577 17.3084 7.0277 17.3084H10.0897V18.6754C10.0897 19.4004 10.6097 19.6464 11.0327 19.6464ZM17.8967 14.1504C16.8847 14.1504 16.4747 12.9884 16.4747 11.9764C16.4747 10.9514 16.9397 9.7484 17.8967 9.7484C18.9217 9.7484 19.3457 10.9514 19.3457 11.9764C19.3457 13.0294 18.8807 14.1504 17.8967 14.1504ZM10.1307 15.7634H7.5877V15.6684L10.0757 9.9664H10.1307Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.51953125 28.51953125"
          className={className}
        >
          <path
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C20.4257 3.1309 25.3887 8.0939 25.3887 14.2599C25.3887 20.4259 20.4257 25.3889 14.2597 25.3889ZM17.4727 15.9009C18.5527 15.9009 19.3047 15.1619 19.5917 14.0819H19.6327V14.4239C19.6327 16.0239 19.4007 18.1839 18.1697 18.1839C17.6637 18.1839 17.3357 17.8419 17.1037 17.3089C16.8847 16.8579 16.5977 16.6659 16.1467 16.6659C15.5177 16.6659 15.2577 17.0899 15.2577 17.5679C15.2577 17.7329 15.2847 17.9099 15.3257 18.0739C15.6407 19.2639 16.7887 19.9199 18.1157 19.9199C20.8907 19.9199 21.6977 16.9399 21.6977 14.1779C21.6977 11.6899 20.9047 8.6129 18.1427 8.6129C16.0777 8.6129 14.9157 10.3499 14.9157 12.4279C14.9157 14.1919 15.7227 15.9009 17.4727 15.9009ZM11.4297 19.8239C11.9907 19.8239 12.4547 19.4959 12.4547 18.7579V17.6229H12.8237C13.4257 17.6229 13.6717 17.2399 13.6717 16.7619C13.6717 16.2419 13.4117 15.9009 12.8237 15.9009H12.4547V10.3089C12.4547 9.2829 11.7847 8.7089 10.7867 8.7089C9.5977 8.7089 9.1467 9.4469 8.7367 10.4449L6.7267 15.0119C6.5077 15.5449 6.4117 15.9689 6.4117 16.4199C6.4117 17.1579 6.8907 17.6229 7.6567 17.6229H10.3907V18.7579C10.3907 19.5239 10.9097 19.8239 11.4297 19.8239ZM18.1837 14.2869C17.3497 14.2869 16.9937 13.3169 16.9937 12.3459C16.9937 11.3479 17.3907 10.3499 18.1837 10.3499C19.0177 10.3499 19.3727 11.3479 19.3727 12.3599C19.3727 13.3579 18.9907 14.2869 18.1837 14.2869ZM10.4457 15.9549H8.2437V15.8599L10.3907 10.5269H10.4457Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.810546875 26.810546875"
          className={className}
        >
          <path
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.4117 25.7712C6.5757 25.7712 1.0387 20.2342 1.0387 13.4122C1.0387 6.5902 6.5757 1.0392 13.3987 1.0392C20.2347 1.0392 25.7717 6.5902 25.7717 13.4122C25.7717 20.2342 20.2347 25.7712 13.4117 25.7712ZM16.6797 15.1212C17.9647 15.1212 18.8127 14.1642 19.0587 12.9062H19.1137V13.1252C19.1137 14.9702 18.8397 18.2242 16.8847 18.2242C16.0097 18.2242 15.4627 17.5822 15.1897 16.6522C15.0527 16.2972 14.9027 16.1742 14.6837 16.1742C14.3687 16.1742 14.2187 16.3792 14.2187 16.6522C14.2187 16.7892 14.2597 16.9802 14.3147 17.1582C14.6567 18.3882 15.6547 19.1542 16.8847 19.1542C19.4827 19.1542 20.1247 15.7632 20.1247 13.1932C20.1247 10.6502 19.3867 7.6562 16.9257 7.6562C15.0387 7.6562 13.9867 9.4472 13.9867 11.4982C13.9867 13.3442 14.8747 15.1212 16.6797 15.1212ZM10.7187 19.0722C10.9917 19.0722 11.2107 18.8402 11.2107 18.5392V16.3792H12.0447C12.3317 16.3792 12.4957 16.2012 12.4957 15.9142C12.4957 15.6682 12.3187 15.4762 12.0447 15.4762H11.2107V8.5312C11.2107 7.9292 10.8277 7.7112 10.4177 7.7112C9.8987 7.7112 9.6527 7.9982 9.4197 8.4902L6.1657 14.9702C6.0427 15.2582 5.9887 15.4762 5.9887 15.7222C5.9887 16.1052 6.2477 16.3792 6.6717 16.3792H10.1987V18.5392C10.1987 18.8812 10.4317 19.0722 10.7187 19.0722ZM16.9257 14.2322C15.6267 14.2322 14.9977 12.7972 14.9977 11.4842C14.9977 10.1172 15.6407 8.5722 16.9257 8.5722C18.2657 8.5722 18.9077 10.1442 18.9077 11.4842C18.9077 12.8382 18.1977 14.2322 16.9257 14.2322ZM10.2127 15.4902H6.9457V15.4352L10.1577 8.8592H10.2127Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.49609375 26.49609375"
          className={className}
        >
          <path
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481C0.6697 6.3031 6.3167 0.6701 13.2477 0.6701C20.1937 0.6701 25.8257 6.3031 25.8257 13.2481C25.8257 20.1801 20.1937 25.8261 13.2477 25.8261ZM16.4887 14.9571C17.8417 14.9571 18.6757 13.9451 18.9217 12.6461H18.9767V12.8921C18.9767 14.8341 18.6757 18.2381 16.5837 18.2381C15.6407 18.2381 15.0667 17.5271 14.7657 16.5151C14.6567 16.1871 14.5467 16.0781 14.3687 16.0781C14.1367 16.0781 14.0137 16.2281 14.0137 16.4471C14.0137 16.5701 14.0547 16.7621 14.1227 16.9671C14.4647 18.1971 15.4077 18.9631 16.6117 18.9631C19.1407 18.9631 19.7417 15.5041 19.7417 13.0021C19.7417 10.4731 19.0317 7.5061 16.6387 7.5061C14.8207 7.5061 13.8087 9.3101 13.8087 11.3201C13.8087 13.1801 14.6977 14.9571 16.4887 14.9571ZM10.6227 18.8941C10.8277 18.8941 10.9917 18.6891 10.9917 18.4841V16.0921H11.9217C12.1547 16.0921 12.2907 15.9691 12.2907 15.7361C12.2907 15.5311 12.1137 15.3941 11.9217 15.3941H10.9917V8.1761C10.9917 7.6701 10.6637 7.5331 10.4047 7.5331C10.0077 7.5331 9.8167 7.7791 9.6387 8.1481L6.1657 14.9841C6.0567 15.2031 6.0017 15.3811 6.0017 15.5721C6.0017 15.8731 6.2067 16.0921 6.5757 16.0921H10.2267V18.4841C10.2267 18.7301 10.3767 18.8941 10.6227 18.8941ZM16.6387 14.2601C15.2577 14.2601 14.5737 12.7281 14.5737 11.3341C14.5737 9.8711 15.2577 8.2171 16.6387 8.2171C18.0607 8.2171 18.7847 9.9121 18.7847 11.3341C18.7847 12.7691 17.9917 14.2601 16.6387 14.2601ZM10.2267 15.3941H6.7537V15.3671L10.1717 8.5171H10.2267Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
