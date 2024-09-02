import { IconProps } from "../../types"

export default function TreeIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36.8046875 36.845703125"
          className={className}
        >
          <path
            d="              M14.8887 29.1211C15.2717 29.1211 15.6677 29.0941 16.0917 29.0391C16.1597 29.4221 16.2017 29.7641 16.2017 30.0921C16.2017 31.7461 15.9547 34.4801 15.9547 35.4101C15.9547 36.2171 16.9257 36.8461 18.4027 36.8461C19.8787 36.8461 20.8637 36.2171 20.8637 35.4101C20.8637 34.4801 20.6177 31.7461 20.6177 30.0921C20.6177 29.7641 20.6447 29.4221 20.7127 29.0391C21.1367 29.0941 21.5467 29.1211 21.9157 29.1211C24.5407 29.1211 26.5777 28.0681 27.6037 27.3301C28.6837 27.7951 29.7367 28.0141 30.6797 28.0141C34.2477 28.0141 36.8047 25.3611 36.8047 21.7111C36.8047 20.0981 36.2027 18.3751 34.8907 16.8161C35.8887 15.5311 36.3127 14.0141 36.3127 12.6331C36.3127 9.2831 33.9337 6.1111 30.7207 5.3591C30.1057 2.1331 26.4417 0.0001 23.0777 0.0001C21.3557 0.0001 19.7017 0.4921 18.4027 1.6411C17.1037 0.4921 15.4497 0.0001 13.7407 0.0001C10.3637 0.0001 6.6997 2.1331 6.0977 5.3591C2.8847 6.1111 0.4927 9.2831 0.4927 12.6331C0.4927 14.0141 0.9157 15.5311 1.9137 16.8161C0.6017 18.3751 -0.0003 20.0981 -0.0003 21.7111C-0.0003 25.3611 2.5567 28.0141 6.1247 28.0141C7.0817 28.0141 8.1347 27.7951 9.2017 27.3301C10.2267 28.0681 12.2637 29.1211 14.8887 29.1211ZM10.9517 22.1211C11.8127 22.1211 12.5777 21.9841 13.2207 21.7521C13.7127 22.7091 14.3417 23.9941 14.9027 25.3201H14.8887C12.6597 25.3201 11.1017 24.4451 9.7207 22.6951C8.7777 23.5701 7.8337 23.9121 6.9177 23.9121C5.3727 23.9121 4.1567 22.8181 4.1567 21.3281C4.1567 20.3711 4.6487 19.3051 5.9067 18.1841C6.7537 17.4321 6.6037 16.2151 5.9747 15.5721C4.9357 14.4921 4.5387 13.4121 4.5387 12.4141C4.5387 10.4861 6.0837 8.9691 8.2307 8.9961C9.3927 8.9961 9.6797 8.3261 9.6797 7.9841C9.6387 5.2361 11.7577 3.8551 14.1367 3.8551C15.7087 3.8551 17.2947 4.4571 18.4027 5.5921C19.5097 4.4571 21.1097 3.8551 22.6817 3.8551C25.0467 3.8551 27.1657 5.2361 27.1247 7.9841C27.1247 8.3261 27.4117 8.9961 28.5747 8.9961C30.7347 8.9691 32.2657 10.4861 32.2657 12.4141C32.2657 13.4121 31.8827 14.4921 30.8437 15.5721C30.2017 16.2151 30.0507 17.4321 30.9117 18.1841C32.1567 19.3051 32.6487 20.3711 32.6487 21.3281C32.6487 22.8181 31.4317 23.9121 29.9007 23.9121C28.9847 23.9121 28.0277 23.5701 27.0977 22.6951C25.7027 24.4451 24.1587 25.3201 21.9157 25.3201C22.4627 23.9941 23.0917 22.7091 23.5977 21.7521C24.2407 21.9841 24.9927 22.1211 25.8537 22.1211C26.4417 22.1211 26.9337 21.6561 26.9337 21.0551C26.9337 20.4531 26.4417 19.9751 25.8537 19.9751C23.6247 19.9341 22.5727 18.7301 22.5727 16.6801C22.5727 15.8321 21.3967 15.5311 20.9587 16.2421C20.3437 17.1851 19.5367 17.6371 18.4027 17.6371C17.2677 17.6371 16.4607 17.1851 15.8457 16.2421C15.4217 15.5311 14.2457 15.8321 14.2457 16.6801C14.2457 18.7301 13.1937 19.9341 10.9517 19.9751C10.3637 19.9751 9.8847 20.4531 9.8847 21.0551C9.8847 21.6561 10.3637 22.1211 10.9517 22.1211ZM15.8047 19.2911C16.1877 19.5231 16.6247 19.7011 17.0897 19.8101V23.8031C16.3247 22.1761 15.7497 21.0821 15.2847 20.2071C15.4907 19.9341 15.6677 19.6191 15.8047 19.2911ZM21.0137 19.2911C21.1507 19.6191 21.3147 19.9341 21.5197 20.2211C21.0547 21.0821 20.4807 22.1621 19.7287 23.7891V19.8101C20.1937 19.7011 20.6177 19.5231 21.0137 19.2911Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36.09375 36.271484375"
          className={className}
        >
          <path
            d="              M14.6427 28.6286C15.0257 28.6286 15.4357 28.6016 15.8457 28.5466C15.9277 28.9706 15.9827 29.3676 15.9827 29.7226C15.9827 31.5276 15.7367 34.1246 15.7367 35.0136C15.7367 35.7516 16.6527 36.2716 18.0467 36.2716C19.4417 36.2716 20.3577 35.7516 20.3577 35.0136C20.3577 34.1246 20.1117 31.5276 20.1117 29.7226C20.1117 29.3676 20.1657 28.9706 20.2477 28.5466C20.6587 28.6016 21.0687 28.6286 21.4517 28.6286C24.1857 28.6286 26.2637 27.4526 27.1527 26.7556C28.2737 27.2756 29.3397 27.5216 30.3247 27.5216C33.7017 27.5216 36.0937 25.0466 36.0937 21.5746C36.0937 19.9336 35.4517 18.1976 34.0157 16.6246C35.1367 15.3266 35.6017 13.8086 35.6017 12.3456C35.6017 9.0366 33.1547 5.9476 29.9687 5.3866C29.5857 2.2016 26.0037 -0.0004 22.6407 -0.0004C20.9317 -0.0004 19.2907 0.5196 18.0467 1.7086C16.8027 0.5196 15.1757 -0.0004 13.4527 -0.0004C10.0897 -0.0004 6.5077 2.2016 6.1247 5.3866C2.9527 5.9476 0.4927 9.0366 0.4927 12.3456C0.4927 13.8086 0.9707 15.3266 2.0917 16.6246C0.6427 18.1976 -0.0003 19.9336 -0.0003 21.5746C-0.0003 25.0466 2.3927 27.5216 5.7697 27.5216C6.7537 27.5216 7.8207 27.2756 8.9417 26.7556C9.8297 27.4526 11.9087 28.6286 14.6427 28.6286ZM10.6777 21.8066C11.5797 21.8066 12.3597 21.6566 13.0157 21.3966C13.6037 22.5036 14.3827 24.1306 14.9977 25.7446C14.8887 25.7446 14.7657 25.7446 14.6427 25.7446C11.9357 25.7446 10.3637 24.4456 9.3657 23.2146C8.1757 24.1586 7.2867 24.4726 6.1657 24.4726C4.3617 24.4726 3.0767 23.2146 3.0767 21.3826C3.0767 20.1796 3.5687 19.0856 5.1547 17.6506C5.7967 17.0896 5.6877 16.1736 5.1957 15.6816C3.8827 14.3696 3.4997 13.2886 3.4997 12.1136C3.4997 9.8296 5.2907 8.0666 7.9297 8.1756C8.7367 8.1896 8.9547 7.6976 8.9277 7.3696C8.7087 4.6756 10.8827 2.9116 13.7127 2.9116C15.4497 2.9116 16.8847 3.5816 18.0467 4.7856C19.2087 3.5816 20.6447 2.9116 22.3807 2.9116C25.2107 2.9116 27.3847 4.6756 27.1657 7.3696C27.1387 7.6976 27.3577 8.1896 28.1777 8.1756C30.8027 8.0666 32.5937 9.8296 32.5937 12.1136C32.5937 13.2886 32.2107 14.3696 30.8987 15.6816C30.4067 16.1736 30.2967 17.0896 30.9397 17.6506C32.5257 19.0856 33.0177 20.1796 33.0177 21.3826C33.0177 23.2146 31.7327 24.4726 29.9417 24.4726C28.8067 24.4726 27.9177 24.1586 26.7427 23.2146C25.7307 24.4456 24.1587 25.7446 21.4517 25.7446C21.3277 25.7446 21.2047 25.7446 21.0957 25.7446C21.7107 24.1306 22.5037 22.5176 23.0777 21.3966C23.7347 21.6566 24.5137 21.8066 25.4157 21.8066C25.9497 21.8066 26.3867 21.3826 26.3867 20.8496C26.3867 20.3166 25.9497 19.8786 25.4157 19.8786C23.1467 19.8516 22.1207 18.6076 22.0937 16.6246C22.0797 15.8596 21.0277 15.5586 20.6037 16.2146C20.0017 17.1036 19.1957 17.5816 18.0467 17.5816C16.8987 17.5816 16.0917 17.1036 15.4907 16.2146C15.0667 15.5586 14.0137 15.8596 13.9997 16.6246C13.9727 18.6076 12.9477 19.8516 10.6777 19.8786C10.1447 19.8786 9.7067 20.3166 9.7067 20.8496C9.7067 21.3826 10.1447 21.8066 10.6777 21.8066ZM15.4217 18.9496C15.8457 19.2226 16.3107 19.4136 16.8297 19.5366V23.7886C16.0367 22.0666 15.4217 20.8766 14.9027 19.9196C15.1077 19.6196 15.2847 19.3046 15.4217 18.9496ZM20.6717 18.9496C20.8087 19.3046 20.9867 19.6326 21.2047 19.9196C20.6717 20.8766 20.0567 22.0386 19.2637 23.7756V19.5366C19.7837 19.4136 20.2477 19.2226 20.6717 18.9496Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36.4765625 36.5859375"
          className={className}
        >
          <path
            d="              M14.7797 28.889C15.1487 28.889 15.5587 28.861 15.9827 28.82C16.0507 29.217 16.0917 29.586 16.0917 29.928C16.0917 31.65 15.8457 34.316 15.8457 35.232C15.8457 35.998 16.8027 36.586 18.2387 36.586C19.6737 36.586 20.6177 35.998 20.6177 35.232C20.6177 34.316 20.3847 31.65 20.3847 29.928C20.3847 29.586 20.4257 29.217 20.4937 28.82C20.9177 28.861 21.3147 28.889 21.6977 28.889C24.3767 28.889 26.4277 27.781 27.3987 27.07C28.4927 27.562 29.5447 27.781 30.5157 27.781C33.9887 27.781 36.4767 25.225 36.4767 21.656C36.4767 20.029 35.8477 18.293 34.4807 16.734C35.5337 15.436 35.9847 13.918 35.9847 12.51C35.9847 9.174 33.5647 6.029 30.3657 5.387C29.8597 2.174 26.2367 0 22.8727 0C21.1507 0 19.5097 0.506 18.2387 1.682C16.9527 0.506 15.3267 0 13.6037 0C10.2407 0 6.6037 2.174 6.1117 5.387C2.9117 6.029 0.4927 9.174 0.4927 12.51C0.4927 13.918 0.9437 15.436 1.9957 16.734C0.6287 18.293 -0.0003 20.029 -0.0003 21.656C-0.0003 25.225 2.4747 27.781 5.9607 27.781C6.9177 27.781 7.9847 27.562 9.0777 27.07C10.0487 27.781 12.0997 28.889 14.7797 28.889ZM10.8277 21.984C11.7027 21.984 12.4687 21.848 13.1247 21.588C13.6587 22.627 14.3687 24.062 14.9567 25.525C14.8887 25.525 14.8337 25.525 14.7797 25.525C12.3187 25.525 10.7457 24.445 9.5427 22.955C8.4907 23.857 7.5747 24.186 6.5627 24.186C4.8947 24.186 3.6507 23.01 3.6507 21.355C3.6507 20.289 4.1427 19.209 5.5507 17.937C6.3027 17.268 6.1797 16.201 5.6057 15.627C4.4297 14.437 4.0467 13.357 4.0467 12.277C4.0467 10.172 5.7017 8.545 8.0937 8.613C9.0917 8.627 9.3377 8.039 9.3247 7.697C9.2017 4.977 11.3477 3.418 13.9317 3.418C15.5857 3.418 17.1037 4.047 18.2387 5.223C19.3727 4.047 20.8907 3.418 22.5317 3.418C25.1287 3.418 27.2617 4.977 27.1527 7.697C27.1387 8.039 27.3847 8.627 28.3827 8.613C30.7617 8.545 32.4297 10.172 32.4297 12.277C32.4297 13.357 32.0337 14.437 30.8707 15.627C30.2967 16.201 30.1737 17.268 30.9257 17.937C32.3337 19.209 32.8267 20.289 32.8267 21.355C32.8267 23.01 31.5817 24.186 29.9137 24.186C28.9027 24.186 27.9867 23.857 26.9197 22.955C25.7167 24.445 24.1587 25.525 21.6977 25.525C21.6427 25.525 21.5747 25.525 21.5197 25.525C22.1077 24.062 22.8187 22.627 23.3517 21.588C24.0077 21.848 24.7597 21.984 25.6487 21.984C26.2087 21.984 26.6737 21.533 26.6737 20.959C26.6737 20.398 26.2087 19.934 25.6487 19.934C23.3927 19.906 22.3537 18.676 22.3397 16.666C22.3397 15.846 21.2187 15.545 20.7947 16.228C20.1937 17.158 19.3727 17.623 18.2387 17.623C17.0897 17.623 16.2837 17.158 15.6817 16.228C15.2577 15.545 14.1367 15.846 14.1227 16.666C14.1097 18.676 13.0707 19.906 10.8277 19.934C10.2677 19.934 9.8027 20.398 9.8027 20.959C9.8027 21.533 10.2677 21.984 10.8277 21.984ZM15.6267 19.141C16.0237 19.387 16.4747 19.564 16.9667 19.687V23.803C16.1877 22.121 15.5997 20.986 15.1077 20.084C15.3127 19.797 15.4907 19.469 15.6267 19.141ZM20.8497 19.141C20.9867 19.469 21.1637 19.797 21.3687 20.084C20.8767 20.986 20.2887 22.107 19.5097 23.789V19.687C20.0017 19.564 20.4397 19.387 20.8497 19.141Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.26171875 34.5078125"
          className={className}
        >
          <path
            d="              M13.9177 27.2617C14.3557 27.2617 14.8067 27.2347 15.2717 27.1657C15.3807 27.6857 15.4357 28.1917 15.4357 28.6427C15.4357 30.9117 15.2027 32.8267 15.2027 33.6057C15.2027 34.1527 15.9957 34.5077 17.1307 34.5077C18.2657 34.5077 19.0587 34.1527 19.0587 33.6057C19.0587 32.8267 18.8267 30.9117 18.8267 28.6427C18.8267 28.1917 18.8807 27.6857 18.9907 27.1657C19.4547 27.2347 19.9067 27.2617 20.3437 27.2617C23.1187 27.2617 25.1567 26.0037 25.8947 25.3207C27.0427 25.9087 28.0957 26.1677 29.0797 26.1677C32.1697 26.1677 34.2617 24.0077 34.2617 20.8227C34.2617 19.1957 33.5917 17.4997 32.0197 15.9547C33.2777 14.6837 33.7697 13.2067 33.7697 11.6617C33.7697 8.4767 31.2947 5.6327 28.2597 5.3187C28.1777 2.2287 24.8557 -0.0003 21.5607 -0.0003C19.8787 -0.0003 18.2927 0.5747 17.1307 1.8187C15.9687 0.5747 14.3827 -0.0003 12.6877 -0.0003C9.3927 -0.0003 6.0837 2.2287 6.0017 5.3187C2.9667 5.6327 0.4927 8.4767 0.4927 11.6617C0.4927 13.2067 0.9847 14.6837 2.2287 15.9547C0.6697 17.4997 -0.0003 19.1957 -0.0003 20.8227C-0.0003 24.0077 2.0917 26.1677 5.1677 26.1677C6.1657 26.1677 7.2187 25.9087 8.3677 25.3207C9.0917 26.0037 11.1427 27.2617 13.9177 27.2617ZM10.0347 20.9727C11.0747 20.9727 11.9087 20.7817 12.5777 20.4257C13.2477 21.6567 14.2457 23.7067 14.8747 25.6617C14.5467 25.7027 14.2457 25.7167 13.9177 25.7167C10.7737 25.7167 9.1877 24.0487 8.6407 23.3787C7.2867 24.3227 6.3987 24.6227 5.1677 24.6227C2.9527 24.6227 1.5447 23.1597 1.5447 20.8227C1.5447 19.3597 2.0917 18.1427 3.8967 16.5017C4.2387 16.2017 4.1977 15.7087 3.9097 15.4217C2.4197 14.0137 2.0237 12.8927 2.0237 11.4847C2.0237 8.7777 4.1427 6.6857 7.0957 6.8357C7.4787 6.8497 7.6157 6.5897 7.5747 6.3167C7.1917 3.6507 9.5707 1.5447 12.7697 1.5447C14.6427 1.5447 15.9687 2.2697 17.1307 3.6637C18.2797 2.2697 19.6187 1.5447 21.4787 1.5447C24.6777 1.5447 27.0707 3.6507 26.6877 6.3167C26.6467 6.5897 26.7837 6.8497 27.1657 6.8357C30.1187 6.6857 32.2387 8.7777 32.2387 11.4847C32.2387 12.8927 31.8417 14.0137 30.3377 15.4217C30.0647 15.7087 30.0237 16.2017 30.3657 16.5017C32.1697 18.1427 32.7167 19.3597 32.7167 20.8227C32.7167 23.1597 31.3087 24.6227 29.0797 24.6227C27.8637 24.6227 26.9747 24.3227 25.6207 23.3787C25.0747 24.0487 23.4747 25.7167 20.3437 25.7167C20.0157 25.7167 19.7017 25.7027 19.3867 25.6617C20.0157 23.7067 21.0137 21.6567 21.6837 20.4257C22.3537 20.7817 23.1877 20.9727 24.2267 20.9727C24.5957 20.9727 24.9097 20.6717 24.9097 20.2887C24.9097 19.9197 24.5957 19.6057 24.2267 19.6057C21.8747 19.5777 21.0137 18.2657 20.8637 16.5567C20.8227 15.9687 20.0157 15.7087 19.6187 16.2147C19.0727 16.9257 18.3067 17.4587 17.1307 17.4587C15.9547 17.4587 15.1897 16.9257 14.6427 16.2147C14.2327 15.7087 13.4397 15.9687 13.3987 16.5567C13.2477 18.2657 12.3867 19.5777 10.0347 19.6057C9.6527 19.6057 9.3517 19.9197 9.3517 20.2887C9.3517 20.6717 9.6527 20.9727 10.0347 20.9727ZM14.4647 18.0607C14.9707 18.4297 15.5177 18.6897 16.1467 18.8267V23.4477C15.4217 21.7517 14.6697 20.3027 13.9997 19.0727C14.1917 18.7577 14.3417 18.4157 14.4647 18.0607ZM19.7967 18.0607C19.9197 18.4157 20.0707 18.7577 20.2617 19.0727C19.5917 20.3027 18.8397 21.7387 18.1017 23.4337V18.8267C18.7437 18.6897 19.2907 18.4297 19.7967 18.0607Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.642578125 35.888671875"
          className={className}
        >
          <path
            d="              M14.4787 28.3149C14.8747 28.3149 15.2717 28.2869 15.6957 28.2459C15.7907 28.6969 15.8317 29.1209 15.8317 29.4899C15.8317 31.3769 15.5997 33.8929 15.5997 34.7539C15.5997 35.4379 16.4747 35.8889 17.8147 35.8889C19.1547 35.8889 20.0427 35.4379 20.0427 34.7539C20.0427 33.8929 19.7967 31.3769 19.7967 29.4899C19.7967 29.1209 19.8517 28.6969 19.9337 28.2459C20.3577 28.2869 20.7677 28.3149 21.1507 28.3149C23.9527 28.3149 26.0587 27.0699 26.8787 26.3869C28.0137 26.9339 29.0937 27.1929 30.1057 27.1929C33.3597 27.1929 35.6427 24.8419 35.6427 21.4789C35.6427 19.8239 34.9727 18.0739 33.4417 16.5019C34.6447 15.2029 35.1367 13.6719 35.1367 12.1679C35.1367 8.8869 32.6487 5.8379 29.4907 5.3999C29.2577 2.2289 25.7307 -0.0001 22.3537 -0.0001C20.6447 -0.0001 19.0317 0.5329 17.8147 1.7359C16.6117 0.5329 14.9977 -0.0001 13.2757 -0.0001C9.9117 -0.0001 6.3707 2.2289 6.1527 5.3999C2.9937 5.8379 0.4927 8.8869 0.4927 12.1679C0.4927 13.6719 0.9977 15.2029 2.1877 16.5019C0.6697 18.0739 -0.0003 19.8239 -0.0003 21.4789C-0.0003 24.8419 2.2837 27.1929 5.5367 27.1929C6.5347 27.1929 7.6157 26.9339 8.7637 26.3869C9.5837 27.0699 11.6757 28.3149 14.4787 28.3149ZM10.4997 21.6019C11.4437 21.6019 12.2227 21.4509 12.8927 21.1639C13.5217 22.3669 14.4097 24.2129 15.0527 26.0039C14.8617 26.0179 14.6837 26.0179 14.4787 26.0179C11.4707 26.0179 9.8847 24.4449 9.1327 23.5569C7.7927 24.5269 6.9317 24.8279 5.6737 24.8279C3.7047 24.8279 2.3787 23.4609 2.3787 21.4099C2.3787 20.0429 2.8847 18.9359 4.6757 17.3089C5.1677 16.8709 5.0997 16.1469 4.7027 15.7359C3.1997 14.2739 2.8437 13.2069 2.8437 11.9219C2.8437 9.4059 4.7847 7.4789 7.7387 7.6429C8.3127 7.6699 8.4907 7.3009 8.4497 6.9729C8.1077 4.3069 10.3357 2.3109 13.4527 2.3109C15.2987 2.3109 16.6387 3.0079 17.8147 4.2659C19.0037 3.0079 20.3577 2.3109 22.1897 2.3109C25.3067 2.3109 27.5217 4.3069 27.1937 6.9729C27.1527 7.3009 27.3167 7.6699 27.9177 7.6429C30.8577 7.4789 32.7987 9.4059 32.7987 11.9219C32.7987 13.2069 32.4297 14.2739 30.9257 15.7359C30.5427 16.1469 30.4607 16.8709 30.9667 17.3089C32.7577 18.9359 33.2637 20.0429 33.2637 21.4099C33.2637 23.4609 31.9237 24.8279 29.9547 24.8279C28.7107 24.8279 27.8497 24.5269 26.5097 23.5569C25.7437 24.4449 24.1587 26.0179 21.1507 26.0179C20.9587 26.0179 20.7677 26.0179 20.5897 26.0039C21.2187 24.2129 22.1207 22.3669 22.7497 21.1639C23.4197 21.4509 24.1997 21.6019 25.1427 21.6019C25.6207 21.6019 26.0317 21.2189 26.0317 20.7129C26.0317 20.2209 25.6207 19.8239 25.1427 19.8239C22.8457 19.7829 21.8477 18.5119 21.7927 16.5839C21.7657 15.8589 20.7817 15.5859 20.3847 16.1879C19.7837 17.0629 18.9767 17.5409 17.8147 17.5409C16.6657 17.5409 15.8457 17.0629 15.2577 16.1879C14.8477 15.5859 13.8637 15.8589 13.8497 16.5839C13.7947 18.5119 12.7967 19.7829 10.4997 19.8239C10.0077 19.8239 9.5977 20.2209 9.5977 20.7129C9.5977 21.2189 10.0077 21.6019 10.4997 21.6019ZM15.1757 18.7309C15.6267 19.0179 16.1187 19.2359 16.6657 19.3589V23.7749C15.8597 21.9979 15.2027 20.7539 14.6567 19.7419C14.8617 19.4279 15.0387 19.0859 15.1757 18.7309ZM20.4667 18.7309C20.6037 19.0859 20.7677 19.4279 20.9867 19.7419C20.4397 20.7539 19.7837 21.9839 18.9767 23.7619V19.3589C19.5237 19.2359 20.0157 19.0179 20.4667 18.7309Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.3828125 35.68359375"
          className={className}
        >
          <path
            d="              M14.3967 28.1372C14.7797 28.1372 15.1897 28.1232 15.6137 28.0682C15.7087 28.5332 15.7637 28.9712 15.7637 29.3672C15.7637 31.3082 15.5177 33.7562 15.5177 34.6172C15.5177 35.2732 16.3787 35.6832 17.6917 35.6832C19.0037 35.6832 19.8657 35.2732 19.8657 34.6172C19.8657 33.7562 19.6187 31.3082 19.6187 29.3672C19.6187 28.9712 19.6737 28.5332 19.7697 28.0682C20.1937 28.1232 20.6037 28.1372 20.9867 28.1372C23.8297 28.1372 25.9357 26.8512 26.7147 26.1812C27.8767 26.7562 28.9567 27.0152 29.9687 27.0152C33.1677 27.0152 35.3827 24.7322 35.3827 21.4372C35.3827 19.7692 34.6997 18.0062 33.1267 16.4332C34.3707 15.1352 34.8767 13.5902 34.8767 12.0722C34.8767 8.8042 32.3617 5.7832 29.2307 5.4142C29.0797 2.2562 25.5667 0.0002 22.2027 0.0002C20.4937 0.0002 18.8807 0.5332 17.6917 1.7632C16.5017 0.5332 14.9027 0.0002 13.1797 0.0002C9.8167 0.0002 6.3027 2.2562 6.1657 5.4142C3.0217 5.7832 0.4927 8.8042 0.4927 12.0722C0.4927 13.5902 1.0117 15.1352 2.2557 16.4332C0.6837 18.0062 -0.0003 19.7692 -0.0003 21.4372C-0.0003 24.7322 2.2147 27.0152 5.4137 27.0152C6.4257 27.0152 7.5057 26.7562 8.6677 26.1812C9.4337 26.8512 11.5527 28.1372 14.3967 28.1372ZM10.4047 21.4922C11.3477 21.4922 12.1547 21.3282 12.8107 21.0412C13.4807 22.2852 14.4377 24.2672 15.0797 26.1402C14.8477 26.1682 14.6287 26.1682 14.3967 26.1682C11.2107 26.1682 9.6247 24.4452 8.9957 23.7342C7.5747 24.7462 6.7407 25.0332 5.4137 25.0332C3.3357 25.0332 1.9827 23.6112 1.9827 21.4372C1.9827 19.9882 2.5017 18.8532 4.4027 17.1172C4.8267 16.7482 4.7717 16.1332 4.4297 15.7772C2.8297 14.2322 2.4607 13.1662 2.4607 11.8122C2.4607 9.1742 4.4977 7.1502 7.6157 7.3552C8.0797 7.3832 8.2307 7.0682 8.1757 6.7542C7.7797 4.1012 10.0217 1.9692 13.3027 1.9692C15.2027 1.9692 16.4887 2.6932 17.6917 3.9782C18.8947 2.6932 20.1797 1.9692 22.0797 1.9692C25.3617 1.9692 27.6037 4.1012 27.2067 6.7542C27.1527 7.0682 27.3027 7.3832 27.7677 7.3552C30.8707 7.1502 32.9087 9.1742 32.9087 11.8122C32.9087 13.1662 32.5527 14.2322 30.9527 15.7772C30.6117 16.1332 30.5567 16.7482 30.9807 17.1172C32.8807 18.8532 33.4007 19.9882 33.4007 21.4372C33.4007 23.6112 32.0337 25.0332 29.9687 25.0332C28.6427 25.0332 27.8087 24.7462 26.3727 23.7342C25.7577 24.4452 24.1717 26.1682 20.9867 26.1682C20.7537 26.1682 20.5347 26.1682 20.3027 26.1402C20.9457 24.2672 21.9027 22.2992 22.5727 21.0412C23.2287 21.3282 24.0347 21.4922 24.9787 21.4922C25.4437 21.4922 25.8397 21.1232 25.8397 20.6442C25.8397 20.1792 25.4437 19.7832 24.9787 19.7832C22.6817 19.7562 21.6837 18.4712 21.6157 16.5562C21.6017 15.8732 20.6587 15.5992 20.2477 16.1872C19.6737 17.0352 18.8537 17.5272 17.6917 17.5272C16.5297 17.5272 15.7087 17.0352 15.1347 16.1872C14.7247 15.5992 13.7817 15.8732 13.7677 16.5562C13.6997 18.4712 12.7017 19.7562 10.4047 19.7832C9.9397 19.7832 9.5427 20.1792 9.5427 20.6442C9.5427 21.1232 9.9397 21.4922 10.4047 21.4922ZM15.0387 18.6072C15.5037 18.9222 16.0097 19.1402 16.5707 19.2632V23.7752C15.7497 21.9572 15.0797 20.6852 14.5197 19.6332C14.7247 19.3182 14.9027 18.9762 15.0387 18.6072ZM20.3437 18.6072C20.4807 18.9762 20.6587 19.3182 20.8637 19.6332C20.3027 20.6852 19.6327 21.9432 18.8127 23.7622V19.2632C19.3727 19.1402 19.8787 18.9222 20.3437 18.6072Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.833984375 36.06640625"
          className={className}
        >
          <path
            d="              M14.5467 28.4509C14.9437 28.4509 15.3397 28.4379 15.7637 28.3829C15.8457 28.8199 15.9007 29.2309 15.9007 29.5999C15.9007 31.4449 15.6547 33.9879 15.6547 34.8769C15.6547 35.5739 16.5567 36.0659 17.9237 36.0659C19.2777 36.0659 20.1797 35.5739 20.1797 34.8769C20.1797 33.9879 19.9337 31.4449 19.9337 29.5999C19.9337 29.2309 19.9887 28.8199 20.0707 28.3829C20.4937 28.4379 20.9047 28.4509 21.2867 28.4509C24.0627 28.4509 26.1407 27.2479 27.0017 26.5509C28.1227 27.0979 29.2027 27.3439 30.2017 27.3439C33.5097 27.3439 35.8337 24.9379 35.8337 21.5329C35.8337 19.8789 35.1777 18.1289 33.6877 16.5569C34.8497 15.2579 35.3417 13.7269 35.3417 12.2499C35.3417 8.9549 32.8677 5.8929 29.6957 5.3999C29.4087 2.2149 25.8397 -0.0001 22.4767 -0.0001C20.7677 -0.0001 19.1407 0.5199 17.9237 1.7359C16.6937 0.5199 15.0797 -0.0001 13.3577 -0.0001C9.9937 -0.0001 6.4257 2.2149 6.1387 5.3999C2.9667 5.8929 0.4927 8.9549 0.4927 12.2499C0.4927 13.7269 0.9847 15.2579 2.1467 16.5569C0.6567 18.1289 -0.0003 19.8789 -0.0003 21.5329C-0.0003 24.9379 2.3247 27.3439 5.6327 27.3439C6.6307 27.3439 7.7107 27.0979 8.8317 26.5509C9.6937 27.2479 11.7847 28.4509 14.5467 28.4509ZM10.5687 21.6969C11.4977 21.6969 12.2907 21.5469 12.9477 21.2739C13.5487 22.4359 14.4097 24.1859 15.0387 25.8949C14.8747 25.9079 14.7107 25.9079 14.5467 25.9079C11.6757 25.9079 10.0897 24.4449 9.2287 23.4199C7.9567 24.3769 7.0817 24.6779 5.8927 24.6779C3.9927 24.6779 2.6797 23.3649 2.6797 21.4099C2.6797 20.1109 3.1857 19.0039 4.8807 17.4589C5.4417 16.9669 5.3597 16.1599 4.9217 15.7229C3.4997 14.3149 3.1307 13.2479 3.1307 12.0039C3.1307 9.5979 5.0037 7.7379 7.8207 7.8749C8.5037 7.9019 8.6957 7.4789 8.6547 7.1499C8.3677 4.4709 10.5687 2.5699 13.5627 2.5699C15.3677 2.5699 16.7477 3.2679 17.9237 4.4979C19.0857 3.2679 20.4807 2.5699 22.2717 2.5699C25.2657 2.5699 27.4667 4.4709 27.1797 7.1499C27.1527 7.4789 27.3297 7.9019 28.0277 7.8749C30.8297 7.7379 32.7027 9.5979 32.7027 12.0039C32.7027 13.2479 32.3337 14.3149 30.9117 15.7229C30.4747 16.1599 30.3927 16.9669 30.9527 17.4589C32.6487 19.0039 33.1547 20.1109 33.1547 21.4099C33.1547 23.3649 31.8417 24.6779 29.9547 24.6779C28.7517 24.6779 27.8767 24.3769 26.6057 23.4199C25.7437 24.4449 24.1587 25.9079 21.2867 25.9079C21.1227 25.9079 20.9587 25.9079 20.7947 25.8949C21.4377 24.1859 22.2847 22.4359 22.9007 21.2739C23.5567 21.5469 24.3357 21.6969 25.2657 21.6969C25.7717 21.6969 26.1817 21.3009 26.1817 20.7809C26.1817 20.2749 25.7717 19.8519 25.2657 19.8519C22.9827 19.8109 21.9707 18.5529 21.9157 16.5979C21.9027 15.8589 20.8907 15.5859 20.4807 16.2009C19.8787 17.0899 19.0727 17.5679 17.9237 17.5679C16.7617 17.5679 15.9547 17.0899 15.3537 16.2009C14.9437 15.5859 13.9317 15.8589 13.9177 16.5979C13.8767 18.5529 12.8657 19.8109 10.5687 19.8519C10.0767 19.8519 9.6527 20.2749 9.6527 20.7809C9.6527 21.3009 10.0767 21.6969 10.5687 21.6969ZM15.2847 18.8259C15.7227 19.1129 16.2017 19.3179 16.7347 19.4409V23.7889C15.9277 22.0249 15.2987 20.8089 14.7517 19.8239C14.9707 19.5239 15.1487 19.1819 15.2847 18.8259ZM20.5487 18.8259C20.6857 19.1819 20.8637 19.5239 21.0817 19.8239C20.5347 20.8089 19.9067 22.0119 19.0997 23.7749V19.4409C19.6327 19.3179 20.1117 19.1129 20.5487 18.8259Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.771484375 32.94921875"
          className={className}
        >
          <path
            d="              M13.2887 26.0861C13.7817 26.0861 14.2867 26.0451 14.8067 25.9631C14.9437 26.5641 15.0117 27.1521 15.0117 27.6851C15.0117 30.4061 14.7797 31.5961 14.7797 32.2791C14.7797 32.6621 15.4767 32.9491 16.3927 32.9491C17.2947 32.9491 17.9927 32.6621 17.9927 32.2791C17.9927 31.5961 17.7597 30.4061 17.7597 27.6851C17.7597 27.1521 17.8277 26.5641 17.9647 25.9631C18.4847 26.0451 19.0037 26.0861 19.4827 26.0861C22.1757 26.0861 24.1307 24.8691 24.8147 24.1851C25.9497 24.7731 26.9607 25.0331 27.9177 25.0331C30.8437 25.0331 32.7717 23.0511 32.7717 20.0161C32.7717 18.4301 32.1157 16.8161 30.5567 15.3121C31.8147 14.0961 32.2927 12.6871 32.2927 11.1151C32.2927 8.0531 29.8597 5.4281 26.9887 5.1951C27.0017 2.2011 23.9257 0.0001 20.7267 0.0001C19.0727 0.0001 17.4997 0.6291 16.3927 1.8731C15.2717 0.6291 13.6997 0.0001 12.0447 0.0001C8.8457 0.0001 5.7837 2.2011 5.7837 5.1951C2.9117 5.4281 0.4787 8.0531 0.4787 11.1151C0.4787 12.6871 0.9567 14.0961 2.2147 15.3121C0.6567 16.8161 -0.0003 18.4301 -0.0003 20.0161C-0.0003 23.0511 1.9277 25.0331 4.8537 25.0331C5.8107 25.0331 6.8357 24.7731 7.9567 24.1851C8.6407 24.8691 10.5957 26.0861 13.2887 26.0861ZM9.5427 20.2891C10.7047 20.2891 11.5797 20.0431 12.2227 19.6051C12.9477 20.7951 13.9997 22.9551 14.5877 25.0191C14.1507 25.0881 13.7267 25.1151 13.2887 25.1151C10.1997 25.1151 8.6137 23.5291 8.1487 22.9141C6.9177 23.7621 5.9337 24.0621 4.8537 24.0621C2.4337 24.0621 0.9707 22.5591 0.9707 20.0161C0.9707 18.5391 1.5587 17.1851 3.2267 15.6951C3.4587 15.4901 3.4457 15.1481 3.2407 14.9571C1.8727 13.7261 1.4497 12.5511 1.4497 11.0601C1.4497 8.2581 3.6637 6.0841 6.4117 6.1391C6.6857 6.1521 6.8087 5.9471 6.7817 5.7281C6.4257 3.0351 8.9827 0.9711 12.0727 0.9711C13.8907 0.9711 15.2987 1.6951 16.3927 3.2681C17.4867 1.6951 18.8807 0.9711 20.6997 0.9711C23.7887 0.9711 26.3597 3.0351 25.9907 5.7281C25.9767 5.9471 26.0857 6.1521 26.3597 6.1391C29.1077 6.0841 31.3357 8.2581 31.3357 11.0601C31.3357 12.5511 30.8987 13.7261 29.5447 14.9571C29.3267 15.1481 29.3127 15.4901 29.5447 15.6951C31.2127 17.1851 31.8007 18.5391 31.8007 20.0161C31.8007 22.5591 30.3517 24.0621 27.9177 24.0621C26.8377 24.0621 25.8677 23.7621 24.6227 22.9141C24.1587 23.5291 22.5727 25.1151 19.4827 25.1151C19.0587 25.1151 18.6347 25.0881 18.1977 25.0191C18.7717 22.9551 19.8247 20.7951 20.5487 19.6051C21.1917 20.0431 22.0667 20.2891 23.2287 20.2891C23.4747 20.2891 23.6797 20.0841 23.6797 19.8381C23.6797 19.5921 23.4747 19.3871 23.2287 19.3871C20.8087 19.3461 20.1247 18.0061 19.8657 16.5571C19.7837 16.0921 19.1817 15.8591 18.7847 16.2691C18.2797 16.7891 17.5817 17.3631 16.3927 17.3631C15.1897 17.3631 14.4927 16.7891 13.9867 16.2691C13.5897 15.8591 12.9887 16.0921 12.9197 16.5571C12.6467 18.0061 11.9627 19.3461 9.5427 19.3871C9.2967 19.3871 9.0917 19.5921 9.0917 19.8381C9.0917 20.0841 9.2967 20.2891 9.5427 20.2891ZM13.6997 17.3361C14.2737 17.8141 14.8617 18.1151 15.5997 18.2381V23.0101C15.0257 21.5741 14.1227 19.8101 13.3167 18.3201C13.4667 18.0191 13.5897 17.6911 13.6997 17.3361ZM19.0857 17.3361C19.1817 17.6911 19.3047 18.0191 19.4547 18.3201C18.6487 19.8101 17.7457 21.5741 17.1717 22.9961V18.2381C17.9097 18.1151 18.4977 17.8141 19.0857 17.3361Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.005859375 32.15625"
          className={className}
        >
          <path
            d="              M12.9747 25.4846C13.4807 25.4846 14.0277 25.4436 14.5877 25.3336C14.7247 25.9766 14.7927 26.6056 14.7927 27.1796C14.7927 30.1326 14.5747 30.9666 14.5747 31.5816C14.5747 31.8966 15.2167 32.1566 16.0097 32.1566C16.8027 32.1566 17.4457 31.8966 17.4457 31.5816C17.4457 30.9666 17.2127 30.1326 17.2127 27.1796C17.2127 26.6056 17.2947 25.9766 17.4317 25.3336C17.9927 25.4436 18.5257 25.4846 19.0317 25.4846C21.6837 25.4846 23.5977 24.2816 24.2677 23.5976C25.3747 24.1996 26.3727 24.4586 27.3167 24.4586C30.1737 24.4586 32.0057 22.5586 32.0057 19.6056C32.0057 18.0336 31.3637 16.4606 29.8187 14.9846C31.0767 13.7816 31.5407 12.4276 31.5407 10.8286C31.5407 7.8206 29.1347 5.3186 26.3317 5.1266C26.3867 2.1876 23.4477 -0.0004 20.2887 -0.0004C18.6617 -0.0004 17.1037 0.6566 16.0097 1.9006C14.9027 0.6566 13.3577 -0.0004 11.7167 -0.0004C8.5587 -0.0004 5.6187 2.1876 5.6737 5.1266C2.8707 5.3186 0.4647 7.8206 0.4647 10.8286C0.4647 12.4276 0.9437 13.7816 2.2017 14.9846C0.6427 16.4606 -0.0003 18.0336 -0.0003 19.6056C-0.0003 22.5586 1.8457 24.4586 4.7027 24.4586C5.6467 24.4586 6.6307 24.1996 7.7517 23.5976C8.4087 24.2816 10.3227 25.4846 12.9747 25.4846ZM9.2967 19.9336C10.5277 19.9336 11.4027 19.6606 12.0317 19.1676C12.8107 20.3576 13.8767 22.5586 14.4237 24.6776C13.9317 24.7736 13.4527 24.8146 12.9747 24.8146C9.9117 24.8146 8.3127 23.2556 7.9027 22.6676C6.7267 23.4606 5.7017 23.7886 4.7027 23.7886C2.1597 23.7886 0.6697 22.2446 0.6697 19.6056C0.6697 18.1156 1.2847 16.6936 2.8847 15.2716C3.0627 15.1206 3.0627 14.8616 2.8847 14.7106C1.5997 13.5626 1.1487 12.3596 1.1487 10.8416C1.1487 7.9846 3.4177 5.7696 6.0567 5.7836C6.2887 5.7836 6.3847 5.6056 6.3707 5.4276C6.0297 2.7206 8.6817 0.6696 11.7167 0.6696C13.5077 0.6696 14.9437 1.3946 16.0097 3.0626C17.0627 1.3946 18.4977 0.6696 20.3027 0.6696C23.3247 0.6696 25.9907 2.7206 25.6347 5.4276C25.6207 5.6056 25.7307 5.7836 25.9497 5.7836C28.6017 5.7696 30.8707 7.9846 30.8707 10.8416C30.8707 12.3596 30.4067 13.5626 29.1207 14.7106C28.9567 14.8616 28.9567 15.1206 29.1207 15.2716C30.7207 16.6936 31.3357 18.1156 31.3357 19.6056C31.3357 22.2446 29.8597 23.7886 27.3167 23.7886C26.3047 23.7886 25.2927 23.4606 24.1037 22.6676C23.6937 23.2556 22.1077 24.8146 19.0317 24.8146C18.5667 24.8146 18.0747 24.7736 17.5817 24.6776C18.1427 22.5586 19.2087 20.3576 19.9887 19.1676C20.6177 19.6606 21.4927 19.9336 22.7087 19.9336C22.9007 19.9336 23.0507 19.7836 23.0507 19.5916C23.0507 19.4136 22.9007 19.2636 22.7087 19.2636C20.2617 19.2226 19.6597 17.8556 19.3457 16.5426C19.2637 16.1466 18.7577 15.9276 18.3617 16.2836C17.8687 16.7206 17.2127 17.3086 16.0097 17.3086C14.8067 17.3086 14.1367 16.7206 13.6587 16.2836C13.2477 15.9276 12.7557 16.1466 12.6597 16.5426C12.3457 17.8556 11.7437 19.2226 9.2967 19.2636C9.1057 19.2636 8.9547 19.4136 8.9547 19.5916C8.9547 19.7836 9.1057 19.9336 9.2967 19.9336ZM13.3027 16.9536C13.9177 17.4866 14.5197 17.8146 15.3127 17.9376V22.7776C14.8477 21.5336 13.8357 19.5376 12.9607 17.9376C13.0977 17.6366 13.2067 17.3086 13.3027 16.9536ZM18.7167 16.9536C18.7987 17.3086 18.9087 17.6366 19.0447 17.9376C18.1697 19.5376 17.1587 21.5336 16.6937 22.7776V17.9376C17.4867 17.8146 18.0877 17.4866 18.7167 16.9536Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
