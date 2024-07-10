'use client'
import { Button, Card, CardBody, CardFooter, CardHeader, Tab, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

export default function InvestmentsSection() {
    const router = useRouter()
    return (
        <div>
            <h3>Investments</h3>
            <Tabs value='0'>
                <TabsHeader
                    className="rounded-none border-b border-primary bg-transparent p-0"
                    indicatorProps={{
                        className:
                            "bg-transparent border-b-2 border-primary shadow-none rounded-none",
                    }}>
                    <Tab className="text-sm py-4" key='0' value='0'>All-100%</Tab>
                    <Tab className="text-sm py-4" key='1' value='1'>IDFC First-70%</Tab>
                    <Tab className="text-sm py-4" key='2' value='2'>External-30%</Tab>
                </TabsHeader>
                <TabsBody>
                    <Card className="my-4 shadow-default mx-1">
                        <CardBody className="flex justify-between">
                            <span>Retirement Portfolio</span>
                            <span className="font-bold">₹ 5,80,000</span>
                        </CardBody>
                    </Card>

                    <Card className="my-4 shadow-default mx-1">
                        <CardBody className="flex justify-between">
                            <span>Rainy Day Portfolio</span>
                            <span className="font-bold">₹ 1,20,000</span>
                        </CardBody>
                    </Card>
                </TabsBody>
            </Tabs>
            <Card className="shadow-none my-6 w-full bg-purple-gradient">
                <CardBody>
                    <div className="text-xl font-bold">Help me consolidate your investments</div>
                    <div className="flex mt-2">
                        <div className="flex-1 text-sm">Before we can offer advice, would you like me to bring in your externally held assets so I can better understand the whole picture?</div>
                        <div className="flex-2"><img src='/robot.png' /></div>
                    </div>
                </CardBody>

                <CardFooter>
                    <Button onClick={() => router.push('/risk-assessment')} className="rounded-full bg-primary">Yes</Button>
                </CardFooter>
            </Card>
        </div>
    )
}