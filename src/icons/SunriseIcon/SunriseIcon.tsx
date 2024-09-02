import { IconProps } from "../../types"

export default function SunriseIconIcon({
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
            d="              M17.5277 11.9628C18.4437 11.9628 19.1957 11.1838 19.1957 10.2398L19.1817 6.6038L18.8397 4.0608L19.6597 5.4138L20.6037 6.5628C20.9587 7.0138 21.3687 7.3558 21.9977 7.3558C22.9007 7.3558 23.5707 6.6578 23.5707 5.8108C23.5707 5.2638 23.2287 4.7718 22.7907 4.3608L18.8267 0.5738C18.4027 0.1638 18.0197 -0.0002 17.5277 -0.0002C17.0217 -0.0002 16.6527 0.1638 16.2147 0.5738L12.2497 4.3608C11.8127 4.7718 11.4707 5.2638 11.4707 5.8108C11.4707 6.6578 12.1407 7.3558 13.0427 7.3558C13.6717 7.3558 14.0817 7.0138 14.4377 6.5628L15.4087 5.4008L16.2017 4.0608L15.8597 6.6038L15.8457 10.2398C15.8457 11.1838 16.5977 11.9628 17.5277 11.9628ZM24.6227 15.1898C25.2657 15.8458 26.3597 15.8048 27.0297 15.1488L28.6427 13.5628C29.3267 12.8788 29.3267 11.7848 28.6697 11.1428C28.0277 10.4858 26.9477 10.4998 26.2637 11.1838L24.6367 12.7828C23.9807 13.4398 23.9667 14.5468 24.6227 15.1898ZM10.4177 15.1898C11.0747 14.5328 11.0607 13.4398 10.4047 12.7828L8.7777 11.1838C8.0937 10.4998 7.0277 10.4858 6.3707 11.1428C5.7147 11.7848 5.7147 12.8788 6.3987 13.5628L8.0117 15.1488C8.6817 15.8048 9.7757 15.8458 10.4177 15.1898ZM2.1187 30.1058H32.9217C34.1117 30.1058 35.0407 29.0668 35.0407 27.9178C35.0407 26.7148 34.1247 25.7308 32.9217 25.7308H24.1447C24.7867 24.6918 25.0607 23.5018 25.0607 22.2848C25.0607 18.0328 21.6837 14.6838 17.5277 14.6838C13.3577 14.6838 9.9807 18.0328 9.9807 22.2848C9.9807 23.5018 10.2537 24.6918 10.8967 25.7308H2.1187C0.9297 25.7308 -0.0003 26.7558 -0.0003 27.9178C-0.0003 29.0258 0.9437 30.1058 2.1187 30.1058ZM13.7407 22.2988C13.7407 20.1248 15.4497 18.4708 17.5277 18.4708C19.5917 18.4708 21.3007 20.1248 21.3007 22.2988C21.3007 23.7068 20.5897 24.9788 19.6877 25.7308H15.3537C14.4517 24.9788 13.7407 23.7068 13.7407 22.2988ZM3.4727 22.6538H5.7557C6.6997 22.6538 7.4787 21.9028 7.4787 20.9858C7.4787 20.0568 6.6997 19.3048 5.7557 19.3048H3.4727C2.5297 19.3048 1.7497 20.0568 1.7497 20.9858C1.7497 21.9028 2.5427 22.6538 3.4727 22.6538ZM29.2847 22.6538H31.5687C32.5257 22.6538 33.2907 21.9028 33.2907 20.9858C33.2907 20.0568 32.5257 19.3048 31.5687 19.3048H29.2847C28.3557 19.3048 27.5627 20.0568 27.5627 20.9858C27.5627 21.9028 28.3687 22.6538 29.2847 22.6538Z"
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
            d="              M17.5277 11.5523C18.2797 11.5523 18.9217 10.8963 18.9217 10.0893L18.9087 5.7143L18.6617 3.4043L19.5647 4.6623L20.8907 6.0973C21.1777 6.4253 21.5057 6.6583 21.9567 6.6583C22.6817 6.6583 23.2147 6.1113 23.2147 5.4273C23.2147 5.0043 22.9957 4.6623 22.6547 4.3343L18.5387 0.4643C18.1837 0.1233 17.8967 0.0003 17.5277 0.0003C17.1447 0.0003 16.8577 0.1233 16.5017 0.4643L12.3867 4.3343C12.0447 4.6623 11.8267 5.0043 11.8267 5.4273C11.8267 6.1113 12.3597 6.6583 13.0837 6.6583C13.5347 6.6583 13.8637 6.4253 14.1507 6.0973L15.5447 4.5933L16.3787 3.4043L16.1327 5.7143L16.1187 10.0893C16.1187 10.8963 16.7617 11.5523 17.5277 11.5523ZM24.5957 15.0663C25.1427 15.5993 26.0447 15.5863 26.6187 15.0113L28.6287 13.0153C29.2167 12.4273 29.2027 11.5393 28.6697 10.9923C28.1367 10.4453 27.2347 10.4453 26.6467 11.0473L24.6507 13.0433C24.0627 13.6173 24.0487 14.5333 24.5957 15.0663ZM10.4457 15.0663C10.9787 14.5193 10.9787 13.6173 10.3907 13.0433L8.3947 11.0473C7.8067 10.4453 6.9177 10.4593 6.3707 10.9923C5.8247 11.5253 5.8247 12.4273 6.4117 13.0153L8.4217 15.0113C8.9957 15.5863 9.9117 15.6133 10.4457 15.0663ZM1.6547 29.3123H33.3867C34.3027 29.3123 35.0407 28.5473 35.0407 27.6723C35.0407 26.7693 34.3167 26.0313 33.3867 26.0313H23.8707C24.6367 24.8963 25.0337 23.5563 25.0337 22.1343C25.0337 17.9643 21.6427 14.5883 17.5277 14.5883C13.3987 14.5883 10.0077 17.9643 10.0077 22.1343C10.0077 23.5563 10.4047 24.8963 11.1837 26.0313H1.6547C0.7387 26.0313 -0.0003 26.7833 -0.0003 27.6723C-0.0003 28.5333 0.7517 29.3123 1.6547 29.3123ZM12.9887 22.1483C12.9887 19.6053 15.0387 17.5953 17.5277 17.5953C20.0017 17.5953 22.0527 19.6053 22.0527 22.1483C22.0527 23.7483 21.2327 25.1833 20.0837 26.0313H14.9567C13.8087 25.1833 12.9887 23.7483 12.9887 22.1483ZM3.2127 22.7093H6.0427C6.8767 22.7093 7.5197 22.0803 7.5197 21.3143C7.5057 20.5483 6.8637 19.9203 6.0427 19.9203H3.2127C2.3927 19.9203 1.7497 20.5483 1.7497 21.3143C1.7497 22.0803 2.4067 22.7093 3.2127 22.7093ZM28.9977 22.7093H31.8277C32.6617 22.7093 33.2907 22.0803 33.2907 21.3143C33.2907 20.5483 32.6617 19.9203 31.8277 19.9203H28.9977C28.1777 19.9203 27.5217 20.5483 27.5217 21.3143C27.5347 22.0803 28.1917 22.7093 28.9977 22.7093Z"
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
            d="              M17.5277 11.7714C18.3617 11.7714 19.0587 11.0334 19.0587 10.1714V6.1794L18.7577 3.7464L19.6187 5.0584L20.7407 6.3434C21.0547 6.7264 21.4377 7.0274 21.9847 7.0274C22.7907 7.0274 23.4067 6.3984 23.4067 5.6324C23.4067 5.1404 23.1187 4.7164 22.7367 4.3474L18.6897 0.5194C18.2927 0.1504 17.9647 0.0004 17.5277 0.0004C17.0767 0.0004 16.7477 0.1504 16.3517 0.5194L12.3047 4.3474C11.9217 4.7164 11.6347 5.1404 11.6347 5.6324C11.6347 6.3984 12.2497 7.0274 13.0567 7.0274C13.6037 7.0274 13.9867 6.7264 14.3007 6.3434L15.4767 5.0034L16.2837 3.7464L15.9827 6.1794V10.1714C15.9827 11.0334 16.6797 11.7714 17.5277 11.7714ZM24.6097 15.1344C25.2107 15.7224 26.2087 15.6954 26.8377 15.0804L28.6427 13.3024C29.2717 12.6604 29.2717 11.6624 28.6697 11.0604C28.0817 10.4594 27.0837 10.4724 26.4417 11.1154L24.6507 12.9064C24.0217 13.5214 24.0077 14.5334 24.6097 15.1344ZM10.4317 15.1344C11.0337 14.5334 11.0197 13.5214 10.3907 12.9064L8.5997 11.1154C7.9567 10.4724 6.9727 10.4724 6.3707 11.0604C5.7697 11.6624 5.7697 12.6604 6.3987 13.3024L8.2027 15.0804C8.8317 15.6954 9.8437 15.7224 10.4317 15.1344ZM1.9007 29.7224H33.1407C34.1937 29.7224 35.0407 28.8064 35.0407 27.7954C35.0407 26.7424 34.2067 25.8674 33.1407 25.8674H24.0217C24.7187 24.7874 25.0467 23.5154 25.0467 22.2164C25.0467 18.0054 21.6697 14.6284 17.5277 14.6284C13.3707 14.6284 9.9937 18.0054 9.9937 22.2164C9.9937 23.5154 10.3227 24.7874 11.0337 25.8674H1.9007C0.8477 25.8674 -0.0003 26.7694 -0.0003 27.7954C-0.0003 28.7934 0.8477 29.7224 1.9007 29.7224ZM13.3847 22.2304C13.3847 19.8784 15.2577 18.0464 17.5277 18.0464C19.7837 18.0464 21.6567 19.8784 21.6567 22.2304C21.6567 23.7204 20.8907 25.0744 19.8787 25.8674H15.1617C14.1507 25.0744 13.3847 23.7204 13.3847 22.2304ZM3.3497 22.6814H5.8927C6.7817 22.6814 7.5057 21.9844 7.4927 21.1364C7.4927 20.2894 6.7817 19.5914 5.8927 19.5914H3.3497C2.4607 19.5914 1.7497 20.2894 1.7497 21.1364C1.7497 21.9844 2.4747 22.6814 3.3497 22.6814ZM29.1487 22.6814H31.6917C32.5937 22.6814 33.2907 21.9844 33.2907 21.1364C33.2907 20.2894 32.5937 19.5914 31.6917 19.5914H29.1487C28.2737 19.5914 27.5347 20.2894 27.5487 21.1364C27.5487 21.9844 28.2867 22.6814 29.1487 22.6814Z"
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
            d="              M17.5277 10.6914C17.9787 10.6914 18.3747 10.2814 18.3747 9.7754V4.4164L18.2517 2.2014L19.4417 3.5004L21.3687 5.4684C21.5337 5.6194 21.7387 5.7144 21.9437 5.7144C22.3677 5.7144 22.6817 5.4144 22.6817 4.9764C22.6817 4.7444 22.5857 4.5664 22.3947 4.3884L18.1017 0.2874C17.8827 0.0824 17.7187 0.0004 17.5277 0.0004C17.3227 0.0004 17.1587 0.0824 16.9397 0.2874L12.6467 4.3884C12.4547 4.5664 12.3597 4.7444 12.3597 4.9764C12.3597 5.4144 12.6737 5.7144 13.0977 5.7144C13.3027 5.7144 13.5077 5.6194 13.6717 5.4684L15.6957 3.4184L16.7887 2.2014L16.6657 4.4164V9.7754C16.6657 10.2814 17.0627 10.6914 17.5277 10.6914ZM24.5687 14.5464C24.8967 14.8754 25.4567 14.8754 25.8127 14.5054L28.6287 11.6894C29.0117 11.3064 28.9977 10.7874 28.6697 10.4454C28.3557 10.1174 27.8227 10.1034 27.4397 10.4864L24.6227 13.3024C24.2537 13.6714 24.2407 14.2324 24.5687 14.5464ZM10.4727 14.5464C10.7867 14.2184 10.7867 13.6714 10.4177 13.3024L7.6017 10.4864C7.2187 10.1034 6.6997 10.1304 6.3707 10.4454C6.0297 10.7734 6.0297 11.3064 6.4117 11.6894L9.2287 14.5054C9.5837 14.8754 10.1447 14.8754 10.4727 14.5464ZM0.9157 27.7954H34.1247C34.6177 27.7954 35.0407 27.4124 35.0407 26.9614C35.0407 26.4964 34.6177 26.1134 34.1247 26.1134H23.2557C24.2537 24.8824 24.8557 23.3104 24.8557 21.6014C24.8557 17.5684 21.5337 14.2594 17.5277 14.2594C13.5077 14.2594 10.1857 17.5684 10.1857 21.6014C10.1857 23.3104 10.7867 24.8824 11.7847 26.1134H0.9157C0.4237 26.1134 -0.0003 26.4964 -0.0003 26.9614C-0.0003 27.4124 0.4237 27.7954 0.9157 27.7954ZM11.8677 21.6014C11.8677 18.4844 14.4097 15.9414 17.5277 15.9414C20.6307 15.9414 23.1737 18.4844 23.1737 21.6014C23.1737 23.4614 22.2437 25.1154 20.8497 26.1134H14.1917C12.7967 25.1154 11.8677 23.4614 11.8677 21.6014ZM2.6527 22.0934H6.6307C7.1777 22.0934 7.5607 21.7114 7.5607 21.2464C7.5467 20.7954 7.1637 20.4124 6.6307 20.4124H2.6527C2.1327 20.4124 1.7497 20.7954 1.7497 21.2464C1.7497 21.7114 2.1327 22.0934 2.6527 22.0934ZM28.4097 22.0934H32.3887C32.9087 22.0934 33.2907 21.7114 33.2907 21.2464C33.2907 20.7954 32.9087 20.4124 32.3887 20.4124H28.4097C27.8907 20.4124 27.4807 20.7954 27.4807 21.2464C27.4937 21.7114 27.8907 22.0934 28.4097 22.0934Z"
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
            d="              M17.5277 11.3063C18.1837 11.3063 18.7307 10.7183 18.7307 9.9942V5.1403L18.5387 2.9943L19.5097 4.1973L21.0817 5.8103C21.3147 6.0562 21.6017 6.2203 21.9297 6.2203C22.5447 6.2203 22.9827 5.7832 22.9827 5.1953C22.9827 4.8532 22.8457 4.5933 22.5727 4.3343L18.3617 0.3962C18.0467 0.1092 17.8147 0.0003 17.5277 0.0003C17.2267 0.0003 16.9937 0.1092 16.6797 0.3962L12.4687 4.3343C12.1957 4.5933 12.0587 4.8532 12.0587 5.1953C12.0587 5.7832 12.4957 6.2203 13.1117 6.2203C13.4397 6.2203 13.7267 6.0562 13.9587 5.8103L15.6407 4.0742L16.5017 2.9943L16.3107 5.1403V9.9942C16.3107 10.7183 16.8577 11.3063 17.5277 11.3063ZM24.5817 14.9983C25.0607 15.4633 25.8397 15.4493 26.3727 14.9293L28.6157 12.6873C29.1487 12.1403 29.1347 11.3753 28.6697 10.8963C28.2047 10.4313 27.4257 10.4183 26.8927 10.9653L24.6507 13.2073C24.1177 13.7403 24.1037 14.5333 24.5817 14.9983ZM10.4587 14.9983C10.9237 14.5193 10.9237 13.7403 10.3907 13.2073L8.1487 10.9653C7.6157 10.4183 6.8497 10.4453 6.3707 10.8963C5.8927 11.3753 5.8927 12.1403 6.4257 12.6873L8.6677 14.9293C9.2017 15.4493 9.9937 15.4763 10.4587 14.9983ZM1.3537 28.8203H33.6877C34.4257 28.8203 35.0407 28.2193 35.0407 27.5213C35.0407 26.8103 34.4257 26.2223 33.6877 26.2223H23.6797C24.5277 25.0472 25.0057 23.5973 25.0057 22.0523C25.0057 17.9243 21.6157 14.5473 17.5277 14.5473C13.4257 14.5473 10.0347 17.9243 10.0347 22.0523C10.0347 23.5973 10.5137 25.0472 11.3617 26.2223H1.3537C0.6157 26.2223 -0.0003 26.8243 -0.0003 27.5213C-0.0003 28.2193 0.6157 28.8203 1.3537 28.8203ZM12.5097 22.0523C12.5097 19.2912 14.7797 17.0352 17.5277 17.0352C20.2617 17.0352 22.5317 19.2912 22.5317 22.0523C22.5317 23.7893 21.6427 25.3343 20.3297 26.2223H14.7107C13.3987 25.3343 12.5097 23.7893 12.5097 22.0523ZM3.0487 22.7503H6.2207C6.9727 22.7503 7.5467 22.2033 7.5467 21.5333C7.5337 20.8633 6.9727 20.3163 6.2207 20.3163H3.0487C2.3107 20.3163 1.7497 20.8633 1.7497 21.5333C1.7497 22.2033 2.3107 22.7503 3.0487 22.7503ZM28.8207 22.7503H31.9927C32.7437 22.7503 33.2907 22.2033 33.2907 21.5333C33.2907 20.8633 32.7437 20.3163 31.9927 20.3163H28.8207C28.0687 20.3163 27.4937 20.8633 27.4937 21.5333C27.5077 22.2033 28.0817 22.7503 28.8207 22.7503Z"
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
            d="              M17.5277 11.1565C18.1287 11.1565 18.6347 10.6235 18.6347 9.9535V4.8265L18.4707 2.7615L19.4827 3.9235L21.1917 5.6605C21.3967 5.8515 21.6567 5.9745 21.9157 5.9745C22.4627 5.9745 22.8597 5.5915 22.8597 5.0585C22.8597 4.7715 22.7637 4.5525 22.5317 4.3335L18.2657 0.3555C17.9787 0.0955 17.7737 -0.0005 17.5277 -0.0005C17.2677 -0.0005 17.0627 0.0955 16.7757 0.3555L12.5097 4.3335C12.2777 4.5525 12.1817 4.7715 12.1817 5.0585C12.1817 5.5915 12.5777 5.9745 13.1247 5.9745C13.3847 5.9745 13.6447 5.8515 13.8497 5.6605L15.6957 3.7875L16.5707 2.7615L16.4067 4.8265V9.9535C16.4067 10.6235 16.9117 11.1565 17.5277 11.1565ZM24.5687 14.9565C25.0057 15.3805 25.7307 15.3805 26.2227 14.8745L28.6017 12.4965C29.1207 11.9905 29.0937 11.2925 28.6697 10.8555C28.2457 10.4175 27.5347 10.4175 27.0297 10.9235L24.6507 13.3025C24.1447 13.7945 24.1307 14.5335 24.5687 14.9565ZM10.4727 14.9565C10.8967 14.5195 10.8967 13.7945 10.3907 13.3025L8.0117 10.9235C7.5057 10.4175 6.8087 10.4315 6.3707 10.8555C5.9337 11.2795 5.9197 11.9905 6.4397 12.4965L8.8187 14.8745C9.3107 15.3805 10.0487 15.3945 10.4727 14.9565ZM1.1897 28.5335H33.8517C34.4937 28.5335 35.0407 28.0405 35.0407 27.4395C35.0407 26.8375 34.4937 26.3455 33.8517 26.3455H23.5707C24.4727 25.1285 24.9927 23.6245 24.9927 22.0115C24.9927 17.9105 21.6017 14.5195 17.5277 14.5195C13.4397 14.5195 10.0487 17.9105 10.0487 22.0115C10.0487 23.6245 10.5687 25.1285 11.4707 26.3455H1.1897C0.5467 26.3455 -0.0003 26.8375 -0.0003 27.4395C-0.0003 28.0405 0.5467 28.5335 1.1897 28.5335ZM12.2367 22.0115C12.2367 19.1135 14.6287 16.7205 17.5277 16.7205C20.4117 16.7205 22.8047 19.1135 22.8047 22.0115C22.8047 23.8165 21.8617 25.4155 20.4667 26.3455H14.5747C13.1797 25.4155 12.2367 23.8165 12.2367 22.0115ZM2.9667 22.7635H6.3297C7.0407 22.7635 7.5747 22.2715 7.5607 21.6565C7.5467 21.0405 7.0277 20.5485 6.3297 20.5485H2.9667C2.2557 20.5485 1.7497 21.0405 1.7497 21.6565C1.7497 22.2715 2.2557 22.7635 2.9667 22.7635ZM28.7107 22.7635H32.0747C32.7847 22.7635 33.2907 22.2715 33.2907 21.6565C33.2907 21.0405 32.7847 20.5485 32.0747 20.5485H28.7107C28.0137 20.5485 27.4667 21.0405 27.4807 21.6565C27.4937 22.2715 28.0137 22.7635 28.7107 22.7635Z"
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
            d="              M17.5277 11.4156C18.2247 11.4156 18.8127 10.8006 18.8127 10.0486V5.3866L18.5937 3.1716L19.5367 4.4026L20.9997 5.9476C21.2457 6.2206 21.5607 6.4116 21.9437 6.4116C22.5997 6.4116 23.0777 5.9336 23.0777 5.2906C23.0777 4.9216 22.9137 4.6206 22.6137 4.3336L18.4437 0.4236C18.1017 0.1226 17.8557 -0.0004 17.5277 -0.0004C17.1857 -0.0004 16.9397 0.1226 16.5977 0.4236L12.4277 4.3336C12.1267 4.6206 11.9627 4.9216 11.9627 5.2906C11.9627 5.9336 12.4417 6.4116 13.0977 6.4116C13.4807 6.4116 13.7947 6.2206 14.0407 5.9476L15.5997 4.3066L16.4477 3.1716L16.2287 5.3866V10.0486C16.2287 10.8006 16.8167 11.4156 17.5277 11.4156ZM24.5817 15.0256C25.0877 15.5316 25.9357 15.5176 26.4827 14.9566L28.6157 12.8376C29.1757 12.2776 29.1757 11.4566 28.6697 10.9376C28.1777 10.4456 27.3437 10.4456 26.7837 11.0056L24.6507 13.1386C24.0897 13.6856 24.0767 14.5336 24.5817 15.0256ZM10.4587 15.0256C10.9517 14.5196 10.9517 13.6856 10.3907 13.1386L8.2577 11.0056C7.6977 10.4456 6.8767 10.4456 6.3707 10.9376C5.8657 11.4436 5.8657 12.2776 6.4257 12.8376L8.5587 14.9566C9.1057 15.5176 9.9667 15.5316 10.4587 15.0256ZM1.4907 29.0386H33.5507C34.3707 29.0386 35.0407 28.3696 35.0407 27.5896C35.0407 26.7966 34.3847 26.1406 33.5507 26.1406H23.7617C24.5817 24.9926 25.0197 23.5836 25.0197 22.0936C25.0197 17.9516 21.6287 14.5606 17.5277 14.5606C13.4117 14.5606 10.0217 17.9516 10.0217 22.0936C10.0217 23.5836 10.4727 24.9926 11.2797 26.1406H1.4907C0.6697 26.1406 -0.0003 26.8106 -0.0003 27.5896C-0.0003 28.3556 0.6697 29.0386 1.4907 29.0386ZM12.7147 22.0936C12.7147 19.4276 14.8887 17.2816 17.5277 17.2816C20.1527 17.2816 22.3267 19.4276 22.3267 22.0936C22.3267 23.7756 21.4647 25.2796 20.2207 26.1406H14.8207C13.5767 25.2796 12.7147 23.7756 12.7147 22.0936ZM3.1177 22.7366H6.1387C6.9317 22.7366 7.5467 22.1486 7.5337 21.4376C7.5197 20.7266 6.9317 20.1526 6.1387 20.1526H3.1177C2.3377 20.1526 1.7497 20.7266 1.7497 21.4376C1.7497 22.1486 2.3517 22.7366 3.1177 22.7366ZM28.9027 22.7366H31.9237C32.7027 22.7366 33.2907 22.1486 33.2907 21.4376C33.2907 20.7266 32.7027 20.1526 31.9237 20.1526H28.9027C28.1227 20.1526 27.4937 20.7266 27.5077 21.4376C27.5217 22.1486 28.1227 22.7366 28.9027 22.7366Z"
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
            d="              M17.5277 10.0762C17.8007 10.0762 18.0337 9.8442 18.0337 9.5562V3.8552L17.9517 1.4352L19.3867 2.9392L21.6157 5.2092C21.7247 5.3182 21.8477 5.3592 21.9707 5.3592C22.2437 5.3592 22.4497 5.1682 22.4497 4.8812C22.4497 4.7172 22.3677 4.5802 22.2307 4.4432L17.8827 0.1782C17.7737 0.0682 17.6367 0.0002 17.5277 0.0002C17.4047 0.0002 17.2677 0.0682 17.1587 0.1782L12.8107 4.4432C12.6737 4.5802 12.5917 4.7172 12.5917 4.8812C12.5917 5.1682 12.7967 5.3592 13.0707 5.3592C13.1937 5.3592 13.3167 5.3182 13.4257 5.2092L15.6817 2.9122L17.0897 1.4352L17.0077 3.8552V9.5562C17.0077 9.8442 17.2407 10.0762 17.5277 10.0762ZM24.5687 14.0132C24.7597 14.1912 25.0877 14.1912 25.2797 14.0002L28.6697 10.6092C28.8887 10.3902 28.8747 10.1172 28.6697 9.9122C28.4927 9.7202 28.1777 9.6932 27.9727 9.9122L24.5687 13.3032C24.3907 13.4942 24.3767 13.8222 24.5687 14.0132ZM10.4727 14.0132C10.6507 13.8222 10.6507 13.4942 10.4727 13.3032L7.0687 9.9122C6.8637 9.6932 6.5627 9.7202 6.3707 9.9122C6.1657 10.1032 6.1527 10.3902 6.3707 10.6092L9.7617 14.0002C9.9527 14.1912 10.2817 14.1912 10.4727 14.0132ZM0.5607 26.7972H34.4807C34.7947 26.7972 35.0407 26.5922 35.0407 26.3042C35.0407 26.0312 34.7947 25.8122 34.4807 25.8122H22.8317C23.9807 24.5542 24.6777 22.8872 24.6777 21.0542C24.6777 17.1312 21.4517 13.9042 17.5277 13.9042C13.5897 13.9042 10.3637 17.1312 10.3637 21.0542C10.3637 22.8872 11.0607 24.5542 12.2087 25.8122H0.5607C0.2457 25.8122 -0.0003 26.0312 -0.0003 26.3042C-0.0003 26.5922 0.2457 26.7972 0.5607 26.7972ZM11.3617 21.0542C11.3617 17.6642 14.1227 14.9022 17.5277 14.9022C20.9177 14.9022 23.6797 17.6642 23.6797 21.0542C23.6797 22.9822 22.7777 24.7052 21.3827 25.8122H13.6587C12.2637 24.7052 11.3617 22.9822 11.3617 21.0542ZM2.2557 21.2052H7.0547C7.3557 21.2052 7.5607 20.9722 7.5607 20.7132C7.5467 20.4392 7.3417 20.2202 7.0547 20.2202H2.2557C1.9827 20.2202 1.7497 20.4392 1.7497 20.7132C1.7497 20.9722 1.9827 21.2052 2.2557 21.2052ZM27.9867 21.2052H32.7847C33.0727 21.2052 33.2907 20.9722 33.2907 20.7132C33.2907 20.4392 33.0727 20.2202 32.7847 20.2202H27.9867C27.7267 20.2202 27.4807 20.4392 27.4807 20.7132C27.4937 20.9722 27.7267 21.2052 27.9867 21.2052Z"
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
            d="              M17.5277 9.7614C17.7047 9.7614 17.8557 9.6114 17.8557 9.4334V3.5684L17.8007 1.0524L19.3727 2.6384L21.7387 5.0584C21.8207 5.1544 21.9027 5.1814 21.9847 5.1814C22.1757 5.1814 22.3267 5.0314 22.3267 4.8264C22.3267 4.6894 22.2577 4.5804 22.1347 4.4704L17.7737 0.1094C17.7047 0.0414 17.6097 0.0004 17.5277 0.0004C17.4317 0.0004 17.3357 0.0414 17.2677 0.1094L12.9067 4.4704C12.7837 4.5804 12.7147 4.6894 12.7147 4.8264C12.7147 5.0314 12.8657 5.1814 13.0567 5.1814C13.1387 5.1814 13.2207 5.1544 13.3027 5.0584L15.6677 2.6384L17.2407 1.0524L17.1857 3.5684V9.4334C17.1857 9.6114 17.3357 9.7614 17.5277 9.7614ZM10.4727 13.7264C10.5817 13.6034 10.5817 13.3844 10.4867 13.2894L6.7947 9.5974C6.6717 9.4744 6.4807 9.5024 6.3707 9.6254C6.2347 9.7614 6.2207 9.9254 6.3437 10.0484L10.0347 13.7404C10.1307 13.8354 10.3497 13.8354 10.4727 13.7264ZM24.5687 13.7264C24.6917 13.8354 24.9097 13.8354 25.0057 13.7404L28.6977 10.0484C28.8207 9.9254 28.8067 9.7614 28.6697 9.6254C28.5607 9.5024 28.3687 9.4744 28.2457 9.5974L24.5547 13.2894C24.4587 13.3844 24.4587 13.6034 24.5687 13.7264ZM0.3687 26.2914H34.6717C34.8767 26.2914 35.0407 26.1544 35.0407 25.9764C35.0407 25.7854 34.8767 25.6484 34.6717 25.6484H22.5997C23.8297 24.3904 24.5817 22.6684 24.5817 20.7674C24.5817 16.8844 21.4097 13.7124 17.5277 13.7124C13.6307 13.7124 10.4587 16.8844 10.4587 20.7674C10.4587 22.6684 11.2107 24.3904 12.4417 25.6484H0.3687C0.1637 25.6484 -0.0003 25.7854 -0.0003 25.9764C-0.0003 26.1544 0.1637 26.2914 0.3687 26.2914ZM11.1157 20.7674C11.1157 17.2404 13.9867 14.3694 17.5277 14.3694C21.0547 14.3694 23.9257 17.2404 23.9257 20.7674C23.9257 22.7224 23.0507 24.4864 21.6697 25.6484H13.3707C11.9907 24.4864 11.1157 22.7224 11.1157 20.7674ZM2.0367 20.7404H7.2597C7.4377 20.7404 7.5607 20.5894 7.5607 20.4254C7.5607 20.2614 7.4237 20.1114 7.2597 20.1114H2.0367C1.9007 20.1114 1.7497 20.2614 1.7497 20.4254C1.7497 20.5894 1.9007 20.7404 2.0367 20.7404ZM27.7817 20.7404H33.0037C33.1677 20.7404 33.2907 20.5894 33.2907 20.4254C33.2907 20.2614 33.1677 20.1114 33.0037 20.1114H27.7817C27.6307 20.1114 27.4807 20.2614 27.4807 20.4254C27.4807 20.5894 27.6307 20.7404 27.7817 20.7404Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
