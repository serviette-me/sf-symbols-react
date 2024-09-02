import { IconProps } from "../../types"

export default function TwoOneCircleIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301C4.8667 9.3651 9.3657 4.8671 14.9297 4.8671C20.4937 4.8671 25.0057 9.3651 25.0057 14.9301C25.0057 20.4941 20.4937 24.9921 14.9297 24.9921ZM10.0627 20.0021H14.2047C14.9157 20.0021 15.1897 19.5101 15.1897 18.9901C15.1897 18.4711 14.9157 17.9781 14.2047 17.9781H11.8947V17.8691L13.2757 16.2281C14.2867 15.0391 15.0257 14.0681 15.0257 12.6051C15.0257 10.6501 13.6857 9.5701 11.8397 9.5701C10.1987 9.5701 8.8317 10.7461 8.8317 12.1821C8.8317 12.8381 9.2147 13.3301 9.9117 13.3301C10.4317 13.3301 10.8557 13.0701 11.0467 12.4281C11.1837 11.9631 11.3617 11.5531 11.8397 11.5531C12.3867 11.5531 12.5507 12.0861 12.5507 12.6741C12.5507 13.6031 11.9357 14.4921 11.1427 15.4901L9.5297 17.5411C9.0097 18.1971 8.8457 18.5531 8.8457 18.9761C8.8457 19.6331 9.2827 20.0021 10.0627 20.0021ZM19.2497 20.1661C20.0017 20.1661 20.5897 19.5781 20.5897 18.8401V11.1561C20.5897 10.1851 20.0017 9.6661 19.0317 9.6661C18.3207 9.6661 17.8417 9.9391 17.3497 10.3081L16.3237 11.1011C15.9277 11.4021 15.7497 11.7171 15.7497 12.1271C15.7497 12.7971 16.2147 13.0571 16.6247 13.0571C16.8577 13.0571 17.0347 12.9881 17.2537 12.8241L17.9237 12.3051V18.8401C17.9237 19.5781 18.5117 20.1661 19.2497 20.1661Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 25.2926C8.4357 25.2926 3.6097 20.4536 3.6097 14.4376C3.6097 8.4356 8.4217 3.5956 14.4377 3.5956C20.4397 3.5956 25.2797 8.4356 25.2797 14.4376C25.2797 20.4536 20.4527 25.2926 14.4377 25.2926ZM9.2967 19.7426H13.7407C14.3417 19.7426 14.6157 19.3316 14.6157 18.8396C14.6157 18.3206 14.3277 17.9236 13.7407 17.9236H10.9647V17.8146L12.6597 15.7366C13.8357 14.3006 14.4377 13.3026 14.4377 11.9766C14.4377 10.0626 13.1387 8.8596 11.2657 8.8596C9.5837 8.8596 8.2307 10.1716 8.2307 11.6076C8.2307 12.1816 8.5727 12.6056 9.1737 12.6056C9.6657 12.6056 10.0217 12.3726 10.1857 11.8266C10.3767 11.1426 10.6367 10.6366 11.2657 10.6366C11.9627 10.6366 12.2637 11.2796 12.2637 12.0446C12.2637 13.0566 11.5797 14.0686 10.8277 15.0256L8.8187 17.5686C8.4357 18.0606 8.2307 18.4026 8.2307 18.8396C8.2307 19.3866 8.5997 19.7426 9.2967 19.7426ZM18.9357 19.9066C19.5777 19.9066 20.0977 19.3866 20.0977 18.7446V10.2676C20.0977 9.4196 19.5917 8.9546 18.7437 8.9546C18.1017 8.9546 17.6367 9.2556 17.2267 9.5706L15.9687 10.5406C15.6547 10.7876 15.4627 11.0746 15.4627 11.4566C15.4627 12.0036 15.8317 12.2906 16.2417 12.2906C16.4747 12.2906 16.6247 12.2226 16.8167 12.0856L17.7737 11.3206V18.7446C17.7737 19.3866 18.2927 19.9066 18.9357 19.9066Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9277 4.2794 14.6977 4.2794C20.4667 4.2794 25.1287 8.9274 25.1287 14.7114C25.1287 20.4804 20.4807 25.1424 14.6977 25.1424ZM9.6937 19.8794H13.9867C14.6427 19.8794 14.9157 19.4274 14.9157 18.9224C14.9157 18.4024 14.6427 17.9644 13.9867 17.9644H11.4567V17.8554L12.9887 16.0094C14.0687 14.6974 14.7517 13.7134 14.7517 12.3044C14.7517 10.3774 13.4257 9.2424 11.5667 9.2424C9.9117 9.2424 8.5587 10.4724 8.5587 11.9224C8.5587 12.5374 8.9137 12.9884 9.5567 12.9884C10.0627 12.9884 10.4587 12.7424 10.6367 12.1544C10.8007 11.5804 11.0197 11.1294 11.5667 11.1294C12.1817 11.1294 12.4277 11.7034 12.4277 12.3864C12.4277 13.3574 11.7717 14.3004 10.9917 15.2854L9.1877 17.5684C8.7367 18.1424 8.5587 18.4844 8.5587 18.9224C8.5587 19.5234 8.9547 19.8794 9.6937 19.8794ZM19.1137 20.0564C19.7967 20.0564 20.3577 19.4964 20.3577 18.7984V10.7464C20.3577 9.8304 19.7967 9.3384 18.8947 9.3384C18.2247 9.3384 17.7457 9.6254 17.2947 9.9664L16.1467 10.8554C15.7907 11.1154 15.6137 11.4164 15.6137 11.8264C15.6137 12.4274 16.0367 12.7014 16.4477 12.7014C16.6797 12.7014 16.8437 12.6324 17.0487 12.4824L17.8557 11.8394V18.7984C17.8557 19.4964 18.4157 20.0564 19.1137 20.0564Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.7127 25.648C7.0957 25.648 1.7777 20.316 1.7777 13.713C1.7777 7.096 7.0957 1.764 13.6987 1.764C20.3167 1.764 25.6617 7.096 25.6617 13.713C25.6617 20.316 20.3297 25.648 13.7127 25.648ZM8.4077 19.236H13.1247C13.5217 19.236 13.7677 18.977 13.7677 18.594C13.7677 18.184 13.5077 17.938 13.1247 17.938H9.6247V17.842L11.8667 14.875C13.1117 13.248 13.5347 12.25 13.5347 11.074C13.5347 9.27 12.4137 7.93 10.5817 7.93C8.9007 7.93 7.6697 9.379 7.6697 10.814C7.6697 11.197 7.9027 11.512 8.3397 11.512C8.7087 11.512 8.9277 11.334 9.0367 10.979C9.2557 9.926 9.6797 9.215 10.5817 9.215C11.5667 9.215 12.0587 10.131 12.0587 11.143C12.0587 12.209 11.4297 13.234 10.6507 14.273L8.0387 17.732C7.8337 18.006 7.6567 18.266 7.6567 18.594C7.6567 18.977 7.9157 19.236 8.4077 19.236ZM18.1977 19.387C18.6347 19.387 18.9907 19.018 18.9907 18.58V8.914C18.9907 8.367 18.6347 8.025 18.0877 8.025C17.6227 8.025 17.2537 8.271 16.9937 8.49L15.3257 9.816C15.1347 9.967 14.9977 10.172 14.9977 10.459C14.9977 10.801 15.2307 11.047 15.5727 11.047C15.7497 11.047 15.8457 10.992 15.9687 10.91L17.3907 9.748V18.58C17.3907 19.018 17.7597 19.387 18.1977 19.387Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C20.3987 2.7891 25.4707 7.8341 25.4707 14.1231C25.4707 20.4121 20.4117 25.4711 14.1227 25.4711ZM8.8047 19.5781H13.4397C13.9727 19.5781 14.2597 19.2231 14.2597 18.7301C14.2597 18.2241 13.9587 17.8961 13.4397 17.8961H10.3637V17.7871L12.2497 15.4221C13.5627 13.8081 14.0547 12.8101 14.0547 11.5531C14.0547 9.6931 12.7827 8.3941 10.9097 8.3941C9.1737 8.3941 7.8477 9.8031 7.8477 11.2241C7.8477 11.7581 8.1617 12.1401 8.7087 12.1401C9.1737 12.1401 9.4747 11.9221 9.6247 11.4431C9.8577 10.6091 10.1717 10.0491 10.8967 10.0491C11.6757 10.0491 12.0857 10.7461 12.0857 11.6481C12.0857 12.7011 11.3477 13.7811 10.6097 14.7111L8.3667 17.5821C8.0667 17.9651 7.8337 18.3061 7.8337 18.7301C7.8337 19.2231 8.1617 19.5781 8.8047 19.5781ZM18.7437 19.7281C19.3187 19.7281 19.7827 19.2501 19.7827 18.6621V9.6801C19.7827 8.9281 19.3187 8.5041 18.5667 8.5041C17.9787 8.5041 17.4997 8.8051 17.1577 9.0781L15.7367 10.1851C15.4627 10.3771 15.2847 10.6501 15.2847 11.0191C15.2847 11.4981 15.5997 11.7851 16.0097 11.7851C16.2287 11.7851 16.3657 11.7171 16.5297 11.5941L17.6777 10.6781V18.6621C17.6777 19.2501 18.1567 19.7281 18.7437 19.7281Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9457 25.5664C7.4917 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C20.3847 2.3244 25.5667 7.4924 25.5667 13.9454C25.5667 20.3984 20.3987 25.5664 13.9457 25.5664ZM8.5317 19.4684H13.2757C13.7537 19.4684 14.0547 19.1544 14.0547 18.6754C14.0547 18.1564 13.7407 17.8694 13.2757 17.8694H10.0347V17.7594L12.0317 15.2304C13.3987 13.5354 13.8497 12.5234 13.8497 11.3204C13.8497 9.4744 12.5917 8.1344 10.7047 8.1344C8.9547 8.1344 7.6287 9.5844 7.6287 11.0054C7.6287 11.5114 7.9297 11.8674 8.4487 11.8674C8.9007 11.8674 9.1737 11.6624 9.3107 11.2114C9.5707 10.2954 9.9117 9.7204 10.6917 9.7204C11.5257 9.7204 11.9767 10.4454 11.9767 11.4164C11.9767 12.5094 11.2247 13.6174 10.4997 14.5464L8.1207 17.5824C7.8617 17.9104 7.6157 18.2524 7.6157 18.6754C7.6157 19.1404 7.9157 19.4684 8.5317 19.4684ZM18.6207 19.6194C19.1677 19.6194 19.6187 19.1684 19.6187 18.6214V9.3514C19.6187 8.6544 19.1817 8.2444 18.4707 8.2444C17.8967 8.2444 17.4317 8.5584 17.1037 8.8044L15.5997 9.9664C15.3667 10.1584 15.1757 10.4184 15.1757 10.7734C15.1757 11.1974 15.4627 11.4984 15.8727 11.4984C16.0917 11.4984 16.2287 11.4294 16.3657 11.3344L17.6227 10.3224V18.6214C17.6227 19.1684 18.0737 19.6194 18.6207 19.6194Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C20.4257 3.1309 25.3887 8.0939 25.3887 14.2599C25.3887 20.4259 20.4257 25.3889 14.2597 25.3889ZM9.0237 19.6469H13.5757C14.1227 19.6469 14.4097 19.2769 14.4097 18.7849C14.4097 18.2659 14.1227 17.9099 13.5757 17.9099H10.6227V17.8009L12.4277 15.5589C13.6857 14.0269 14.2187 13.0159 14.2187 11.7309C14.2187 9.8579 12.9337 8.5999 11.0607 8.5999C9.3517 8.5999 8.0117 9.9529 8.0117 11.3889C8.0117 11.9359 8.3397 12.3319 8.9137 12.3319C9.3927 12.3319 9.7067 12.1129 9.8707 11.6079C10.0897 10.8419 10.3767 10.3089 11.0607 10.3089C11.7987 10.3089 12.1677 10.9789 12.1677 11.8259C12.1677 12.8649 11.4437 13.9039 10.7047 14.8479L8.5727 17.5819C8.2307 18.0059 8.0117 18.3479 8.0117 18.7719C8.0117 19.2909 8.3397 19.6469 9.0237 19.6469ZM18.8257 19.8109C19.4277 19.8109 19.9197 19.3049 19.9197 18.6899V9.9399C19.9197 9.1469 19.4417 8.6949 18.6487 8.6949C18.0327 8.6949 17.5547 8.9959 17.1857 9.2829L15.8317 10.3359C15.5447 10.5549 15.3537 10.8419 15.3537 11.2109C15.3537 11.7169 15.6957 12.0039 16.1057 12.0039C16.3377 12.0039 16.4887 11.9359 16.6527 11.8129L17.7187 10.9509V18.6899C17.7187 19.3049 18.2107 19.8109 18.8257 19.8109Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.4117 25.7712C6.5757 25.7712 1.0387 20.2342 1.0387 13.4122C1.0387 6.5902 6.5757 1.0392 13.3987 1.0392C20.2347 1.0392 25.7717 6.5902 25.7717 13.4122C25.7717 20.2342 20.2347 25.7712 13.4117 25.7712ZM8.2307 18.9352H12.9197C13.1937 18.9352 13.3707 18.7442 13.3707 18.4842C13.3707 18.2112 13.1937 18.0192 12.9197 18.0192H9.0917V17.9652L11.6347 14.3962C12.7417 12.8792 13.1247 11.8812 13.1247 10.7322C13.1247 9.0232 12.1677 7.6562 10.4177 7.6562C8.8187 7.6562 7.7387 9.1192 7.7387 10.5682C7.7387 10.8012 7.8887 11.0472 8.2027 11.0472C8.4487 11.0472 8.6137 10.9102 8.6547 10.6782C8.8457 9.4332 9.3657 8.5722 10.4317 8.5722C11.6347 8.5722 12.1547 9.7072 12.1547 10.7872C12.1547 11.8122 11.7167 12.7282 10.8557 13.9182L7.9437 17.9372C7.8067 18.1292 7.7247 18.2932 7.7247 18.4982C7.7247 18.7712 7.9157 18.9352 8.2307 18.9352ZM17.6507 19.0722C17.9237 19.0722 18.1697 18.8262 18.1697 18.5252V8.3402C18.1697 7.9982 17.9237 7.7652 17.5817 7.7652C17.2677 7.7652 17.0217 7.9162 16.8297 8.0802L14.9707 9.6112C14.8337 9.7202 14.7517 9.8442 14.7517 10.0352C14.7517 10.2672 14.9157 10.4592 15.1617 10.4592C15.2847 10.4592 15.3667 10.4182 15.4487 10.3492L17.1037 9.0102V18.5252C17.1037 18.8262 17.3497 19.0722 17.6507 19.0722Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481C0.6697 6.3031 6.3167 0.6701 13.2477 0.6701C20.1937 0.6701 25.8257 6.3031 25.8257 13.2481C25.8257 20.1801 20.1937 25.8261 13.2477 25.8261ZM8.1487 18.7711H12.8237C13.0297 18.7711 13.1797 18.6211 13.1797 18.4161C13.1797 18.2111 13.0297 18.0601 12.8237 18.0601H8.8047V18.0061L11.5257 14.1501C12.5507 12.6871 12.9197 11.6891 12.9197 10.5551C12.9197 8.8871 12.0447 7.5061 10.3357 7.5061C8.7777 7.5061 7.7657 8.9691 7.7657 10.4451C7.7657 10.5961 7.8747 10.8011 8.1207 10.8011C8.3127 10.8011 8.4487 10.6781 8.4627 10.5001C8.6407 9.1741 9.2007 8.2171 10.3637 8.2171C11.6617 8.2171 12.2087 9.4881 12.2087 10.5961C12.2087 11.6071 11.8667 12.4691 10.9647 13.7261L7.8887 18.0331C7.7797 18.1831 7.7517 18.3061 7.7517 18.4431C7.7517 18.6621 7.9297 18.7711 8.1487 18.7711ZM17.3637 18.8941C17.5687 18.8941 17.7457 18.7171 17.7457 18.4981V8.0391C17.7457 7.7931 17.5547 7.6151 17.3227 7.6151C17.0897 7.6151 16.8987 7.7241 16.7477 7.8611L14.7797 9.5021C14.6837 9.5841 14.6287 9.6661 14.6287 9.8031C14.6287 9.9941 14.7517 10.1441 14.9567 10.1441C15.0527 10.1441 15.1077 10.1171 15.1757 10.0621L16.9527 8.6271V18.4981C16.9527 18.7171 17.1447 18.8941 17.3637 18.8941Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
