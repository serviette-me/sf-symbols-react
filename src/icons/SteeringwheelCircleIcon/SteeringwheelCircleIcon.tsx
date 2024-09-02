import { IconProps } from "../../types"

export default function SteeringwheelCircleIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301C4.8667 9.3651 9.3657 4.8671 14.9297 4.8671C20.4937 4.8671 25.0057 9.3651 25.0057 14.9301C25.0057 20.4941 20.4937 24.9921 14.9297 24.9921ZM14.9297 22.2441C18.9487 22.2441 22.2437 18.9491 22.2437 14.9301C22.2437 10.9101 18.9487 7.6151 14.9297 7.6151C10.9237 7.6151 7.6287 10.9101 7.6287 14.9301C7.6287 18.9491 10.9237 22.2441 14.9297 22.2441ZM11.1567 12.0311C12.0447 10.8691 13.4117 10.1721 14.9157 10.1721C16.4197 10.1721 17.8007 10.8691 18.7027 12.0311C18.9217 12.3321 18.8257 12.6191 18.5117 12.6191H11.3477C11.0197 12.6191 10.9237 12.3321 11.1567 12.0311ZM14.9297 16.3101C14.2737 16.3101 13.7537 15.7911 13.7537 15.1351C13.7537 14.4921 14.2737 13.9591 14.9297 13.9591C15.5727 13.9591 16.1057 14.4921 16.1057 15.1351C16.1057 15.7911 15.5727 16.3101 14.9297 16.3101ZM10.4587 16.3101C10.3767 16.0231 10.4867 15.9141 10.7457 15.9551C12.2637 16.2011 13.3847 17.5141 13.3847 19.0451C13.3847 19.2911 13.2067 19.4141 13.0017 19.3051C11.7307 18.6891 10.8147 17.6231 10.4587 16.3101ZM19.4137 16.3101C19.0317 17.6231 18.1287 18.6891 16.8577 19.3051C16.6387 19.4141 16.4747 19.2911 16.4747 19.0451C16.4747 17.5141 17.5957 16.2011 19.0997 15.9551C19.3597 15.9141 19.4687 16.0231 19.4137 16.3101Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 25.2926C8.4357 25.2926 3.6097 20.4536 3.6097 14.4376C3.6097 8.4356 8.4217 3.5956 14.4377 3.5956C20.4397 3.5956 25.2797 8.4356 25.2797 14.4376C25.2797 20.4536 20.4527 25.2926 14.4377 25.2926ZM14.4377 22.2306C18.7027 22.2306 22.2307 18.7036 22.2307 14.4376C22.2307 10.1856 18.7027 6.6586 14.4377 6.6586C10.1717 6.6586 6.6577 10.1856 6.6577 14.4376C6.6577 18.7036 10.1717 22.2306 14.4377 22.2306ZM9.8577 11.1976C10.8687 9.7346 12.5367 8.8046 14.4237 8.8046C16.3107 8.8046 17.9787 9.7346 19.0037 11.1976C19.2637 11.5526 19.1547 11.9356 18.7307 11.9356H10.1307C9.7207 11.9356 9.5977 11.5526 9.8577 11.1976ZM14.4377 16.1736C13.6307 16.1736 12.9887 15.5316 12.9887 14.7246C12.9887 13.9316 13.6307 13.3026 14.4377 13.3026C15.2307 13.3026 15.8727 13.9316 15.8727 14.7246C15.8727 15.5316 15.2307 16.1736 14.4377 16.1736ZM9.0647 15.9956C8.9547 15.5996 9.1467 15.4356 9.4607 15.4906C11.3337 15.7366 12.7417 17.3496 12.7007 19.2496C12.7007 19.5786 12.4547 19.7556 12.1547 19.6056C10.6097 18.8946 9.4887 17.5816 9.0647 15.9956ZM19.8107 15.9956C19.3727 17.5816 18.2657 18.8946 16.7207 19.6056C16.4067 19.7556 16.1597 19.5786 16.1597 19.2496C16.1327 17.3636 17.5407 15.7366 19.4007 15.4906C19.7147 15.4356 19.9067 15.5996 19.8107 15.9956Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9277 4.2794 14.6977 4.2794C20.4667 4.2794 25.1287 8.9274 25.1287 14.7114C25.1287 20.4804 20.4807 25.1424 14.6977 25.1424ZM14.6977 22.2444C18.8397 22.2444 22.2307 18.8394 22.2307 14.7114C22.2307 10.5824 18.8397 7.1774 14.6977 7.1774C10.5687 7.1774 7.1637 10.5824 7.1637 14.7114C7.1637 18.8394 10.5687 22.2444 14.6977 22.2444ZM10.5407 11.6484C11.4977 10.3364 13.0017 9.5434 14.6837 9.5434C16.3657 9.5434 17.8827 10.3364 18.8397 11.6484C19.0857 11.9634 18.9767 12.3044 18.6077 12.3044H10.7737C10.4047 12.3044 10.2947 11.9634 10.5407 11.6484ZM14.6977 16.2554C13.9727 16.2554 13.3987 15.6684 13.3987 14.9434C13.3987 14.2324 13.9727 13.6584 14.6977 13.6584C15.4077 13.6584 15.9957 14.2324 15.9957 14.9434C15.9957 15.6684 15.4077 16.2554 14.6977 16.2554ZM9.8027 16.1604C9.7067 15.8324 9.8577 15.6954 10.1447 15.7504C11.8257 15.9824 13.0837 17.4454 13.0567 19.1544C13.0567 19.4274 12.8517 19.5784 12.5917 19.4554C11.2107 18.7854 10.1857 17.6094 9.8027 16.1604ZM19.6057 16.1604C19.1957 17.6094 18.1977 18.7854 16.7887 19.4554C16.5297 19.5784 16.3237 19.4274 16.3237 19.1544C16.3107 17.4454 17.5687 15.9824 19.2367 15.7504C19.5367 15.6954 19.6737 15.8324 19.6057 16.1604Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.7127 25.648C7.0957 25.648 1.7777 20.316 1.7777 13.713C1.7777 7.096 7.0957 1.764 13.6987 1.764C20.3167 1.764 25.6617 7.096 25.6617 13.713C25.6617 20.316 20.3297 25.648 13.7127 25.648ZM13.7127 21.779C18.1287 21.779 21.7927 18.129 21.7927 13.713C21.7927 9.283 18.1287 5.633 13.6987 5.633C9.2827 5.633 5.6467 9.283 5.6467 13.713C5.6467 18.129 9.2967 21.779 13.7127 21.779ZM7.9567 10.432C9.0507 8.422 11.2107 7.027 13.6987 7.027C16.2007 7.027 18.3617 8.422 19.4547 10.432C19.6737 10.787 19.5647 11.143 19.1677 11.143H8.2437C7.8617 11.143 7.7247 10.787 7.9567 10.432ZM13.6987 15.873C12.7827 15.873 12.0587 15.148 12.0587 14.219C12.0587 13.303 12.7827 12.564 13.6987 12.564C14.6287 12.564 15.3667 13.303 15.3667 14.219C15.3667 15.148 14.6287 15.873 13.6987 15.873ZM7.2457 15.367C7.1367 14.971 7.3277 14.779 7.6697 14.82C10.0757 14.984 11.9487 17.076 11.7717 19.482C11.7717 19.824 11.5117 20.029 11.1567 19.879C9.2147 19.072 7.7517 17.404 7.2457 15.367ZM20.1797 15.367C19.6597 17.404 18.2107 19.072 16.2557 19.879C15.9007 20.029 15.6547 19.824 15.6407 19.482C15.4767 17.09 17.3357 14.984 19.7417 14.82C20.0837 14.779 20.2887 14.971 20.1797 15.367Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C20.3987 2.7891 25.4707 7.8341 25.4707 14.1231C25.4707 20.4121 20.4117 25.4711 14.1227 25.4711ZM14.1227 22.2171C18.5527 22.2171 22.2167 18.5531 22.2167 14.1231C22.2167 9.6931 18.5527 6.0291 14.1097 6.0291C9.6937 6.0291 6.0297 9.6931 6.0297 14.1231C6.0297 18.5531 9.7067 22.2171 14.1227 22.2171ZM9.0237 10.6501C10.1167 9.0101 11.9907 7.9301 14.1097 7.9301C16.2417 7.9301 18.1017 9.0101 19.1957 10.6501C19.4827 11.0471 19.3597 11.4981 18.8807 11.4981H9.3657C8.8867 11.4981 8.7367 11.0471 9.0237 10.6501ZM14.1097 16.0781C13.2207 16.0781 12.5097 15.3671 12.5097 14.4651C12.5097 13.5761 13.2207 12.8651 14.1097 12.8651C14.9977 12.8651 15.7227 13.5761 15.7227 14.4651C15.7227 15.3671 14.9977 16.0781 14.1097 16.0781ZM8.1617 15.7771C8.0387 15.3261 8.2847 15.1351 8.6407 15.1891C10.7327 15.4351 12.3317 17.2541 12.2637 19.3731C12.2637 19.7421 11.9767 19.9611 11.6077 19.7971C9.8987 19.0171 8.6407 17.5551 8.1617 15.7771ZM20.0707 15.7771C19.5917 17.5551 18.3337 19.0171 16.6247 19.7971C16.2557 19.9611 15.9687 19.7421 15.9687 19.3731C15.9137 17.2541 17.4997 15.4351 19.5777 15.1891C19.9477 15.1351 20.1937 15.3261 20.0707 15.7771Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9457 25.5664C7.4917 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C20.3847 2.3244 25.5667 7.4924 25.5667 13.9454C25.5667 20.3984 20.3987 25.5664 13.9457 25.5664ZM13.9457 22.2034C18.4567 22.2034 22.2027 18.4574 22.2027 13.9454C22.2027 9.4334 18.4567 5.6874 13.9317 5.6874C9.4197 5.6874 5.6877 9.4334 5.6877 13.9454C5.6877 18.4574 9.4337 22.2034 13.9457 22.2034ZM8.5587 10.3364C9.7067 8.5994 11.6757 7.4374 13.9317 7.4374C16.2007 7.4374 18.1697 8.5994 19.3047 10.3364C19.6057 10.7594 19.4687 11.2384 18.9487 11.2384H8.9277C8.4077 11.2384 8.2577 10.7594 8.5587 10.3364ZM13.9317 16.0234C12.9887 16.0234 12.2367 15.2714 12.2367 14.3144C12.2367 13.3714 12.9887 12.6194 13.9317 12.6194C14.8747 12.6194 15.6407 13.3714 15.6407 14.3144C15.6407 15.2714 14.8747 16.0234 13.9317 16.0234ZM7.6697 15.6544C7.5327 15.1754 7.8067 14.9574 8.1897 15.0114C10.4047 15.2574 12.0997 17.1854 12.0177 19.4414C12.0177 19.8374 11.7027 20.0844 11.3067 19.8924C9.4887 19.0864 8.1617 17.5414 7.6697 15.6544ZM20.2067 15.6544C19.7147 17.5414 18.3887 19.0864 16.5837 19.8924C16.1737 20.0844 15.8597 19.8374 15.8597 19.4414C15.7907 17.1994 17.4727 15.2574 19.6877 15.0114C20.0707 14.9574 20.3437 15.1754 20.2067 15.6544Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C20.4257 3.1309 25.3887 8.0939 25.3887 14.2599C25.3887 20.4259 20.4257 25.3889 14.2597 25.3889ZM14.2597 22.2169C18.6207 22.2169 22.2167 18.6209 22.2167 14.2599C22.2167 9.9119 18.6207 6.3029 14.2457 6.3029C9.8987 6.3029 6.3027 9.9119 6.3027 14.2599C6.3027 18.6209 9.9117 22.2169 14.2597 22.2169ZM9.3787 10.8829C10.4457 9.3239 12.2227 8.3129 14.2457 8.3129C16.2697 8.3129 18.0467 9.3239 19.1137 10.8829C19.3867 11.2659 19.2637 11.6899 18.8127 11.6899H9.6937C9.2417 11.6899 9.1057 11.2659 9.3787 10.8829ZM14.2457 16.1189C13.3987 16.1189 12.7147 15.4359 12.7147 14.5739C12.7147 13.7399 13.3987 13.0569 14.2457 13.0569C15.0937 13.0569 15.7907 13.7399 15.7907 14.5739C15.7907 15.4359 15.0937 16.1189 14.2457 16.1189ZM8.5587 15.8729C8.4357 15.4489 8.6547 15.2719 8.9957 15.3259C10.9917 15.5589 12.5097 17.2949 12.4547 19.3179C12.4547 19.6739 12.1817 19.8789 11.8397 19.7149C10.2127 18.9629 9.0097 17.5679 8.5587 15.8729ZM19.9607 15.8729C19.4957 17.5679 18.3067 18.9629 16.6657 19.7149C16.3237 19.8789 16.0507 19.6739 16.0507 19.3179C16.0097 17.2949 17.5137 15.5589 19.4957 15.3259C19.8517 15.2719 20.0707 15.4489 19.9607 15.8729Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.4117 25.7712C6.5757 25.7712 1.0387 20.2342 1.0387 13.4122C1.0387 6.5902 6.5757 1.0392 13.3987 1.0392C20.2347 1.0392 25.7717 6.5902 25.7717 13.4122C25.7717 20.2342 20.2347 25.7712 13.4117 25.7712ZM13.4117 21.2322C17.7047 21.2322 21.2327 17.7052 21.2327 13.4122C21.2327 9.1052 17.7047 5.5782 13.3987 5.5782C9.1057 5.5782 5.5777 9.1052 5.5777 13.4122C5.5777 17.7052 9.1057 21.2322 13.4117 21.2322ZM7.1507 10.5682C8.2027 8.1892 10.6097 6.5082 13.3987 6.5082C16.2007 6.5082 18.6077 8.1892 19.6597 10.5682C19.7827 10.8142 19.7007 11.0192 19.4687 11.0192H7.3557C7.1227 11.0192 7.0277 10.8142 7.1507 10.5682ZM13.3847 15.6812C12.5237 15.6812 11.8127 14.9842 11.8127 14.0952C11.8127 13.2072 12.5237 12.4962 13.3847 12.4962C14.2867 12.4962 14.9977 13.2072 14.9977 14.0952C14.9977 14.9842 14.2867 15.6812 13.3847 15.6812ZM6.6857 14.9842C6.6167 14.7112 6.7127 14.5472 6.9867 14.5602C9.6387 14.6152 11.7437 16.9392 11.4567 19.5512C11.4437 19.8242 11.2517 19.9742 10.9787 19.8652C8.8457 19.0582 7.2187 17.2402 6.6857 14.9842ZM20.1247 14.9842C19.5917 17.2402 17.9647 19.0582 15.8317 19.8652C15.5587 19.9742 15.3667 19.8242 15.3537 19.5512C15.0797 16.9802 17.1577 14.6152 19.8237 14.5602C20.0977 14.5472 20.1937 14.7112 20.1247 14.9842Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481C0.6697 6.3031 6.3167 0.6701 13.2477 0.6701C20.1937 0.6701 25.8257 6.3031 25.8257 13.2481C25.8257 20.1801 20.1937 25.8261 13.2477 25.8261ZM13.2477 20.9451C17.4867 20.9451 20.9587 17.4861 20.9587 13.2481C20.9587 9.0101 17.4867 5.5371 13.2477 5.5371C9.0097 5.5371 5.5507 9.0101 5.5507 13.2481C5.5507 17.4861 9.0097 20.9451 13.2477 20.9451ZM6.7407 10.6231C7.7657 8.0661 10.3087 6.2211 13.2477 6.2211C16.2007 6.2211 18.7307 8.0661 19.7697 10.6231C19.8237 10.8141 19.7557 10.9511 19.6057 10.9511H6.8907C6.7407 10.9511 6.6717 10.8141 6.7407 10.6231ZM13.2347 15.5721C12.3727 15.5721 11.6757 14.8891 11.6757 14.0271C11.6757 13.1521 12.3727 12.4551 13.2347 12.4551C14.1227 12.4551 14.8207 13.1521 14.8207 14.0271C14.8207 14.8891 14.1227 15.5721 13.2347 15.5721ZM20.0977 14.7791C19.5647 17.1441 17.8417 19.0581 15.6137 19.8511C15.3807 19.9331 15.2167 19.8241 15.2027 19.5781C14.8747 16.8981 17.0627 14.4101 19.8657 14.4241C20.1117 14.4241 20.1527 14.5741 20.0977 14.7791ZM6.3987 14.7791C6.3437 14.5741 6.3987 14.4241 6.6447 14.4241C9.4197 14.4101 11.6487 16.8711 11.2927 19.5781C11.2797 19.8241 11.1287 19.9331 10.8827 19.8511C8.6547 19.0581 6.9457 17.1441 6.3987 14.7791Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
