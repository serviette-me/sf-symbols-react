import { IconProps } from "../../types"

export default function MicSlashIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.880444306070153 33.7421875"
          className={className}
        >
          <path
            d="              M19.5099 6.6304C19.5099 2.7484 16.7619 0.0004 13.1249 0.0004C10.7049 0.0004 8.6949 1.2164 7.6289 3.1854L11.7029 7.2464V6.3984C11.7029 5.4824 12.1409 4.5114 13.1249 4.5114C14.1089 4.5114 14.5329 5.4554 14.5329 6.3984V10.0764L19.4959 15.0394C19.5099 14.9574 19.5099 14.8754 19.5099 14.7934ZM25.7579 27.6994C26.2499 28.1774 27.0429 28.1914 27.5219 27.6994C27.9859 27.2204 28.0139 26.4274 27.5219 25.9354L2.5159 0.9574C2.0369 0.4644 1.2309 0.4644 0.7379 0.9574C0.2739 1.4354 0.2739 2.2554 0.7379 2.7204ZM-0.0001 15.8864C-0.0001 22.7094 4.6899 27.0294 10.8829 27.8634V28.9704H6.0979C4.7849 28.9704 3.6229 30.0374 3.6229 31.3634C3.6229 32.6484 4.7849 33.7424 6.0979 33.7424H20.1389C21.4649 33.7424 22.6269 32.6484 22.6269 31.3634C22.6269 30.0374 21.4649 28.9704 20.1389 28.9704H15.3669V27.8634C17.4449 27.5764 19.3869 26.9064 20.9999 25.8674L17.4589 22.3124C16.2149 22.9824 14.7249 23.3384 13.1249 23.3384C8.5449 23.3384 4.9079 20.3984 4.9079 15.7504V13.4804C4.9079 12.1684 3.7739 11.1704 2.4339 11.1704C1.0939 11.1704 -0.0001 12.1684 -0.0001 13.4804ZM21.2599 16.7754L25.2929 20.8364C25.9079 19.3734 26.2499 17.7184 26.2499 15.8864V13.4804C26.2499 12.1684 25.1429 11.1704 23.8029 11.1704C22.4769 11.1704 21.3419 12.1684 21.3419 13.4804V15.7504C21.3419 16.1054 21.3149 16.4474 21.2599 16.7754ZM13.1249 21.4374C14.1499 21.4374 15.1079 21.2184 15.9419 20.8084L12.2909 17.1584C11.8539 17.0484 11.4019 16.6254 11.2519 16.1194L6.7399 11.6074V14.7934C6.7399 18.7164 9.4749 21.4374 13.1249 21.4374Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.38014666984249 31.513671875"
          className={className}
        >
          <path
            d="              M17.7597 6.0024C17.7597 2.4884 15.3807 0.0004 12.0857 0.0004C9.5297 0.0004 7.5607 1.5454 6.8767 3.8964V4.1704L9.9257 7.2054V5.8794C9.9257 4.4164 10.7187 3.2814 12.0857 3.2814C13.4527 3.2814 14.2457 4.4024 14.2457 5.8794V11.2524C14.2457 11.3474 14.2457 11.4294 14.2327 11.5114L17.7187 14.9984C17.7457 14.7934 17.7597 14.5884 17.7597 14.3824ZM23.4197 26.5374C23.8707 26.9744 24.6097 26.9884 25.0467 26.5374C25.4847 26.0864 25.4977 25.3614 25.0467 24.9104L1.9687 1.8594C1.5177 1.4084 0.7797 1.4084 0.3277 1.8594C-0.1093 2.2964 -0.1093 3.0484 0.3277 3.4864ZM0.6287 15.1754C0.6287 21.2734 4.7437 25.3064 10.4457 25.9494V28.0954H5.5237C4.5667 28.0954 3.7597 28.8474 3.7597 29.8044C3.7597 30.7344 4.5667 31.5134 5.5237 31.5134H18.6487C19.5917 31.5134 20.3987 30.7344 20.3987 29.8044C20.3987 28.8474 19.5917 28.0954 18.6487 28.0954H13.7267V25.9494C15.5317 25.7444 17.1857 25.1974 18.5937 24.3364L16.0917 21.8204C14.9437 22.4214 13.5757 22.7364 12.0857 22.7364C7.4507 22.7364 4.1157 19.7144 4.1157 15.0664V12.5784C4.1157 11.6484 3.3227 10.9104 2.3657 10.9104C1.4077 10.9104 0.6287 11.6484 0.6287 12.5784ZM19.7697 17.0214L22.5857 19.8514C23.2007 18.4844 23.5297 16.9124 23.5297 15.1754V12.5784C23.5297 11.6484 22.7497 10.9104 21.8067 10.9104C20.8497 10.9104 20.0567 11.6484 20.0567 12.5784V15.0664C20.0567 15.7634 19.9477 16.4334 19.7697 17.0214ZM12.0857 20.3844C12.8657 20.3844 13.5757 20.2344 14.2187 19.9614L11.3617 17.1034C11.2927 17.1174 11.2387 17.1174 11.1567 17.1174C10.5407 16.9664 10.0217 16.4334 9.8577 15.7634L9.8437 15.5864L6.3987 12.1544V14.3824C6.3987 17.9234 8.7907 20.3844 12.0857 20.3844Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.49440389391683 32.689453125"
          className={className}
        >
          <path
            d="              M18.4805 6.3442C18.4805 2.6252 15.9105 0.0002 12.4245 0.0002C9.9365 0.0002 7.9535 1.3812 7.0645 3.5272V3.6502L10.6605 7.2322V6.1522C10.6605 4.9762 11.2625 3.9372 12.4245 3.9372C13.6005 3.9372 14.2015 4.9632 14.2015 6.1522V10.5272C14.2015 10.6092 14.1885 10.6782 14.1885 10.7602L18.4535 15.0252C18.4675 14.8752 18.4805 14.7522 18.4805 14.6012ZM24.4555 27.1522C24.9205 27.6172 25.6995 27.6312 26.1505 27.1522C26.6025 26.6872 26.6155 25.9352 26.1505 25.4572L2.0615 1.3812C1.5825 0.9162 0.8165 0.9162 0.3385 1.3812C-0.1125 1.8452 -0.1125 2.6252 0.3385 3.0902ZM0.0925 15.5582C0.0925 22.0392 4.5085 26.2222 10.4695 26.9612V28.5602H5.6295C4.4805 28.5602 3.4825 29.4762 3.4825 30.6252C3.4825 31.7462 4.4805 32.6892 5.6295 32.6892H19.2325C20.3815 32.6892 21.3795 31.7462 21.3795 30.6252C21.3795 29.4762 20.3815 28.5602 19.2325 28.5602H14.3795V26.9612C16.3485 26.7152 18.1395 26.0992 19.6565 25.1422L16.6075 22.0802C15.4045 22.7222 13.9825 23.0642 12.4245 23.0642C7.8305 23.0642 4.3305 20.0842 4.3305 15.4352V13.0562C4.3305 11.9222 3.3595 11.0472 2.1975 11.0472C1.0355 11.0472 0.0925 11.9222 0.0925 13.0562ZM20.3545 16.8982L23.8135 20.3712C24.4285 18.9632 24.7565 17.3362 24.7565 15.5582V13.0562C24.7565 11.9222 23.8135 11.0472 22.6645 11.0472C21.5025 11.0472 20.5315 11.9222 20.5315 13.0562V15.4352C20.5315 15.9412 20.4635 16.4332 20.3545 16.8982ZM12.4245 20.9452C13.3405 20.9452 14.1885 20.7542 14.9265 20.4122L11.6725 17.1582C11.6315 17.1582 11.6045 17.1582 11.5635 17.1442C11.0295 17.0082 10.5515 16.5292 10.3875 15.9552L10.3735 15.8592L6.3815 11.8672V14.6012C6.3815 18.3472 8.9515 20.9452 12.4245 20.9452Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.3330078125 28.888671875"
          className={className}
        >
          <path
            d="              M15.6031 5.072C15.6031 2.119 13.7301 0 10.9131 0C8.2611 0 6.4561 1.9 6.2511 4.566V5.783L7.8241 7.342V5.072C7.8241 3.008 9.0271 1.559 10.9131 1.559C12.8001 1.559 14.0031 3.008 14.0031 5.072V12.975C14.0031 13.152 13.9901 13.33 13.9621 13.494L15.4941 15.012C15.5621 14.643 15.6031 14.26 15.6031 13.863ZM20.9351 24.869C21.2491 25.184 21.7831 25.184 22.0971 24.869C22.4121 24.541 22.4121 24.021 22.0971 23.707L1.3981 3.035C1.0831 2.721 0.5641 2.707 0.2361 3.035C-0.0789 3.35 -0.0789 3.883 0.2361 4.184ZM1.5071 14.396C1.5071 19.564 4.9391 23.215 10.1211 23.557V27.289H4.8021C4.3651 27.289 4.0091 27.645 4.0091 28.082C4.0091 28.533 4.3651 28.889 4.8021 28.889H17.0251C17.4621 28.889 17.8181 28.533 17.8181 28.082C17.8181 27.645 17.4621 27.289 17.0251 27.289H11.7201V23.557C13.4151 23.461 14.9191 22.982 16.1631 22.203L15.0291 21.068C13.8801 21.711 12.4991 22.08 10.9131 22.08C6.1691 22.08 3.1071 18.936 3.1071 14.342V11.73C3.1071 11.279 2.7511 10.924 2.3001 10.924C1.8631 10.924 1.5071 11.279 1.5071 11.73ZM18.0781 17.596L19.3221 18.826C19.9641 17.555 20.3201 16.051 20.3201 14.396V11.73C20.3201 11.279 19.9641 10.924 19.5271 10.924C19.0761 10.924 18.7201 11.279 18.7201 11.73V14.342C18.7201 15.545 18.5011 16.639 18.0781 17.596ZM10.9131 18.936C11.5291 18.936 12.0761 18.826 12.5681 18.621L11.0091 17.049C10.7901 17.172 10.5311 17.227 10.2441 17.227C8.9861 17.104 8.1651 16.092 8.0421 14.807L8.0291 14.082L6.2241 12.264V13.863C6.2241 16.816 8.1111 18.936 10.9131 18.936Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.012960462405378 30.064453125"
          className={className}
        >
          <path
            d="              M16.8784 5.5922C16.8784 2.2972 14.7314 0.0002 11.6554 0.0002C9.0034 0.0002 7.0754 1.7502 6.6374 4.3342V4.7852L9.0164 7.1502V5.5372C9.0164 3.7192 10.0424 2.4742 11.6554 2.4742C13.2684 2.4742 14.2944 3.7192 14.2944 5.5372V12.1272C14.2944 12.2222 14.2944 12.3182 14.2804 12.4142L16.8094 14.9572C16.8644 14.6702 16.8784 14.3962 16.8784 14.1092ZM22.1554 25.7712C22.5924 26.1952 23.2904 26.2092 23.7004 25.7712C24.1104 25.3472 24.1244 24.6642 23.7004 24.2402L1.8524 2.4202C1.4424 1.9962 0.7314 1.9822 0.3074 2.4202C-0.1026 2.8302 -0.1026 3.5412 0.3074 3.9512ZM1.2784 14.7112C1.2784 20.3302 5.0104 24.1852 10.4114 24.7052V27.5082H5.3794C4.6824 27.5082 4.0944 28.0822 4.0944 28.7932C4.0944 29.4902 4.6824 30.0642 5.3794 30.0642H17.9304C18.6414 30.0642 19.2294 29.4902 19.2294 28.7932C19.2294 28.0822 18.6414 27.5082 17.9304 27.5082H12.9134V24.7052C14.5534 24.5552 16.0304 24.0762 17.3014 23.3382L15.4564 21.5062C14.3764 22.0392 13.0904 22.3402 11.6554 22.3402C6.9934 22.3402 3.8484 19.2642 3.8484 14.6152V12.0042C3.8484 11.2932 3.2744 10.7322 2.5634 10.7322C1.8524 10.7322 1.2784 11.2932 1.2784 12.0042ZM19.0514 17.1722L21.1024 19.2222C21.7044 17.9102 22.0454 16.3922 22.0454 14.7112V12.0042C22.0454 11.2932 21.4714 10.7322 20.7604 10.7322C20.0494 10.7322 19.4614 11.2932 19.4614 12.0042V14.6152C19.4614 15.5452 19.3254 16.4062 19.0514 17.1722ZM11.6554 19.6872C12.2704 19.6872 12.8444 19.5922 13.3504 19.4002L10.9714 17.0212C10.8894 17.0622 10.7944 17.0762 10.6844 17.0622C9.9324 16.8982 9.3854 16.2972 9.2084 15.5172L9.1944 15.2442L6.4324 12.4822V14.1092C6.4324 17.3902 8.5924 19.6872 11.6554 19.6872Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.254172111883236 29.2578125"
          className={className}
        >
          <path
            d="              M16.389 5.3597C16.389 2.2007 14.366 -0.0003 11.426 -0.0003C8.719 -0.0003 6.805 1.8597 6.504 4.5937V5.1407L8.514 7.1367V5.3597C8.514 3.3357 9.676 2.0367 11.426 2.0367C13.176 2.0367 14.325 3.3357 14.325 5.3597V12.6187C14.325 12.7287 14.325 12.8377 14.311 12.9337L16.307 14.9297C16.362 14.6157 16.389 14.2867 16.389 13.9587ZM21.461 25.3617C21.872 25.7717 22.542 25.7717 22.952 25.3617C23.348 24.9377 23.362 24.2817 22.952 23.8707L1.801 2.7347C1.391 2.3377 0.708 2.3247 0.297 2.7347C-0.099 3.1447 -0.099 3.8277 0.297 4.2247ZM1.637 14.4507C1.637 19.8107 5.178 23.5707 10.387 24.0077V27.1937H5.315C4.741 27.1937 4.276 27.6587 4.276 28.2327C4.276 28.8067 4.741 29.2577 5.315 29.2577H17.524C18.098 29.2577 18.563 28.8067 18.563 28.2327C18.563 27.6587 18.098 27.1937 17.524 27.1937H12.452V24.0077C13.997 23.8847 15.377 23.4607 16.581 22.7907L15.104 21.3277C14.051 21.8337 12.821 22.1207 11.426 22.1207C6.737 22.1207 3.702 19.0317 3.702 14.3687V11.6757C3.702 11.1017 3.251 10.6507 2.663 10.6507C2.088 10.6507 1.637 11.1017 1.637 11.6757ZM18.659 17.2677L20.258 18.8667C20.874 17.5817 21.202 16.0917 21.202 14.4507V11.6757C21.202 11.1017 20.751 10.6507 20.176 10.6507C19.602 10.6507 19.137 11.1017 19.137 11.6757V14.3687C19.137 15.4217 18.973 16.3927 18.659 17.2677ZM11.426 19.3187C11.946 19.3187 12.424 19.2367 12.862 19.0857L10.77 16.9807C10.661 17.0347 10.538 17.0487 10.415 17.0487C9.608 16.8707 9.034 16.2287 8.842 15.3947L8.829 15.0527L6.45 12.6737V13.9587C6.45 17.1037 8.473 19.3187 11.426 19.3187Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.59912109375 30.693359375"
          className={className}
        >
          <path
            d="              M17.2573 5.7692C17.2573 2.3792 15.0013 0.0003 11.8433 0.0003C9.2323 0.0003 7.2773 1.6543 6.7303 4.1423V4.5113L9.4093 7.1773V5.6872C9.4093 4.0192 10.3253 2.8163 11.8433 2.8163C13.3473 2.8163 14.2773 4.0063 14.2773 5.6872V11.7442C14.2773 11.8403 14.2633 11.9353 14.2633 12.0313L17.2023 14.9703C17.2433 14.7243 17.2573 14.4783 17.2573 14.2183ZM22.6983 26.0993C23.1363 26.5373 23.8613 26.5373 24.2713 26.0993C24.7083 25.6623 24.7083 24.9653 24.2713 24.5273L1.9043 2.1743C1.4663 1.7362 0.7553 1.7362 0.3183 2.1743C-0.1057 2.5972 -0.1057 3.3223 0.3183 3.7463ZM0.9883 14.9023C0.9883 20.7403 4.8983 24.6643 10.4213 25.2383V27.7543H5.4453C4.6243 27.7543 3.9543 28.4103 3.9543 29.2173C3.9543 30.0233 4.6243 30.6933 5.4453 30.6933H18.2413C19.0483 30.6933 19.7323 30.0233 19.7323 29.2173C19.7323 28.4103 19.0483 27.7543 18.2413 27.7543H13.2513V25.2383C14.9743 25.0603 16.5323 24.5543 17.8593 23.7613L15.7263 21.6423C14.6183 22.2033 13.3063 22.5173 11.8433 22.5173C7.1953 22.5173 3.9683 19.4553 3.9683 14.8063V12.2503C3.9683 11.4433 3.2843 10.8143 2.4783 10.8143C1.6573 10.8143 0.9883 11.4433 0.9883 12.2503ZM19.3633 17.1033L21.7413 19.4963C22.3573 18.1563 22.6853 16.6112 22.6853 14.9023V12.2503C22.6853 11.4433 22.0293 10.8143 21.2083 10.8143C20.3883 10.8143 19.7183 11.4433 19.7183 12.2503V14.8063C19.7183 15.6403 19.5953 16.4063 19.3633 17.1033ZM11.8433 19.9883C12.5273 19.9883 13.1563 19.8653 13.7163 19.6333L11.1323 17.0493C11.0643 17.0902 10.9823 17.0902 10.8863 17.0902C10.2023 16.9263 9.6563 16.3513 9.4783 15.6273L9.4643 15.3813L6.4153 12.3323V14.2183C6.4153 17.6233 8.6713 19.9883 11.8433 19.9883Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.107707340534137 28.396484375"
          className={className}
        >
          <path
            d="              M14.564 4.703C14.564 2.023 12.869 0 10.244 0C7.66 0 5.992 1.955 5.923 4.553V6.645L6.894 7.615V4.703C6.894 2.57 8.179 0.957 10.244 0.957C12.294 0.957 13.58 2.57 13.58 4.703V13.453C13.58 13.727 13.552 13.986 13.511 14.219L14.4 15.121C14.509 14.67 14.564 14.219 14.564 13.74ZM20.238 24.213C20.443 24.404 20.757 24.404 20.949 24.213C21.167 24.008 21.154 23.693 20.949 23.502L0.865 3.432C0.687 3.24 0.359 3.213 0.154 3.432C-0.051 3.623 -0.051 3.951 0.154 4.143ZM1.316 14.342C1.316 19.223 4.638 22.75 9.751 22.969V27.412H4.132C3.859 27.412 3.64 27.631 3.64 27.904C3.64 28.178 3.859 28.397 4.132 28.397H16.341C16.615 28.397 16.833 28.178 16.833 27.904C16.833 27.631 16.615 27.412 16.341 27.412H10.736V22.969C12.636 22.887 14.29 22.34 15.617 21.424L14.906 20.713C13.662 21.547 12.076 22.012 10.244 22.012C5.404 22.012 2.3 18.826 2.3 14.314V11.785C2.3 11.512 2.082 11.293 1.808 11.293C1.535 11.293 1.316 11.512 1.316 11.785ZM17.312 18.033L18.064 18.785C18.775 17.5 19.158 16.01 19.158 14.342V11.785C19.158 11.512 18.939 11.293 18.665 11.293C18.392 11.293 18.173 11.512 18.173 11.785V14.314C18.173 15.695 17.873 16.953 17.312 18.033ZM10.244 18.443C10.968 18.443 11.624 18.279 12.171 17.992L11.337 17.145C10.955 17.35 10.517 17.445 10.025 17.445C8.165 17.404 7.003 15.928 6.962 14.041V12.783L5.91 11.731V13.74C5.91 16.434 7.605 18.443 10.244 18.443Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.480723830124944 28.13671875"
          className={className}
        >
          <path
            d="              M14.0341 4.5116C14.0341 1.9546 12.4341 -0.0004 9.8921 -0.0004C7.3491 -0.0004 5.7491 1.9686 5.7491 4.5256V7.0816L6.4191 7.7516V4.5116C6.4191 2.3516 7.7311 0.6286 9.8921 0.6286C12.0381 0.6286 13.3501 2.3516 13.3501 4.5116V13.6996C13.3501 14.0136 13.3231 14.3146 13.2681 14.6016L13.8291 15.1626C13.9521 14.6836 14.0341 14.1916 14.0341 13.6716ZM19.8861 23.8706C20.0221 24.0076 20.2411 24.0076 20.3781 23.8706C20.5281 23.7206 20.5011 23.5156 20.3781 23.3926L0.5951 3.6226C0.4721 3.4996 0.2531 3.4726 0.1021 3.6226C-0.0339 3.7596 -0.0339 3.9786 0.1021 4.1156ZM9.8921 18.1976C10.6841 18.1976 11.3821 17.9926 11.9561 17.6636L11.5051 17.1856C11.0401 17.4316 10.5071 17.5546 9.9051 17.5546C7.7311 17.5686 6.4191 15.8316 6.4191 13.6446V12.1266L5.7491 11.4566V13.6716C5.7491 16.2286 7.3491 18.1976 9.8921 18.1976ZM1.2241 14.3006C1.2241 19.0586 4.4771 22.5036 9.5501 22.6546V27.4666H3.7801C3.6021 27.4666 3.4521 27.6176 3.4521 27.8086C3.4521 27.9866 3.6021 28.1366 3.7801 28.1366H16.0031C16.1811 28.1366 16.3311 27.9866 16.3311 27.8086C16.3311 27.6176 16.1811 27.4666 16.0031 27.4666H10.2331V22.6546C12.2431 22.5856 13.9791 22.0116 15.3471 21.0276L14.8541 20.5356C13.5421 21.4516 11.8601 21.9846 9.8921 21.9846C5.0241 21.9846 1.8931 18.7716 1.8931 14.3006V11.8126C1.8931 11.6206 1.7431 11.4706 1.5521 11.4706C1.3741 11.4706 1.2241 11.6206 1.2241 11.8126ZM16.9191 18.2516L17.4251 18.7576C18.1631 17.4726 18.5591 15.9826 18.5591 14.3006V11.8126C18.5591 11.6206 18.4091 11.4706 18.2181 11.4706C18.0401 11.4706 17.8901 11.6206 17.8901 11.8126V14.3006C17.8901 15.7776 17.5481 17.1036 16.9191 18.2516Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}