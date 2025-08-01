import {useQuery} from "@tanstack/react-query";
import {fetchCoinHistory} from "../api";
import ApexChart from "react-apexcharts";

interface IHistorical {
    time_open:string;
    time_close:string;
    open:number;
    high:number;
    low:number;
    close:number;
    volume:number;
    market_cap:number;
}

interface ChartProps {
    coinId: string;
}

function Chart({coinId}:ChartProps) {

    const { isLoading, data } = useQuery<IHistorical[]>({queryKey: ["ohlcv", coinId], queryFn: () => fetchCoinHistory(coinId)});

    return (
        <div>
            {isLoading ? ("Loading Chart ...") : (
                <ApexChart
                    type = "line"
                    series = {[
                        {
                            name : "Price",
                            data : data?.map((price)=>price.close) as number[],
                        }
                    ]}
                    options = {{
                        theme :{
                            mode : "dark"
                        },
                        chart : {
                            height : 300,
                            width : 500,
                            toolbar : {
                                show : false,
                            },
                            background : "transparent",
                        },
                        grid : {
                            show : false,
                        },
                        stroke : {
                            curve : "smooth",
                            width : 5,
                        },
                        xaxis : {
                            axisBorder : {
                                show : false,
                            },
                            axisTicks : {
                              show : false,
                            },
                            labels : {
                                show : false,
                            }
                        },
                        yaxis : {
                            show : false,
                        }
                    }}


            />)}
        </div>
    );
}

export default Chart;