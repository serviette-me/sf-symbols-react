import { IconProps } from "../../types"

export default function ThreeFourCircleIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301C4.8667 9.3651 9.3657 4.8671 14.9297 4.8671C20.4937 4.8671 25.0057 9.3651 25.0057 14.9301C25.0057 20.4941 20.4937 24.9921 14.9297 24.9921ZM10.8967 20.2621C12.9067 20.2621 14.3007 19.0991 14.3007 17.2131C14.3007 15.9001 13.5627 14.9711 12.4277 14.8201V14.7661C13.2207 14.5601 13.9997 13.6721 13.9997 12.4281C13.9997 10.6371 12.7147 9.5841 10.8007 9.5841C9.5017 9.5841 8.2307 10.2541 7.8747 11.4841C7.8067 11.6891 7.7657 11.9351 7.7657 12.1821C7.7657 12.6601 8.0527 13.2071 8.8457 13.2071C9.3517 13.2071 9.8707 13.0431 10.0217 12.4551C10.1307 12.0581 10.3497 11.5941 10.8417 11.5941C11.3747 11.5941 11.5387 12.1681 11.5387 12.7011C11.5387 13.3301 11.3067 13.9861 10.5547 13.9861H10.4727C9.8027 13.9861 9.4887 14.3421 9.4887 14.8751C9.4887 15.4351 9.7887 15.7771 10.4727 15.7771H10.5817C11.4027 15.7771 11.7577 16.2281 11.7577 17.0491C11.7577 17.6231 11.5257 18.2521 10.8687 18.2521C10.4047 18.2521 10.1447 17.9101 9.9807 17.5001C9.7757 16.9261 9.3787 16.6251 8.8047 16.6251C8.0937 16.6251 7.6427 17.0621 7.6427 17.7601C7.6427 18.0331 7.6697 18.2661 7.7387 18.4841C8.1077 19.6601 9.4197 20.2621 10.8967 20.2621ZM20.0297 20.1931C20.7127 20.1931 21.2737 19.8241 21.2737 18.9221V18.2931H21.3687C22.1347 18.2931 22.3537 17.8011 22.3537 17.2671C22.3537 16.6251 22.0387 16.2561 21.3827 16.2561H21.2737V11.5661C21.2737 10.3631 20.4807 9.6931 19.2637 9.6931C17.5957 9.6931 17.1167 10.9511 16.6657 12.2501L15.5857 15.2581C15.3947 15.8051 15.2717 16.3651 15.2717 16.8711C15.2717 17.8141 15.7777 18.2931 16.7617 18.2931H18.7847V18.9221C18.7847 19.7971 19.3457 20.1931 20.0297 20.1931ZM18.8667 16.3381H17.3767V16.2281L18.8127 11.6891H18.8667Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 25.2926C8.4357 25.2926 3.6097 20.4536 3.6097 14.4376C3.6097 8.4356 8.4217 3.5956 14.4377 3.5956C20.4397 3.5956 25.2797 8.4356 25.2797 14.4376C25.2797 20.4536 20.4527 25.2926 14.4377 25.2926ZM10.1987 20.0016C12.1817 20.0016 13.6307 18.7986 13.6307 16.8296C13.6307 15.3266 12.7557 14.4516 11.6207 14.3146V14.2596C12.6327 13.9996 13.3167 13.0016 13.3167 11.7986C13.3167 9.9536 11.9767 8.9006 10.1307 8.9006C8.7777 8.9006 7.5197 9.6246 7.1507 10.8556C7.0817 11.0876 7.0407 11.3336 7.0407 11.5666C7.0407 12.0316 7.3417 12.4826 7.9977 12.4826C8.4907 12.4826 8.8867 12.3046 9.0237 11.7856C9.1877 11.1836 9.5157 10.6916 10.1447 10.6916C10.8557 10.6916 11.1697 11.3336 11.1697 12.0446C11.1697 12.8656 10.7737 13.5486 9.8847 13.5486H9.6797C9.1057 13.5486 8.8047 13.8636 8.8047 14.3556C8.8047 14.8616 9.1057 15.1626 9.6797 15.1626H9.8987C10.8967 15.1626 11.3887 15.7086 11.3887 16.7206C11.3887 17.4726 11.0197 18.1976 10.1857 18.1976C9.4607 18.1976 9.1057 17.6916 8.9417 17.1716C8.7777 16.6656 8.4357 16.4066 7.9157 16.4066C7.3007 16.4066 6.8907 16.7756 6.8907 17.4046C6.8907 17.6506 6.9317 17.8966 6.9997 18.1156C7.3827 19.3316 8.7227 20.0016 10.1987 20.0016ZM19.7557 19.9336C20.3577 19.9336 20.8357 19.5916 20.8357 18.8126V17.8146H21.1367C21.7797 17.8146 22.0117 17.3906 22.0117 16.8986C22.0117 16.3516 21.7387 15.9956 21.1367 15.9956H20.8357V10.6506C20.8357 9.5706 20.1387 8.9826 19.0857 8.9826C17.7597 8.9826 17.2947 9.8576 16.8847 10.9236L15.1207 15.0796C14.9157 15.6266 14.8067 16.0786 14.8067 16.5426C14.8067 17.3356 15.2847 17.8146 16.1187 17.8146H18.6617V18.8126C18.6617 19.6056 19.1957 19.9336 19.7557 19.9336ZM18.7167 16.0506H16.7067V15.9546L18.6757 10.8416H18.7167Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9277 4.2794 14.6977 4.2794C20.4667 4.2794 25.1287 8.9274 25.1287 14.7114C25.1287 20.4804 20.4807 25.1424 14.6977 25.1424ZM10.5687 20.1384C12.5647 20.1384 13.9867 18.9634 13.9867 17.0484C13.9867 15.6404 13.1797 14.7384 12.0447 14.5884V14.5334C12.9477 14.3004 13.6717 13.3714 13.6717 12.1404C13.6717 10.3224 12.3727 9.2694 10.4867 9.2694C9.1597 9.2694 7.8887 9.9664 7.5327 11.1834C7.4647 11.4164 7.4237 11.6624 7.4237 11.8944C7.4237 12.3734 7.7107 12.8654 8.4487 12.8654C8.9417 12.8654 9.4067 12.7014 9.5567 12.1404C9.6797 11.6484 9.9527 11.1704 10.5137 11.1704C11.1287 11.1704 11.3617 11.7854 11.3617 12.4004C11.3617 13.1114 11.0607 13.7954 10.2407 13.7954H10.1037C9.4747 13.7954 9.1737 14.1234 9.1737 14.6424C9.1737 15.1754 9.4747 15.4904 10.1037 15.4904H10.2537C11.1567 15.4904 11.5797 15.9964 11.5797 16.8984C11.5797 17.5544 11.2927 18.2384 10.5547 18.2384C9.9527 18.2384 9.6527 17.8144 9.4887 17.3634C9.3107 16.8024 8.9277 16.5294 8.3807 16.5294C7.7107 16.5294 7.2867 16.9254 7.2867 17.5954C7.2867 17.8554 7.3277 18.1014 7.3967 18.3204C7.7657 19.5094 9.0917 20.1384 10.5687 20.1384ZM19.8927 20.0704C20.5487 20.0704 21.0687 19.7144 21.0687 18.8804V18.0744H21.2597C21.9707 18.0744 22.1897 17.6094 22.1897 17.1034C22.1897 16.5024 21.9027 16.1324 21.2737 16.1324H21.0687V11.1424C21.0687 9.9944 20.3167 9.3654 19.1817 9.3654C17.6777 9.3654 17.1987 10.4454 16.7617 11.6344L15.3667 15.1894C15.1617 15.7224 15.0527 16.2424 15.0527 16.7204C15.0527 17.5954 15.5447 18.0744 16.4607 18.0744H18.7307V18.8804C18.7307 19.7144 19.2777 20.0704 19.8927 20.0704ZM18.7987 16.2144H17.0627V16.1054L18.7437 11.2934H18.7987Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.7127 25.648C7.0957 25.648 1.7777 20.316 1.7777 13.713C1.7777 7.096 7.0957 1.764 13.6987 1.764C20.3167 1.764 25.6617 7.096 25.6617 13.713C25.6617 20.316 20.3297 25.648 13.7127 25.648ZM9.4337 19.469C11.2927 19.469 12.7007 18.225 12.7007 16.201C12.7007 14.602 11.7847 13.658 10.5547 13.535V13.48C11.7847 13.166 12.3867 12.045 12.3867 10.883C12.3867 9.078 11.1017 7.971 9.3787 7.971C7.9847 7.971 6.9047 8.777 6.5077 9.98C6.4397 10.254 6.4117 10.5 6.4117 10.705C6.4117 11.074 6.6447 11.361 7.0817 11.361C7.4787 11.361 7.6697 11.184 7.7797 10.787C7.9847 9.912 8.4767 9.256 9.3787 9.256C10.3767 9.256 10.8967 10.063 10.8967 11.061C10.8967 12.154 10.2537 12.961 9.1467 12.961H8.7227C8.3257 12.961 8.1077 13.207 8.1077 13.563C8.1077 13.932 8.3537 14.164 8.7227 14.164H9.1597C10.4317 14.164 11.1427 14.848 11.1427 16.174C11.1427 17.24 10.5957 18.156 9.4337 18.156C8.3397 18.156 7.7927 17.377 7.6287 16.639C7.5327 16.256 7.3147 16.064 6.9317 16.064C6.5077 16.064 6.2207 16.324 6.2207 16.762C6.2207 16.98 6.2757 17.24 6.3437 17.459C6.7267 18.703 7.9847 19.469 9.4337 19.469ZM19.1267 19.4C19.5367 19.4 19.8657 19.113 19.8657 18.607V16.912H20.5077C20.9317 16.912 21.1367 16.639 21.1367 16.256C21.1367 15.887 20.9317 15.613 20.5077 15.613H19.8657V9.201C19.8657 8.408 19.3457 8.012 18.6617 8.012C17.8967 8.012 17.5277 8.422 17.2127 9.105L14.4237 14.93C14.2327 15.354 14.1637 15.641 14.1637 15.982C14.1637 16.529 14.5327 16.912 15.1077 16.912H18.3617V18.607C18.3617 19.168 18.7577 19.4 19.1267 19.4ZM18.3887 15.641H15.5317V15.572L18.3337 9.488H18.3887Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C20.3987 2.7891 25.4707 7.8341 25.4707 14.1231C25.4707 20.4121 20.4117 25.4711 14.1227 25.4711ZM9.7477 19.8241C11.7167 19.8241 13.2067 18.6071 13.2067 16.5841C13.2067 14.9571 12.2497 14.1091 11.1017 13.9731V13.9311C12.2497 13.6171 12.8927 12.5641 12.8927 11.3891C12.8927 9.5151 11.4977 8.4491 9.6937 8.4491C8.2987 8.4491 7.0687 9.2151 6.6857 10.4311C6.6167 10.6781 6.5757 10.9241 6.5757 11.1701C6.5757 11.6211 6.8767 12.0171 7.4647 12.0171C7.9437 12.0171 8.2577 11.8261 8.3947 11.3481C8.5857 10.6091 8.9827 10.1031 9.7067 10.1031C10.5407 10.1031 10.9237 10.7871 10.9237 11.6211C10.9237 12.5511 10.4177 13.2621 9.4477 13.2621H9.1597C8.6677 13.2621 8.3667 13.5621 8.3667 14.0271C8.3667 14.4921 8.6677 14.7651 9.1597 14.7651H9.4607C10.5687 14.7651 11.1567 15.3811 11.1567 16.5021C11.1567 17.3771 10.7047 18.1561 9.7477 18.1561C8.8457 18.1561 8.4357 17.5411 8.2717 16.9531C8.1347 16.4881 7.8207 16.2421 7.3557 16.2421C6.7817 16.2421 6.4117 16.5841 6.4117 17.1581C6.4117 17.4041 6.4527 17.6501 6.5217 17.8691C6.9047 19.1271 8.2847 19.8241 9.7477 19.8241ZM19.5777 19.7561C20.1247 19.7561 20.5627 19.4281 20.5627 18.7171V17.4861H20.9867C21.5607 17.4861 21.7927 17.1171 21.7927 16.6521C21.7927 16.1741 21.5467 15.8181 20.9867 15.8181H20.5627V10.0491C20.5627 9.0641 19.9197 8.5171 18.9627 8.5171C17.8687 8.5171 17.4177 9.1461 17.0217 10.0761L14.8207 14.9571C14.6017 15.4901 14.5197 15.8871 14.5197 16.3241C14.5197 17.0351 14.9847 17.4861 15.7087 17.4861H18.5797V18.7171C18.5797 19.4691 19.0997 19.7561 19.5777 19.7561ZM18.6207 15.8731H16.2827V15.7771L18.5797 10.2811H18.6207Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9457 25.5664C7.4917 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C20.3847 2.3244 25.5667 7.4924 25.5667 13.9454C25.5667 20.3984 20.3987 25.5664 13.9457 25.5664ZM9.5017 19.7144C11.4707 19.7144 12.9747 18.4844 12.9747 16.4334C12.9747 14.7384 11.9627 13.9044 10.8007 13.7814V13.7404C12.0447 13.4124 12.6467 12.3044 12.6467 11.1564C12.6467 9.2694 11.2387 8.1894 9.4477 8.1894C8.0387 8.1894 6.8227 8.9824 6.4257 10.1994C6.3577 10.4594 6.3167 10.7054 6.3167 10.9374C6.3167 11.3884 6.6167 11.7444 7.1637 11.7444C7.6287 11.7444 7.9027 11.5664 8.0387 11.0874C8.2437 10.2814 8.6817 9.7754 9.4477 9.7754C10.3497 9.7754 10.7867 10.4724 10.7867 11.3754C10.7867 12.3734 10.2267 13.0974 9.2007 13.0974H8.8727C8.4077 13.0974 8.1207 13.3844 8.1207 13.8364C8.1207 14.2874 8.4217 14.5464 8.8727 14.5464H9.2287C10.3767 14.5464 11.0197 15.1894 11.0197 16.3784C11.0197 17.3224 10.5277 18.1284 9.5017 18.1284C8.5177 18.1284 8.0667 17.4594 7.9027 16.8304C7.7657 16.3924 7.4787 16.1604 7.0407 16.1604C6.4937 16.1604 6.1387 16.4884 6.1387 17.0214C6.1387 17.2674 6.1797 17.5134 6.2477 17.7324C6.6447 19.0034 8.0387 19.7144 9.5017 19.7144ZM19.4827 19.6464C19.9887 19.6464 20.4117 19.3324 20.4117 18.6754V17.3084H20.9047C21.4237 17.3084 21.6697 16.9664 21.6697 16.5024C21.6697 16.0644 21.4507 15.7224 20.9047 15.7224H20.4117V9.7204C20.4117 8.7774 19.7967 8.2444 18.8947 8.2444C17.9377 8.2444 17.4867 8.7364 17.1037 9.5844L14.6567 14.8884C14.4237 15.4214 14.3557 15.7774 14.3557 16.2014C14.3557 16.8574 14.8067 17.3084 15.4767 17.3084H18.5387V18.6754C18.5387 19.4004 19.0447 19.6464 19.4827 19.6464ZM18.5797 15.7634H16.0367V15.6684L18.5257 9.9664H18.5797Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C20.4257 3.1309 25.3887 8.0939 25.3887 14.2599C25.3887 20.4259 20.4257 25.3889 14.2597 25.3889ZM9.9397 19.8929C11.9217 19.8929 13.3987 18.6899 13.3987 16.6929C13.3987 15.1209 12.4687 14.2459 11.3207 14.1229V14.0679C12.4137 13.7809 13.0707 12.7559 13.0707 11.5669C13.0707 9.7069 11.7027 8.6409 9.8847 8.6409C8.5037 8.6409 7.2597 9.3929 6.8907 10.6099C6.8087 10.8559 6.7817 11.1019 6.7817 11.3339C6.7817 11.7989 7.0687 12.2089 7.6977 12.2089C8.1757 12.2089 8.5317 12.0449 8.6677 11.5389C8.8457 10.8559 9.2147 10.3629 9.8987 10.3629C10.6777 10.3629 11.0327 11.0199 11.0327 11.8129C11.0327 12.6879 10.5687 13.3849 9.6387 13.3849H9.3787C8.8597 13.3849 8.5587 13.6859 8.5587 14.1639C8.5587 14.6559 8.8597 14.9429 9.3787 14.9429H9.6527C10.7047 14.9429 11.2517 15.5179 11.2517 16.5979C11.2517 17.4179 10.8417 18.1699 9.9397 18.1699C9.1057 18.1699 8.7227 17.6099 8.5587 17.0489C8.4077 16.5699 8.0797 16.3109 7.6017 16.3109C6.9997 16.3109 6.6167 16.6659 6.6167 17.2679C6.6167 17.5139 6.6577 17.7599 6.7267 17.9789C7.1097 19.2229 8.4767 19.8929 9.9397 19.8929ZM19.6597 19.8239C20.2207 19.8239 20.6857 19.4959 20.6857 18.7579V17.6229H21.0407C21.6567 17.6229 21.8887 17.2399 21.8887 16.7619C21.8887 16.2419 21.6427 15.9009 21.0547 15.9009H20.6857V10.3089C20.6857 9.2829 20.0157 8.7089 19.0177 8.7089C17.8277 8.7089 17.3637 9.4469 16.9667 10.4449L14.9567 15.0119C14.7387 15.5449 14.6427 15.9689 14.6427 16.4199C14.6427 17.1579 15.1207 17.6229 15.8867 17.6229H18.6077V18.7579C18.6077 19.5239 19.1407 19.8239 19.6597 19.8239ZM18.6617 15.9549H16.4607V15.8599L18.6207 10.5269H18.6617Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.4117 25.7712C6.5757 25.7712 1.0387 20.2342 1.0387 13.4122C1.0387 6.5902 6.5757 1.0392 13.3987 1.0392C20.2347 1.0392 25.7717 6.5902 25.7717 13.4122C25.7717 20.2342 20.2347 25.7712 13.4117 25.7712ZM9.3237 19.1272C11.0607 19.1272 12.3457 17.8832 12.3457 15.9002C12.3457 14.4102 11.5667 13.3162 10.2127 13.1932V13.1662C11.4567 12.8382 12.0317 11.7032 12.0317 10.5412C12.0317 8.8452 10.9237 7.6972 9.2827 7.6972C7.9157 7.6972 6.9997 8.4902 6.6307 9.7072C6.5487 9.9942 6.5217 10.2402 6.5217 10.3902C6.5217 10.6642 6.6857 10.8692 6.9727 10.8692C7.2867 10.8692 7.3827 10.7052 7.4507 10.4042C7.6287 9.4202 8.2027 8.5862 9.2827 8.5862C10.4177 8.5862 11.0327 9.5152 11.0327 10.6502C11.0327 11.8532 10.2817 12.7972 9.0777 12.7972H8.5037C8.2167 12.7972 8.0937 12.9882 8.0937 13.2202C8.0937 13.4672 8.2577 13.6442 8.5037 13.6442H9.0917C10.4867 13.6442 11.3067 14.4102 11.3067 15.9142C11.3067 17.1312 10.6777 18.2112 9.3517 18.2112C8.1077 18.2112 7.4237 17.2812 7.2867 16.3922C7.2327 16.0922 7.0957 15.9282 6.7947 15.9282C6.5217 15.9282 6.3297 16.1192 6.3297 16.4202C6.3297 16.5972 6.3847 16.8982 6.4527 17.1172C6.8227 18.3202 7.9027 19.1272 9.3237 19.1272ZM18.6487 19.0722C18.9217 19.0722 19.1547 18.8402 19.1547 18.5392V16.3792H19.9887C20.2757 16.3792 20.4397 16.2012 20.4397 15.9142C20.4397 15.6682 20.2477 15.4762 19.9887 15.4762H19.1547V8.5312C19.1547 7.9292 18.7577 7.7112 18.3477 7.7112C17.8277 7.7112 17.5817 7.9982 17.3497 8.4902L14.1097 14.9702C13.9727 15.2582 13.9177 15.4762 13.9177 15.7222C13.9177 16.1052 14.1777 16.3792 14.6157 16.3792H18.1287V18.5392C18.1287 18.8812 18.3617 19.0722 18.6487 19.0722ZM18.1427 15.4902H14.8747V15.4352L18.0877 8.8592H18.1427Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481C0.6697 6.3031 6.3167 0.6701 13.2477 0.6701C20.1937 0.6701 25.8257 6.3031 25.8257 13.2481C25.8257 20.1801 20.1937 25.8261 13.2477 25.8261ZM18.4027 18.8941C18.6077 18.8941 18.7847 18.6891 18.7847 18.4841V16.0921H19.7147C19.9337 16.0921 20.0707 15.9691 20.0707 15.7361C20.0707 15.5311 19.9067 15.3941 19.7147 15.3941H18.7847V8.1761C18.7847 7.6701 18.4567 7.5331 18.1837 7.5331C17.8007 7.5331 17.6097 7.7791 17.4177 8.1481L13.9457 14.9841C13.8497 15.2031 13.7947 15.3811 13.7947 15.5721C13.7947 15.8731 13.9997 16.0921 14.3557 16.0921H18.0197V18.4841C18.0197 18.7301 18.1697 18.8941 18.4027 18.8941ZM9.2827 18.9491C10.9507 18.9491 12.1677 17.6911 12.1677 15.7361C12.1677 14.3011 11.4567 13.1391 10.0347 13.0151V12.9881C11.2797 12.6741 11.8537 11.5121 11.8537 10.3491C11.8537 8.7091 10.8277 7.5471 9.2287 7.5471C7.8887 7.5471 7.0547 8.3401 6.6857 9.5431C6.6037 9.8441 6.5897 10.0901 6.5897 10.2261C6.5897 10.4451 6.6987 10.6091 6.9177 10.6091C7.1777 10.6091 7.2327 10.4451 7.2867 10.1851C7.4507 9.1601 8.0667 8.2441 9.2287 8.2441C10.4317 8.2441 11.1017 9.2281 11.1017 10.4311C11.1017 11.6891 10.2947 12.6871 9.0367 12.6871H8.4077C8.1617 12.6871 8.0797 12.8651 8.0797 13.0291C8.0797 13.2211 8.2167 13.3711 8.4077 13.3711H9.0507C10.5137 13.3711 11.3887 14.1781 11.3887 15.7771C11.3887 17.0621 10.7187 18.2381 9.2967 18.2381C7.9847 18.2381 7.2457 17.2131 7.1097 16.2561C7.0687 15.9961 6.9867 15.8591 6.7267 15.8591C6.5217 15.8591 6.3987 16.0101 6.3987 16.2281C6.3987 16.4061 6.4397 16.7211 6.5217 16.9261C6.8767 18.1151 7.8617 18.9491 9.2827 18.9491ZM18.0197 15.3941H14.5467V15.3671L17.9647 8.5171H18.0197Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
