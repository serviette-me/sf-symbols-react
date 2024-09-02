import { IconProps } from "../../types"

export default function TwoFourCircleIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301C4.8667 9.3651 9.3657 4.8671 14.9297 4.8671C20.4937 4.8671 25.0057 9.3651 25.0057 14.9301C25.0057 20.4941 20.4937 24.9921 14.9297 24.9921ZM9.1187 20.0021H13.2617C13.9867 20.0021 14.2457 19.5101 14.2457 18.9901C14.2457 18.4711 13.9867 17.9781 13.2617 17.9781H10.9647V17.8691L12.3457 16.2281C13.3437 15.0391 14.0957 14.0681 14.0957 12.6051C14.0957 10.6501 12.7417 9.5701 10.8967 9.5701C9.2697 9.5701 7.9027 10.7461 7.9027 12.1821C7.9027 12.8381 8.2847 13.3301 8.9687 13.3301C9.4887 13.3301 9.9257 13.0701 10.1037 12.4281C10.2407 11.9631 10.4317 11.5531 10.8967 11.5531C11.4567 11.5531 11.6207 12.0861 11.6207 12.6741C11.6207 13.6031 11.0057 14.4921 10.2127 15.4901L8.5857 17.5411C8.0667 18.1971 7.9157 18.5531 7.9157 18.9761C7.9157 19.6331 8.3397 20.0021 9.1187 20.0021ZM19.8787 20.1931C20.5627 20.1931 21.1097 19.8241 21.1097 18.9221V18.2931H21.2047C21.9847 18.2931 22.2027 17.8011 22.2027 17.2671C22.2027 16.6251 21.8887 16.2561 21.2327 16.2561H21.1097V11.5661C21.1097 10.3631 20.3167 9.6931 19.1137 9.6931C17.4317 9.6931 16.9667 10.9511 16.5157 12.2501L15.4357 15.2581C15.2307 15.8051 15.1207 16.3651 15.1207 16.8711C15.1207 17.8141 15.6267 18.2931 16.6117 18.2931H18.6347V18.9221C18.6347 19.7971 19.1957 20.1931 19.8787 20.1931ZM18.7167 16.3381H17.2267V16.2281L18.6617 11.6891H18.7167Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 25.2926C8.4357 25.2926 3.6097 20.4536 3.6097 14.4376C3.6097 8.4356 8.4217 3.5956 14.4377 3.5956C20.4397 3.5956 25.2797 8.4356 25.2797 14.4376C25.2797 20.4536 20.4527 25.2926 14.4377 25.2926ZM8.3257 19.7426H12.7697C13.3707 19.7426 13.6447 19.3316 13.6447 18.8396C13.6447 18.3206 13.3577 17.9236 12.7697 17.9236H9.9937V17.8146L11.6757 15.7366C12.8657 14.3006 13.4667 13.3026 13.4667 11.9766C13.4667 10.0626 12.1677 8.8596 10.2947 8.8596C8.6137 8.8596 7.2597 10.1716 7.2597 11.6076C7.2597 12.1816 7.6017 12.6056 8.2027 12.6056C8.6957 12.6056 9.0367 12.3726 9.2147 11.8266C9.4067 11.1426 9.6657 10.6366 10.2947 10.6366C10.9787 10.6366 11.2927 11.2796 11.2927 12.0446C11.2927 13.0566 10.6097 14.0686 9.8437 15.0256L7.8477 17.5686C7.4647 18.0606 7.2597 18.4026 7.2597 18.8396C7.2597 19.3866 7.6157 19.7426 8.3257 19.7426ZM19.6187 19.9336C20.2067 19.9336 20.6987 19.5916 20.6987 18.8126V17.8146H20.9867C21.6427 17.8146 21.8747 17.3906 21.8747 16.8986C21.8747 16.3516 21.6017 15.9956 20.9997 15.9956H20.6987V10.6506C20.6987 9.5706 19.9887 8.9826 18.9487 8.9826C17.6227 8.9826 17.1577 9.8576 16.7477 10.9236L14.9847 15.0796C14.7657 15.6266 14.6697 16.0786 14.6697 16.5426C14.6697 17.3356 15.1487 17.8146 15.9827 17.8146H18.5117V18.8126C18.5117 19.6056 19.0587 19.9336 19.6187 19.9336ZM18.5797 16.0506H16.5707V15.9546L18.5257 10.8416H18.5797Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9277 4.2794 14.6977 4.2794C20.4667 4.2794 25.1287 8.9274 25.1287 14.7114C25.1287 20.4804 20.4807 25.1424 14.6977 25.1424ZM8.7497 19.8794H13.0297C13.6857 19.8794 13.9587 19.4274 13.9587 18.9224C13.9587 18.4024 13.6857 17.9644 13.0297 17.9644H10.4997V17.8554L12.0317 16.0094C13.1247 14.6974 13.7947 13.7134 13.7947 12.3044C13.7947 10.3774 12.4687 9.2424 10.6227 9.2424C8.9547 9.2424 7.6017 10.4724 7.6017 11.9224C7.6017 12.5374 7.9567 12.9884 8.6137 12.9884C9.1187 12.9884 9.5017 12.7424 9.6797 12.1544C9.8437 11.5804 10.0627 11.1294 10.6097 11.1294C11.2387 11.1294 11.4707 11.7034 11.4707 12.3864C11.4707 13.3574 10.8147 14.3004 10.0347 15.2854L8.2437 17.5684C7.7797 18.1424 7.6017 18.4844 7.6017 18.9224C7.6017 19.5234 7.9977 19.8794 8.7497 19.8794ZM19.7557 20.0704C20.3987 20.0704 20.9177 19.7144 20.9177 18.8804V18.0744H21.1097C21.8207 18.0744 22.0387 17.6094 22.0387 17.1034C22.0387 16.5024 21.7517 16.1324 21.1227 16.1324H20.9177V11.1424C20.9177 9.9944 20.1657 9.3654 19.0317 9.3654C17.5277 9.3654 17.0487 10.4454 16.6247 11.6344L15.2167 15.1894C15.0117 15.7224 14.9027 16.2424 14.9027 16.7204C14.9027 17.5954 15.3947 18.0744 16.3107 18.0744H18.5797V18.8804C18.5797 19.7144 19.1267 20.0704 19.7557 20.0704ZM18.6487 16.2144H16.9117V16.1054L18.5937 11.2934H18.6487Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.7127 25.648C7.0957 25.648 1.7777 20.316 1.7777 13.713C1.7777 7.096 7.0957 1.764 13.6987 1.764C20.3167 1.764 25.6617 7.096 25.6617 13.713C25.6617 20.316 20.3297 25.648 13.7127 25.648ZM7.4647 19.236H12.1817C12.5777 19.236 12.8237 18.977 12.8237 18.594C12.8237 18.184 12.5647 17.938 12.1817 17.938H8.6817V17.842L10.9237 14.875C12.1817 13.248 12.5917 12.25 12.5917 11.074C12.5917 9.27 11.4707 7.93 9.6527 7.93C7.9567 7.93 6.7407 9.379 6.7407 10.814C6.7407 11.197 6.9727 11.512 7.3967 11.512C7.7657 11.512 7.9977 11.334 8.0937 10.979C8.3257 9.926 8.7367 9.215 9.6387 9.215C10.6227 9.215 11.1157 10.131 11.1157 11.143C11.1157 12.209 10.4997 13.234 9.7207 14.273L7.1097 17.732C6.9047 18.006 6.7267 18.266 6.7267 18.594C6.7267 18.977 6.9727 19.236 7.4647 19.236ZM18.9627 19.4C19.3727 19.4 19.7147 19.113 19.7147 18.607V16.912H20.3437C20.7817 16.912 20.9867 16.639 20.9867 16.256C20.9867 15.887 20.7817 15.613 20.3437 15.613H19.7147V9.201C19.7147 8.408 19.1957 8.012 18.5117 8.012C17.7327 8.012 17.3767 8.422 17.0487 9.105L14.2597 14.93C14.0817 15.354 14.0137 15.641 14.0137 15.982C14.0137 16.529 14.3827 16.912 14.9437 16.912H18.2107V18.607C18.2107 19.168 18.5937 19.4 18.9627 19.4ZM18.2387 15.641H15.3807V15.572L18.1837 9.488H18.2387Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C20.3987 2.7891 25.4707 7.8341 25.4707 14.1231C25.4707 20.4121 20.4117 25.4711 14.1227 25.4711ZM7.8067 19.5781H12.4547C12.9747 19.5781 13.2617 19.2231 13.2617 18.7301C13.2617 18.2241 12.9607 17.8961 12.4547 17.8961H9.3787V17.7871L11.2517 15.4221C12.5647 13.8081 13.0707 12.8101 13.0707 11.5531C13.0707 9.6931 11.7987 8.3941 9.9117 8.3941C8.1897 8.3941 6.8497 9.8031 6.8497 11.2241C6.8497 11.7581 7.1637 12.1401 7.7107 12.1401C8.1757 12.1401 8.4767 11.9221 8.6267 11.4431C8.8727 10.6091 9.1737 10.0491 9.9117 10.0491C10.6777 10.0491 11.0877 10.7461 11.0877 11.6481C11.0877 12.7011 10.3497 13.7811 9.6117 14.7111L7.3827 17.5821C7.0817 17.9651 6.8357 18.3061 6.8357 18.7301C6.8357 19.2231 7.1637 19.5781 7.8067 19.5781ZM19.4417 19.7561C19.9887 19.7561 20.4397 19.4281 20.4397 18.7171V17.4861H20.8497C21.4237 17.4861 21.6697 17.1171 21.6697 16.6521C21.6697 16.1741 21.4237 15.8181 20.8497 15.8181H20.4397V10.0491C20.4397 9.0641 19.7827 8.5171 18.8257 8.5171C17.7457 8.5171 17.2817 9.1461 16.8847 10.0761L14.6977 14.9571C14.4647 15.4901 14.3827 15.8871 14.3827 16.3241C14.3827 17.0351 14.8477 17.4861 15.5727 17.4861H18.4437V18.7171C18.4437 19.4691 18.9627 19.7561 19.4417 19.7561ZM18.4977 15.8731H16.1467V15.7771L18.4437 10.2811H18.4977Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9457 25.5664C7.4917 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C20.3847 2.3244 25.5667 7.4924 25.5667 13.9454C25.5667 20.3984 20.3987 25.5664 13.9457 25.5664ZM7.5197 19.4684H12.2637C12.7557 19.4684 13.0427 19.1544 13.0427 18.6754C13.0427 18.1564 12.7417 17.8694 12.2637 17.8694H9.0237V17.7594L11.0197 15.2304C12.3867 13.5354 12.8377 12.5234 12.8377 11.3204C12.8377 9.4744 11.5797 8.1344 9.6937 8.1344C7.9437 8.1344 6.6167 9.5844 6.6167 11.0054C6.6167 11.5114 6.9177 11.8674 7.4377 11.8674C7.8887 11.8674 8.1617 11.6624 8.3127 11.2114C8.5587 10.2954 8.9007 9.7204 9.6937 9.7204C10.5137 9.7204 10.9787 10.4454 10.9787 11.4164C10.9787 12.5094 10.2127 13.6174 9.4887 14.5464L7.1097 17.5824C6.8637 17.9104 6.6037 18.2524 6.6037 18.6754C6.6037 19.1404 6.9047 19.4684 7.5197 19.4684ZM19.3597 19.6464C19.8657 19.6464 20.2887 19.3324 20.2887 18.6754V17.3084H20.7677C21.3007 17.3084 21.5467 16.9664 21.5467 16.5024C21.5467 16.0644 21.3147 15.7224 20.7677 15.7224H20.2887V9.7204C20.2887 8.7774 19.6597 8.2444 18.7717 8.2444C17.8147 8.2444 17.3637 8.7364 16.9807 9.5844L14.5327 14.8884C14.3007 15.4214 14.2187 15.7774 14.2187 16.2014C14.2187 16.8574 14.6837 17.3084 15.3397 17.3084H18.4027V18.6754C18.4027 19.4004 18.9217 19.6464 19.3597 19.6464ZM18.4437 15.7634H15.9007V15.6684L18.3887 9.9664H18.4437Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C20.4257 3.1309 25.3887 8.0939 25.3887 14.2599C25.3887 20.4259 20.4257 25.3889 14.2597 25.3889ZM8.0387 19.6469H12.5917C13.1387 19.6469 13.4257 19.2769 13.4257 18.7849C13.4257 18.2659 13.1387 17.9099 12.5917 17.9099H9.6387V17.8009L11.4437 15.5589C12.7007 14.0269 13.2347 13.0159 13.2347 11.7309C13.2347 9.8579 11.9487 8.5999 10.0757 8.5999C8.3667 8.5999 7.0277 9.9529 7.0277 11.3889C7.0277 11.9359 7.3557 12.3319 7.9297 12.3319C8.3947 12.3319 8.7227 12.1129 8.8867 11.6079C9.1057 10.8419 9.3927 10.3089 10.0757 10.3089C10.8147 10.3089 11.1837 10.9789 11.1837 11.8259C11.1837 12.8649 10.4587 13.9039 9.7207 14.8479L7.5877 17.5819C7.2457 18.0059 7.0277 18.3479 7.0277 18.7719C7.0277 19.2909 7.3557 19.6469 8.0387 19.6469ZM19.5237 19.8239C20.0837 19.8239 20.5487 19.4959 20.5487 18.7579V17.6229H20.9177C21.5197 17.6229 21.7517 17.2399 21.7517 16.7619C21.7517 16.2419 21.5057 15.9009 20.9177 15.9009H20.5487V10.3089C20.5487 9.2829 19.8787 8.7089 18.8807 8.7089C17.6917 8.7089 17.2267 9.4469 16.8297 10.4449L14.8207 15.0119C14.6017 15.5449 14.5057 15.9689 14.5057 16.4199C14.5057 17.1579 14.9847 17.6229 15.7497 17.6229H18.4707V18.7579C18.4707 19.5239 19.0037 19.8239 19.5237 19.8239ZM18.5257 15.9549H16.3237V15.8599L18.4847 10.5269H18.5257Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.4117 25.7712C6.5757 25.7712 1.0387 20.2342 1.0387 13.4122C1.0387 6.5902 6.5757 1.0392 13.3987 1.0392C20.2347 1.0392 25.7717 6.5902 25.7717 13.4122C25.7717 20.2342 20.2347 25.7712 13.4117 25.7712ZM7.3827 18.9352H12.0727C12.3457 18.9352 12.5237 18.7442 12.5237 18.4842C12.5237 18.2112 12.3457 18.0192 12.0727 18.0192H8.2437V17.9652L10.7867 14.3962C11.8947 12.8792 12.2777 11.8812 12.2777 10.7322C12.2777 9.0232 11.3207 7.6562 9.5837 7.6562C7.9707 7.6562 6.8907 9.1192 6.8907 10.5682C6.8907 10.8012 7.0407 11.0472 7.3557 11.0472C7.6017 11.0472 7.7657 10.9102 7.8067 10.6782C7.9977 9.4332 8.5177 8.5722 9.5837 8.5722C10.7867 8.5722 11.3067 9.7072 11.3067 10.7872C11.3067 11.8122 10.8687 12.7282 10.0217 13.9182L7.0957 17.9372C6.9587 18.1292 6.8767 18.2932 6.8767 18.4982C6.8767 18.7712 7.0687 18.9352 7.3827 18.9352ZM18.4567 19.0722C18.7307 19.0722 18.9627 18.8402 18.9627 18.5392V16.3792H19.7967C20.0837 16.3792 20.2477 16.2012 20.2477 15.9142C20.2477 15.6682 20.0567 15.4762 19.7967 15.4762H18.9627V8.5312C18.9627 7.9292 18.5667 7.7112 18.1567 7.7112C17.6367 7.7112 17.3907 7.9982 17.1577 8.4902L13.9177 14.9702C13.7817 15.2582 13.7267 15.4762 13.7267 15.7222C13.7267 16.1052 13.9867 16.3792 14.4237 16.3792H17.9377V18.5392C17.9377 18.8812 18.1697 19.0722 18.4567 19.0722ZM17.9507 15.4902H14.6837V15.4352L17.8967 8.8592H17.9507Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481C0.6697 6.3031 6.3167 0.6701 13.2477 0.6701C20.1937 0.6701 25.8257 6.3031 25.8257 13.2481C25.8257 20.1801 20.1937 25.8261 13.2477 25.8261ZM7.3417 18.7711H12.0177C12.2227 18.7711 12.3727 18.6211 12.3727 18.4161C12.3727 18.2111 12.2227 18.0601 12.0177 18.0601H8.0117V18.0061L10.7327 14.1501C11.7437 12.6871 12.1137 11.6891 12.1137 10.5551C12.1137 8.8871 11.2517 7.5061 9.5427 7.5061C7.9707 7.5061 6.9727 8.9691 6.9727 10.4451C6.9727 10.5961 7.0687 10.8011 7.3277 10.8011C7.5197 10.8011 7.6567 10.6781 7.6697 10.5001C7.8337 9.1741 8.4077 8.2171 9.5567 8.2171C10.8557 8.2171 11.4027 9.4881 11.4027 10.5961C11.4027 11.6071 11.0607 12.4691 10.1717 13.7261L7.0817 18.0331C6.9867 18.1831 6.9587 18.3061 6.9587 18.4431C6.9587 18.6621 7.1227 18.7711 7.3417 18.7711ZM18.1977 18.8941C18.4027 18.8941 18.5667 18.6891 18.5667 18.4841V16.0921H19.5097C19.7287 16.0921 19.8657 15.9691 19.8657 15.7361C19.8657 15.5311 19.6877 15.3941 19.5097 15.3941H18.5667V8.1761C18.5667 7.6701 18.2517 7.5331 17.9787 7.5331C17.5817 7.5331 17.4047 7.7791 17.2127 8.1481L13.7407 14.9841C13.6307 15.2031 13.5897 15.3811 13.5897 15.5721C13.5897 15.8731 13.7817 16.0921 14.1507 16.0921H17.8007V18.4841C17.8007 18.7301 17.9507 18.8941 18.1977 18.8941ZM17.8007 15.3941H14.3277V15.3671L17.7597 8.5171H17.8007Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}