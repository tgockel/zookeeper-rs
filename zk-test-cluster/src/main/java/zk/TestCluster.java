package zk;

import org.apache.curator.test.TestingCluster;
import org.apache.zookeeper.WatchedEvent;
import org.apache.zookeeper.Watcher;
import org.apache.zookeeper.ZooKeeper;

public class TestCluster {
    public static void main(String[] args) throws Exception {
        final TestingCluster cluster = new TestingCluster(2);

        cluster.start();

        // Wait until servers start up properly
        ZooKeeper zooKeeper = new ZooKeeper(cluster.getConnectString(), 5000, new Watcher() {
            @Override
            public void process(WatchedEvent event) {
                if (event.getState() == Event.KeeperState.SyncConnected) {
                    System.out.println(cluster.getConnectString());
                }
            }
        });

        int c;
        while ((c = System.in.read()) != -1) {
            switch (c) {
                case 'q':
                    zooKeeper.close();
                    cluster.close();
                    System.out.println("Servers closed");
                    System.exit(0);
            }
        }
    }
}
