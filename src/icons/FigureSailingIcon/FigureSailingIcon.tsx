import { IconProps } from "../../types"

export default function FigureSailingIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.244397455481085 35.09284233475388"
          className={className}
        >
          <path
            d="              M2.1467 28.2431H22.2577L28.1227 22.3781C28.3967 22.1181 28.7657 22.1041 29.0387 22.3781L31.0897 24.4151L28.7927 26.7261C27.2067 28.3391 29.6407 30.7591 31.2267 29.1451L34.7267 25.6321C35.4237 24.9071 35.4097 23.8821 34.7267 23.1981L30.6387 19.1101C29.7907 18.2631 28.6427 17.7701 27.4527 17.7701H17.5957V1.3511C17.5957 -0.0439 15.5997 -0.6179 14.7657 0.8991L0.9027 25.8781C0.2187 27.1081 0.9297 28.2431 2.1467 28.2431ZM4.7027 25.5501C4.4437 25.5501 4.4157 25.3311 4.5117 25.1531L14.6017 7.0111C14.6697 6.8741 14.8887 6.9291 14.8887 7.0931V25.5501ZM26.4957 16.3621C28.3967 16.3621 29.9547 14.8171 29.9547 12.9171C29.9547 11.0171 28.3967 9.4581 26.4957 9.4581C24.5957 9.4581 23.0507 11.0171 23.0507 12.9171C23.0507 14.8171 24.5957 16.3621 26.4957 16.3621ZM19.7287 21.2161C19.9887 21.2161 20.0017 21.4481 19.8927 21.5581L17.5957 23.8541V21.2161ZM1.2307 35.0931H2.7347C6.8907 35.0931 7.6287 32.7551 10.0077 32.7551C12.3867 32.7551 13.1387 35.0931 17.2817 35.0931C21.4377 35.0931 22.1897 32.7551 24.5547 32.7551C26.9337 32.7551 27.6857 35.0931 31.8277 35.0931H33.3457C34.0297 35.0931 34.5767 34.5461 34.5767 33.8621C34.5767 33.1921 34.0297 32.6451 33.3457 32.6451H31.8277C29.3677 32.6451 28.5467 30.3081 24.5547 30.3081C20.5767 30.3081 19.7427 32.6451 17.2817 32.6451C14.8067 32.6451 13.9867 30.3081 10.0077 30.3081C6.0297 30.3081 5.2087 32.6451 2.7347 32.6451H1.2307C0.5467 32.6451 -0.0003 33.1921 -0.0003 33.8621C-0.0003 34.5461 0.5467 35.0931 1.2307 35.0931Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.04469181856073 33.376655443062695"
          className={className}
        >
          <path
            d="              M2.0237 27.1556H21.5057L27.2477 21.4136C27.5077 21.1536 27.9177 21.1406 28.1917 21.4136L30.3657 23.5876L28.0277 25.9396C26.6187 27.3476 28.7657 29.4936 30.1737 28.0716L33.5777 24.6536C34.2067 24.0246 34.1937 23.1086 33.5777 22.5076L29.6137 18.5286C28.8067 17.7356 27.7407 17.2716 26.6187 17.2716H16.8987V1.1656C16.8987 -0.0374 15.1617 -0.5434 14.4097 0.7966L0.9437 25.0646C0.3277 26.1576 0.9567 27.1556 2.0237 27.1556ZM3.7867 25.0366C3.5817 25.0366 3.5407 24.8586 3.6097 24.7226L14.4787 5.1856C14.5607 5.0216 14.7797 5.0756 14.7797 5.2536V25.0366ZM25.6897 15.8496C27.4667 15.8496 28.9027 14.4136 28.9027 12.6366C28.9027 10.8586 27.4667 9.4096 25.6897 9.4096C23.9117 9.4096 22.4627 10.8586 22.4627 12.6366C22.4627 14.4136 23.9117 15.8496 25.6897 15.8496ZM19.4007 20.3336C19.6467 20.3336 19.7147 20.5656 19.5777 20.7166L16.8987 23.3966V20.3336ZM0.9977 33.3766H2.4477C6.3437 33.3766 7.1367 31.0796 9.5837 31.0796C12.0447 31.0796 12.8377 33.3766 16.7347 33.3766C20.6307 33.3766 21.4237 31.0796 23.8707 31.0796C26.3317 31.0796 27.1247 33.3766 31.0217 33.3766H32.4707C33.0317 33.3766 33.4687 32.9256 33.4687 32.3786C33.4687 31.8316 33.0317 31.3806 32.4707 31.3806H31.0217C28.4787 31.3806 27.6177 29.0976 23.8707 29.0976C20.1387 29.0976 19.2777 31.3806 16.7347 31.3806C14.1777 31.3806 13.3297 29.0976 9.5837 29.0976C5.8517 29.0976 4.9907 31.3806 2.4477 31.3806H0.9977C0.4377 31.3806 -0.0003 31.8316 -0.0003 32.3786C-0.0003 32.9256 0.4377 33.3766 0.9977 33.3766Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.677015166219604 34.2786703172481"
          className={className}
        >
          <path
            d="              M2.0917 27.7298H21.9027L27.7127 21.9328C27.9727 21.6598 28.3687 21.6458 28.6427 21.9328L30.7477 24.0248L28.4377 26.3488C26.9337 27.8798 29.2307 30.1638 30.7347 28.6318L34.1797 25.1728C34.8497 24.4898 34.8357 23.5188 34.1797 22.8768L30.1467 18.8428C29.3267 18.0088 28.2187 17.5308 27.0567 17.5308H17.2677V1.2608C17.2677 -0.0382 15.3947 -0.5842 14.6017 0.8508L0.9157 25.4878C0.2737 26.6638 0.9437 27.7298 2.0917 27.7298ZM4.2797 25.3098C4.0337 25.3098 3.9927 25.1048 4.0877 24.9408L14.5467 6.1418C14.6157 5.9918 14.8477 6.0598 14.8477 6.2238V25.3098ZM26.1137 16.1228C27.9587 16.1228 29.4627 14.6188 29.4627 12.7868C29.4627 10.9408 27.9587 9.4368 26.1137 9.4368C24.2677 9.4368 22.7777 10.9408 22.7777 12.7868C22.7777 14.6188 24.2677 16.1228 26.1137 16.1228ZM19.5777 20.7978C19.8377 20.7978 19.8657 21.0308 19.7427 21.1678L17.2677 23.6418V20.7978ZM1.1207 34.2788H2.5977C6.6307 34.2788 7.3967 31.9678 9.8167 31.9678C12.2227 31.9678 13.0017 34.2788 17.0217 34.2788C21.0547 34.2788 21.8207 31.9678 24.2267 31.9678C26.6467 31.9678 27.4257 34.2788 31.4457 34.2788H32.9357C33.5647 34.2788 34.0567 33.7868 34.0567 33.1708C34.0567 32.5428 33.5647 32.0498 32.9357 32.0498H31.4457C28.9437 32.0498 28.1097 29.7398 24.2267 29.7398C20.3707 29.7398 19.5237 32.0498 17.0217 32.0498C14.5197 32.0498 13.6717 29.7398 9.8167 29.7398C5.9477 29.7398 5.0997 32.0498 2.5977 32.0498H1.1207C0.4927 32.0498 -0.0003 32.5428 -0.0003 33.1708C-0.0003 33.7868 0.4927 34.2788 1.1207 34.2788Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.1682295351732 30.747073993728872"
          className={className}
        >
          <path
            d="              M2.0647 25.3466H20.4117L25.8537 19.9056C26.1267 19.6316 26.5507 19.6316 26.8107 19.9056L29.0387 22.1336L26.7427 24.4576C25.5527 25.6476 27.3437 27.4656 28.5467 26.2626L31.7737 23.0366C32.3067 22.5026 32.2927 21.7236 31.7737 21.2046L28.0137 17.4576C27.2757 16.7336 26.3187 16.3096 25.2927 16.3096H15.9547V0.9426C15.9547 -0.0284 14.5337 -0.4524 13.8907 0.6686L1.1617 23.6106C0.6427 24.5266 1.1617 25.3466 2.0647 25.3466ZM2.7477 24.1026C2.5017 24.1026 2.4337 23.8836 2.5157 23.7336L14.2867 2.5556C14.4237 2.2956 14.7247 2.3776 14.7247 2.6106V24.1026ZM24.4177 14.8326C26.0177 14.8326 27.3167 13.5346 27.3167 11.9206C27.3167 10.3216 26.0177 9.0226 24.4177 9.0226C22.8047 9.0226 21.5057 10.3216 21.5057 11.9206C21.5057 13.5346 22.8047 14.8326 24.4177 14.8326ZM18.7717 18.9076C19.0037 18.9076 19.1137 19.1536 18.9497 19.3176L15.9547 22.2976V18.9076ZM0.6287 30.7476H1.9137C5.4547 30.7476 6.3437 28.5046 8.9417 28.5046C11.5257 28.5046 12.4137 30.7476 15.9547 30.7476C19.4827 30.7476 20.3707 28.5046 22.9687 28.5046C25.5667 28.5046 26.4547 30.7476 29.9827 30.7476H31.2817C31.6227 30.7476 31.8967 30.4736 31.8967 30.1316C31.8967 29.7896 31.6227 29.5166 31.2817 29.5166H29.9827C27.2757 29.5166 26.3597 27.2606 22.9687 27.2606C19.5777 27.2606 18.6487 29.5166 15.9547 29.5166C13.2477 29.5166 12.3317 27.2606 8.9417 27.2606C5.5367 27.2606 4.6207 29.5166 1.9137 29.5166H0.6287C0.2737 29.5166 -0.0003 29.7896 -0.0003 30.1316C-0.0003 30.4736 0.2737 30.7476 0.6287 30.7476Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.27906817588426 32.27427338639226"
          className={className}
        >
          <path
            d="              M1.9417 26.4505H21.0277L26.6737 20.8035C26.9477 20.5305 27.3847 20.5305 27.6587 20.8035L29.9007 23.0455L27.5347 25.4245C26.2497 26.7235 28.2047 28.6785 29.5037 27.3935L32.8537 24.0435C33.4277 23.4555 33.4137 22.6215 32.8537 22.0615L28.9437 18.1645C28.1777 17.3995 27.1657 16.9485 26.0857 16.9485H16.4477V1.0475C16.4477 -0.0325 14.8747 -0.4975 14.1917 0.7335L0.9567 24.5635C0.4097 25.5615 0.9707 26.4505 1.9417 26.4505ZM3.2127 24.7275C3.0347 24.7275 2.9807 24.5635 3.0487 24.4405L14.3967 4.0145C14.4787 3.8505 14.7107 3.8915 14.7107 4.0695V24.7275ZM25.1697 15.5265C26.8657 15.5265 28.2327 14.1455 28.2327 12.4505C28.2327 10.7545 26.8657 9.3875 25.1697 9.3875C23.4747 9.3875 22.0937 10.7545 22.0937 12.4505C22.0937 14.1455 23.4747 15.5265 25.1697 15.5265ZM19.1957 19.7645C19.4417 19.7645 19.5367 20.0105 19.3727 20.1615L16.4477 23.1005V19.7645ZM0.8477 32.2745H2.2557C6.0017 32.2745 6.8087 30.0045 9.3247 30.0045C11.8267 30.0045 12.6467 32.2745 16.3787 32.2745C20.1247 32.2745 20.9457 30.0045 23.4477 30.0045C25.9497 30.0045 26.7697 32.2745 30.5017 32.2745H31.9237C32.3887 32.2745 32.7577 31.8915 32.7577 31.4265C32.7577 30.9615 32.3887 30.5795 31.9237 30.5795H30.5017C27.9047 30.5795 27.0297 28.3235 23.4477 28.3235C19.8517 28.3235 18.9767 30.5795 16.3787 30.5795C13.7817 30.5795 12.9067 28.3235 9.3247 28.3235C5.7287 28.3235 4.8537 30.5795 2.2557 30.5795H0.8477C0.3687 30.5795 -0.0003 30.9615 -0.0003 31.4265C-0.0003 31.8915 0.3687 32.2745 0.8477 32.2745Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.848404895110605 31.64683897167119"
          className={className}
        >
          <path
            d="              M1.9007 26.0552H20.7677L26.3597 20.4632C26.6327 20.1902 27.0837 20.1902 27.3437 20.4632L29.6407 22.7462L27.2617 25.1392C26.0447 26.3692 27.8907 28.2292 29.1207 26.9982L32.4437 23.6902C32.9907 23.1432 32.9767 22.3362 32.4437 21.8032L28.5747 17.9472C27.8227 17.1962 26.8377 16.7722 25.7847 16.7722H16.1877V0.9812C16.1877 -0.0308 14.7107 -0.4688 14.0687 0.6942L0.9707 24.2642C0.4517 25.2212 0.9707 26.0552 1.9007 26.0552ZM2.8847 24.5372C2.7207 24.5372 2.6657 24.3872 2.7207 24.2912L14.3417 3.3462C14.4377 3.1822 14.6697 3.2232 14.6697 3.4012V24.5372ZM24.8827 15.3362C26.5367 15.3362 27.8637 14.0102 27.8637 12.3562C27.8637 10.7012 26.5367 9.3622 24.8827 9.3622C23.2147 9.3622 21.8887 10.7012 21.8887 12.3562C21.8887 14.0102 23.2147 15.3362 24.8827 15.3362ZM19.0727 19.4382C19.3187 19.4382 19.4277 19.6842 19.2637 19.8622L16.1877 22.9382V19.4382ZM0.7657 31.6472H2.1467C5.8107 31.6472 6.6307 29.3912 9.1737 29.3912C11.7027 29.3912 12.5237 31.6472 16.1877 31.6472C19.8377 31.6472 20.6717 29.3912 23.2017 29.3912C25.7307 29.3912 26.5647 31.6472 30.2147 31.6472H31.6097C32.0337 31.6472 32.3617 31.3192 32.3617 30.8952C32.3617 30.4712 32.0337 30.1292 31.6097 30.1292H30.2147C27.5897 30.1292 26.7017 27.8732 23.2017 27.8732C19.7017 27.8732 18.8127 30.1292 16.1877 30.1292C13.5627 30.1292 12.6737 27.8732 9.1737 27.8732C5.6597 27.8732 4.7847 30.1292 2.1467 30.1292H0.7657C0.3417 30.1292 -0.0003 30.4712 -0.0003 30.8952C-0.0003 31.3192 0.3417 31.6472 0.7657 31.6472Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.608946318372745 32.74920963311108"
          className={className}
        >
          <path
            d="              M1.9827 26.7613H21.2327L26.9197 21.0733C27.1937 20.8003 27.6177 20.8003 27.8907 21.0733L30.1057 23.2743L27.7537 25.6533C26.4137 26.9933 28.4517 29.0303 29.7907 27.6773L33.1677 24.3003C33.7697 23.6983 33.7427 22.8373 33.1677 22.2493L29.2307 18.3253C28.4517 17.5463 27.4117 17.0953 26.3187 17.0953H16.6387V1.0993C16.6387 -0.0357 14.9977 -0.5147 14.2867 0.7573L0.9567 24.7783C0.3687 25.8173 0.9567 26.7613 1.9827 26.7613ZM3.4587 24.8603C3.2677 24.8603 3.2127 24.6963 3.2947 24.5593L14.4237 4.5163C14.5057 4.3523 14.7387 4.4073 14.7387 4.5853V24.8603ZM25.3887 15.6733C27.1247 15.6733 28.5337 14.2653 28.5337 12.5283C28.5337 10.7923 27.1247 9.3973 25.3887 9.3973C23.6527 9.3973 22.2577 10.7923 22.2577 12.5283C22.2577 14.2653 23.6527 15.6733 25.3887 15.6733ZM19.2777 20.0073C19.5237 20.0073 19.6187 20.2533 19.4547 20.4033L16.6387 23.2333V20.0073ZM0.9157 32.7493H2.3377C6.1527 32.7493 6.9457 30.4663 9.4337 30.4663C11.9217 30.4663 12.7287 32.7493 16.5297 32.7493C20.3437 32.7493 21.1507 30.4663 23.6247 30.4663C26.1137 30.4663 26.9197 32.7493 30.7207 32.7493H32.1567C32.6617 32.7493 33.0727 32.3393 33.0727 31.8333C33.0727 31.3273 32.6617 30.9313 32.1567 30.9313H30.7207C28.1507 30.9313 27.2887 28.6613 23.6247 28.6613C19.9747 28.6613 19.1137 30.9313 16.5297 30.9313C13.9587 30.9313 13.0837 28.6613 9.4337 28.6613C5.7837 28.6613 4.9087 30.9313 2.3377 30.9313H0.9157C0.4097 30.9313 -0.0003 31.3273 -0.0003 31.8333C-0.0003 32.3393 0.4097 32.7493 0.9157 32.7493Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.28125 29.572864224834497"
          className={className}
        >
          <path
            d="              M2.2697 24.4052H19.9477L25.1837 19.1682C25.4567 18.8952 25.8677 18.9222 26.1137 19.1682L28.2597 21.3152L26.0317 23.5572C24.8967 24.7052 26.6187 26.4552 27.7817 25.2932L30.8847 22.1902C31.4047 21.6702 31.3907 20.9182 30.8847 20.4262L27.2617 16.8172C26.5507 16.1192 25.6347 15.7232 24.6507 15.7232H15.6547V0.9162C15.6547 -0.0268 14.2737 -0.4368 13.6717 0.6432L1.4087 22.7372C0.9157 23.6252 1.4087 24.4052 2.2697 24.4052ZM2.5707 23.5432C2.2017 23.5432 2.1327 23.2152 2.2557 22.9962L14.1917 1.5042C14.3967 1.1352 14.7927 1.2442 14.7927 1.5452V23.5432ZM23.8027 14.1782C25.3477 14.1782 26.5917 12.9202 26.5917 11.3752C26.5917 9.8172 25.3477 8.5732 23.8027 8.5732C22.2577 8.5732 20.9867 9.8172 20.9867 11.3752C20.9867 12.9202 22.2577 14.1782 23.8027 14.1782ZM18.3617 18.2112C18.5937 18.2112 18.7027 18.4442 18.5387 18.5942L15.6547 21.4792V18.2112ZM0.4377 29.5732H1.6137C4.9907 29.5732 5.9477 27.3172 8.6267 27.3172C11.3067 27.3172 12.2777 29.5732 15.6407 29.5732C19.0177 29.5732 19.9747 27.3172 22.6547 27.3172C25.3477 27.3172 26.3047 29.5732 29.6817 29.5732H30.8437C31.0897 29.5732 31.2817 29.3682 31.2817 29.1352C31.2817 28.8892 31.0897 28.6982 30.8437 28.6982H29.6817C26.8787 28.6982 25.9087 26.4422 22.6547 26.4422C19.4137 26.4422 18.4437 28.6982 15.6407 28.6982C12.8517 28.6982 11.8807 26.4422 8.6267 26.4422C5.3867 26.4422 4.4157 28.6982 1.6137 28.6982H0.4377C0.2047 28.6982 -0.0003 28.8892 -0.0003 29.1352C-0.0003 29.3682 0.2047 29.5732 0.4377 29.5732Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.966796875 28.955515956848352"
          className={className}
        >
          <path
            d="              M2.3927 23.9243H19.7017L24.8417 18.7833C25.1017 18.5243 25.5117 18.5373 25.7437 18.7833L27.8637 20.8893L25.6757 23.0903C24.5687 24.2253 26.2497 25.9343 27.3847 24.7993L30.4337 21.7503C30.9397 21.2443 30.9257 20.5063 30.4337 20.0273L26.8787 16.4863C26.1817 15.8033 25.2797 15.4063 24.3227 15.4063H15.5037V0.9003C15.5037 -0.0287 14.1507 -0.4257 13.5487 0.6273L1.5317 22.2833C1.0387 23.1583 1.5317 23.9243 2.3927 23.9243ZM2.4747 23.2403C2.0507 23.2403 1.9827 22.8713 2.1187 22.6253L14.1507 0.9553C14.3827 0.5313 14.8207 0.6683 14.8207 1.0103V23.2403ZM23.4887 13.8343C25.0057 13.8343 26.2227 12.6043 26.2227 11.0863C26.2227 9.5683 25.0057 8.3523 23.4887 8.3523C21.9707 8.3523 20.7267 9.5683 20.7267 11.0863C20.7267 12.6043 21.9707 13.8343 23.4887 13.8343ZM18.1567 17.8403C18.3747 17.8403 18.4847 18.0723 18.3337 18.2233L15.5037 21.0533V17.8403ZM0.3417 28.9553H1.4627C4.7437 28.9553 5.7427 26.7133 8.4767 26.7133C11.1977 26.7133 12.1957 28.9553 15.4907 28.9553C18.7847 28.9553 19.7837 26.7133 22.5037 26.7133C25.2247 26.7133 26.2227 28.9553 29.5177 28.9553H30.6247C30.8167 28.9553 30.9667 28.8053 30.9667 28.6133C30.9667 28.4363 30.8167 28.2723 30.6247 28.2723H29.5177C26.6737 28.2723 25.6757 26.0293 22.5037 26.0293C19.3317 26.0293 18.3337 28.2723 15.4907 28.2723C12.6327 28.2723 11.6487 26.0293 8.4767 26.0293C5.3047 26.0293 4.3067 28.2723 1.4627 28.2723H0.3417C0.1637 28.2723 -0.0003 28.4363 -0.0003 28.6133C-0.0003 28.8053 0.1637 28.9553 0.3417 28.9553Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
