import{ Wr , Glass , Header , My , Profile , Face, Name,
    Arrow , WrIn , TopSearch , Nav , Notice , Event , Faq , Qna,
    Contents , Title , Question , ArrowRight , Footer , HomeImg , FootText , Home , FootTextt
} from '../../styles/emotion'


export default function Emotion(){

    return(
        <Wr>
            <WrIn>
                <TopSearch>
                    <Glass src="/glass.svg" alt="" />
                </TopSearch>
                <Header>
                    <Profile>
                        <My>마이</My>
                        <Face src="/Ha.png" alt="" />
                        <Name>내승현</Name>
                        <Arrow src="/arrow.svg" alt="" />
                    </Profile>
                </Header>
                <Nav>
                    <Notice>공지사항</Notice>
                    <Event>이벤트</Event>
                    <Faq>FAQ</Faq>
                    <Qna>Q&A</Qna>
                </Nav>
                <hr />
                <Contents>
                    <Title>Q.01</Title>
                    <Question>리뷰 작성은 어떻게 하나요?<ArrowRight src="/arrow-right.svg" alt="" /></Question>
                    <Title>Q.02</Title>
                    <Question>리뷰 수정/삭제는 어떻게 하나요?<ArrowRight src="/arrow-right.svg" alt="" /></Question>
                    <Title>Q.03</Title>
                    <Question>아이디/비밀번호를 잊어버렸어요.<ArrowRight src="/arrow-right.svg" alt="" /></Question>
                    <Title>Q.04</Title>
                    <Question>회원탈퇴를 하고싶어요.<ArrowRight src="/arrow-right.svg" alt="" /></Question>
                    <Title>Q.05</Title>
                    <Question>출발지 설정은 어떻게 하나요?<ArrowRight src="/arrow-right.svg" alt="" /></Question>
                    <Title>Q.06</Title>
                    <Question>비밀번호를 변경하고 싶어요.<ArrowRight src="/arrow-right.svg" alt="" /></Question>
                </Contents>
            </WrIn>
            <Footer>
                <Home>
                    <HomeImg src="/home.svg" alt="" />
                    <FootText>홈</FootText>
                </Home>
                <Home>
                    <HomeImg src="/road.svg" alt="" />
                    <FootText>잇츠로드</FootText>
                </Home>
                <Home>
                    <HomeImg src="/heart.svg" alt="" />
                    <FootText>마이찜</FootText>
                </Home>
                <Home>
                    <HomeImg src="/my.svg" alt="" />
                    <FootTextt>마이</FootTextt>
                </Home>
            </Footer>
        </Wr>
    )

}