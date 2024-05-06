'use client'
import { Grid, Box, Typography, Stack } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components
import ProfitExpenses from '@/app/(DashboardLayout)/components/dashboard/ProfitExpenses';
import TrafficDistribution from '@/app/(DashboardLayout)/components/dashboard/TrafficDistribution';
import UpcomingSchedules from '@/app/(DashboardLayout)/components/dashboard/UpcomingSchedules';
import TopPayingClients from '@/app/(DashboardLayout)/components/dashboard/TopPayingClients';
import Blog from '@/app/(DashboardLayout)/components/dashboard/Blog';
import ProductSales from '@/app/(DashboardLayout)/components/dashboard/ProductSales';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from "next/link";
import AuthLogin from "@/app/authentication/auth/AuthLogin";


const Dashboard = () => {
  const { user, isLoading } = useUser();
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        {!isLoading && !user && (
          <AuthLogin
            subtext={
              <Typography
                variant="subtitle1"
                textAlign="center"
                color="textSecondary"
                mb={1}
              >
                Pro-forma modeling for CFOs
              </Typography>
            }
            subtitle={
              <Stack
                direction="row"
                spacing={1}
                justifyContent="center"
                mt={3}
              >
                <Typography
                  color="textSecondary"
                  variant="h6"
                  fontWeight="500"
                >
                  New to Fortell?
                </Typography>
                <Typography
                  component={Link}
                  href="/api/auth/login"
                  fontWeight="500"
                  sx={{
                    textDecoration: "none",
                    color: "primary.main",
                  }}
                >
                  Create an account
                </Typography>
              </Stack>
            }
          />)
        }
        {user && (
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <ProfitExpenses />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TrafficDistribution />
              </Grid>
              <Grid item xs={12}>
                <ProductSales />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <UpcomingSchedules />
          </Grid>
          <Grid item xs={12} lg={8}>
            <TopPayingClients />
          </Grid>
          <Grid item xs={12}>
            <Blog />
          </Grid>
        </Grid>
        )}
      </Box>
    </PageContainer>
  )
}

export default Dashboard;
