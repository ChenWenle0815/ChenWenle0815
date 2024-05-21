package main

import (
	"encoding/json"
	"net/http"
	"github.com/sirupsen/logrus"
)

// 定义一个结构体来模拟AxiosResponse接口
type AxiosResponse struct {
	Data       interface{}            `json:"data"`
	Status     int                    `json:"status"`
	StatusText string                 `json:"statusText"`
	Headers    map[string]string      `json:"headers"` // 简化为map[string]string，实际使用时可根据需要调整
	Config     map[string]interface{} `json:"config"`  // 简化为map[string]interface{}，实际使用时可根据需要调整
	Request    interface{}            `json:"request,omitempty"` // 可选字段
}

func main() {
	// 设置logrus的日志格式为文本格式
	logrus.SetFormatter(&logrus.TextFormatter{})
	// 设置日志级别为Info级别
	logrus.SetLevel(logrus.InfoLevel)

	http.HandleFunc("/test", func(w http.ResponseWriter, r *http.Request) {
		// 记录接收到的请求
		logrus.Info("Received request for /test")

		// 构造响应数据
		response := AxiosResponse{
			Data:       map[string]string{"message": "This is a test message"},
			Status:     http.StatusOK,
			StatusText: "OK",
			Headers:    map[string]string{"Content-Type": "application/json"},
			Config:     map[string]interface{}{"method": "GET"},
			// Request字段可以根据实际情况填充，这里省略
		}

		// 设置响应头的Content-Type为application/json
		w.Header().Set("Content-Type", "application/json")

		// 将数据编码为JSON，并写入响应
		err := json.NewEncoder(w).Encode(response)
		if err != nil {
			// 记录编码失败的错误
			logrus.Error("Failed to encode response: ", err)
			http.Error(w, "Failed to encode response", http.StatusInternalServerError)
			return
		}
	})

	// 启动HTTP服务器，默认监听在8080端口
	logrus.Info("Server started on port 8080")
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		// 记录启动服务器失败的错误
		logrus.Fatal("Failed to start server: ", err)
	}
}
