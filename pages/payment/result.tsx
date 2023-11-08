import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Layout from '../../layouts/alpha';
import Link from '@mui/material/Link';

interface StepsCardProps {
    iconNode: ReactNode;
    label: string;
}

function StepsCard({ iconNode, label }: StepsCardProps) {
    return (
        <Grid item xs={12} sm={4} lg={4} xl={4}>
            <Box>
                <CardContent
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    {iconNode}

                </CardContent>
                <CardContent

                >
                    <Typography color="text.primary" align="center" sx={{ fontWeight: 700, fontSize: { xs: 16, sm: 18, md: 20 } }}>
                        {label}
                    </Typography>
                </CardContent>
            </Box>
        </Grid>
    );
};

const PaymentSuccess = () => {
    const router = useRouter();
    const { data, error } = useSWR(
        router.query.session_id ?
            `../api/checkout_sessions/${router.query.session_id}`
            : null,
        (url) => fetch(url).then(res => res.json())
    );

    return (
        <Layout rightIcon={'Download Instructions for Use'}>
            <Container component="main" sx={{ flex: 1, display: "flex", flexDirection: 'column', alignItems: 'center', }}>
                <img
                    alt="T3"
                    src="https://sandbox-next-stripe-tsc.vercel.app/images/t3-dark.svg"
                    style={{ position: 'absolute', top: 35, width: 212, height: 75 }}
                />



                <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', pt: 10, pb: { xs: 0, sm: 0, md: 5, } }}>

                    <Typography variant='h2' textAlign={'center'} sx={{ fontSize: { xs: 28, sm: 38, md: 48 } }}>
                        Account Successfully Created!
                    </Typography>
                    <Typography color="text.primary" gutterBottom align="center" sx={{ fontSize: { xs: 14, sm: 19, md: 20 }, mt: 1 }}>
                        {'Now Let\'s Get You Started...'}
                    </Typography>
                </Grid>

                <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row', }}>
                    <StepsCard
                        iconNode={
                            <svg width="80" height="80" viewBox="0 0 137 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="68.5" cy="68.5" r="68.5" fill="#FFBD02" />
                                <g clipPath="url(#clip0_188_587)" transform="translate(39.5, 35)"> {/* Apply 'transform' here */}
                                    <path d="M58.1637 59H4.83633C3.26958 59 2 57.7353 2 56.1746V46.5932C2 45.0325 3.26958 43.7678 4.83633 43.7678C6.40308 43.7678 7.67266 45.0325 7.67266 46.5932V53.3492H55.3273V46.5932C55.3273 45.0325 56.5969 43.7678 58.1637 43.7678C59.7304 43.7678 61 45.0325 61 46.5932V56.1746C61 57.7353 59.7304 59 58.1637 59Z" fill="#19385D" />
                                    <path d="M31.5008 45.8235C29.9341 45.8235 28.6645 44.5588 28.6645 42.9981V4.82541C28.6645 3.26469 29.9341 2 31.5008 2C33.0676 2 34.3372 3.26469 34.3372 4.82541V42.9965C34.3372 44.5572 33.0676 45.8219 31.5008 45.8219V45.8235Z" fill="#19385D" stroke="#FFBD02" />
                                    <path d="M31.5008 45.8235C30.748 45.8235 30.0265 45.5258 29.4949 44.9963L13.7647 29.3266C12.6569 28.2231 12.6569 26.4337 13.7647 25.3302C14.8725 24.2267 16.6687 24.2267 17.7765 25.3302L31.5008 39.0017L45.3539 25.2019C46.4617 24.0984 48.258 24.0984 49.3657 25.2019C50.4735 26.3055 50.4735 28.0948 49.3657 29.1983L33.5067 44.9963C32.9751 45.5258 32.2537 45.8235 31.5008 45.8235Z" fill="#19385D" stroke="#FFBD02" />
                                    <rect x="29" y="35" width="5" height="6" fill="#19385D" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_188_587">
                                        <rect width="59" height="57" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>


                        }
                        label={'1. Click the link below for your phone type to download and install the game on your phone.'}
                    />
                    <StepsCard
                        iconNode={
                            <svg width="80" height="80" viewBox="0 0 137 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="68.5" cy="68.5" r="68.5" fill="#FFBD02" />
                                <g clipPath="url(#clip0_188_560)">
                                    <path d="M71.7536 88.2561L66.1276 88.1974C65.2486 88.1974 64.5453 87.4737 64.5453 86.5934C64.5453 85.7132 65.2681 85.009 66.1276 85.009L71.7536 85.0677C72.6327 85.0677 73.3359 85.7915 73.3359 86.6717C73.3359 87.5519 72.6131 88.2561 71.7536 88.2561Z" fill="#19385D" />
                                    <path d="M49.7383 80.3341C48.8592 80.3341 48.156 79.6299 48.156 78.7497V75.5809L48.2341 42.6606L48.156 29.2813C48.156 25.5648 51.1643 22.5329 54.8759 22.5329H82.9863C86.6979 22.5329 89.7063 25.5452 89.7063 29.2617V40.7828C89.7063 41.663 89.003 42.3672 88.124 42.3672C87.2449 42.3672 86.5416 41.663 86.5416 40.7828V29.2617C86.5416 27.3057 84.9593 25.7017 82.9863 25.7017H54.8759C52.9224 25.7017 51.3206 27.2861 51.3206 29.2617L51.3987 42.6411L51.3206 78.7301C51.3206 79.6103 50.6173 80.3145 49.7383 80.3145V80.3341Z" fill="#19385D" />
                                    <path d="M81.5408 94.3394H59.5252C58.6461 94.3394 57.9429 93.6352 57.9429 92.755C57.9429 91.8748 58.6461 91.1706 59.5252 91.1706H81.5408C82.4198 91.1706 83.1231 91.8748 83.1231 92.755C83.1231 93.6352 82.4198 94.3394 81.5408 94.3394Z" fill="#19385D" />
                                    <path d="M70.601 30.2397H67.2411C66.362 30.2397 65.6588 29.5356 65.6588 28.6554C65.6588 27.7751 66.362 27.071 67.2411 27.071H70.601C71.4801 27.071 72.1833 27.7751 72.1833 28.6554C72.1833 29.5356 71.4801 30.2397 70.601 30.2397Z" fill="#19385D" />
                                    <path d="M97.7933 94.3394C97.5198 94.3394 97.2268 94.2611 96.9728 94.1047C96.2305 93.6352 95.9961 92.6572 96.4454 91.9139C96.4844 91.8356 101.368 83.6594 101.368 71.1015C101.368 62.0842 93.9449 49.2721 89.7059 42.6997V64.8617C89.7059 65.742 89.0027 66.4461 88.1236 66.4461C87.2445 66.4461 86.5413 65.742 86.5413 64.8617V37.5162C86.5413 36.8316 86.9906 36.2252 87.6352 36.0101C88.2799 35.7949 89.0027 36.0101 89.4129 36.5773C90.038 37.4184 104.572 57.5266 104.572 71.1015C104.572 84.6765 99.3951 93.2244 99.1802 93.5765C98.8872 94.0655 98.3598 94.3394 97.8323 94.3394H97.7933Z" fill="#19385D" />
                                    <path d="M98.4969 100.716H83.2012C81.404 100.716 79.9585 99.2491 79.9585 97.4691V94.4372C79.9585 92.6376 81.4236 91.1902 83.2012 91.1902H98.4969C100.294 91.1902 101.74 92.6572 101.74 94.4372V97.4691C101.74 99.2686 100.275 100.716 98.4969 100.716ZM83.2012 94.3394L83.1231 97.4495L98.4969 97.5278C98.4969 97.5278 98.575 97.4886 98.575 97.4495V94.4176C98.575 94.4176 98.536 94.3394 98.4969 94.3394H83.2012Z" fill="#19385D" />
                                    <path d="M84.2366 94.3394C83.8068 94.3394 83.3966 94.1633 83.084 93.8504C82.791 93.5374 75.7976 86.0066 76.8134 75.4048C77.1064 72.4317 76.3641 69.4193 74.7427 66.9352C74.7232 66.896 74.6841 66.8569 74.6646 66.7982L71.6562 61.0866C69.7028 58.0351 70.5818 53.9666 73.6097 51.9714C76.6571 49.9762 80.7789 50.8369 82.7715 53.8883L94.883 73.5466C95.3518 74.2899 95.1174 75.2679 94.3751 75.7374C93.6327 76.2068 92.656 75.9721 92.1872 75.2288L80.0952 55.6096C79.0794 54.0448 76.9306 53.6145 75.3483 54.6512C74.5864 55.1598 74.059 55.9226 73.8636 56.842C73.6683 57.7417 73.8636 58.6611 74.352 59.4435C74.3715 59.4826 74.4106 59.5217 74.4301 59.5804L77.4385 65.2921C79.431 68.3631 80.3296 72.06 79.9585 75.7374C79.0794 84.9112 85.311 91.6205 85.3696 91.6792C85.9751 92.3246 85.9361 93.3222 85.311 93.9286C84.9984 94.222 84.6077 94.3589 84.217 94.3589L84.2366 94.3394Z" fill="#19385D" />
                                    <path d="M40.1077 108.11C39.5802 108.11 39.0528 107.836 38.7598 107.347C38.5449 106.995 33.3682 98.3688 33.3682 84.8721C33.3682 71.3754 47.8825 51.189 48.5076 50.3479C49.0155 49.6437 50.0118 49.4872 50.7346 49.9958C51.4378 50.5044 51.5941 51.502 51.0862 52.2257C50.9494 52.4213 36.5524 72.3534 36.5524 84.8721C36.5524 97.3908 41.436 105.606 41.4751 105.684C41.9244 106.428 41.69 107.406 40.9477 107.875C40.6937 108.032 40.4007 108.11 40.1272 108.11H40.1077Z" fill="#19385D" />
                                    <path d="M55.0517 114.467H39.0528C37.451 114.467 36.1617 113.157 36.1617 111.572V107.836C36.1617 106.232 37.4705 104.922 39.0528 104.922H55.0517C56.6536 104.922 57.9429 106.232 57.9429 107.836V111.572C57.9429 113.176 56.634 114.467 55.0517 114.467ZM39.3263 111.279H54.7782V108.09H39.3263V111.279Z" fill="#19385D" />
                                    <path d="M53.6645 108.11C53.2738 108.11 52.8831 107.973 52.5705 107.68C51.9259 107.073 51.9064 106.076 52.5119 105.43C52.5705 105.371 57.4151 100.11 57.9621 92.6376C58.0403 91.5813 58.0207 90.5251 57.923 89.4688C57.5714 85.7914 58.47 82.0945 60.443 79.0235L63.4514 73.3118C63.4514 73.3118 63.4904 73.2336 63.5295 73.1749C64.0374 72.4121 64.2132 71.4732 64.0179 70.5734C63.8225 69.6736 63.2951 68.8912 62.5332 68.3826C61.7714 67.874 60.8337 67.698 59.9351 67.8936C59.0365 68.0892 58.2551 68.6173 57.7472 69.3802L45.6748 88.9602C45.206 89.7035 44.2292 89.9383 43.4869 89.4688C42.7446 88.9993 42.5102 88.0213 42.979 87.278L55.071 67.6589C56.0673 66.1332 57.5519 65.116 59.2905 64.7639C61.0291 64.4118 62.7872 64.7444 64.2718 65.7028C65.7565 66.6809 66.7723 68.1674 67.1239 69.8888C67.4755 71.5905 67.163 73.351 66.2253 74.818L63.2169 80.5297C63.2169 80.5297 63.1779 80.6079 63.1388 80.6666C61.5174 83.1508 60.7946 86.1435 61.0681 89.1363C61.1853 90.3686 61.2049 91.6009 61.1072 92.8332C60.4821 101.479 55.0319 107.328 54.7975 107.582C54.4849 107.914 54.0747 108.071 53.6449 108.071L53.6645 108.11Z" fill="#19385D" />
                                    <path d="M81.5408 114.467C80.6617 114.467 79.9585 113.763 79.9585 112.883V94.4176C79.9585 93.5374 80.6617 92.8332 81.5408 92.8332C82.4198 92.8332 83.1231 93.5374 83.1231 94.4176V112.883C83.1231 113.763 82.4198 114.467 81.5408 114.467Z" fill="#19385D" />
                                    <path d="M100.177 114.467C99.2978 114.467 98.5946 113.763 98.5946 112.883V94.4176C98.5946 93.5374 99.2978 92.8332 100.177 92.8332C101.056 92.8332 101.759 93.5374 101.759 94.4176V112.883C101.759 113.763 101.056 114.467 100.177 114.467Z" fill="#19385D" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_188_560">
                                        <rect width="71.2039" height="91.9342" fill="white" transform="translate(33.3487 22.5329)" />
                                    </clipPath>
                                </defs>
                            </svg>

                        }
                        label={'2. Login to the app using the account information you just created.'}
                    />
                    <StepsCard
                        iconNode={
                            <svg width="80" height="80" viewBox="0 0 137 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="68.5" cy="68.5" r="68.5" fill="#FFBD02" />
                                <g clipPath="url(#clip0_188_561)">
                                    <path d="M68.6805 114.125C93.7787 114.125 114.125 93.7785 114.125 68.6803C114.125 43.5821 93.7787 23.2359 68.6805 23.2359C43.5823 23.2359 23.2361 43.5821 23.2361 68.6803C23.2361 93.7785 43.5823 114.125 68.6805 114.125Z" stroke="#19385D" strokeWidth="3.56" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M68.6805 104.724C88.4275 104.724 104.436 88.7157 104.436 68.9686C104.436 49.2216 88.4275 33.2134 68.6805 33.2134C48.9334 33.2134 32.9253 49.2216 32.9253 68.9686C32.9253 88.7157 48.9334 104.724 68.6805 104.724Z" stroke="#19385D" strokeWidth="3.56" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M68.6802 68.7433V54.3043" stroke="#19385D" strokeWidth="3.56" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M68.2657 68.6802H77.3599" stroke="#19385D" strokeWidth="3.56" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M68.6802 38.1617V41.7309" stroke="#19385D" strokeWidth="3.56" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M68.6802 95.6386V99.1988" stroke="#19385D" strokeWidth="3.56" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M38.1617 68.6802H41.7309" stroke="#19385D" strokeWidth="3.56" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M95.6389 68.6803H99.1991" stroke="#19385D" strokeWidth="3.56" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_188_561">
                                        <rect width="94.0974" height="94.0974" fill="white" transform="translate(21.6316 21.6316)" />
                                    </clipPath>
                                </defs>
                            </svg>

                        }
                        label={'3. Block out 15 minutes in the day to start the game and complete your first session!'}
                    />
                </Grid>
                
                <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row', }} >
                    <Grid item xs={12}>
                        <Box sx={{ px: { xs: 2, md: 10 }, display: 'flex', justifyContent: "center", alignItems: "center", }}>
                            <img
                                alt="Ssrx app store"
                                src="https://generation-sessions.s3.amazonaws.com/aa3adf4eda7863db495d13364c6994ce/img/ssrx-app-store-screens-1-2.png"
                                style={{ height: 300, objectFit: 'cover' }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Layout >
    );
};

export default PaymentSuccess;
