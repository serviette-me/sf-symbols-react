import { IconProps } from "../../types"

export default function LtCircleIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301C4.8667 9.3651 9.3657 4.8671 14.9297 4.8671C20.4937 4.8671 25.0057 9.3651 25.0057 14.9301C25.0057 20.4941 20.4937 24.9921 14.9297 24.9921ZM10.5687 20.0161H13.5627C14.1507 20.0161 14.6287 19.5371 14.6287 18.9491C14.6287 18.3611 14.1507 17.8691 13.5627 17.8691H11.8947V10.9781C11.8947 10.2541 11.3067 9.6661 10.5817 9.6661C9.8437 9.6661 9.2557 10.2541 9.2557 10.9781V18.6351C9.2557 19.4821 9.7207 20.0161 10.5687 20.0161ZM17.7457 20.1801C18.4707 20.1801 19.0587 19.5921 19.0587 18.8401V11.9761H19.9197C20.4937 11.9761 20.9727 11.4841 20.9727 10.8961C20.9727 10.3361 20.4937 9.8441 19.9197 9.8441H15.5447C14.9567 9.8441 14.4917 10.3361 14.4917 10.8961C14.4917 11.4841 14.9567 11.9761 15.5447 11.9761H16.4067V18.8401C16.4067 19.5921 16.9937 20.1801 17.7457 20.1801Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 25.2926C8.4357 25.2926 3.6097 20.4536 3.6097 14.4376C3.6097 8.4356 8.4217 3.5956 14.4377 3.5956C20.4397 3.5956 25.2797 8.4356 25.2797 14.4376C25.2797 20.4536 20.4527 25.2926 14.4377 25.2926ZM9.8167 19.7556H13.2757C13.7947 19.7556 14.2327 19.3316 14.2327 18.8126C14.2327 18.2926 13.7947 17.8556 13.2757 17.8556H10.9787V10.1176C10.9787 9.4886 10.4587 8.9686 9.8297 8.9686C9.1877 8.9686 8.6677 9.4886 8.6677 10.1176V18.5526C8.6677 19.2906 9.0777 19.7556 9.8167 19.7556ZM17.4047 19.9196C18.0327 19.9196 18.5527 19.4006 18.5527 18.7576V11.0336H19.8107C20.3297 11.0336 20.7537 10.6096 20.7537 10.0766C20.7537 9.5706 20.3297 9.1466 19.8107 9.1466H14.9567C14.4237 9.1466 14.0137 9.5706 14.0137 10.0766C14.0137 10.6096 14.4237 11.0336 14.9567 11.0336H16.2417V18.7576C16.2417 19.4006 16.7477 19.9196 17.4047 19.9196Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9277 4.2794 14.6977 4.2794C20.4667 4.2794 25.1287 8.9274 25.1287 14.7114C25.1287 20.4804 20.4807 25.1424 14.6977 25.1424ZM10.2127 19.9064H13.4257C13.9867 19.9064 14.4377 19.4414 14.4377 18.8804C14.4377 18.3344 13.9867 17.8694 13.4257 17.8694H11.4567V10.5824C11.4567 9.8984 10.9097 9.3514 10.2267 9.3514C9.5297 9.3514 8.9827 9.8984 8.9827 10.5824V18.6074C8.9827 19.4004 9.4197 19.9064 10.2127 19.9064ZM17.5817 20.0564C18.2657 20.0564 18.8127 19.5094 18.8127 18.8124V11.5394H19.8657C20.4117 11.5394 20.8637 11.0744 20.8637 10.5134C20.8637 9.9804 20.4117 9.5154 19.8657 9.5154H15.2717C14.7107 9.5154 14.2597 9.9804 14.2597 10.5134C14.2597 11.0744 14.7107 11.5394 15.2717 11.5394H16.3237V18.8124C16.3237 19.5094 16.8847 20.0564 17.5817 20.0564Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.7127 25.648C7.0957 25.648 1.7777 20.316 1.7777 13.713C1.7777 7.096 7.0957 1.764 13.6987 1.764C20.3167 1.764 25.6617 7.096 25.6617 13.713C25.6617 20.316 20.3297 25.648 13.7127 25.648ZM9.0097 19.25H13.0297C13.3987 19.25 13.7127 18.936 13.7127 18.566C13.7127 18.211 13.3987 17.896 13.0297 17.896H9.8167V8.818C9.8167 8.395 9.4477 8.025 9.0237 8.025C8.5857 8.025 8.2307 8.395 8.2307 8.818V18.416C8.2307 18.936 8.5177 19.25 9.0097 19.25ZM16.7757 19.4C17.2127 19.4 17.5687 19.045 17.5687 18.607V9.529H19.3727C19.7417 9.529 20.0427 9.229 20.0427 8.846C20.0427 8.477 19.7417 8.189 19.3727 8.189H14.0407C13.6577 8.189 13.3707 8.477 13.3707 8.846C13.3707 9.229 13.6577 9.529 14.0407 9.529H15.9827V18.607C15.9827 19.045 16.3377 19.4 16.7757 19.4Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C20.3987 2.7891 25.4707 7.8341 25.4707 14.1231C25.4707 20.4121 20.4117 25.4711 14.1227 25.4711ZM9.3377 19.5921H13.0977C13.5757 19.5921 13.9727 19.1951 13.9727 18.7031C13.9727 18.2381 13.5757 17.8421 13.0977 17.8421H10.4047V9.5561C10.4047 8.9961 9.9257 8.5171 9.3517 8.5171C8.7777 8.5171 8.2987 8.9961 8.2987 9.5561V18.4841C8.2987 19.1681 8.6677 19.5921 9.3377 19.5921ZM17.1857 19.7561C17.7597 19.7561 18.2387 19.2771 18.2387 18.6891V10.4181H19.7417C20.2207 10.4181 20.6037 10.0351 20.6037 9.5431C20.6037 9.0641 20.2207 8.6811 19.7417 8.6811H14.5737C14.0817 8.6811 13.6987 9.0641 13.6987 9.5431C13.6987 10.0351 14.0817 10.4181 14.5737 10.4181H16.1187V18.6891C16.1187 19.2771 16.5977 19.7561 17.1857 19.7561Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9457 25.5664C7.4917 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C20.3847 2.3244 25.5667 7.4924 25.5667 13.9454C25.5667 20.3984 20.3987 25.5664 13.9457 25.5664ZM9.0647 19.4824H13.0017C13.4527 19.4824 13.8227 19.1134 13.8227 18.6484C13.8227 18.1974 13.4527 17.8284 13.0017 17.8284H10.0757V9.2424C10.0757 8.7094 9.6247 8.2574 9.0777 8.2574C8.5447 8.2574 8.0937 8.7094 8.0937 9.2424V18.4574C8.0937 19.0994 8.4357 19.4824 9.0647 19.4824ZM17.0627 19.6464C17.6097 19.6464 18.0467 19.2094 18.0467 18.6484V10.0764H19.7147C20.1657 10.0764 20.5217 9.7074 20.5217 9.2424C20.5217 8.7914 20.1657 8.4214 19.7147 8.4214H14.3557C13.8907 8.4214 13.5217 8.7914 13.5217 9.2424C13.5217 9.7074 13.8907 10.0764 14.3557 10.0764H16.0647V18.6484C16.0647 19.2094 16.5017 19.6464 17.0627 19.6464Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C20.4257 3.1309 25.3887 8.0939 25.3887 14.2599C25.3887 20.4259 20.4257 25.3889 14.2597 25.3889ZM9.5427 19.6599H13.1797C13.6717 19.6599 14.0817 19.2499 14.0817 18.7579C14.0817 18.2519 13.6717 17.8419 13.1797 17.8419H10.6507V9.8029C10.6507 9.2149 10.1577 8.7089 9.5567 8.7089C8.9547 8.7089 8.4627 9.2149 8.4627 9.8029V18.5119C8.4627 19.2229 8.8457 19.6599 9.5427 19.6599ZM17.2817 19.8239C17.8827 19.8239 18.3747 19.3319 18.3747 18.7169V10.6779H19.7697C20.2617 10.6779 20.6717 10.2809 20.6717 9.7759C20.6717 9.2829 20.2617 8.8869 19.7697 8.8869H14.7387C14.2327 8.8869 13.8357 9.2829 13.8357 9.7759C13.8357 10.2809 14.2327 10.6779 14.7387 10.6779H16.1737V18.7169C16.1737 19.3319 16.6657 19.8239 17.2817 19.8239Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.4117 25.7712C6.5757 25.7712 1.0387 20.2342 1.0387 13.4122C1.0387 6.5902 6.5757 1.0392 13.3987 1.0392C20.2347 1.0392 25.7717 6.5902 25.7717 13.4122C25.7717 20.2342 20.2347 25.7712 13.4117 25.7712ZM8.9417 18.9492H13.0837C13.3297 18.9492 13.5487 18.7302 13.5487 18.4702C13.5487 18.2242 13.3297 18.0062 13.0837 18.0062H9.4747V8.2582C9.4747 7.9842 9.2287 7.7382 8.9547 7.7382C8.6547 7.7382 8.4077 7.9842 8.4077 8.2582V18.3752C8.4077 18.7302 8.6267 18.9492 8.9417 18.9492ZM16.4067 19.0722C16.6937 19.0722 16.9257 18.8402 16.9257 18.5532V8.8042H18.9357C19.1957 8.8042 19.4007 8.6132 19.4007 8.3402C19.4007 8.0802 19.1957 7.8752 18.9357 7.8752H13.6307C13.3707 7.8752 13.1657 8.0802 13.1657 8.3402C13.1657 8.6132 13.3707 8.8042 13.6307 8.8042H15.8727V18.5532C15.8727 18.8402 16.1057 19.0722 16.4067 19.0722Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481C0.6697 6.3031 6.3167 0.6701 13.2477 0.6701C20.1937 0.6701 25.8257 6.3031 25.8257 13.2481C25.8257 20.1801 20.1937 25.8261 13.2477 25.8261ZM8.9007 18.7711H13.1117C13.2887 18.7711 13.4667 18.6071 13.4667 18.4021C13.4667 18.2111 13.2887 18.0471 13.1117 18.0471H9.3107V7.9711C9.3107 7.7651 9.1187 7.5741 8.9137 7.5741C8.6957 7.5741 8.5037 7.7651 8.5037 7.9711V18.3481C8.5037 18.6071 8.6817 18.7711 8.9007 18.7711ZM16.2147 18.8941C16.4337 18.8941 16.6117 18.7301 16.6117 18.5121V8.4351H18.7027C18.9077 8.4351 19.0587 8.2711 19.0587 8.0661C19.0587 7.8611 18.9077 7.7111 18.7027 7.7111H13.4257C13.2207 7.7111 13.0567 7.8611 13.0567 8.0661C13.0567 8.2711 13.2207 8.4351 13.4257 8.4351H15.8187V18.5121C15.8187 18.7301 15.9957 18.8941 16.2147 18.8941Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
