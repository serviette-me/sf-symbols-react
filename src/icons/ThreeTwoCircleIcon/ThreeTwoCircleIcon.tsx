import { IconProps } from "../../types"

export default function ThreeTwoCircleIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301C4.8667 9.3651 9.3657 4.8671 14.9297 4.8671C20.4937 4.8671 25.0057 9.3651 25.0057 14.9301C25.0057 20.4941 20.4937 24.9921 14.9297 24.9921ZM16.6657 20.0021H20.8087C21.5327 20.0021 21.7927 19.5101 21.7927 18.9901C21.7927 18.4711 21.5327 17.9781 20.8087 17.9781H18.5117V17.8691L19.8927 16.2281C20.8907 15.0391 21.6427 14.0681 21.6427 12.6051C21.6427 10.6501 20.2887 9.5701 18.4567 9.5701C16.8167 9.5701 15.4487 10.7461 15.4487 12.1821C15.4487 12.8381 15.8317 13.3301 16.5157 13.3301C17.0347 13.3301 17.4727 13.0701 17.6507 12.4281C17.7867 11.9631 17.9787 11.5531 18.4437 11.5531C19.0037 11.5531 19.1677 12.0861 19.1677 12.6741C19.1677 13.6031 18.5527 14.4921 17.7597 15.4901L16.1327 17.5411C15.6137 18.1971 15.4627 18.5531 15.4627 18.9761C15.4627 19.6331 15.8867 20.0021 16.6657 20.0021ZM11.1427 20.2621C13.1527 20.2621 14.5467 19.0991 14.5467 17.2131C14.5467 15.9001 13.8227 14.9711 12.6877 14.8201V14.7661C13.4807 14.5601 14.2457 13.6721 14.2457 12.4281C14.2457 10.6371 12.9747 9.5841 11.0607 9.5841C9.7617 9.5841 8.4767 10.2541 8.1207 11.4841C8.0527 11.6891 8.0257 11.9351 8.0257 12.1821C8.0257 12.6601 8.2987 13.2071 9.0917 13.2071C9.5977 13.2071 10.1167 13.0431 10.2817 12.4551C10.3767 12.0581 10.6097 11.5941 11.0877 11.5941C11.6207 11.5941 11.7987 12.1681 11.7987 12.7011C11.7987 13.3301 11.5667 13.9861 10.8147 13.9861H10.7327C10.0627 13.9861 9.7477 14.3421 9.7477 14.8751C9.7477 15.4351 10.0487 15.7771 10.7327 15.7771H10.8277C11.6617 15.7771 12.0037 16.2281 12.0037 17.0491C12.0037 17.6231 11.7847 18.2521 11.1287 18.2521C10.6507 18.2521 10.3907 17.9101 10.2407 17.5001C10.0347 16.9261 9.6387 16.6251 9.0507 16.6251C8.3397 16.6251 7.8887 17.0621 7.8887 17.7601C7.8887 18.0331 7.9297 18.2661 7.9977 18.4841C8.3667 19.6601 9.6797 20.2621 11.1427 20.2621Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 25.2926C8.4357 25.2926 3.6097 20.4536 3.6097 14.4376C3.6097 8.4356 8.4217 3.5956 14.4377 3.5956C20.4397 3.5956 25.2797 8.4356 25.2797 14.4376C25.2797 20.4536 20.4527 25.2926 14.4377 25.2926ZM16.1597 19.7426H20.6037C21.2047 19.7426 21.4917 19.3316 21.4917 18.8396C21.4917 18.3206 21.2047 17.9236 20.6037 17.9236H17.8277V17.8146L19.5237 15.7366C20.7127 14.3006 21.3007 13.3026 21.3007 11.9766C21.3007 10.0626 20.0017 8.8596 18.1427 8.8596C16.4477 8.8596 15.1077 10.1716 15.1077 11.6076C15.1077 12.1816 15.4357 12.6056 16.0507 12.6056C16.5297 12.6056 16.8847 12.3726 17.0487 11.8266C17.2407 11.1426 17.5137 10.6366 18.1287 10.6366C18.8257 10.6366 19.1407 11.2796 19.1407 12.0446C19.1407 13.0566 18.4437 14.0686 17.6917 15.0256L15.6957 17.5686C15.2987 18.0606 15.0937 18.4026 15.0937 18.8396C15.0937 19.3866 15.4627 19.7426 16.1597 19.7426ZM10.4997 20.0016C12.4827 20.0016 13.9317 18.7986 13.9317 16.8296C13.9317 15.3266 13.0567 14.4516 11.9217 14.3146V14.2596C12.9337 13.9996 13.6167 13.0016 13.6167 11.7986C13.6167 9.9536 12.2777 8.9006 10.4317 8.9006C9.0777 8.9006 7.8207 9.6246 7.4507 10.8556C7.3827 11.0876 7.3417 11.3336 7.3417 11.5666C7.3417 12.0316 7.6427 12.4826 8.2987 12.4826C8.7907 12.4826 9.1877 12.3046 9.3377 11.7856C9.4887 11.1836 9.8167 10.6916 10.4457 10.6916C11.1697 10.6916 11.4707 11.3336 11.4707 12.0446C11.4707 12.8656 11.0737 13.5486 10.1857 13.5486H9.9807C9.4067 13.5486 9.1057 13.8636 9.1057 14.3556C9.1057 14.8616 9.4067 15.1626 9.9807 15.1626H10.1987C11.1977 15.1626 11.6897 15.7086 11.6897 16.7206C11.6897 17.4726 11.3207 18.1976 10.4867 18.1976C9.7617 18.1976 9.4067 17.6916 9.2417 17.1716C9.0777 16.6656 8.7367 16.4066 8.2167 16.4066C7.6017 16.4066 7.1917 16.7756 7.1917 17.4046C7.1917 17.6506 7.2327 17.8966 7.3007 18.1156C7.6837 19.3316 9.0237 20.0016 10.4997 20.0016Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9277 4.2794 14.6977 4.2794C20.4667 4.2794 25.1287 8.9274 25.1287 14.7114C25.1287 20.4804 20.4807 25.1424 14.6977 25.1424ZM16.4337 19.8794H20.7127C21.3827 19.8794 21.6567 19.4274 21.6567 18.9224C21.6567 18.4024 21.3687 17.9644 20.7127 17.9644H18.1977V17.8554L19.7147 16.0094C20.8087 14.6974 21.4787 13.7134 21.4787 12.3044C21.4787 10.3774 20.1527 9.2424 18.3067 9.2424C16.6387 9.2424 15.2847 10.4724 15.2847 11.9224C15.2847 12.5374 15.6407 12.9884 16.2967 12.9884C16.8027 12.9884 17.1857 12.7424 17.3767 12.1544C17.5407 11.5804 17.7597 11.1294 18.3067 11.1294C18.9217 11.1294 19.1547 11.7034 19.1547 12.3864C19.1547 13.3574 18.4977 14.3004 17.7327 15.2854L15.9277 17.5684C15.4627 18.1424 15.2847 18.4844 15.2847 18.9224C15.2847 19.5234 15.6817 19.8794 16.4337 19.8794ZM10.8417 20.1384C12.8377 20.1384 14.2597 18.9634 14.2597 17.0484C14.2597 15.6404 13.4667 14.7384 12.3317 14.5884V14.5334C13.2207 14.3004 13.9587 13.3714 13.9587 12.1404C13.9587 10.3224 12.6467 9.2694 10.7597 9.2694C9.4337 9.2694 8.1617 9.9664 7.8067 11.1834C7.7387 11.4164 7.6977 11.6624 7.6977 11.8944C7.6977 12.3734 7.9847 12.8654 8.7227 12.8654C9.2147 12.8654 9.6797 12.7014 9.8297 12.1404C9.9527 11.6484 10.2267 11.1704 10.7867 11.1704C11.4027 11.1704 11.6347 11.7854 11.6347 12.4004C11.6347 13.1114 11.3337 13.7954 10.5137 13.7954H10.3767C9.7477 13.7954 9.4477 14.1234 9.4477 14.6424C9.4477 15.1754 9.7477 15.4904 10.3767 15.4904H10.5277C11.4437 15.4904 11.8537 15.9964 11.8537 16.8984C11.8537 17.5544 11.5667 18.2384 10.8277 18.2384C10.2267 18.2384 9.9257 17.8144 9.7617 17.3634C9.5837 16.8024 9.2147 16.5294 8.6547 16.5294C7.9847 16.5294 7.5607 16.9254 7.5607 17.5954C7.5607 17.8554 7.6017 18.1014 7.6697 18.3204C8.0387 19.5094 9.3657 20.1384 10.8417 20.1384Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.7127 25.648C7.0957 25.648 1.7777 20.316 1.7777 13.713C1.7777 7.096 7.0957 1.764 13.6987 1.764C20.3167 1.764 25.6617 7.096 25.6617 13.713C25.6617 20.316 20.3297 25.648 13.7127 25.648ZM15.2987 19.236H20.0297C20.4117 19.236 20.6577 18.977 20.6577 18.594C20.6577 18.184 20.3987 17.938 20.0297 17.938H16.5297V17.842L18.7577 14.875C20.0157 13.248 20.4397 12.25 20.4397 11.074C20.4397 9.27 19.3047 7.93 17.4867 7.93C15.7907 7.93 14.5737 9.379 14.5737 10.814C14.5737 11.197 14.8067 11.512 15.2437 11.512C15.5997 11.512 15.8317 11.334 15.9277 10.979C16.1597 9.926 16.5707 9.215 17.4867 9.215C18.4707 9.215 18.9487 10.131 18.9487 11.143C18.9487 12.209 18.3337 13.234 17.5547 14.273L14.9437 17.732C14.7387 18.006 14.5607 18.266 14.5607 18.594C14.5607 18.977 14.8067 19.236 15.2987 19.236ZM9.7757 19.469C11.6487 19.469 13.0567 18.225 13.0567 16.201C13.0567 14.602 12.1407 13.658 10.8967 13.535V13.48C12.1407 13.166 12.7287 12.045 12.7287 10.883C12.7287 9.078 11.4437 7.971 9.7207 7.971C8.3397 7.971 7.2457 8.777 6.8637 9.98C6.7817 10.254 6.7537 10.5 6.7537 10.705C6.7537 11.074 6.9997 11.361 7.4377 11.361C7.8337 11.361 8.0257 11.184 8.1347 10.787C8.3397 9.912 8.8317 9.256 9.7207 9.256C10.7327 9.256 11.2387 10.063 11.2387 11.061C11.2387 12.154 10.5957 12.961 9.5017 12.961H9.0647C8.6817 12.961 8.4627 13.207 8.4627 13.563C8.4627 13.932 8.7087 14.164 9.0647 14.164H9.5157C10.7737 14.164 11.4977 14.848 11.4977 16.174C11.4977 17.24 10.9377 18.156 9.7887 18.156C8.6817 18.156 8.1487 17.377 7.9847 16.639C7.8887 16.256 7.6697 16.064 7.2867 16.064C6.8637 16.064 6.5757 16.324 6.5757 16.762C6.5757 16.98 6.6167 17.24 6.6857 17.459C7.0687 18.703 8.3257 19.469 9.7757 19.469Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C20.3987 2.7891 25.4707 7.8341 25.4707 14.1231C25.4707 20.4121 20.4117 25.4711 14.1227 25.4711ZM15.8457 19.5781H20.4807C20.9997 19.5781 21.2867 19.2231 21.2867 18.7301C21.2867 18.2241 20.9867 17.8961 20.4807 17.8961H17.4047V17.7871L19.2907 15.4221C20.5897 13.8081 21.0957 12.8101 21.0957 11.5531C21.0957 9.6931 19.8237 8.3941 17.9377 8.3941C16.2147 8.3941 14.8747 9.8031 14.8747 11.2241C14.8747 11.7581 15.1897 12.1401 15.7497 12.1401C16.2007 12.1401 16.5157 11.9221 16.6657 11.4431C16.8987 10.6091 17.2127 10.0491 17.9377 10.0491C18.7167 10.0491 19.1137 10.7461 19.1137 11.6481C19.1137 12.7011 18.3887 13.7811 17.6507 14.7111L15.4077 17.5821C15.1077 17.9651 14.8747 18.3061 14.8747 18.7301C14.8747 19.2231 15.1897 19.5781 15.8457 19.5781ZM10.0897 19.8241C12.0587 19.8241 13.5487 18.6071 13.5487 16.5841C13.5487 14.9571 12.5777 14.1091 11.4297 13.9731V13.9311C12.5917 13.6171 13.2207 12.5641 13.2207 11.3891C13.2207 9.5151 11.8257 8.4491 10.0217 8.4491C8.6407 8.4491 7.4097 9.2151 7.0137 10.4311C6.9457 10.6781 6.9177 10.9241 6.9177 11.1701C6.9177 11.6211 7.2047 12.0171 7.7927 12.0171C8.2717 12.0171 8.5857 11.8261 8.7227 11.3481C8.9137 10.6091 9.3107 10.1031 10.0347 10.1031C10.8687 10.1031 11.2517 10.7871 11.2517 11.6211C11.2517 12.5511 10.7597 13.2621 9.7757 13.2621H9.5017C8.9957 13.2621 8.6957 13.5621 8.6957 14.0271C8.6957 14.4921 8.9957 14.7651 9.5017 14.7651H9.8027C10.8967 14.7651 11.4847 15.3811 11.4847 16.5021C11.4847 17.3771 11.0327 18.1561 10.0897 18.1561C9.1877 18.1561 8.7777 17.5411 8.6137 16.9531C8.4627 16.4881 8.1487 16.2421 7.6837 16.2421C7.1227 16.2421 6.7407 16.5841 6.7407 17.1581C6.7407 17.4041 6.7817 17.6501 6.8497 17.8691C7.2457 19.1271 8.6137 19.8241 10.0897 19.8241Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9457 25.5664C7.4917 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C20.3847 2.3244 25.5667 7.4924 25.5667 13.9454C25.5667 20.3984 20.3987 25.5664 13.9457 25.5664ZM15.6547 19.4684H20.3987C20.8907 19.4684 21.1777 19.1544 21.1777 18.6754C21.1777 18.1564 20.8767 17.8694 20.3987 17.8694H17.1577V17.7594L19.1547 15.2304C20.5217 13.5354 20.9727 12.5234 20.9727 11.3204C20.9727 9.4744 19.7147 8.1344 17.8277 8.1344C16.0777 8.1344 14.7517 9.5844 14.7517 11.0054C14.7517 11.5114 15.0527 11.8674 15.5727 11.8674C16.0237 11.8674 16.2967 11.6624 16.4477 11.2114C16.6937 10.2954 17.0347 9.7204 17.8147 9.7204C18.6487 9.7204 19.1137 10.4454 19.1137 11.4164C19.1137 12.5094 18.3477 13.6174 17.6227 14.5464L15.2437 17.5824C14.9977 17.9104 14.7387 18.2524 14.7387 18.6754C14.7387 19.1404 15.0387 19.4684 15.6547 19.4684ZM9.8577 19.7144C11.8127 19.7144 13.3167 18.4844 13.3167 16.4334C13.3167 14.7384 12.3047 13.9044 11.1567 13.7814V13.7404C12.3867 13.4124 13.0017 12.3044 13.0017 11.1564C13.0017 9.2694 11.5797 8.1894 9.8027 8.1894C8.3947 8.1894 7.1637 8.9824 6.7677 10.1994C6.6987 10.4594 6.6717 10.7054 6.6717 10.9374C6.6717 11.3884 6.9727 11.7444 7.5057 11.7444C7.9707 11.7444 8.2437 11.5664 8.3807 11.0874C8.5997 10.2814 9.0367 9.7754 9.8027 9.7754C10.7047 9.7754 11.1287 10.4724 11.1287 11.3754C11.1287 12.3734 10.5817 13.0974 9.5567 13.0974H9.2287C8.7637 13.0974 8.4767 13.3844 8.4767 13.8364C8.4767 14.2874 8.7777 14.5464 9.2287 14.5464H9.5707C10.7327 14.5464 11.3747 15.1894 11.3747 16.3784C11.3747 17.3224 10.8687 18.1284 9.8577 18.1284C8.8597 18.1284 8.4217 17.4594 8.2437 16.8304C8.1207 16.3924 7.8207 16.1604 7.3827 16.1604C6.8497 16.1604 6.4937 16.4884 6.4937 17.0214C6.4937 17.2674 6.5347 17.5134 6.6037 17.7324C6.9867 19.0034 8.3807 19.7144 9.8577 19.7144Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C20.4257 3.1309 25.3887 8.0939 25.3887 14.2599C25.3887 20.4259 20.4257 25.3889 14.2597 25.3889ZM15.9827 19.6469H20.5347C21.0957 19.6469 21.3827 19.2769 21.3827 18.7849C21.3827 18.2659 21.0817 17.9099 20.5347 17.9099H17.5817V17.8009L19.3867 15.5589C20.6447 14.0269 21.1777 13.0159 21.1777 11.7309C21.1777 9.8579 19.9067 8.5999 18.0327 8.5999C16.3107 8.5999 14.9707 9.9529 14.9707 11.3889C14.9707 11.9359 15.2987 12.3319 15.8727 12.3319C16.3517 12.3319 16.6657 12.1129 16.8297 11.6079C17.0487 10.8419 17.3357 10.3089 18.0197 10.3089C18.7577 10.3089 19.1267 10.9789 19.1267 11.8259C19.1267 12.8649 18.4157 13.9039 17.6637 14.8479L15.5317 17.5819C15.1897 18.0059 14.9707 18.3479 14.9707 18.7719C14.9707 19.2909 15.3127 19.6469 15.9827 19.6469ZM10.2677 19.8929C12.2367 19.8929 13.7127 18.6899 13.7127 16.6929C13.7127 15.1209 12.7827 14.2459 11.6347 14.1229V14.0679C12.7417 13.7809 13.3987 12.7559 13.3987 11.5669C13.3987 9.7069 12.0177 8.6409 10.1987 8.6409C8.8187 8.6409 7.5877 9.3929 7.2047 10.6099C7.1367 10.8559 7.0957 11.1019 7.0957 11.3339C7.0957 11.7989 7.3967 12.2089 8.0117 12.2089C8.4907 12.2089 8.8457 12.0449 8.9827 11.5389C9.1597 10.8559 9.5297 10.3629 10.2127 10.3629C10.9917 10.3629 11.3477 11.0199 11.3477 11.8129C11.3477 12.6879 10.8967 13.3849 9.9527 13.3849H9.7067C9.1737 13.3849 8.8727 13.6859 8.8727 14.1639C8.8727 14.6559 9.1737 14.9429 9.7067 14.9429H9.9667C11.0197 14.9429 11.5797 15.5179 11.5797 16.5979C11.5797 17.4179 11.1567 18.1699 10.2537 18.1699C9.4337 18.1699 9.0507 17.6099 8.8867 17.0489C8.7227 16.5699 8.4077 16.3109 7.9157 16.3109C7.3277 16.3109 6.9317 16.6659 6.9317 17.2679C6.9317 17.5139 6.9727 17.7599 7.0407 17.9789C7.4237 19.2229 8.7907 19.8929 10.2677 19.8929Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.4117 25.7712C6.5757 25.7712 1.0387 20.2342 1.0387 13.4122C1.0387 6.5902 6.5757 1.0392 13.3987 1.0392C20.2347 1.0392 25.7717 6.5902 25.7717 13.4122C25.7717 20.2342 20.2347 25.7712 13.4117 25.7712ZM14.8337 18.9352H19.5237C19.7827 18.9352 19.9747 18.7442 19.9747 18.4842C19.9747 18.2112 19.7827 18.0192 19.5237 18.0192H15.6817V17.9652L18.2387 14.3962C19.3457 12.8792 19.7287 11.8812 19.7287 10.7322C19.7287 9.0232 18.7717 7.6562 17.0217 7.6562C15.4077 7.6562 14.3417 9.1192 14.3417 10.5682C14.3417 10.8012 14.4787 11.0472 14.7927 11.0472C15.0387 11.0472 15.2167 10.9102 15.2577 10.6782C15.4487 9.4332 15.9547 8.5722 17.0347 8.5722C18.2247 8.5722 18.7437 9.7072 18.7437 10.7872C18.7437 11.8122 18.3207 12.7282 17.4587 13.9182L14.5327 17.9372C14.3967 18.1292 14.3147 18.2932 14.3147 18.4982C14.3147 18.7712 14.5197 18.9352 14.8337 18.9352ZM9.6797 19.1272C11.4157 19.1272 12.7007 17.8832 12.7007 15.9002C12.7007 14.4102 11.9217 13.3162 10.5547 13.1932V13.1662C11.7987 12.8382 12.3867 11.7032 12.3867 10.5412C12.3867 8.8452 11.2657 7.6972 9.6247 7.6972C8.2717 7.6972 7.3557 8.4902 6.9727 9.7072C6.8907 9.9942 6.8767 10.2402 6.8767 10.3902C6.8767 10.6642 7.0277 10.8692 7.3277 10.8692C7.6287 10.8692 7.7247 10.7052 7.8067 10.4042C7.9847 9.4202 8.5587 8.5862 9.6247 8.5862C10.7737 8.5862 11.3887 9.5152 11.3887 10.6502C11.3887 11.8532 10.6367 12.7972 9.4197 12.7972H8.8597C8.5727 12.7972 8.4357 12.9882 8.4357 13.2202C8.4357 13.4672 8.6137 13.6442 8.8597 13.6442H9.4477C10.8277 13.6442 11.6487 14.4102 11.6487 15.9142C11.6487 17.1312 11.0197 18.2112 9.6937 18.2112C8.4487 18.2112 7.7797 17.2812 7.6287 16.3922C7.5737 16.0922 7.4507 15.9282 7.1507 15.9282C6.8767 15.9282 6.6857 16.1192 6.6857 16.4202C6.6857 16.5972 6.7407 16.8982 6.8087 17.1172C7.1777 18.3202 8.2577 19.1272 9.6797 19.1272Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481C0.6697 6.3031 6.3167 0.6701 13.2477 0.6701C20.1937 0.6701 25.8257 6.3031 25.8257 13.2481C25.8257 20.1801 20.1937 25.8261 13.2477 25.8261ZM14.5877 18.7711H19.2637C19.4687 18.7711 19.6187 18.6211 19.6187 18.4161C19.6187 18.2111 19.4687 18.0601 19.2637 18.0601H15.2577V18.0061L17.9647 14.1501C18.9907 12.6871 19.3597 11.6891 19.3597 10.5551C19.3597 8.8871 18.4977 7.5061 16.7887 7.5061C15.2167 7.5061 14.2187 8.9691 14.2187 10.4451C14.2187 10.5961 14.3147 10.8011 14.5737 10.8011C14.7517 10.8011 14.8887 10.6781 14.9157 10.5001C15.0797 9.1741 15.6407 8.2171 16.8027 8.2171C18.1017 8.2171 18.6487 9.4881 18.6487 10.5961C18.6487 11.6071 18.3067 12.4691 17.4177 13.7261L14.3277 18.0331C14.2327 18.1831 14.1917 18.3061 14.1917 18.4431C14.1917 18.6621 14.3687 18.7711 14.5877 18.7711ZM9.6247 18.9491C11.2927 18.9491 12.5097 17.6911 12.5097 15.7361C12.5097 14.3011 11.8127 13.1391 10.3907 13.0151V12.9881C11.6207 12.6741 12.1957 11.5121 12.1957 10.3491C12.1957 8.7091 11.1837 7.5471 9.5837 7.5471C8.2307 7.5471 7.4097 8.3401 7.0407 9.5431C6.9457 9.8441 6.9317 10.0901 6.9317 10.2261C6.9317 10.4451 7.0547 10.6091 7.2737 10.6091C7.5327 10.6091 7.5737 10.4451 7.6287 10.1851C7.8067 9.1601 8.4217 8.2441 9.5837 8.2441C10.7867 8.2441 11.4567 9.2281 11.4567 10.4311C11.4567 11.6891 10.6507 12.6871 9.3927 12.6871H8.7497C8.5177 12.6871 8.4357 12.8651 8.4357 13.0291C8.4357 13.2211 8.5587 13.3711 8.7497 13.3711H9.4067C10.8557 13.3711 11.7307 14.1781 11.7307 15.7771C11.7307 17.0621 11.0737 18.2381 9.6527 18.2381C8.3257 18.2381 7.5877 17.2131 7.4507 16.2561C7.4237 15.9961 7.3417 15.8591 7.0817 15.8591C6.8767 15.8591 6.7407 16.0101 6.7407 16.2281C6.7407 16.4061 6.7947 16.7211 6.8637 16.9261C7.2327 18.1151 8.2167 18.9491 9.6247 18.9491Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
