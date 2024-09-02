import { IconProps } from "../../types"

export default function ThreeNineCircleIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301C4.8667 9.3651 9.3657 4.8671 14.9297 4.8671C20.4937 4.8671 25.0057 9.3651 25.0057 14.9301C25.0057 20.4941 20.4937 24.9921 14.9297 24.9921ZM17.7187 16.4201C18.7307 16.4201 19.3187 15.6681 19.5367 14.7931H19.5507V15.5451C19.5507 17.3361 19.2367 18.2661 18.6617 18.2661C18.3747 18.2661 18.2107 18.1151 18.0057 17.7051C17.7457 17.1991 17.4177 16.9941 16.8987 16.9941C16.1187 16.9941 15.8457 17.5141 15.8457 18.0601C15.8457 18.2111 15.8597 18.4431 15.9137 18.6071C16.2557 19.7691 17.3357 20.2891 18.5527 20.2891C21.2457 20.2891 22.0387 17.5821 22.0387 14.8891C22.0387 12.5921 21.3147 9.5701 18.5937 9.5701C16.5567 9.5701 15.4907 11.2521 15.4907 13.1931C15.4907 14.8201 16.1327 16.4201 17.7187 16.4201ZM10.9647 20.2621C12.9747 20.2621 14.3687 19.0991 14.3687 17.2131C14.3687 15.9001 13.6447 14.9711 12.5097 14.8201V14.7661C13.3027 14.5601 14.0687 13.6721 14.0687 12.4281C14.0687 10.6371 12.7967 9.5841 10.8827 9.5841C9.5837 9.5841 8.2987 10.2541 7.9437 11.4841C7.8747 11.6891 7.8477 11.9351 7.8477 12.1821C7.8477 12.6601 8.1207 13.2071 8.9137 13.2071C9.4197 13.2071 9.9397 13.0431 10.1037 12.4551C10.1987 12.0581 10.4317 11.5941 10.9097 11.5941C11.4437 11.5941 11.6207 12.1681 11.6207 12.7011C11.6207 13.3301 11.3887 13.9861 10.6367 13.9861H10.5547C9.8847 13.9861 9.5707 14.3421 9.5707 14.8751C9.5707 15.4351 9.8707 15.7771 10.5547 15.7771H10.6507C11.4847 15.7771 11.8257 16.2281 11.8257 17.0491C11.8257 17.6231 11.6077 18.2521 10.9507 18.2521C10.4727 18.2521 10.2127 17.9101 10.0627 17.5001C9.8577 16.9261 9.4607 16.6251 8.8727 16.6251C8.1617 16.6251 7.7107 17.0621 7.7107 17.7601C7.7107 18.0331 7.7517 18.2661 7.8207 18.4841C8.1897 19.6601 9.5017 20.2621 10.9647 20.2621ZM18.6487 14.5881C18.1977 14.5881 17.9647 14.0271 17.9647 13.0981C17.9647 12.1821 18.2107 11.6211 18.6487 11.6211C19.0857 11.6211 19.3187 12.1951 19.3187 13.1521C19.3187 14.0411 19.0857 14.5881 18.6487 14.5881Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 25.2926C8.4357 25.2926 3.6097 20.4536 3.6097 14.4376C3.6097 8.4356 8.4217 3.5956 14.4377 3.5956C20.4397 3.5956 25.2797 8.4356 25.2797 14.4376C25.2797 20.4536 20.4527 25.2926 14.4377 25.2926ZM17.4727 16.0376C18.5387 16.0376 19.2367 15.2986 19.5097 14.2736H19.5507V14.7246C19.5507 16.3786 19.2907 18.2106 18.2387 18.2106C17.7867 18.2106 17.4997 17.9236 17.2817 17.4176C17.0487 16.9536 16.7477 16.7476 16.2827 16.7476C15.6137 16.7476 15.3537 17.1996 15.3537 17.7046C15.3537 17.8556 15.3807 18.0606 15.4217 18.2246C15.7367 19.4006 16.8707 20.0156 18.1697 20.0156C20.9177 20.0156 21.7247 17.1176 21.7247 14.3696C21.7247 11.9356 20.9457 8.8726 18.1977 8.8726C16.1467 8.8726 15.0117 10.5956 15.0117 12.6326C15.0117 14.3696 15.7637 16.0376 17.4727 16.0376ZM10.3087 20.0016C12.2907 20.0016 13.7407 18.7986 13.7407 16.8296C13.7407 15.3266 12.8657 14.4516 11.7307 14.3146V14.2596C12.7417 13.9996 13.4257 13.0016 13.4257 11.7986C13.4257 9.9536 12.0857 8.9006 10.2407 8.9006C8.8867 8.9006 7.6287 9.6246 7.2597 10.8556C7.1917 11.0876 7.1507 11.3336 7.1507 11.5666C7.1507 12.0316 7.4507 12.4826 8.1077 12.4826C8.5997 12.4826 8.9957 12.3046 9.1327 11.7856C9.2967 11.1836 9.6247 10.6916 10.2537 10.6916C10.9787 10.6916 11.2797 11.3336 11.2797 12.0446C11.2797 12.8656 10.8827 13.5486 9.9937 13.5486H9.7887C9.2147 13.5486 8.9137 13.8636 8.9137 14.3556C8.9137 14.8616 9.2147 15.1626 9.7887 15.1626H10.0077C11.0057 15.1626 11.4977 15.7086 11.4977 16.7206C11.4977 17.4726 11.1287 18.1976 10.2947 18.1976C9.5707 18.1976 9.2147 17.6916 9.0507 17.1716C8.8867 16.6656 8.5447 16.4066 8.0257 16.4066C7.4097 16.4066 6.9997 16.7756 6.9997 17.4046C6.9997 17.6506 7.0407 17.8966 7.1097 18.1156C7.4917 19.3316 8.8317 20.0016 10.3087 20.0016ZM18.2387 14.3826C17.5137 14.3826 17.1857 13.5076 17.1857 12.5506C17.1857 11.5666 17.5407 10.6916 18.2387 10.6916C18.9767 10.6916 19.3047 11.5796 19.3047 12.5786C19.3047 13.5486 18.9487 14.3826 18.2387 14.3826Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9277 4.2794 14.6977 4.2794C20.4667 4.2794 25.1287 8.9274 25.1287 14.7114C25.1287 20.4804 20.4807 25.1424 14.6977 25.1424ZM17.5957 16.2424C18.6347 16.2424 19.2777 15.5044 19.5237 14.5604H19.5507V15.1624C19.5507 16.8844 19.2637 18.2524 18.4567 18.2524C18.1017 18.2524 17.8827 18.0334 17.6637 17.5824C17.4177 17.0894 17.1037 16.8844 16.6117 16.8844C15.8867 16.8844 15.6137 17.3774 15.6137 17.8964C15.6137 18.0474 15.6267 18.2654 15.6817 18.4294C16.0097 19.6054 17.1167 20.1664 18.3747 20.1664C21.0957 20.1664 21.8887 17.3634 21.8887 14.6564C21.8887 12.2914 21.1367 9.2424 18.4027 9.2424C16.3657 9.2424 15.2577 10.9514 15.2577 12.9334C15.2577 14.6154 15.9547 16.2424 17.5957 16.2424ZM10.6507 20.1384C12.6467 20.1384 14.0817 18.9634 14.0817 17.0484C14.0817 15.6404 13.2757 14.7384 12.1407 14.5884V14.5334C13.0427 14.3004 13.7677 13.3714 13.7677 12.1404C13.7677 10.3224 12.4547 9.2694 10.5817 9.2694C9.2417 9.2694 7.9847 9.9664 7.6157 11.1834C7.5467 11.4164 7.5197 11.6624 7.5197 11.8944C7.5197 12.3734 7.8067 12.8654 8.5317 12.8654C9.0367 12.8654 9.5017 12.7014 9.6527 12.1404C9.7757 11.6484 10.0487 11.1704 10.5957 11.1704C11.2247 11.1704 11.4567 11.7854 11.4567 12.4004C11.4567 13.1114 11.1427 13.7954 10.3357 13.7954H10.1857C9.5707 13.7954 9.2557 14.1234 9.2557 14.6424C9.2557 15.1754 9.5567 15.4904 10.1857 15.4904H10.3497C11.2517 15.4904 11.6757 15.9964 11.6757 16.8984C11.6757 17.5544 11.3747 18.2384 10.6367 18.2384C10.0487 18.2384 9.7477 17.8144 9.5837 17.3634C9.3927 16.8024 9.0237 16.5294 8.4767 16.5294C7.8067 16.5294 7.3827 16.9254 7.3827 17.5954C7.3827 17.8554 7.4097 18.1014 7.4787 18.3204C7.8617 19.5094 9.1877 20.1384 10.6507 20.1384ZM18.4567 14.4924C17.8687 14.4924 17.5957 13.7954 17.5957 12.8514C17.5957 11.8944 17.8967 11.1974 18.4567 11.1974C19.0317 11.1974 19.3187 11.9084 19.3187 12.8794C19.3187 13.8224 19.0177 14.4924 18.4567 14.4924Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.7127 25.648C7.0957 25.648 1.7777 20.316 1.7777 13.713C1.7777 7.096 7.0957 1.764 13.6987 1.764C20.3167 1.764 25.6617 7.096 25.6617 13.713C25.6617 20.316 20.3297 25.648 13.7127 25.648ZM17.0077 15.422C18.1977 15.422 19.0317 14.588 19.3187 13.385H19.3727V13.563C19.3727 15.217 19.1547 18.17 17.4317 18.17C16.7067 18.17 16.2417 17.65 15.9827 16.926C15.8047 16.516 15.5857 16.352 15.2577 16.352C14.8067 16.352 14.6017 16.666 14.6017 17.035C14.6017 17.186 14.6287 17.363 14.6837 17.541C14.9977 18.744 16.1057 19.482 17.4177 19.482C20.1247 19.482 20.8767 16.256 20.8767 13.563C20.8767 10.992 20.0837 7.943 17.4457 7.943C15.4487 7.943 14.3007 9.707 14.3007 11.813C14.3007 13.658 15.2027 15.422 17.0077 15.422ZM9.5707 19.469C11.4437 19.469 12.8517 18.225 12.8517 16.201C12.8517 14.602 11.9357 13.658 10.6917 13.535V13.48C11.9357 13.166 12.5237 12.045 12.5237 10.883C12.5237 9.078 11.2517 7.971 9.5297 7.971C8.1347 7.971 7.0407 8.777 6.6577 9.98C6.5757 10.254 6.5627 10.5 6.5627 10.705C6.5627 11.074 6.7947 11.361 7.2327 11.361C7.6287 11.361 7.8207 11.184 7.9297 10.787C8.1347 9.912 8.6267 9.256 9.5297 9.256C10.5277 9.256 11.0327 10.063 11.0327 11.061C11.0327 12.154 10.4047 12.961 9.2967 12.961H8.8727C8.4767 12.961 8.2577 13.207 8.2577 13.563C8.2577 13.932 8.5037 14.164 8.8727 14.164H9.3107C10.5687 14.164 11.2927 14.848 11.2927 16.174C11.2927 17.24 10.7327 18.156 9.5837 18.156C8.4907 18.156 7.9437 17.377 7.7797 16.639C7.6837 16.256 7.4647 16.064 7.0817 16.064C6.6577 16.064 6.3707 16.324 6.3707 16.762C6.3707 16.98 6.4117 17.24 6.4807 17.459C6.8767 18.703 8.1207 19.469 9.5707 19.469ZM17.4587 14.178C16.3237 14.178 15.8187 12.893 15.8187 11.758C15.8187 10.582 16.3657 9.242 17.4587 9.242C18.6207 9.242 19.1407 10.609 19.1407 11.758C19.1407 12.947 18.5667 14.178 17.4587 14.178Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C20.3987 2.7891 25.4707 7.8341 25.4707 14.1231C25.4707 20.4121 20.4117 25.4711 14.1227 25.4711ZM17.3087 15.7911C18.4027 15.7911 19.1957 15.0531 19.4957 13.9311H19.5367V14.1911C19.5367 15.7641 19.3317 18.1701 17.9647 18.1701C17.4177 18.1701 17.0487 17.7871 16.8167 17.2261C16.5977 16.7751 16.3237 16.5841 15.8867 16.5841C15.2847 16.5841 15.0257 17.0081 15.0257 17.4731C15.0257 17.6231 15.0667 17.8011 15.1077 17.9651C15.4077 19.1541 16.5837 19.8381 17.9237 19.8381C20.6987 19.8381 21.5197 16.8031 21.5197 14.0271C21.5197 11.4981 20.7127 8.4221 17.9377 8.4221C15.8727 8.4221 14.6977 10.1581 14.6977 12.2641C14.6977 14.0681 15.5447 15.7911 17.3087 15.7911ZM9.8847 19.8241C11.8537 19.8241 13.3437 18.6071 13.3437 16.5841C13.3437 14.9571 12.3727 14.1091 11.2247 13.9731V13.9311C12.3867 13.6171 13.0157 12.5641 13.0157 11.3891C13.0157 9.5151 11.6347 8.4491 9.8297 8.4491C8.4357 8.4491 7.2047 9.2151 6.8227 10.4311C6.7407 10.6781 6.7127 10.9241 6.7127 11.1701C6.7127 11.6211 7.0137 12.0171 7.5877 12.0171C8.0667 12.0171 8.3807 11.8261 8.5177 11.3481C8.7227 10.6091 9.1187 10.1031 9.8297 10.1031C10.6637 10.1031 11.0467 10.7871 11.0467 11.6211C11.0467 12.5511 10.5547 13.2621 9.5837 13.2621H9.2967C8.7907 13.2621 8.5037 13.5621 8.5037 14.0271C8.5037 14.4921 8.8047 14.7651 9.2967 14.7651H9.5977C10.6917 14.7651 11.2927 15.3811 11.2927 16.5021C11.2927 17.3771 10.8417 18.1561 9.8847 18.1561C8.9827 18.1561 8.5727 17.5411 8.4077 16.9531C8.2577 16.4881 7.9567 16.2421 7.4917 16.2421C6.9177 16.2421 6.5487 16.5841 6.5487 17.1581C6.5487 17.4041 6.5757 17.6501 6.6447 17.8691C7.0407 19.1271 8.4217 19.8241 9.8847 19.8241ZM17.9787 14.2321C17.0627 14.2321 16.6937 13.1801 16.6937 12.1811C16.6937 11.1701 17.1167 10.0901 17.9787 10.0901C18.8947 10.0901 19.2777 11.1831 19.2777 12.1951C19.2777 13.2211 18.8667 14.2321 17.9787 14.2321Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9457 25.5664C7.4917 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C20.3847 2.3244 25.5667 7.4924 25.5667 13.9454C25.5667 20.3984 20.3987 25.5664 13.9457 25.5664ZM17.2267 15.6544C18.3337 15.6544 19.1677 14.9164 19.4827 13.7404H19.5367V13.8904C19.5367 15.4084 19.3457 18.1424 17.8147 18.1424C17.1987 18.1424 16.7887 17.7184 16.5427 17.1304C16.3517 16.6794 16.0777 16.5024 15.6677 16.5024C15.0937 16.5024 14.8477 16.8844 14.8477 17.3364C14.8477 17.5004 14.8887 17.6644 14.9297 17.8284C15.2307 19.0174 16.4067 19.7424 17.7867 19.7424C20.5897 19.7424 21.3967 16.6384 21.3967 13.8364C21.3967 11.2524 20.5757 8.1624 17.8007 8.1624C15.7227 8.1624 14.5197 9.9124 14.5197 12.0584C14.5197 13.9044 15.4077 15.6544 17.2267 15.6544ZM9.6527 19.7144C11.6077 19.7144 13.1117 18.4844 13.1117 16.4334C13.1117 14.7384 12.0997 13.9044 10.9507 13.7814V13.7404C12.1817 13.4124 12.7827 12.3044 12.7827 11.1564C12.7827 9.2694 11.3747 8.1894 9.5977 8.1894C8.1757 8.1894 6.9587 8.9824 6.5627 10.1994C6.4937 10.4594 6.4667 10.7054 6.4667 10.9374C6.4667 11.3884 6.7677 11.7444 7.3007 11.7444C7.7657 11.7444 8.0387 11.5664 8.1757 11.0874C8.3947 10.2814 8.8187 9.7754 9.5977 9.7754C10.4997 9.7754 10.9237 10.4724 10.9237 11.3754C10.9237 12.3734 10.3767 13.0974 9.3517 13.0974H9.0237C8.5587 13.0974 8.2717 13.3844 8.2717 13.8364C8.2717 14.2874 8.5727 14.5464 9.0237 14.5464H9.3657C10.5277 14.5464 11.1697 15.1894 11.1697 16.3784C11.1697 17.3224 10.6637 18.1284 9.6527 18.1284C8.6547 18.1284 8.2027 17.4594 8.0387 16.8304C7.9157 16.3924 7.6157 16.1604 7.1777 16.1604C6.6447 16.1604 6.2887 16.4884 6.2887 17.0214C6.2887 17.2674 6.3297 17.5134 6.3987 17.7324C6.7817 19.0034 8.1757 19.7144 9.6527 19.7144ZM17.8277 14.1504C16.8167 14.1504 16.4067 12.9884 16.4067 11.9764C16.4067 10.9514 16.8707 9.7484 17.8277 9.7484C18.8537 9.7484 19.2777 10.9514 19.2777 11.9764C19.2777 13.0294 18.8127 14.1504 17.8277 14.1504Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C20.4257 3.1309 25.3887 8.0939 25.3887 14.2599C25.3887 20.4259 20.4257 25.3889 14.2597 25.3889ZM17.3767 15.9009C18.4567 15.9009 19.2227 15.1619 19.4957 14.0819H19.5367V14.4239C19.5367 16.0239 19.3187 18.1839 18.0877 18.1839C17.5817 18.1839 17.2407 17.8419 17.0077 17.3089C16.7887 16.8579 16.5017 16.6659 16.0647 16.6659C15.4217 16.6659 15.1617 17.0899 15.1617 17.5679C15.1617 17.7329 15.2027 17.9099 15.2437 18.0739C15.5587 19.2639 16.7067 19.9199 18.0327 19.9199C20.7947 19.9199 21.6017 16.9399 21.6017 14.1779C21.6017 11.6899 20.8087 8.6129 18.0467 8.6129C15.9827 8.6129 14.8337 10.3499 14.8337 12.4279C14.8337 14.1919 15.6407 15.9009 17.3767 15.9009ZM10.0627 19.8929C12.0447 19.8929 13.5217 18.6899 13.5217 16.6929C13.5217 15.1209 12.5917 14.2459 11.4437 14.1229V14.0679C12.5367 13.7809 13.1937 12.7559 13.1937 11.5669C13.1937 9.7069 11.8257 8.6409 10.0077 8.6409C8.6267 8.6409 7.3827 9.3929 6.9997 10.6099C6.9317 10.8559 6.9047 11.1019 6.9047 11.3339C6.9047 11.7989 7.1917 12.2089 7.8207 12.2089C8.2987 12.2089 8.6547 12.0449 8.7907 11.5389C8.9687 10.8559 9.3377 10.3629 10.0077 10.3629C10.8007 10.3629 11.1427 11.0199 11.1427 11.8129C11.1427 12.6879 10.6917 13.3849 9.7617 13.3849H9.5017C8.9827 13.3849 8.6817 13.6859 8.6817 14.1639C8.6817 14.6559 8.9827 14.9429 9.5017 14.9429H9.7757C10.8277 14.9429 11.3747 15.5179 11.3747 16.5979C11.3747 17.4179 10.9647 18.1699 10.0627 18.1699C9.2287 18.1699 8.8457 17.6099 8.6817 17.0489C8.5317 16.5699 8.2027 16.3109 7.7247 16.3109C7.1227 16.3109 6.7407 16.6659 6.7407 17.2679C6.7407 17.5139 6.7817 17.7599 6.8497 17.9789C7.2327 19.2229 8.5997 19.8929 10.0627 19.8929ZM18.0877 14.2869C17.2537 14.2869 16.9117 13.3169 16.9117 12.3459C16.9117 11.3479 17.2947 10.3499 18.0877 10.3499C18.9357 10.3499 19.2907 11.3479 19.2907 12.3599C19.2907 13.3579 18.9077 14.2869 18.0877 14.2869Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.4117 25.7712C6.5757 25.7712 1.0387 20.2342 1.0387 13.4122C1.0387 6.5902 6.5757 1.0392 13.3987 1.0392C20.2347 1.0392 25.7717 6.5902 25.7717 13.4122C25.7717 20.2342 20.2347 25.7712 13.4117 25.7712ZM16.7207 15.1212C18.0057 15.1212 18.8537 14.1642 19.0997 12.9062H19.1547V13.1252C19.1547 14.9702 18.8807 18.2242 16.9257 18.2242C16.0507 18.2242 15.5037 17.5822 15.2307 16.6522C15.0937 16.2972 14.9437 16.1742 14.7247 16.1742C14.4097 16.1742 14.2597 16.3792 14.2597 16.6522C14.2597 16.7892 14.3007 16.9802 14.3557 17.1582C14.6977 18.3882 15.6957 19.1542 16.9257 19.1542C19.5237 19.1542 20.1657 15.7632 20.1657 13.1932C20.1657 10.6502 19.4277 7.6562 16.9667 7.6562C15.0797 7.6562 14.0277 9.4472 14.0277 11.4982C14.0277 13.3442 14.9157 15.1212 16.7207 15.1212ZM9.4887 19.1272C11.2247 19.1272 12.5097 17.8832 12.5097 15.9002C12.5097 14.4102 11.7307 13.3162 10.3637 13.1932V13.1662C11.6077 12.8382 12.1817 11.7032 12.1817 10.5412C12.1817 8.8452 11.0737 7.6972 9.4337 7.6972C8.0797 7.6972 7.1507 8.4902 6.7817 9.7072C6.6987 9.9942 6.6857 10.2402 6.6857 10.3902C6.6857 10.6642 6.8357 10.8692 7.1367 10.8692C7.4377 10.8692 7.5327 10.7052 7.6017 10.4042C7.7927 9.4202 8.3667 8.5862 9.4337 8.5862C10.5687 8.5862 11.1837 9.5152 11.1837 10.6502C11.1837 11.8532 10.4317 12.7972 9.2287 12.7972H8.6677C8.3667 12.7972 8.2437 12.9882 8.2437 13.2202C8.2437 13.4672 8.4217 13.6442 8.6677 13.6442H9.2417C10.6367 13.6442 11.4567 14.4102 11.4567 15.9142C11.4567 17.1312 10.8277 18.2112 9.5017 18.2112C8.2577 18.2112 7.5877 17.2812 7.4377 16.3922C7.3827 16.0922 7.2597 15.9282 6.9587 15.9282C6.6717 15.9282 6.4937 16.1192 6.4937 16.4202C6.4937 16.5972 6.5347 16.8982 6.6037 17.1172C6.9867 18.3202 8.0667 19.1272 9.4887 19.1272ZM16.9667 14.2322C15.6677 14.2322 15.0387 12.7972 15.0387 11.4842C15.0387 10.1172 15.6817 8.5722 16.9667 8.5722C18.2927 8.5722 18.9487 10.1442 18.9487 11.4842C18.9487 12.8382 18.2387 14.2322 16.9667 14.2322Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481C0.6697 6.3031 6.3167 0.6701 13.2477 0.6701C20.1937 0.6701 25.8257 6.3031 25.8257 13.2481C25.8257 20.1801 20.1937 25.8261 13.2477 25.8261ZM16.5707 14.9571C17.9097 14.9571 18.7577 13.9451 18.9907 12.6461H19.0447V12.8921C19.0447 14.8341 18.7437 18.2381 16.6657 18.2381C15.7087 18.2381 15.1347 17.5271 14.8337 16.5151C14.7387 16.1871 14.6157 16.0781 14.4507 16.0781C14.2047 16.0781 14.0817 16.2281 14.0817 16.4471C14.0817 16.5701 14.1227 16.7621 14.1917 16.9671C14.5467 18.1971 15.4767 18.9631 16.6797 18.9631C19.2087 18.9631 19.8107 15.5041 19.8107 13.0021C19.8107 10.4731 19.0997 7.5061 16.7207 7.5061C14.8887 7.5061 13.8767 9.3101 13.8767 11.3201C13.8767 13.1801 14.7657 14.9571 16.5707 14.9571ZM9.4337 18.9491C11.1017 18.9491 12.3187 17.6911 12.3187 15.7361C12.3187 14.3011 11.6077 13.1391 10.1987 13.0151V12.9881C11.4297 12.6741 12.0037 11.5121 12.0037 10.3491C12.0037 8.7091 10.9917 7.5471 9.3787 7.5471C8.0387 7.5471 7.2187 8.3401 6.8497 9.5431C6.7537 9.8441 6.7407 10.0901 6.7407 10.2261C6.7407 10.4451 6.8637 10.6091 7.0817 10.6091C7.3417 10.6091 7.3827 10.4451 7.4377 10.1851C7.6157 9.1601 8.2307 8.2441 9.3787 8.2441C10.5957 8.2441 11.2657 9.2281 11.2657 10.4311C11.2657 11.6891 10.4587 12.6871 9.2007 12.6871H8.5587C8.3257 12.6871 8.2307 12.8651 8.2307 13.0291C8.2307 13.2211 8.3667 13.3711 8.5587 13.3711H9.2147C10.6637 13.3711 11.5387 14.1781 11.5387 15.7771C11.5387 17.0621 10.8827 18.2381 9.4607 18.2381C8.1347 18.2381 7.3967 17.2131 7.2597 16.2561C7.2327 15.9961 7.1507 15.8591 6.8907 15.8591C6.6857 15.8591 6.5487 16.0101 6.5487 16.2281C6.5487 16.4061 6.6037 16.7211 6.6717 16.9261C7.0407 18.1151 8.0257 18.9491 9.4337 18.9491ZM16.7207 14.2601C15.3257 14.2601 14.6427 12.7281 14.6427 11.3341C14.6427 9.8711 15.3257 8.2171 16.7207 8.2171C18.1427 8.2171 18.8537 9.9121 18.8537 11.3341C18.8537 12.7691 18.0607 14.2601 16.7207 14.2601Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
