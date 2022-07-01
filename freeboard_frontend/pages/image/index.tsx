import styled from "@emotion/styled";


export default function Image() {
  return (
    <>
      <Boxes>
        <Box
          style="--src: url(https://i.scdn.co/image/ab67616d00001e020ecc8c4fd215d9eb83cbfdb3)"
        >
          <span>1</span>
          <img src="https://i.scdn.co/image/ab67616d00001e020ecc8c4fd215d9eb83cbfdb3" />
        </Box>
        <Box
          style="--src: url(https://i.scdn.co/image/ab67616d00001e02d9194aa18fa4c9362b47464f)"
        >
          <span>2</span>
          <img src="https://i.scdn.co/image/ab67616d00001e02d9194aa18fa4c9362b47464f" />
        </Box>
        <Box
          style="--src: url(https://i.scdn.co/image/ab67616d00001e02a7ea08ab3914c5fb2084a8ac)"
        >
          <span>3</span>
          <img src="https://i.scdn.co/image/ab67616d00001e02a7ea08ab3914c5fb2084a8ac" />
        </Box>
        <Box
          style="--src: url(https://i.scdn.co/image/ab67616d00001e0213ca80c3035333e5a6fcea59)"
        >
          <span>4</span>
          <img src="https://i.scdn.co/image/ab67616d00001e0213ca80c3035333e5a6fcea59" />
        </Box>
        <Box

          style="--src: url(https://i.scdn.co/image/ab67616d00001e02df04e6071763615d44643725)"
        >
          <span>5</span>
          <img src="https://i.scdn.co/image/ab67616d00001e02df04e6071763615d44643725" />
        </Box>
        <Box          style="--src: url(https://i.scdn.co/image/ab67616d00001e0239c7302c04f8d06f60e14403)"
        >
          <span>6</span>
          <img src="https://i.scdn.co/image/ab67616d00001e0239c7302c04f8d06f60e14403" />
        </Box>
        <Box
          style="--src: url(https://i.scdn.co/image/ab67616d00001e021c0bcf8b536295438d26c70d)"
        >
          <span>7</span>
          <img src="https://i.scdn.co/image/ab67616d00001e021c0bcf8b536295438d26c70d" />
        </Box>
        <Box
          style="--src: url(https://i.scdn.co/image/ab67616d00001e029bbd79106e510d13a9a5ec33)"
        >
          <span>8</span>
          <img src="https://i.scdn.co/image/ab67616d00001e029bbd79106e510d13a9a5ec33" />
        </Box>
        <Box
          style="--src: url(https://i.scdn.co/image/ab67616d00001e021d97ca7376f835055f828139)"
        >
          <span>9</span>
          <img src="https://i.scdn.co/image/ab67616d00001e021d97ca7376f835055f828139" />
        </Box>
        <Box
          style="--src: url(https://i.scdn.co/image/ab67706c0000bebb30677d72001e25584b0fbb37)"
        >
          <span>10</span>
          <img src="https://i.scdn.co/image/ab67706c0000bebb30677d72001e25584b0fbb37" />
        </Box>
        <Box class="controls">
          <button class="next">
            <span>Previous album</span>
            <svg viewBox="0 0 448 512" width="100" title="Previous Album">
              <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
            </svg>
          </button>
          <button class="prev">
            <span>Next album</span>
            <svg viewBox="0 0 448 512" width="100" title="Next Album">
              <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
            </svg>
          </button>
        </Box>
      </Box>
      <svg class="scroll-icon" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M20 6H23L19 2L15 6H18V18H15L19 22L23 18H20V6M9 3.09C11.83 3.57 14 6.04 14 9H9V3.09M14 11V15C14 18.3 11.3 21 8 21S2 18.3 2 15V11H14M7 9H2C2 6.04 4.17 3.57 7 3.09V9Z"
        ></path>
      </svg>
      <Box class="drag-proxy"></Box>
    </>
  );
}
