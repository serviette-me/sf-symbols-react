import { IconProps } from "../../types"

export default function SunriseFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.041015625 30.10546875"
          className={className}
        >
          <path
            d="              M17.5277 11.9628C18.4437 11.9628 19.1957 11.1838 19.1957 10.2398L19.1817 6.6038L18.8397 4.0608L19.6597 5.4138L20.6037 6.5628C20.9587 7.0138 21.3687 7.3558 21.9977 7.3558C22.9007 7.3558 23.5707 6.6578 23.5707 5.8108C23.5707 5.2638 23.2287 4.7718 22.7907 4.3608L18.8267 0.5738C18.4027 0.1638 18.0197 -0.0002 17.5277 -0.0002C17.0217 -0.0002 16.6527 0.1638 16.2147 0.5738L12.2497 4.3608C11.8127 4.7718 11.4707 5.2638 11.4707 5.8108C11.4707 6.6578 12.1407 7.3558 13.0427 7.3558C13.6717 7.3558 14.0817 7.0138 14.4377 6.5628L15.4087 5.4008L16.2017 4.0608L15.8597 6.6038L15.8457 10.2398C15.8457 11.1838 16.5977 11.9628 17.5277 11.9628ZM24.6227 15.1348C25.2657 15.7908 26.3597 15.7498 27.0297 15.0938L28.6427 13.5078C29.3267 12.8238 29.3267 11.7308 28.6697 11.0878C28.0277 10.4318 26.9477 10.4448 26.2637 11.1288L24.6367 12.7288C23.9807 13.3988 23.9667 14.4918 24.6227 15.1348ZM8.0117 15.0938C8.6817 15.7498 9.7757 15.7908 10.4177 15.1348C11.0747 14.4918 11.0607 13.3988 10.4047 12.7288L8.7777 11.1288C8.0937 10.4448 7.0277 10.4318 6.3707 11.0878C5.7147 11.7308 5.7147 12.8238 6.3987 13.5078ZM24.9927 22.1898C24.9927 18.0198 21.6567 14.6838 17.5277 14.6838C13.3847 14.6838 10.0487 18.0198 10.0487 22.1898C10.0487 22.5858 10.0767 22.9688 10.1447 23.3378H24.8967C24.9647 22.9688 24.9927 22.5858 24.9927 22.1898ZM3.4727 22.6128L5.7557 22.6268C6.6997 22.6268 7.4787 21.8478 7.4787 20.9318C7.4787 20.0018 6.6997 19.2498 5.7557 19.2498H3.4727C2.5297 19.2498 1.7497 20.0018 1.7497 20.9318C1.7497 21.8478 2.5427 22.6128 3.4727 22.6128ZM29.2847 22.6128H31.5687C32.5257 22.6128 33.2907 21.8478 33.2907 20.9318C33.2907 20.0018 32.5257 19.2498 31.5687 19.2498H29.2847C28.3557 19.2498 27.5627 20.0018 27.5627 20.9318C27.5627 21.8478 28.3687 22.6128 29.2847 22.6128ZM2.1187 30.1058H32.9217C34.1117 30.1058 35.0407 29.0668 35.0407 27.9178C35.0407 26.7148 34.1247 25.7308 32.9217 25.7308H2.1187C0.9297 25.7308 -0.0003 26.7558 -0.0003 27.9178C-0.0003 29.0258 0.9437 30.1058 2.1187 30.1058Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.041015625 29.3125"
          className={className}
        >
          <path
            d="              M17.5277 11.5523C18.2797 11.5523 18.9217 10.8963 18.9217 10.0893L18.9087 5.7143L18.6617 3.4043L19.5647 4.6623L20.8907 6.0973C21.1777 6.4253 21.5057 6.6583 21.9567 6.6583C22.6817 6.6583 23.2147 6.1113 23.2147 5.4273C23.2147 5.0043 22.9957 4.6623 22.6547 4.3343L18.5387 0.4643C18.1837 0.1233 17.8967 0.0003 17.5277 0.0003C17.1447 0.0003 16.8577 0.1233 16.5017 0.4643L12.3867 4.3343C12.0447 4.6623 11.8267 5.0043 11.8267 5.4273C11.8267 6.1113 12.3597 6.6583 13.0837 6.6583C13.5347 6.6583 13.8637 6.4253 14.1507 6.0973L15.5447 4.5933L16.3787 3.4043L16.1327 5.7143L16.1187 10.0893C16.1187 10.8963 16.7617 11.5523 17.5277 11.5523ZM24.5957 15.0253C25.1427 15.5583 26.0447 15.5453 26.6187 14.9573L28.6287 12.9743C29.2167 12.3863 29.2027 11.4843 28.6697 10.9373C28.1367 10.4043 27.2347 10.4043 26.6467 10.9923L24.6507 12.9883C24.0627 13.5763 24.0487 14.4783 24.5957 15.0253ZM8.4217 14.9573C8.9957 15.5453 9.9117 15.5583 10.4457 15.0253C10.9787 14.4783 10.9787 13.5763 10.3907 12.9883L8.3947 10.9923C7.8067 10.4043 6.9177 10.4043 6.3707 10.9373C5.8247 11.4843 5.8247 12.3863 6.4117 12.9743ZM24.9647 22.0663C24.9647 17.9513 21.6157 14.6013 17.5277 14.6013C13.4257 14.6013 10.0767 17.9513 10.0767 22.0663C10.0767 22.7503 10.1997 23.4203 10.4317 24.0353H24.6097C24.8417 23.4203 24.9647 22.7503 24.9647 22.0663ZM3.2127 22.6543L6.0427 22.6683C6.8767 22.6683 7.5197 22.0393 7.5197 21.2593C7.5057 20.4943 6.8637 19.8653 6.0427 19.8653H3.2127C2.3927 19.8653 1.7497 20.4943 1.7497 21.2593C1.7497 22.0393 2.4067 22.6543 3.2127 22.6543ZM28.9977 22.6543H31.8277C32.6617 22.6543 33.2907 22.0393 33.2907 21.2593C33.2907 20.4943 32.6617 19.8653 31.8277 19.8653H28.9977C28.1777 19.8653 27.5217 20.4943 27.5217 21.2593C27.5347 22.0393 28.1917 22.6543 28.9977 22.6543ZM1.6547 29.3123H33.3867C34.3027 29.3123 35.0407 28.5473 35.0407 27.6723C35.0407 26.7693 34.3167 26.0313 33.3867 26.0313H1.6547C0.7387 26.0313 -0.0003 26.7833 -0.0003 27.6723C-0.0003 28.5333 0.7517 29.3123 1.6547 29.3123Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.041015625 29.72265625"
          className={className}
        >
          <path
            d="              M17.5277 11.7714C18.3617 11.7714 19.0587 11.0334 19.0587 10.1714V6.1794L18.7577 3.7464L19.6187 5.0584L20.7407 6.3434C21.0547 6.7264 21.4377 7.0274 21.9847 7.0274C22.7907 7.0274 23.4067 6.3984 23.4067 5.6324C23.4067 5.1404 23.1187 4.7164 22.7367 4.3474L18.6897 0.5194C18.2927 0.1504 17.9647 0.0004 17.5277 0.0004C17.0767 0.0004 16.7477 0.1504 16.3517 0.5194L12.3047 4.3474C11.9217 4.7164 11.6347 5.1404 11.6347 5.6324C11.6347 6.3984 12.2497 7.0274 13.0567 7.0274C13.6037 7.0274 13.9867 6.7264 14.3007 6.3434L15.4767 5.0034L16.2837 3.7464L15.9827 6.1794V10.1714C15.9827 11.0334 16.6797 11.7714 17.5277 11.7714ZM24.6097 15.0804C25.2107 15.6814 26.2087 15.6544 26.8377 15.0254L28.6427 13.2484C29.2717 12.6194 29.2717 11.6214 28.6697 11.0194C28.0817 10.4184 27.0837 10.4314 26.4417 11.0604L24.6507 12.8514C24.0217 13.4664 24.0077 14.4784 24.6097 15.0804ZM8.2027 15.0254C8.8317 15.6544 9.8437 15.6814 10.4317 15.0804C11.0337 14.4784 11.0197 13.4664 10.3907 12.8514L8.5997 11.0604C7.9567 10.4314 6.9727 10.4184 6.3707 11.0194C5.7697 11.6074 5.7697 12.6194 6.3987 13.2484ZM24.9787 22.1214C24.9787 17.9924 21.6287 14.6424 17.5277 14.6424C13.4117 14.6424 10.0627 17.9924 10.0627 22.1214C10.0627 22.6544 10.1307 23.1874 10.2817 23.6664H24.7597C24.9097 23.1874 24.9787 22.6544 24.9787 22.1214ZM3.3497 22.6274L5.8927 22.6404C6.7817 22.6404 7.5057 21.9294 7.4927 21.0824C7.4927 20.2344 6.7817 19.5374 5.8927 19.5374H3.3497C2.4607 19.5374 1.7497 20.2344 1.7497 21.0824C1.7497 21.9294 2.4747 22.6274 3.3497 22.6274ZM29.1487 22.6274H31.6917C32.5937 22.6274 33.2907 21.9294 33.2907 21.0824C33.2907 20.2344 32.5937 19.5374 31.6917 19.5374H29.1487C28.2737 19.5374 27.5347 20.2344 27.5487 21.0824C27.5487 21.9294 28.2867 22.6274 29.1487 22.6274ZM1.9007 29.7224H33.1407C34.1937 29.7224 35.0407 28.8064 35.0407 27.7954C35.0407 26.7424 34.2067 25.8674 33.1407 25.8674H1.9007C0.8477 25.8674 -0.0003 26.7694 -0.0003 27.7954C-0.0003 28.7934 0.8477 29.7224 1.9007 29.7224Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.041015625 27.794921875"
          className={className}
        >
          <path
            d="              M17.5277 10.6914C17.9787 10.6914 18.3747 10.2814 18.3747 9.7754V4.4164L18.2517 2.2014L19.4417 3.5004L21.3687 5.4684C21.5337 5.6194 21.7387 5.7144 21.9437 5.7144C22.3677 5.7144 22.6817 5.4144 22.6817 4.9764C22.6817 4.7444 22.5857 4.5664 22.3947 4.3884L18.1017 0.2874C17.8827 0.0824 17.7187 0.0004 17.5277 0.0004C17.3227 0.0004 17.1587 0.0824 16.9397 0.2874L12.6467 4.3884C12.4547 4.5664 12.3597 4.7444 12.3597 4.9764C12.3597 5.4144 12.6737 5.7144 13.0977 5.7144C13.3027 5.7144 13.5077 5.6194 13.6717 5.4684L15.6957 3.4184L16.7887 2.2014L16.6657 4.4164V9.7754C16.6657 10.2814 17.0627 10.6914 17.5277 10.6914ZM24.5687 14.5194C24.8967 14.8474 25.4567 14.8474 25.8127 14.4784L28.6287 11.6624C29.0117 11.2934 28.9977 10.7464 28.6697 10.4184C28.3557 10.0894 27.8227 10.0894 27.4397 10.4594L24.6227 13.2754C24.2537 13.6444 24.2407 14.2054 24.5687 14.5194ZM9.2287 14.4784C9.5837 14.8474 10.1447 14.8474 10.4727 14.5194C10.7867 14.1914 10.7867 13.6444 10.4177 13.2754L7.6017 10.4594C7.2187 10.0894 6.6857 10.1034 6.3707 10.4184C6.0297 10.7464 6.0297 11.2934 6.4117 11.6624ZM24.7867 21.5604C24.7867 17.5824 21.5057 14.2734 17.5277 14.2734C13.5347 14.2734 10.2537 17.5824 10.2537 21.5604C10.2537 22.6954 10.5407 23.7614 11.0337 24.7054H24.0077C24.4997 23.7614 24.7867 22.6954 24.7867 21.5604ZM2.6527 22.0664H6.6307C7.1777 22.0664 7.5607 21.6834 7.5607 21.2184C7.5467 20.7674 7.1637 20.3844 6.6307 20.3844H2.6527C2.1327 20.3844 1.7497 20.7674 1.7497 21.2184C1.7497 21.6834 2.1327 22.0664 2.6527 22.0664ZM28.4097 22.0664H32.3887C32.9087 22.0664 33.2907 21.6834 33.2907 21.2184C33.2907 20.7674 32.9087 20.3844 32.3887 20.3844H28.4097C27.8907 20.3844 27.4807 20.7674 27.4807 21.2184C27.4937 21.6834 27.8907 22.0664 28.4097 22.0664ZM0.9157 27.7954H34.1247C34.6177 27.7954 35.0407 27.4124 35.0407 26.9614C35.0407 26.4964 34.6177 26.1134 34.1247 26.1134H0.9157C0.4237 26.1134 -0.0003 26.4964 -0.0003 26.9614C-0.0003 27.4124 0.4237 27.7954 0.9157 27.7954Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.041015625 28.8203125"
          className={className}
        >
          <path
            d="              M17.5277 11.3063C18.1837 11.3063 18.7307 10.7183 18.7307 9.9942V5.1403L18.5387 2.9943L19.5097 4.1973L21.0817 5.8103C21.3147 6.0562 21.6017 6.2203 21.9297 6.2203C22.5447 6.2203 22.9827 5.7832 22.9827 5.1953C22.9827 4.8532 22.8457 4.5933 22.5727 4.3343L18.3617 0.3962C18.0467 0.1092 17.8147 0.0003 17.5277 0.0003C17.2267 0.0003 16.9937 0.1092 16.6797 0.3962L12.4687 4.3343C12.1957 4.5933 12.0587 4.8532 12.0587 5.1953C12.0587 5.7832 12.4957 6.2203 13.1117 6.2203C13.4397 6.2203 13.7267 6.0562 13.9587 5.8103L15.6407 4.0742L16.5017 2.9943L16.3107 5.1403V9.9942C16.3107 10.7183 16.8577 11.3063 17.5277 11.3063ZM24.5817 14.9573C25.0607 15.4223 25.8397 15.4083 26.3727 14.8753L28.6157 12.6463C29.1487 12.1133 29.1347 11.3343 28.6697 10.8553C28.2047 10.3903 27.4257 10.3903 26.8927 10.9243L24.6507 13.1663C24.1177 13.6853 24.1037 14.4923 24.5817 14.9573ZM8.6677 14.8753C9.2017 15.4083 9.9937 15.4223 10.4587 14.9573C10.9237 14.4783 10.9237 13.6853 10.3907 13.1663L8.1487 10.9243C7.6157 10.3903 6.8357 10.3903 6.3707 10.8553C5.8927 11.3203 5.8927 12.1133 6.4257 12.6463ZM24.9377 21.9843C24.9377 17.9243 21.5877 14.5473 17.5277 14.5473C13.4527 14.5473 10.1037 17.9243 10.1037 21.9843C10.1037 22.8733 10.2817 23.7203 10.6097 24.4862H24.4317C24.7597 23.7203 24.9377 22.8733 24.9377 21.9843ZM3.0487 22.6953L6.2207 22.7093C6.9727 22.7093 7.5467 22.1623 7.5467 21.4922C7.5337 20.8223 6.9727 20.2753 6.2207 20.2753H3.0487C2.3107 20.2753 1.7497 20.8223 1.7497 21.4922C1.7497 22.1623 2.3107 22.6953 3.0487 22.6953ZM28.8207 22.6953H31.9927C32.7437 22.6953 33.2907 22.1623 33.2907 21.4922C33.2907 20.8223 32.7437 20.2753 31.9927 20.2753H28.8207C28.0687 20.2753 27.4937 20.8223 27.4937 21.4922C27.5077 22.1623 28.0817 22.6953 28.8207 22.6953ZM1.3537 28.8203H33.6877C34.4257 28.8203 35.0407 28.2193 35.0407 27.5213C35.0407 26.8103 34.4257 26.2223 33.6877 26.2223H1.3537C0.6157 26.2223 -0.0003 26.8243 -0.0003 27.5213C-0.0003 28.2193 0.6157 28.8203 1.3537 28.8203Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.041015625 28.533203125"
          className={className}
        >
          <path
            d="              M17.5277 11.1565C18.1287 11.1565 18.6347 10.6235 18.6347 9.9535V4.8265L18.4707 2.7615L19.4827 3.9235L21.1917 5.6605C21.3967 5.8515 21.6567 5.9745 21.9157 5.9745C22.4627 5.9745 22.8597 5.5915 22.8597 5.0585C22.8597 4.7715 22.7637 4.5525 22.5317 4.3335L18.2657 0.3555C17.9787 0.0955 17.7737 -0.0005 17.5277 -0.0005C17.2677 -0.0005 17.0627 0.0955 16.7757 0.3555L12.5097 4.3335C12.2777 4.5525 12.1817 4.7715 12.1817 5.0585C12.1817 5.5915 12.5777 5.9745 13.1247 5.9745C13.3847 5.9745 13.6447 5.8515 13.8497 5.6605L15.6957 3.7875L16.5707 2.7615L16.4067 4.8265V9.9535C16.4067 10.6235 16.9117 11.1565 17.5277 11.1565ZM24.5687 14.9155C25.0057 15.3395 25.7307 15.3395 26.2227 14.8335L28.6017 12.4555C29.1207 11.9495 29.0937 11.2515 28.6697 10.8145C28.2457 10.3765 27.5347 10.3765 27.0297 10.8825L24.6507 13.2615C24.1447 13.7535 24.1307 14.4925 24.5687 14.9155ZM8.8187 14.8335C9.3107 15.3395 10.0487 15.3535 10.4727 14.9155C10.8967 14.4785 10.8967 13.7535 10.3907 13.2615L8.0117 10.8825C7.5057 10.3765 6.8087 10.3905 6.3707 10.8145C5.9337 11.2385 5.9197 11.9495 6.4397 12.4555ZM24.9237 21.9435C24.9237 17.9105 21.5747 14.5335 17.5277 14.5335C13.4667 14.5335 10.1177 17.9105 10.1177 21.9435C10.1177 22.9415 10.3227 23.8985 10.7047 24.7465H24.3357C24.7187 23.8985 24.9237 22.9415 24.9237 21.9435ZM2.9667 22.7225H6.3297C7.0407 22.7225 7.5747 22.2305 7.5607 21.6155C7.5467 20.9995 7.0277 20.5075 6.3297 20.5075H2.9667C2.2557 20.5075 1.7497 20.9995 1.7497 21.6155C1.7497 22.2305 2.2557 22.7225 2.9667 22.7225ZM28.7107 22.7225H32.0747C32.7847 22.7225 33.2907 22.2305 33.2907 21.6155C33.2907 20.9995 32.7847 20.5075 32.0747 20.5075H28.7107C28.0137 20.5075 27.4667 20.9995 27.4807 21.6155C27.4937 22.2305 28.0137 22.7225 28.7107 22.7225ZM1.1897 28.5335H33.8517C34.4937 28.5335 35.0407 28.0405 35.0407 27.4395C35.0407 26.8375 34.4937 26.3455 33.8517 26.3455H1.1897C0.5467 26.3455 -0.0003 26.8375 -0.0003 27.4395C-0.0003 28.0405 0.5467 28.5335 1.1897 28.5335Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.041015625 29.0390625"
          className={className}
        >
          <path
            d="              M17.5277 11.4156C18.2247 11.4156 18.8127 10.8006 18.8127 10.0486V5.3866L18.5937 3.1716L19.5367 4.4026L20.9997 5.9476C21.2457 6.2206 21.5607 6.4116 21.9437 6.4116C22.5997 6.4116 23.0777 5.9336 23.0777 5.2906C23.0777 4.9216 22.9137 4.6206 22.6137 4.3336L18.4437 0.4236C18.1017 0.1226 17.8557 -0.0004 17.5277 -0.0004C17.1857 -0.0004 16.9397 0.1226 16.5977 0.4236L12.4277 4.3336C12.1267 4.6206 11.9627 4.9216 11.9627 5.2906C11.9627 5.9336 12.4417 6.4116 13.0977 6.4116C13.4807 6.4116 13.7947 6.2206 14.0407 5.9476L15.5997 4.3066L16.4477 3.1716L16.2287 5.3866V10.0486C16.2287 10.8006 16.8167 11.4156 17.5277 11.4156ZM24.5817 14.9846C25.0877 15.4766 25.9357 15.4766 26.4827 14.9156L28.6157 12.7836C29.1757 12.2366 29.1757 11.4026 28.6697 10.8966C28.1777 10.3906 27.3437 10.3906 26.7837 10.9516L24.6507 13.0836C24.0897 13.6446 24.0767 14.4926 24.5817 14.9846ZM8.5587 14.9156C9.1057 15.4766 9.9667 15.4906 10.4587 14.9846C10.9517 14.4786 10.9517 13.6446 10.3907 13.0836L8.2577 10.9516C7.6977 10.3906 6.8767 10.4046 6.3707 10.8966C5.8657 11.3886 5.8657 12.2366 6.4257 12.7836ZM24.9517 22.0256C24.9517 17.9376 21.6017 14.5746 17.5277 14.5746C13.4397 14.5746 10.0897 17.9376 10.0897 22.0256C10.0897 22.8186 10.2537 23.5976 10.5277 24.2946H24.5137C24.8007 23.5976 24.9517 22.8186 24.9517 22.0256ZM3.1177 22.6816L6.1387 22.6956C6.9317 22.6956 7.5467 22.1076 7.5337 21.3966C7.5197 20.6856 6.9317 20.1116 6.1387 20.1116H3.1177C2.3377 20.1116 1.7497 20.6856 1.7497 21.3966C1.7497 22.1076 2.3517 22.6816 3.1177 22.6816ZM28.9027 22.6816H31.9237C32.7027 22.6816 33.2907 22.1076 33.2907 21.3966C33.2907 20.6856 32.7027 20.1116 31.9237 20.1116H28.9027C28.1227 20.1116 27.4937 20.6856 27.5077 21.3966C27.5217 22.1076 28.1227 22.6816 28.9027 22.6816ZM1.4907 29.0386H33.5507C34.3707 29.0386 35.0407 28.3696 35.0407 27.5896C35.0407 26.7966 34.3847 26.1406 33.5507 26.1406H1.4907C0.6697 26.1406 -0.0003 26.8106 -0.0003 27.5896C-0.0003 28.3556 0.6697 29.0386 1.4907 29.0386Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.041015625 26.796875"
          className={className}
        >
          <path
            d="              M17.5277 10.0762C17.8007 10.0762 18.0337 9.8442 18.0337 9.5562V3.8552L17.9517 1.4352L19.3867 2.9392L21.6157 5.2092C21.7247 5.3182 21.8477 5.3592 21.9707 5.3592C22.2437 5.3592 22.4497 5.1682 22.4497 4.8812C22.4497 4.7172 22.3677 4.5802 22.2307 4.4432L17.8827 0.1782C17.7737 0.0682 17.6367 0.0002 17.5277 0.0002C17.4047 0.0002 17.2677 0.0682 17.1587 0.1782L12.8107 4.4432C12.6737 4.5802 12.5917 4.7172 12.5917 4.8812C12.5917 5.1682 12.7967 5.3592 13.0707 5.3592C13.1937 5.3592 13.3167 5.3182 13.4257 5.2092L15.6817 2.9122L17.0897 1.4352L17.0077 3.8552V9.5562C17.0077 9.8442 17.2407 10.0762 17.5277 10.0762ZM24.5687 14.0002C24.7597 14.1912 25.0877 14.1912 25.2797 14.0002L28.6697 10.6092C28.8887 10.4042 28.8747 10.0902 28.6697 9.8982C28.5057 9.7072 28.1777 9.6932 27.9727 9.8982L24.5687 13.2892C24.3907 13.4802 24.3767 13.8082 24.5687 14.0002ZM9.7617 14.0002C9.9527 14.1912 10.2817 14.1912 10.4727 14.0002C10.6507 13.8082 10.6507 13.4802 10.4727 13.2892L7.0687 9.8982C6.8637 9.6932 6.5487 9.7202 6.3707 9.8982C6.1657 10.0902 6.1527 10.4042 6.3707 10.6092ZM24.6097 21.0272C24.6097 17.1442 21.4237 13.9452 17.5277 13.9452C13.6177 13.9452 10.4317 17.1442 10.4317 21.0272C10.4317 22.3532 10.8147 23.5972 11.4707 24.6372H23.5707C24.2267 23.5972 24.6097 22.3532 24.6097 21.0272ZM2.2557 21.1912H7.0547C7.3557 21.1912 7.5607 20.9722 7.5607 20.6992C7.5467 20.4392 7.3417 20.2072 7.0547 20.2072H2.2557C1.9827 20.2072 1.7497 20.4392 1.7497 20.6992C1.7497 20.9722 1.9827 21.1912 2.2557 21.1912ZM27.9867 21.1912H32.7847C33.0727 21.1912 33.2907 20.9722 33.2907 20.6992C33.2907 20.4392 33.0727 20.2072 32.7847 20.2072H27.9867C27.7267 20.2072 27.4807 20.4392 27.4807 20.6992C27.4937 20.9722 27.7267 21.1912 27.9867 21.1912ZM0.5607 26.7972H34.4807C34.7947 26.7972 35.0407 26.5922 35.0407 26.3042C35.0407 26.0312 34.7947 25.8122 34.4807 25.8122H0.5607C0.2457 25.8122 -0.0003 26.0312 -0.0003 26.3042C-0.0003 26.5922 0.2457 26.7972 0.5607 26.7972Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.041015625 26.291015625"
          className={className}
        >
          <path
            d="              M17.5277 9.7614C17.7047 9.7614 17.8557 9.6114 17.8557 9.4334V3.5684L17.8007 1.0524L19.3727 2.6384L21.7387 5.0584C21.8207 5.1544 21.9027 5.1814 21.9847 5.1814C22.1757 5.1814 22.3267 5.0314 22.3267 4.8264C22.3267 4.6894 22.2577 4.5804 22.1347 4.4704L17.7737 0.1094C17.7047 0.0414 17.6097 0.0004 17.5277 0.0004C17.4317 0.0004 17.3357 0.0414 17.2677 0.1094L12.9067 4.4704C12.7837 4.5804 12.7147 4.6894 12.7147 4.8264C12.7147 5.0314 12.8657 5.1814 13.0567 5.1814C13.1387 5.1814 13.2207 5.1544 13.3027 5.0584L15.6677 2.6384L17.2407 1.0524L17.1857 3.5684V9.4334C17.1857 9.6114 17.3357 9.7614 17.5277 9.7614ZM10.0347 13.7404C10.1307 13.8354 10.3497 13.8354 10.4727 13.7264C10.5817 13.6034 10.5817 13.3844 10.4867 13.2894L6.7947 9.6114C6.6717 9.4884 6.4667 9.5024 6.3707 9.6254C6.2347 9.7344 6.2207 9.9394 6.3437 10.0484ZM24.5687 13.7264C24.6917 13.8354 24.9097 13.8354 25.0057 13.7404L28.6977 10.0484C28.8207 9.9394 28.8067 9.7344 28.6697 9.6254C28.5747 9.5024 28.3687 9.4884 28.2457 9.6114L24.5547 13.2894C24.4587 13.3844 24.4587 13.6034 24.5687 13.7264ZM24.5137 20.7534C24.5137 16.9254 21.3687 13.7674 17.5277 13.7674C13.6717 13.7674 10.5277 16.9254 10.5277 20.7534C10.5277 22.1754 10.9517 23.4884 11.6897 24.5954H23.3517C24.0897 23.4884 24.5137 22.1754 24.5137 20.7534ZM2.0367 20.7404H7.2597C7.4377 20.7404 7.5607 20.5894 7.5607 20.4254C7.5607 20.2614 7.4237 20.1114 7.2597 20.1114H2.0367C1.9007 20.1114 1.7497 20.2614 1.7497 20.4254C1.7497 20.5894 1.9007 20.7404 2.0367 20.7404ZM27.7817 20.7404H33.0037C33.1677 20.7404 33.2907 20.5894 33.2907 20.4254C33.2907 20.2614 33.1677 20.1114 33.0037 20.1114H27.7817C27.6307 20.1114 27.4807 20.2614 27.4807 20.4254C27.4807 20.5894 27.6307 20.7404 27.7817 20.7404ZM0.3687 26.2914H34.6717C34.8767 26.2914 35.0407 26.1544 35.0407 25.9764C35.0407 25.7854 34.8767 25.6484 34.6717 25.6484H0.3687C0.1637 25.6484 -0.0003 25.7854 -0.0003 25.9764C-0.0003 26.1544 0.1637 26.2914 0.3687 26.2914Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
