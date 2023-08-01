import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Layout from '../../layouts/alpha'

const ElementHomeLanding = () => {
    return (
        <Layout>
            <Grid container direction="row" justifyContent="center" >
                <Grid item xs={12} md={6}>
                    <Box sx={{ px: { xs: 2, md: 20 }, height: "50vh", bgcolor: '#f5f5f5', display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <Box sx={{ display: 'flex', flex: 1, flexDirection: "column", justifyContent: "space-evenly" }}>
                            <Typography variant="h4" component="div" sx={{ color: '#19385d', fontWeight: 500 }}>
                                The Only Mobile Game Treatment For Social Anxiety Disorder
                            </Typography>
                            <Typography variant="body1" component="p" sx={{ color: '#000000', width: 386 }}>
                                StarStarter Rx is a fun, mobile game that re-trains your attention to help you reduce the severity of social
                                anxiety symptoms.
                            </Typography>
                            <Box sx={{ bgcolor: '#f5f5f5', display: 'flex', flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
                                <Typography variant="h2" component="div" sx={{ color: '#19385d', fontSize: 30, fontWeight: 700, mb: 1 }}>
                                    $49.99
                                </Typography>
                                <Button variant="contained" color="primary" startIcon={<ShoppingCartIcon />} size="large" fullWidth >
                                    Buy Now
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{ px: { xs: 2, md: 10 }, height: "50vh", bgcolor: '#19385d', display: 'flex', justifyContent: "center", alignItems: "center", }}>
                        <img
                            alt="Ssrx app store"
                            src="https://generation-sessions.s3.amazonaws.com/aa3adf4eda7863db495d13364c6994ce/img/ssrx-app-store-screens-1-2.png"
                            style={{ height: "30vh", objectFit: 'cover' }}
                        />
                    </Box>
                </Grid>
                {/* Continue with the rest of the layout in a similar manner */}
            </Grid>
        </Layout>
    );
};

export default ElementHomeLanding;
