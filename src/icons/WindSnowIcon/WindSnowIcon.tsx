import { IconProps } from "../../types"

export default function WindSnowIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.796863917192574 29.50390625"
          className={className}
        >
          <path
            d="              M25.0938 6.0699C25.6128 6.0699 25.9548 5.6329 25.8598 5.0999L25.6538 4.0329L26.5158 4.7169C26.9258 5.0859 27.4588 5.0179 27.7048 4.5669C27.9508 4.1289 27.7598 3.5549 27.2398 3.3769L26.2828 3.0349L27.2678 2.6519C27.7868 2.4749 27.9648 1.9549 27.7188 1.5179C27.4728 1.0669 26.8988 0.9979 26.5018 1.3399L25.6948 1.9829L25.8598 0.9709C25.9548 0.4379 25.6128 -0.0001 25.0938 -0.0001C24.5608 -0.0001 24.2048 0.4379 24.3148 0.9709L24.4788 1.9689L23.6718 1.3259C23.2478 0.9979 22.6878 1.0799 22.4548 1.5179C22.1948 1.9549 22.4138 2.4879 22.9198 2.6799L23.9038 3.0219L22.9058 3.3909C22.4008 3.5959 22.1948 4.1429 22.4688 4.5669C22.7148 5.0179 23.2478 5.0859 23.6718 4.7169L24.4788 4.0609L24.3148 5.0999C24.2188 5.6329 24.5738 6.0699 25.0938 6.0699ZM2.0698 11.9079C4.0388 11.3479 6.0898 11.0739 8.0308 11.0739C10.4508 11.0739 12.3378 11.4299 14.7028 11.4299C17.3828 11.4299 19.3378 9.5289 19.3378 6.9589C19.3378 4.4159 17.3968 2.5019 14.8808 2.5019C13.2538 2.5019 11.6678 3.4589 10.9018 4.9079C10.4918 5.6879 10.6838 6.5349 11.3948 6.9729C12.1598 7.4509 13.1168 7.1639 13.5958 6.3169C13.8558 5.8649 14.3748 5.5509 14.8808 5.5509C15.7148 5.5509 16.2888 6.0979 16.2888 6.9589C16.2888 7.8339 15.6878 8.3809 14.7028 8.3809C12.5698 8.3809 10.5878 8.0119 8.0308 8.0119C5.8298 8.0119 3.4788 8.3669 1.1818 8.9689C0.2928 9.2149 -0.1722 10.0489 0.0608 10.8969C0.3068 11.7579 1.1268 12.1819 2.0698 11.9079ZM23.7678 19.1409C27.2538 19.1409 29.7968 16.8299 29.7968 13.6579C29.7968 10.5549 27.4178 8.2029 24.3418 8.2029C22.0858 8.2029 19.9938 9.6389 19.2288 11.7169C18.9138 12.5509 19.2148 13.4119 19.9808 13.7269C20.8148 14.0679 21.7438 13.6719 22.0998 12.7419C22.4418 11.8669 23.3848 11.2519 24.3418 11.2519C25.7228 11.2519 26.7478 12.2499 26.7478 13.6579C26.7478 15.1079 25.5718 16.0919 23.7678 16.0919C19.6658 16.0919 14.9358 13.7129 9.4118 13.7129C6.5408 13.7129 3.8198 14.1509 1.1678 14.9849C0.2788 15.2719 -0.1722 16.0779 0.0608 16.9119C0.3198 17.7869 1.1818 18.2109 2.0978 17.8829C4.4488 17.1039 6.8148 16.7759 9.4118 16.7759C14.7168 16.7759 18.9138 19.1409 23.7678 19.1409ZM14.7168 29.5039C17.2048 29.5039 19.0918 27.6039 19.0918 25.0739C19.0918 21.4379 15.3728 19.4139 8.8928 19.4139C6.3768 19.4139 3.6018 19.8789 1.1678 20.6719C0.2788 20.9589 -0.1722 21.7659 0.0608 22.5859C0.3198 23.4609 1.1818 23.8989 2.0978 23.5699C4.2308 22.8319 6.5268 22.4629 8.8928 22.4629C13.3628 22.4629 16.0428 23.5159 16.0428 25.0739C16.0428 25.9359 15.5098 26.4549 14.7168 26.4549C14.1288 26.4549 13.6638 26.0859 13.3628 25.4159C12.9808 24.6229 12.1188 24.2949 11.3258 24.6509C10.5198 25.0059 10.2328 25.9359 10.6428 26.7969C11.3668 28.4099 12.9258 29.5039 14.7168 29.5039ZM25.0938 28.0549C25.6128 28.0549 25.9548 27.6169 25.8598 27.0699L25.6538 26.0039L26.5158 26.7009C26.9258 27.0699 27.4588 27.0019 27.7048 26.5369C27.9508 26.0999 27.7598 25.5389 27.2398 25.3609L26.2828 25.0059L27.2678 24.6369C27.7868 24.4449 27.9648 23.9399 27.7188 23.5019C27.4728 23.0509 26.8988 22.9689 26.5018 23.3239L25.6948 23.9669L25.8598 22.9549C25.9548 22.4079 25.6128 21.9709 25.0938 21.9709C24.5608 21.9709 24.2048 22.4079 24.3148 22.9549L24.4788 23.9529L23.6718 23.3109C23.2478 22.9689 22.6878 23.0649 22.4548 23.5019C22.1948 23.9399 22.4138 24.4589 22.9198 24.6509L23.9038 24.9919L22.9058 25.3749C22.4008 25.5669 22.1948 26.1129 22.4688 26.5369C22.7148 27.0019 23.2478 27.0699 23.6718 26.7009L24.4788 26.0449L24.3148 27.0699C24.2188 27.6169 24.5738 28.0549 25.0938 28.0549Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.927436849590627 28.041015625"
          className={className}
        >
          <path
            d="              M24.4427 5.5096C24.8527 5.5096 25.1407 5.1676 25.0717 4.7446L24.9357 3.6506L25.8377 4.3066C26.1657 4.5666 26.6027 4.4976 26.8087 4.1566C27.0267 3.8006 26.8627 3.3356 26.4527 3.1856L25.4687 2.7616L26.4797 2.3106C26.8627 2.1466 27.0267 1.7366 26.8217 1.3676C26.6307 1.0256 26.1517 0.9436 25.8237 1.2166L24.9487 1.8596L25.0857 0.7796C25.1407 0.3556 24.8667 -0.0004 24.4427 -0.0004C24.0187 -0.0004 23.7317 0.3416 23.7867 0.7796L23.9097 1.8596L23.0207 1.2036C22.6927 0.9566 22.2417 1.0256 22.0507 1.3676C21.8457 1.7366 22.0097 2.1606 22.3927 2.3246L23.4037 2.7476L22.3927 3.1856C21.9957 3.3496 21.8317 3.8006 22.0507 4.1566C22.2417 4.4976 22.6927 4.5666 23.0207 4.3066L23.9097 3.6636L23.8007 4.7446C23.7457 5.1676 24.0327 5.5096 24.4427 5.5096ZM1.6517 11.2246C3.6207 10.6366 5.6577 10.3356 7.6127 10.3356C10.0737 10.3356 11.9337 10.7186 14.3117 10.7186C16.8827 10.7186 18.6187 8.9276 18.6187 6.5626C18.6187 4.1696 16.8007 2.4196 14.4897 2.4196C12.8907 2.4196 11.4137 3.3906 10.7577 4.7576C10.4297 5.3726 10.5657 6.0706 11.1677 6.4126C11.7687 6.7536 12.5207 6.5486 12.9037 5.8376C13.1777 5.2776 13.8067 4.8396 14.4897 4.8396C15.4747 4.8396 16.2127 5.5096 16.2127 6.5626C16.2127 7.6286 15.4747 8.2986 14.3117 8.2986C12.1107 8.2986 10.1837 7.9156 7.6127 7.9156C5.3847 7.9156 3.0877 8.2986 0.9277 8.9136C0.2027 9.1196 -0.1393 9.7756 0.0527 10.4456C0.2297 11.1016 0.8727 11.4566 1.6517 11.2246ZM23.1987 18.0466C26.5207 18.0466 28.9277 15.8726 28.9277 12.8786C28.9277 9.9256 26.6717 7.7386 23.7867 7.7386C21.4217 7.7386 19.4667 9.3246 18.9197 11.4976C18.7147 12.1956 19.0287 12.8516 19.6577 13.0426C20.3277 13.2476 21.0117 12.8926 21.2437 12.1136C21.5307 10.9516 22.5977 10.1586 23.7867 10.1586C25.3177 10.1586 26.5077 11.2796 26.5077 12.8786C26.5077 14.5196 25.1947 15.6266 23.1987 15.6266C19.0567 15.6266 14.4487 13.2616 8.9387 13.2616C6.0957 13.2616 3.4567 13.6996 0.9277 14.5466C0.2027 14.7926 -0.1393 15.4216 0.0527 16.0786C0.2437 16.7476 0.8997 17.1176 1.6657 16.8436C3.9627 16.0376 6.3007 15.6816 8.9387 15.6816C14.3257 15.6816 18.4547 18.0466 23.1987 18.0466ZM14.3257 28.0406C16.6227 28.0406 18.3867 26.3186 18.3867 23.9396C18.3867 20.5076 14.8727 18.5936 8.5977 18.5936C6.0677 18.5936 3.3067 19.0726 0.9277 19.8656C0.2027 20.1116 -0.1393 20.7536 0.0527 21.3966C0.2437 22.0806 0.8997 22.4356 1.6657 22.1756C3.8117 21.4106 6.1907 21.0136 8.5977 21.0136C13.3137 21.0136 15.9667 22.1626 15.9667 23.9396C15.9667 24.9926 15.2557 25.6346 14.3257 25.6346C13.4917 25.6346 12.9317 25.0876 12.6857 24.1856C12.4527 23.5296 11.8377 23.1606 11.1537 23.3516C10.4427 23.5566 10.1697 24.2816 10.4157 24.9926C10.8937 26.7426 12.3847 28.0406 14.3257 28.0406ZM24.4427 26.3186C24.8527 26.3186 25.1407 25.9626 25.0717 25.5396L24.9357 24.4456L25.8377 25.1016C26.1657 25.3616 26.6027 25.3066 26.8087 24.9516C27.0267 24.5956 26.8627 24.1306 26.4527 23.9806L25.4687 23.5566L26.4797 23.1056C26.8627 22.9556 27.0267 22.5316 26.8217 22.1756C26.6307 21.8206 26.1517 21.7386 25.8237 22.0116L24.9487 22.6546L25.0857 21.5876C25.1407 21.1636 24.8667 20.7946 24.4427 20.7946C24.0187 20.7946 23.7317 21.1366 23.7867 21.5746L23.9097 22.6546L23.0207 21.9976C22.6927 21.7516 22.2417 21.8206 22.0507 22.1756C21.8457 22.5316 22.0097 22.9556 22.3927 23.1196L23.4037 23.5426L22.3927 23.9806C21.9957 24.1446 21.8317 24.5956 22.0507 24.9516C22.2417 25.2926 22.6927 25.3746 23.0207 25.1016L23.9097 24.4586L23.8007 25.5396C23.7457 25.9766 24.0327 26.3186 24.4427 26.3186Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.38452269208642 28.8203125"
          className={className}
        >
          <path
            d="              M24.7907 5.8107C25.2557 5.8107 25.5697 5.4137 25.4877 4.9217L25.3237 3.8417L26.1987 4.5257C26.5677 4.8397 27.0607 4.7717 27.2787 4.3617C27.5117 3.9647 27.3337 3.4587 26.8687 3.2817L25.8987 2.8987L26.8967 2.4887C27.3477 2.3237 27.5247 1.8457 27.2927 1.4487C27.0737 1.0387 26.5547 0.9707 26.1857 1.2847L25.3377 1.9277L25.4877 0.8887C25.5697 0.3967 25.2557 -0.0003 24.7907 -0.0003C24.3127 -0.0003 23.9837 0.3967 24.0667 0.8747L24.2167 1.9137L23.3687 1.2717C22.9857 0.9707 22.4807 1.0527 22.2617 1.4487C22.0287 1.8457 22.2207 2.3237 22.6717 2.5017L23.6697 2.8847L22.6577 3.2947C22.2067 3.4727 22.0287 3.9787 22.2747 4.3617C22.4937 4.7717 22.9857 4.8397 23.3687 4.5257L24.2167 3.8687L24.0667 4.9217C23.9977 5.4137 24.3127 5.8107 24.7907 5.8107ZM1.8767 11.5797C3.8457 11.0057 5.8827 10.7187 7.8377 10.7187C10.2847 10.7187 12.1447 11.1017 14.5237 11.1017C17.1487 11.1017 19.0077 9.2417 19.0077 6.7677C19.0077 4.2927 17.1207 2.4607 14.7007 2.4607C13.0877 2.4607 11.5427 3.4177 10.8317 4.8397C10.4627 5.5367 10.6267 6.3167 11.2967 6.7127C11.9807 7.1227 12.8417 6.8767 13.2787 6.0837C13.5387 5.5777 14.0997 5.2227 14.7007 5.2227C15.6037 5.2227 16.2457 5.8107 16.2457 6.7677C16.2457 7.7387 15.5897 8.3397 14.5237 8.3397C12.3627 8.3397 10.4077 7.9707 7.8377 7.9707C5.6227 7.9707 3.2987 8.3257 1.0697 8.9417C0.2497 9.1737 -0.1603 9.9257 0.0587 10.6777C0.2767 11.4437 1.0157 11.8397 1.8767 11.5797ZM23.4917 18.6207C26.9097 18.6207 29.3847 16.3787 29.3847 13.2887C29.3847 10.2537 27.0607 7.9847 24.0797 7.9847C21.7697 7.9847 19.7457 9.4887 19.0897 11.6077C18.8297 12.3867 19.1307 13.1527 19.8417 13.3987C20.5937 13.6857 21.3997 13.3027 21.7007 12.4417C22.0157 11.4297 23.0137 10.7327 24.0797 10.7327C25.5287 10.7327 26.6367 11.7847 26.6367 13.2887C26.6367 14.8337 25.3927 15.8727 23.4917 15.8727C19.3767 15.8727 14.7147 13.4937 9.1917 13.4937C6.3337 13.4937 3.6537 13.9317 1.0567 14.7797C0.2497 15.0387 -0.1603 15.7637 0.0587 16.5157C0.2767 17.2947 1.0567 17.6917 1.8907 17.3907C4.2147 16.5977 6.5667 16.2557 9.1917 16.2557C14.5367 16.2557 18.7067 18.6207 23.4917 18.6207ZM14.5367 28.8207C16.9297 28.8207 18.7617 27.0017 18.7617 24.5407C18.7617 20.9997 15.1387 19.0317 8.7537 19.0317C6.2377 19.0317 3.4627 19.4957 1.0567 20.2887C0.2497 20.5627 -0.1603 21.2867 0.0587 22.0257C0.2767 22.8047 1.0567 23.2007 1.8907 22.9137C4.0367 22.1617 6.3747 21.7797 8.7537 21.7797C13.3477 21.7797 15.9997 22.8727 15.9997 24.5407C15.9997 25.4847 15.3847 26.0587 14.5367 26.0587C13.8257 26.0587 13.3197 25.6077 13.0467 24.8277C12.7327 24.1037 11.9807 23.7477 11.2417 24.0347C10.4897 24.3227 10.2027 25.1567 10.5307 25.9497C11.1467 27.6167 12.6637 28.8207 14.5367 28.8207ZM24.7907 27.2347C25.2557 27.2347 25.5697 26.8377 25.4877 26.3457L25.3237 25.2657L26.1987 25.9497C26.5677 26.2637 27.0607 26.1957 27.2787 25.7847C27.5117 25.3887 27.3337 24.8687 26.8687 24.7047L25.8987 24.3227L26.8967 23.9117C27.3477 23.7347 27.5247 23.2697 27.2927 22.8727C27.0737 22.4627 26.5547 22.3947 26.1857 22.6957L25.3377 23.3377L25.4877 22.2987C25.5697 21.8207 25.2557 21.4237 24.7907 21.4237C24.3127 21.4237 23.9837 21.8067 24.0667 22.2987L24.2167 23.3377L23.3687 22.6957C22.9857 22.3947 22.4807 22.4767 22.2617 22.8727C22.0287 23.2697 22.2207 23.7477 22.6717 23.9257L23.6697 24.3087L22.6577 24.7187C22.2067 24.8967 22.0287 25.3887 22.2747 25.7847C22.4937 26.1957 22.9857 26.2637 23.3687 25.9497L24.2167 25.2927L24.0667 26.3457C23.9977 26.8377 24.3127 27.2347 24.7907 27.2347Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.909765625 26.017578125"
          className={className}
        >
          <path
            d="              M23.8625 4.8942C24.1225 4.8942 24.3145 4.6482 24.3005 4.3752L24.2325 3.1312L25.2845 3.8142C25.5035 3.9512 25.8185 3.9102 25.9545 3.6782C26.1055 3.4452 25.9955 3.1442 25.7225 3.0212L24.6145 2.4472L25.7355 1.8592C25.9825 1.7362 26.1055 1.4632 25.9545 1.2032C25.8315 0.9712 25.5175 0.9302 25.2715 1.0802L24.2325 1.7632L24.3005 0.5332C24.3275 0.2462 24.1365 0.0002 23.8625 0.0002C23.5625 0.0002 23.3845 0.2322 23.3985 0.5192L23.4665 1.7772L22.4005 1.0802C22.1675 0.9302 21.8665 0.9572 21.7305 1.2032C21.5935 1.4632 21.7025 1.7362 21.9485 1.8592L23.0565 2.4472L21.9625 3.0082C21.7025 3.1312 21.5795 3.4182 21.7305 3.6782C21.8535 3.9102 22.1675 3.9512 22.4005 3.8012L23.4665 3.1172L23.4115 4.3752C23.3985 4.6622 23.5755 4.8942 23.8625 4.8942ZM0.9895 10.2952C2.9035 9.5972 4.9685 9.2422 6.9505 9.2422C9.6305 9.2422 11.4485 9.6932 13.9645 9.6932C16.2755 9.6932 17.7655 8.1212 17.7655 6.0432C17.7655 3.9512 16.1795 2.4062 14.1555 2.4062C12.5425 2.4062 11.2025 3.4592 10.7375 4.8262C10.5735 5.1952 10.6835 5.6052 11.0795 5.7692C11.4215 5.9062 11.8045 5.7832 12.0095 5.3462C12.2825 4.4982 13.1305 3.8012 14.1555 3.8012C15.4135 3.8012 16.3705 4.7302 16.3705 6.0432C16.3705 7.3832 15.4135 8.2852 13.9645 8.2852C11.5175 8.2852 9.7265 7.8342 6.9505 7.8342C4.7355 7.8342 2.5075 8.2712 0.5255 8.9822C0.0875 9.1192 -0.0765 9.5022 0.0325 9.8712C0.1555 10.2402 0.5115 10.4452 0.9895 10.2952ZM22.6185 16.4882C25.7765 16.4882 27.9095 14.5472 27.9095 11.8262C27.9095 9.1872 25.8725 7.1912 23.3025 7.1912C20.8685 7.1912 19.0645 8.9552 18.7905 11.1972C18.7225 11.6352 18.9955 11.9902 19.3785 12.0312C19.7755 12.0862 20.1165 11.8262 20.1855 11.3472C20.3905 9.7752 21.6755 8.5992 23.3025 8.5992C25.0935 8.5992 26.5015 9.9672 26.5015 11.8262C26.5015 13.7542 24.9975 15.0802 22.6185 15.0802C18.3665 15.0802 13.8555 12.7152 8.3315 12.7152C5.4745 12.7152 2.9445 13.2072 0.5255 14.0962C0.1015 14.2462 -0.0765 14.6292 0.0325 14.9982C0.1555 15.3672 0.5255 15.5862 0.9765 15.4222C3.2185 14.4782 5.5835 14.1092 8.3315 14.1092C13.7865 14.1092 18.0115 16.4882 22.6185 16.4882ZM13.9915 26.0172C15.9875 26.0172 17.5325 24.5272 17.5325 22.4222C17.5325 19.3182 14.2925 17.5822 8.3865 17.5822C5.7475 17.5822 2.8905 18.1292 0.5385 18.9632C0.1015 19.1132 -0.0765 19.4962 0.0325 19.8652C0.1555 20.2342 0.5255 20.4532 0.9765 20.2892C3.2185 19.4552 5.8435 18.9902 8.3865 18.9902C13.4035 18.9902 16.1245 20.2892 16.1245 22.4222C16.1245 23.7482 15.1815 24.6232 13.9915 24.6232C12.8295 24.6232 12.0505 23.8572 11.8595 22.6132C11.8045 22.2172 11.5035 21.8882 11.0525 21.9162C10.5735 21.9432 10.3685 22.3532 10.4235 22.7912C10.6695 24.6642 12.0365 26.0172 13.9915 26.0172ZM23.8625 24.0352C24.1225 24.0352 24.3145 23.7892 24.3005 23.5152L24.2325 22.2712L25.2845 22.9552C25.5035 23.0922 25.8185 23.0512 25.9545 22.8182C26.1055 22.5862 25.9955 22.2852 25.7225 22.1622L24.6145 21.5882L25.7355 21.0002C25.9825 20.8772 26.1055 20.6032 25.9545 20.3442C25.8315 20.1112 25.5175 20.0562 25.2715 20.2212L24.2325 20.9042L24.3005 19.6602C24.3275 19.3872 24.1365 19.1402 23.8625 19.1402C23.5625 19.1402 23.3845 19.3732 23.3985 19.6602L23.4665 20.9182L22.4005 20.2212C22.1675 20.0702 21.8665 20.0972 21.7305 20.3442C21.5935 20.6032 21.7025 20.8772 21.9485 21.0002L23.0565 21.5882L21.9625 22.1482C21.7025 22.2712 21.5795 22.5582 21.7305 22.8182C21.8535 23.0512 22.1675 23.0922 22.4005 22.9412L23.4665 22.2582L23.4115 23.5152C23.3985 23.8032 23.5755 24.0352 23.8625 24.0352Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.369738701954766 27.111328125"
          className={className}
        >
          <path
            d="              M24.0356 5.1547C24.3776 5.1547 24.6236 4.8667 24.5826 4.5117L24.4866 3.3907L25.4166 4.0327C25.6766 4.2247 26.0726 4.1697 26.2506 3.8827C26.4286 3.5957 26.3056 3.1857 25.9636 3.0627L24.9516 2.5837L25.9906 2.0777C26.2916 1.9417 26.4286 1.5857 26.2506 1.2717C26.1006 0.9847 25.6896 0.9157 25.4026 1.1207L24.4866 1.7637L24.5966 0.6567C24.6376 0.3147 24.3916 -0.0003 24.0356 -0.0003C23.6806 -0.0003 23.4346 0.2867 23.4756 0.6427L23.5576 1.7777L22.6276 1.1207C22.3406 0.9157 21.9716 0.9847 21.8076 1.2717C21.6296 1.5857 21.7526 1.9417 22.0666 2.0917L23.0926 2.5707L22.0806 3.0487C21.7526 3.1857 21.6156 3.5687 21.7936 3.8827C21.9576 4.1697 22.3406 4.2387 22.6276 4.0327L23.5576 3.3907L23.4756 4.5117C23.4476 4.8667 23.6936 5.1547 24.0356 5.1547ZM1.3956 10.7867C3.3636 10.1717 5.4006 9.8577 7.3426 9.8577C9.8446 9.8577 11.6896 10.2537 14.0686 10.2537C16.5706 10.2537 18.1706 8.5447 18.1706 6.3027C18.1706 4.0057 16.4346 2.3657 14.2466 2.3657C12.6746 2.3657 11.2666 3.3357 10.6646 4.6617C10.4046 5.1677 10.5146 5.7557 11.0336 6.0427C11.5256 6.3027 12.1416 6.1387 12.4696 5.5367C12.7566 4.8807 13.4536 4.3747 14.2466 4.3747C15.3266 4.3747 16.1606 5.1267 16.1606 6.3027C16.1606 7.4787 15.3406 8.2437 14.0686 8.2437C11.8266 8.2437 9.9396 7.8477 7.3426 7.8477C5.1136 7.8477 2.8446 8.2307 0.7796 8.8727C0.1506 9.0507 -0.1084 9.5977 0.0416 10.1447C0.1916 10.6777 0.7116 10.9917 1.3956 10.7867ZM22.8326 17.3357C26.0726 17.3357 28.3696 15.2577 28.3696 12.3727C28.3696 9.5297 26.1956 7.4377 23.4476 7.4377C21.0146 7.4377 19.1276 9.1187 18.7306 11.3477C18.6076 11.9627 18.9226 12.4827 19.4696 12.6057C20.0296 12.7147 20.5496 12.3867 20.7136 11.6897C20.9596 10.3637 22.1076 9.4477 23.4476 9.4477C25.0746 9.4477 26.3596 10.6507 26.3596 12.3727C26.3596 14.1227 24.9796 15.3257 22.8326 15.3257C18.6626 15.3257 14.1376 12.9607 8.6546 12.9607C5.8246 12.9607 3.2406 13.4117 0.7796 14.2597C0.1646 14.4647 -0.1084 14.9977 0.0416 15.5447C0.2056 16.0917 0.7386 16.4067 1.3956 16.1737C3.6506 15.3397 5.9756 14.9707 8.6546 14.9707C14.0826 14.9707 18.1706 17.3357 22.8326 17.3357ZM14.0826 27.1117C16.2566 27.1117 17.9386 25.4977 17.9386 23.2007C17.9386 19.9067 14.5616 18.0607 8.4086 18.0607C5.8796 18.0607 3.1176 18.5527 0.7796 19.3457C0.1646 19.5507 -0.1084 20.0977 0.0416 20.6307C0.2056 21.1777 0.7386 21.4917 1.3956 21.2597C3.5686 20.4937 5.9756 20.0707 8.4086 20.0707C13.2896 20.0707 15.9146 21.2867 15.9146 23.2007C15.9146 24.3907 15.1076 25.1017 14.0826 25.1017C13.0986 25.1017 12.4696 24.4317 12.2646 23.3787C12.1276 22.8187 11.6766 22.4217 11.0476 22.5177C10.3916 22.6137 10.1316 23.2147 10.2686 23.8167C10.6096 25.6617 12.0456 27.1117 14.0826 27.1117ZM24.0356 25.1977C24.3776 25.1977 24.6236 24.8967 24.5826 24.5547L24.4866 23.4337L25.4166 24.0757C25.6766 24.2677 26.0726 24.2127 26.2506 23.9257C26.4286 23.6247 26.3056 23.2287 25.9636 23.0917L24.9516 22.6137L25.9906 22.1207C26.2916 21.9847 26.4286 21.6157 26.2506 21.3147C26.1006 21.0277 25.6896 20.9457 25.4026 21.1507L24.4866 21.8067L24.5966 20.6997C24.6376 20.3437 24.3916 20.0427 24.0356 20.0427C23.6806 20.0427 23.4346 20.3297 23.4756 20.6857L23.5576 21.8067L22.6276 21.1507C22.3406 20.9587 21.9716 21.0137 21.8076 21.3147C21.6296 21.6157 21.7526 21.9847 22.0666 22.1207L23.0926 22.6137L22.0806 23.0917C21.7526 23.2287 21.6156 23.6117 21.7936 23.9257C21.9576 24.1997 22.3406 24.2677 22.6276 24.0757L23.5576 23.4337L23.4756 24.5547C23.4476 24.9097 23.6936 25.1977 24.0356 25.1977Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.06678185096154 26.578125"
          className={className}
        >
          <path
            d="              M23.8144 4.9496C24.1024 4.9496 24.3344 4.6896 24.3074 4.3746L24.2254 3.2406L25.1824 3.8826C25.4004 4.0336 25.7564 3.9786 25.9204 3.7326C26.0984 3.4726 25.9754 3.1036 25.6744 2.9806L24.6624 2.4746L25.7014 1.9546C25.9614 1.8186 26.0844 1.4906 25.9344 1.2166C25.7974 0.9706 25.4144 0.8886 25.1684 1.0666L24.2254 1.7086L24.3204 0.5876C24.3484 0.2736 24.1154 -0.0004 23.8144 -0.0004C23.4864 -0.0004 23.2544 0.2456 23.2814 0.5746L23.3634 1.7226L22.3934 1.0666C22.1464 0.9026 21.8054 0.9566 21.6684 1.2166C21.5044 1.4906 21.6134 1.8186 21.8874 1.9546L22.9124 2.4746L21.9004 2.9806C21.6134 3.1036 21.4904 3.4456 21.6544 3.7326C21.7914 3.9786 22.1464 4.0466 22.3934 3.8826L23.3634 3.2406L23.2954 4.3746C23.2814 4.7036 23.5004 4.9496 23.8144 4.9496ZM1.2424 10.5406C3.2114 9.9126 5.2484 9.5836 7.1894 9.5836C9.7054 9.5836 11.5514 9.9946 13.9304 9.9946C16.3914 9.9946 17.9224 8.3266 17.9224 6.1526C17.9224 3.9236 16.2134 2.3246 14.1074 2.3246C12.5494 2.3246 11.1824 3.3086 10.6074 4.6076C10.3894 5.0586 10.4714 5.5786 10.9494 5.8246C11.3874 6.0426 11.9204 5.9066 12.2074 5.3596C12.5084 4.6626 13.2464 4.1156 14.1074 4.1156C15.2424 4.1156 16.1314 4.9086 16.1314 6.1526C16.1314 7.3966 15.2694 8.2166 13.9304 8.2166C11.6604 8.2166 9.7874 7.8066 7.1894 7.8066C4.9614 7.8066 2.7054 8.2036 0.6954 8.8456C0.1214 9.0096 -0.0976 9.5016 0.0394 9.9666C0.1764 10.4456 0.6274 10.7186 1.2424 10.5406ZM22.6254 16.9396C25.8114 16.9396 28.0664 14.9156 28.0664 12.0856C28.0664 9.2966 25.9204 7.2736 23.2544 7.2736C20.7794 7.2736 18.9474 8.9956 18.6194 11.2516C18.5374 11.8266 18.8524 12.2776 19.3444 12.3456C19.8504 12.4136 20.2874 12.0996 20.3964 11.4566C20.6294 10.0216 21.8184 9.0506 23.2544 9.0506C24.9224 9.0506 26.2754 10.2946 26.2754 12.0856C26.2754 13.9046 24.8404 15.1626 22.6254 15.1626C18.4554 15.1626 13.9574 12.7836 8.4884 12.7836C5.6724 12.7836 3.1024 13.2346 0.6954 14.0816C0.1354 14.2876 -0.0976 14.7656 0.0394 15.2306C0.1764 15.7086 0.6414 15.9956 1.2424 15.7906C3.4714 14.9436 5.7954 14.5746 8.4884 14.5746C13.9434 14.5746 18.0184 16.9396 22.6254 16.9396ZM13.9434 26.5786C16.0494 26.5786 17.6764 25.0196 17.6764 22.7906C17.6764 19.5646 14.3814 17.7596 8.3114 17.7596C5.7684 17.7596 3.0194 18.2516 0.6954 19.0446C0.1354 19.2496 -0.0976 19.7286 0.0394 20.1936C0.1764 20.6716 0.6414 20.9586 1.2424 20.7536C3.4164 19.9746 5.8504 19.5506 8.3114 19.5506C13.2734 19.5506 15.8984 20.7946 15.8984 22.7906C15.8984 24.0356 15.0234 24.8006 13.9434 24.8006C12.8634 24.8006 12.2074 24.0766 12.0164 22.9276C11.9344 22.4216 11.5644 21.9976 10.9774 22.0386C10.3614 22.0796 10.1154 22.5996 10.1974 23.1606C10.4434 25.0606 11.8524 26.5786 13.9434 26.5786ZM23.8144 24.5546C24.1024 24.5546 24.3344 24.2946 24.3074 23.9946L24.2254 22.8596L25.1824 23.5016C25.4004 23.6526 25.7564 23.5976 25.9204 23.3376C26.0984 23.0786 25.9754 22.7086 25.6744 22.5996L24.6624 22.0796L25.7014 21.5606C25.9614 21.4376 26.0844 21.1096 25.9344 20.8226C25.7974 20.5766 25.4144 20.4946 25.1684 20.6716L24.2254 21.3146L24.3204 20.1936C24.3484 19.8926 24.1154 19.6196 23.8144 19.6196C23.4864 19.6196 23.2544 19.8656 23.2814 20.1796L23.3634 21.3286L22.3934 20.6716C22.1464 20.5076 21.8054 20.5626 21.6684 20.8226C21.5044 21.1096 21.6134 21.4236 21.8874 21.5606L22.9124 22.0796L21.9004 22.5856C21.6134 22.7086 21.4904 23.0506 21.6544 23.3376C21.7914 23.5836 22.1464 23.6526 22.3934 23.4886L23.3634 22.8456L23.2954 23.9946C23.2814 24.3086 23.5004 24.5546 23.8144 24.5546Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.61818788269479 27.5078125"
          className={className}
        >
          <path
            d="              M24.216 5.3045C24.585 5.3045 24.845 4.9905 24.804 4.6075L24.681 3.5005L25.61 4.1565C25.898 4.3755 26.308 4.3205 26.485 4.0055C26.691 3.6775 26.54 3.2535 26.171 3.1175L25.187 2.6525L26.198 2.1875C26.54 2.0375 26.691 1.6405 26.499 1.3125C26.335 1.0115 25.898 0.9295 25.597 1.1625L24.694 1.8045L24.804 0.7105C24.858 0.3285 24.599 0.0005 24.216 0.0005C23.833 0.0005 23.56 0.3145 23.614 0.6975L23.724 1.8045L22.808 1.1485C22.493 0.9295 22.083 0.9985 21.919 1.3125C21.728 1.6405 21.864 2.0375 22.22 2.1875L23.232 2.6525L22.22 3.1175C21.864 3.2675 21.714 3.6645 21.905 4.0055C22.083 4.3065 22.493 4.3755 22.808 4.1565L23.724 3.5135L23.628 4.6075C23.587 5.0035 23.847 5.3045 24.216 5.3045ZM1.507 10.9785C3.476 10.3765 5.513 10.0625 7.454 10.0625C9.956 10.0625 11.802 10.4595 14.167 10.4595C16.71 10.4595 18.378 8.7095 18.378 6.4125C18.378 4.0875 16.601 2.3925 14.358 2.3925C12.773 2.3925 11.337 3.3635 10.708 4.7035C10.421 5.2635 10.544 5.8925 11.091 6.1935C11.638 6.4945 12.308 6.3165 12.649 5.6605C12.937 5.0445 13.607 4.5805 14.358 4.5805C15.398 4.5805 16.191 5.2915 16.191 6.4125C16.191 7.5465 15.398 8.2715 14.167 8.2715C11.952 8.2715 10.052 7.8755 7.454 7.8755C5.239 7.8755 2.956 8.2575 0.851 8.8865C0.181 9.0785 -0.12 9.6795 0.044 10.2675C0.222 10.8695 0.782 11.1835 1.507 10.9785ZM22.985 17.6505C26.28 17.6505 28.618 15.5315 28.618 12.5915C28.618 9.7075 26.403 7.5745 23.601 7.5745C21.194 7.5745 19.28 9.2015 18.816 11.4025C18.651 12.0585 18.966 12.6465 19.554 12.7965C20.155 12.9475 20.757 12.6055 20.948 11.8675C21.208 10.6235 22.316 9.7615 23.601 9.7615C25.187 9.7615 26.431 10.9235 26.431 12.5915C26.431 14.3005 25.077 15.4625 22.985 15.4625C18.843 15.4625 14.276 13.0845 8.78 13.0845C5.95 13.0845 3.339 13.5355 0.851 14.3825C0.181 14.6015 -0.12 15.1895 0.044 15.7775C0.222 16.3785 0.81 16.7075 1.521 16.4605C3.79 15.6405 6.128 15.2715 8.78 15.2715C14.194 15.2715 18.296 17.6505 22.985 17.6505ZM14.194 27.5075C16.409 27.5075 18.132 25.8535 18.132 23.5295C18.132 20.1665 14.7 18.2935 8.493 18.2935C5.964 18.2935 3.202 18.7715 0.851 19.5785C0.181 19.7965 -0.12 20.3845 0.044 20.9595C0.222 21.5605 0.81 21.9025 1.521 21.6565C3.681 20.8905 6.073 20.4805 8.493 20.4805C13.306 20.4805 15.944 21.6695 15.944 23.5295C15.944 24.6505 15.179 25.3205 14.194 25.3205C13.265 25.3205 12.677 24.7185 12.444 23.7205C12.267 23.1195 11.747 22.7365 11.091 22.8735C10.421 23.0235 10.148 23.6665 10.339 24.3225C10.735 26.1275 12.185 27.5075 14.194 27.5075ZM24.216 25.6755C24.585 25.6755 24.845 25.3615 24.804 24.9785L24.681 23.8715L25.61 24.5275C25.898 24.7465 26.308 24.6775 26.485 24.3635C26.691 24.0485 26.54 23.6255 26.171 23.4745L25.187 23.0235L26.198 22.5445C26.54 22.3945 26.691 22.0115 26.499 21.6835C26.335 21.3695 25.898 21.2875 25.597 21.5195L24.694 22.1625L24.804 21.0825C24.858 20.6995 24.599 20.3715 24.216 20.3715C23.833 20.3715 23.56 20.6715 23.614 21.0685L23.724 22.1755L22.808 21.5195C22.493 21.3005 22.083 21.3695 21.919 21.6835C21.728 22.0115 21.864 22.3945 22.22 22.5585L23.232 23.0235L22.22 23.4745C21.864 23.6255 21.714 24.0355 21.905 24.3635C22.083 24.6775 22.493 24.7465 22.808 24.5135L23.724 23.8715L23.628 24.9785C23.587 25.3615 23.847 25.6755 24.216 25.6755Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.702222293459084 25.29296875"
          className={className}
        >
          <path
            d="              M23.915 4.8264C24.148 4.8264 24.284 4.6214 24.271 4.3754L24.23 2.9944L25.405 3.7184C25.624 3.8414 25.87 3.8284 25.993 3.6094C26.116 3.4044 26.007 3.1994 25.774 3.0764L24.558 2.4204L25.788 1.7504C25.993 1.6404 26.116 1.4214 25.98 1.2034C25.87 0.9984 25.624 0.9844 25.405 1.1074L24.23 1.8594L24.284 0.4644C24.284 0.2184 24.148 0.0004 23.915 0.0004C23.669 0.0004 23.532 0.2054 23.532 0.4514L23.587 1.8594L22.398 1.1074C22.179 0.9844 21.933 0.9844 21.823 1.2034C21.7 1.4214 21.81 1.6274 22.028 1.7504L23.232 2.4204L22.028 3.0624C21.81 3.1854 21.687 3.4044 21.81 3.6094C21.946 3.8144 22.179 3.8284 22.398 3.7054L23.587 2.9804L23.546 4.3754C23.532 4.6214 23.669 4.8264 23.915 4.8264ZM0.646 9.9804C2.491 9.2014 4.569 8.7774 6.62 8.7774C9.519 8.7774 11.31 9.2834 14.003 9.2834C16.122 9.2834 17.558 7.8614 17.558 5.8924C17.558 4.0054 16.122 2.5024 14.222 2.5024C12.526 2.5024 11.214 3.6774 10.899 5.1404C10.817 5.4004 10.968 5.6324 11.228 5.6874C11.46 5.7284 11.651 5.6054 11.747 5.3454C11.98 4.2794 12.95 3.4044 14.222 3.4044C15.63 3.4044 16.655 4.5114 16.655 5.8924C16.655 7.3824 15.589 8.3944 14.003 8.3944C11.323 8.3944 9.628 7.8754 6.62 7.8754C4.446 7.8754 2.218 8.3534 0.304 9.1734C0.03 9.2694 -0.052 9.5154 0.03 9.7484C0.112 9.9804 0.358 10.0894 0.646 9.9804ZM22.603 15.8864C25.72 15.8864 27.702 14.0544 27.702 11.4844C27.702 9.0504 25.788 7.1094 23.355 7.1094C20.989 7.1094 19.212 8.9144 19.007 11.1154C18.966 11.4024 19.157 11.6214 19.417 11.6344C19.663 11.6484 19.868 11.4844 19.896 11.1974C20.073 9.4614 21.482 7.9984 23.355 7.9984C25.282 7.9984 26.8 9.5434 26.8 11.4844C26.8 13.5624 25.2 14.9844 22.603 14.9844C18.255 14.9844 13.689 12.6194 8.138 12.6194C5.198 12.6194 2.696 13.1664 0.304 14.1094C0.058 14.2054 -0.052 14.4644 0.03 14.6974C0.112 14.9294 0.358 15.0394 0.632 14.9294C2.874 13.8774 5.294 13.5214 8.138 13.5214C13.579 13.5214 18.009 15.8864 22.603 15.8864ZM14.044 25.2934C15.89 25.2934 17.312 23.8714 17.312 21.9434C17.312 19.0044 14.14 17.3634 8.493 17.3634C5.704 17.3634 2.696 17.9784 0.317 18.8394C0.058 18.9354 -0.052 19.2094 0.03 19.4274C0.112 19.6464 0.358 19.7834 0.632 19.6874C2.942 18.7714 5.814 18.2524 8.493 18.2524C13.579 18.2524 16.409 19.6324 16.409 21.9434C16.409 23.3794 15.398 24.3904 14.044 24.3904C12.759 24.3904 11.843 23.5844 11.651 22.2164C11.61 21.9574 11.419 21.7524 11.132 21.7524C10.845 21.7654 10.681 22.0254 10.722 22.3124C10.954 24.1304 12.267 25.2934 14.044 25.2934ZM23.915 23.3374C24.148 23.3374 24.284 23.1324 24.271 22.8864L24.23 21.5054L25.405 22.2304C25.624 22.3534 25.87 22.3534 25.993 22.1344C26.116 21.9164 26.007 21.7114 25.774 21.5874L24.558 20.9314L25.788 20.2614C25.993 20.1524 26.116 19.9334 25.98 19.7144C25.87 19.5094 25.624 19.4964 25.405 19.6194L24.23 20.3714L24.284 18.9764C24.284 18.7304 24.148 18.5254 23.915 18.5254C23.669 18.5254 23.532 18.7164 23.532 18.9764L23.587 20.3714L22.398 19.6194C22.179 19.4964 21.933 19.4964 21.823 19.7144C21.7 19.9334 21.81 20.1384 22.028 20.2614L23.232 20.9314L22.028 21.5744C21.81 21.6974 21.687 21.9164 21.81 22.1344C21.946 22.3264 22.179 22.3534 22.398 22.2164L23.587 21.4924L23.546 22.8864C23.532 23.1324 23.669 23.3374 23.915 23.3374Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.59339041353104 24.91015625"
          className={className}
        >
          <path
            d="              M23.9425 4.7853C24.1615 4.7853 24.2715 4.5933 24.2715 4.3613L24.2305 2.9123L25.4745 3.6643C25.6925 3.7873 25.8985 3.7873 26.0215 3.5683C26.1165 3.3903 26.0075 3.2133 25.8025 3.0903L24.5305 2.3923L25.8025 1.6813C25.9935 1.5863 26.1165 1.3943 25.9935 1.1893C25.8985 0.9983 25.6795 0.9983 25.4745 1.1213L24.2305 1.8863L24.2715 0.4103C24.2715 0.1913 24.1615 0.0003 23.9425 0.0003C23.7105 0.0003 23.6145 0.1913 23.6145 0.4103L23.6425 1.8863L22.3985 1.1213C22.1925 0.9983 21.9605 0.9843 21.8645 1.1893C21.7555 1.3943 21.8645 1.5723 22.0695 1.6813L23.3275 2.3923L22.0695 3.0763C21.8645 3.1993 21.7415 3.3903 21.8645 3.5683C21.9875 3.7593 22.1925 3.7593 22.3985 3.6363L23.6425 2.8843L23.6145 4.3613C23.6145 4.5933 23.7105 4.7853 23.9425 4.7853ZM0.4685 9.8163C2.2865 8.9823 4.3785 8.5313 6.4565 8.5313C9.4645 8.5313 11.2415 9.0783 14.0305 9.0783C16.0405 9.0783 17.4485 7.7243 17.4485 5.8103C17.4485 4.0193 16.0955 2.5563 14.2495 2.5563C12.5265 2.5563 11.2145 3.7733 10.9825 5.2773C10.9415 5.4823 11.1055 5.6323 11.3105 5.6323C11.4745 5.6323 11.5695 5.5093 11.6105 5.3453C11.8295 4.1563 12.8685 3.1993 14.2495 3.1993C15.7395 3.1993 16.8065 4.3883 16.8065 5.8103C16.8065 7.3693 15.6855 8.4353 14.0305 8.4353C11.2285 8.4353 9.5875 7.8883 6.4565 7.8883C4.2965 7.8883 2.0815 8.3943 0.1945 9.2563C0.0035 9.3383 -0.0375 9.5153 0.0305 9.6793C0.0995 9.8303 0.2905 9.8983 0.4685 9.8163ZM22.5895 15.5723C25.6925 15.5723 27.5935 13.7953 27.5935 11.2933C27.5935 8.9683 25.7475 7.0413 23.3825 7.0413C21.0445 7.0413 19.2805 8.8863 19.1165 11.0603C19.0895 11.2653 19.2535 11.4163 19.4315 11.4163C19.6085 11.4163 19.7325 11.2933 19.7595 11.1153C19.9095 9.2833 21.3865 7.6833 23.3825 7.6833C25.3925 7.6833 26.9505 9.3243 26.9505 11.2933C26.9505 13.4393 25.3105 14.9293 22.5895 14.9293C18.1875 14.9293 13.6205 12.5643 8.0285 12.5643C5.0625 12.5643 2.5875 13.1383 0.1945 14.0953C0.0305 14.1643 -0.0375 14.3693 0.0305 14.5193C0.0995 14.6973 0.2765 14.7523 0.4545 14.6703C2.6965 13.5483 5.1445 13.2073 8.0285 13.2073C13.4705 13.2073 18.0095 15.5723 22.5895 15.5723ZM14.0855 24.9103C15.8495 24.9103 17.2025 23.5293 17.2025 21.6833C17.2025 18.8403 14.0715 17.2263 8.5485 17.2263C5.6775 17.2263 2.6015 17.8963 0.2085 18.7713C0.0305 18.8403 -0.0375 19.0453 0.0305 19.1953C0.0995 19.3453 0.2765 19.4273 0.4545 19.3593C2.8065 18.4163 5.8005 17.8693 8.5485 17.8693C13.6615 17.8693 16.5605 19.2913 16.5605 21.6833C16.5605 23.1733 15.4935 24.2673 14.0855 24.2673C12.7325 24.2673 11.7335 23.4473 11.5425 22.0113C11.5155 21.8203 11.3645 21.6703 11.1875 21.6703C10.9825 21.6703 10.8455 21.8473 10.8725 22.0523C11.1055 23.8433 12.3905 24.9103 14.0855 24.9103ZM23.9425 22.9683C24.1615 22.9683 24.2715 22.7773 24.2715 22.5583L24.2305 21.0953L25.4745 21.8473C25.6925 21.9703 25.8985 21.9703 26.0215 21.7653C26.1165 21.5743 26.0075 21.4103 25.8025 21.2873L24.5305 20.5763L25.8025 19.8793C25.9935 19.7693 26.1165 19.5913 25.9935 19.3733C25.8985 19.1813 25.6795 19.1953 25.4745 19.3043L24.2305 20.0843L24.2715 18.6073C24.2715 18.3883 24.1615 18.1973 23.9425 18.1973C23.7105 18.1973 23.6145 18.3883 23.6145 18.6073L23.6425 20.0843L22.3985 19.3043C22.1925 19.1953 21.9605 19.1683 21.8645 19.3733C21.7555 19.5913 21.8645 19.7563 22.0695 19.8793L23.3275 20.5763L22.0695 21.2593C21.8645 21.3823 21.7415 21.5743 21.8645 21.7653C21.9875 21.9573 22.1925 21.9573 22.3985 21.8343L23.6425 21.0823L23.6145 22.5583C23.6145 22.7773 23.7105 22.9683 23.9425 22.9683Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
