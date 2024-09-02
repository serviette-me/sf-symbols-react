import { IconProps } from "../../types"

export default function ArrowDownCircleIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301C4.8667 9.3651 9.3657 4.8671 14.9297 4.8671C20.4937 4.8671 25.0057 9.3651 25.0057 14.9301C25.0057 20.4941 20.4937 24.9921 14.9297 24.9921ZM14.9297 7.7241C13.7947 7.7241 12.8787 8.5041 12.8787 9.5981V14.3551L13.0837 16.8161L12.4547 15.7641L11.3207 14.3551C11.0467 14.0001 10.5547 13.7811 10.0627 13.7811C9.0647 13.7811 8.3807 14.4241 8.3807 15.3671C8.3807 15.9001 8.5177 16.2421 8.9137 16.6931L13.2207 21.3691C13.6717 21.8611 14.2327 22.1071 14.9297 22.1071C15.6407 22.1071 16.2007 21.8611 16.6527 21.3691L20.9457 16.6931C21.3557 16.2421 21.4917 15.9001 21.4917 15.3671C21.4917 14.4241 20.8087 13.7811 19.8107 13.7811C19.3317 13.7811 18.8397 14.0001 18.5527 14.3551L17.4317 15.6951L16.7887 16.8301L16.9807 14.3551V9.5981C16.9807 8.5041 16.0777 7.7241 14.9297 7.7241Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 25.2926C8.4357 25.2926 3.6097 20.4536 3.6097 14.4376C3.6097 8.4356 8.4217 3.5956 14.4377 3.5956C20.4397 3.5956 25.2797 8.4356 25.2797 14.4376C25.2797 20.4536 20.4527 25.2926 14.4377 25.2926ZM14.4377 7.3556C13.5757 7.3556 12.9067 7.9566 12.9067 8.8046V14.6016L13.0567 17.2816L12.0587 15.9276L10.6777 14.4106C10.4457 14.1366 10.0757 13.9726 9.6797 13.9726C8.9007 13.9726 8.3537 14.5056 8.3537 15.2576C8.3537 15.6676 8.4627 15.9546 8.7497 16.2696L13.1937 20.8766C13.5487 21.2596 13.9457 21.4516 14.4377 21.4516C14.9437 21.4516 15.3537 21.2596 15.6957 20.8766L20.1247 16.2696C20.4257 15.9546 20.5347 15.6676 20.5347 15.2576C20.5347 14.5056 19.9747 13.9726 19.1957 13.9726C18.8127 13.9726 18.4437 14.1366 18.2107 14.4106L16.8437 15.9006L15.8187 17.2946L15.9827 14.6016V8.8046C15.9827 7.9566 15.3127 7.3556 14.4377 7.3556Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9277 4.2794 14.6977 4.2794C20.4667 4.2794 25.1287 8.9274 25.1287 14.7114C25.1287 20.4804 20.4807 25.1424 14.6977 25.1424ZM14.6977 7.5604C13.6857 7.5604 12.8927 8.2574 12.8927 9.2284V14.4784L13.0707 17.0484L12.2637 15.8454L11.0197 14.3824C10.7597 14.0684 10.3357 13.8774 9.8847 13.8774C8.9827 13.8774 8.3667 14.4784 8.3667 15.3124C8.3667 15.7914 8.4907 16.1194 8.8457 16.5024L13.2067 21.1504C13.6167 21.5884 14.0957 21.8064 14.6977 21.8064C15.3127 21.8064 15.8047 21.5884 16.2007 21.1504L20.5627 16.5024C20.9177 16.1194 21.0407 15.7914 21.0407 15.3124C21.0407 14.4784 20.4117 13.8774 19.5237 13.8774C19.0857 13.8774 18.6487 14.0684 18.3887 14.3824L17.1577 15.8044L16.3377 17.0484L16.5157 14.4784V9.2284C16.5157 8.2574 15.7227 7.5604 14.6977 7.5604Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.7127 25.648C7.0957 25.648 1.7777 20.316 1.7777 13.713C1.7777 7.096 7.0957 1.764 13.6987 1.764C20.3167 1.764 25.6617 7.096 25.6617 13.713C25.6617 20.316 20.3297 25.648 13.7127 25.648ZM13.7127 6.836C13.2477 6.836 12.9197 7.164 12.9197 7.643V15.572L12.9887 18.088L11.4847 16.406L9.5157 14.424C9.3657 14.273 9.1877 14.191 8.9547 14.191C8.5177 14.191 8.1897 14.52 8.1897 14.943C8.1897 15.176 8.2577 15.354 8.3947 15.504L13.1117 20.193C13.3167 20.398 13.4937 20.494 13.7127 20.494C13.9457 20.494 14.1367 20.398 14.3277 20.193L19.0447 15.504C19.1817 15.354 19.2637 15.176 19.2637 14.943C19.2637 14.52 18.9217 14.191 18.4847 14.191C18.2517 14.191 18.0737 14.273 17.9237 14.424L15.9547 16.406L14.4377 18.102L14.5197 15.572V7.643C14.5197 7.164 14.1917 6.836 13.7127 6.836Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C20.3987 2.7891 25.4707 7.8341 25.4707 14.1231C25.4707 20.4121 20.4117 25.4711 14.1227 25.4711ZM14.1227 7.1231C13.4397 7.1231 12.9197 7.6151 12.9197 8.2991V14.7651L13.0427 17.5681L11.7987 16.0371L10.2677 14.4371C10.0627 14.2191 9.7757 14.0821 9.4477 14.0821C8.8047 14.0821 8.3257 14.5471 8.3257 15.1761C8.3257 15.5041 8.4357 15.7771 8.6547 15.9961L13.1657 20.5621C13.4667 20.8771 13.7537 21.0141 14.1227 21.0141C14.5057 21.0141 14.7927 20.8631 15.0937 20.5621L19.6057 15.9961C19.8237 15.7771 19.9337 15.5041 19.9337 15.1761C19.9337 14.5471 19.4547 14.0821 18.8127 14.0821C18.4847 14.0821 18.1837 14.2051 17.9917 14.4371L16.4607 16.0231L15.2167 17.5821L15.3257 14.7651V8.2991C15.3257 7.6151 14.8207 7.1231 14.1227 7.1231Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9457 25.5664C7.4917 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C20.3847 2.3244 25.5667 7.4924 25.5667 13.9454C25.5667 20.3984 20.3987 25.5664 13.9457 25.5664ZM13.9457 6.9864C13.3577 6.9864 12.9197 7.4104 12.9197 8.0114V14.8474L13.0297 17.7324L11.6617 16.0914L10.0347 14.4514C9.8437 14.2594 9.5977 14.1504 9.3107 14.1504C8.7497 14.1504 8.3257 14.5744 8.3257 15.1344C8.3257 15.4214 8.4077 15.6684 8.5857 15.8454L13.1527 20.3844C13.4257 20.6584 13.6577 20.7814 13.9457 20.7814C14.2457 20.7814 14.4917 20.6444 14.7517 20.3844L19.3047 15.8454C19.4827 15.6684 19.5917 15.4214 19.5917 15.1344C19.5917 14.5744 19.1547 14.1504 18.5937 14.1504C18.2927 14.1504 18.0467 14.2464 17.8687 14.4514L16.2557 16.0914L14.8617 17.7464L14.9707 14.8474V8.0114C14.9707 7.4104 14.5467 6.9864 13.9457 6.9864Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C20.4257 3.1309 25.3887 8.0939 25.3887 14.2599C25.3887 20.4259 20.4257 25.3889 14.2597 25.3889ZM14.2597 7.2189C13.4937 7.2189 12.9067 7.7659 12.9067 8.5179V14.6969L13.0427 17.4449L11.9077 15.9829L10.4457 14.4239C10.2267 14.1919 9.9117 14.0409 9.5427 14.0409C8.8457 14.0409 8.3397 14.5329 8.3397 15.2169C8.3397 15.5719 8.4487 15.8599 8.6957 16.1189L13.1797 20.6989C13.5077 21.0409 13.8357 21.2049 14.2597 21.2049C14.6977 21.2049 15.0387 21.0409 15.3537 20.6989L19.8237 16.1189C20.0837 15.8599 20.1937 15.5719 20.1937 15.2169C20.1937 14.5329 19.6737 14.0409 18.9767 14.0409C18.6207 14.0409 18.2927 14.1779 18.0877 14.4239L16.6247 15.9689L15.4767 17.4589L15.6137 14.6969V8.5179C15.6137 7.7659 15.0257 7.2189 14.2597 7.2189Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.4117 25.7712C6.5757 25.7712 1.0387 20.2342 1.0387 13.4122C1.0387 6.5902 6.5757 1.0392 13.3987 1.0392C20.2347 1.0392 25.7717 6.5902 25.7717 13.4122C25.7717 20.2342 20.2347 25.7712 13.4117 25.7712ZM13.4117 6.6582C13.1117 6.6582 12.9067 6.8492 12.9067 7.1642V16.5292L12.9477 18.5662L11.2517 16.8302L8.8317 14.4102C8.7367 14.3012 8.6267 14.2462 8.4767 14.2462C8.2027 14.2462 8.0117 14.4512 8.0117 14.7112C8.0117 14.8472 8.0527 14.9572 8.1487 15.0532L13.0427 19.9612C13.1657 20.0702 13.2757 20.1252 13.4117 20.1252C13.5347 20.1252 13.6577 20.0702 13.7677 19.9612L18.6897 15.0532C18.7717 14.9572 18.8257 14.8472 18.8257 14.7112C18.8257 14.4512 18.6207 14.2462 18.3477 14.2462C18.2107 14.2462 18.1017 14.3012 17.9917 14.4102L15.5727 16.8302L13.8637 18.5942L13.9177 16.5292V7.1642C13.9177 6.8492 13.7127 6.6582 13.4117 6.6582Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481C0.6697 6.3031 6.3167 0.6701 13.2477 0.6701C20.1937 0.6701 25.8257 6.3031 25.8257 13.2481C25.8257 20.1801 20.1937 25.8261 13.2477 25.8261ZM13.2477 6.5491C13.0427 6.5491 12.8927 6.6851 12.8927 6.9041V17.0211L12.9337 18.8121L11.1427 17.0491L8.4907 14.3961C8.4077 14.3011 8.3397 14.2731 8.2307 14.2731C8.0527 14.2731 7.9157 14.4101 7.9157 14.5741C7.9157 14.6701 7.9437 14.7381 8.0117 14.8061L13.0157 19.8241C13.0837 19.8921 13.1657 19.9331 13.2477 19.9331C13.3297 19.9331 13.4117 19.8921 13.4807 19.8241L18.4977 14.8061C18.5667 14.7381 18.6077 14.6701 18.6077 14.5741C18.6077 14.4101 18.4707 14.2731 18.2797 14.2731C18.1837 14.2731 18.1157 14.3011 18.0327 14.3961L15.3807 17.0491L13.5757 18.8261L13.6037 17.0211V6.9041C13.6037 6.6851 13.4667 6.5491 13.2477 6.5491Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}