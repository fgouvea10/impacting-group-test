import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { usePage } from "../../hooks/page";
import { client } from "../../services/client";
import type { Page as PageType } from "../../contexts/PageContext";

interface Post {
  title: string;
  category: string;
}

export function Page() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isFetchingPosts, setIsFetchingPosts] = useState(false);

  const { name: routeName } = useRoute();
  const { pages } = usePage();

  const pageInfo: PageType = Object.assign(
    {},
    ...pages.filter((page) => page.title === routeName)
  );

  const listPostsForPage = async () => {
    setIsFetchingPosts(true);

    try {
      const { data } = await client.get<Post[]>("/posts");
      const mappedPost = data.map((post) => ({
        title: post.title,
        category: post.category,
      }));
      setPosts(mappedPost);
    } catch (err) {
      setPosts([]);
    } finally {
      setIsFetchingPosts(false);
    }
  };

  useEffect(() => {
    listPostsForPage();
  }, []);

  if (isFetchingPosts)
    return (
      <View style={styles["centered-container"]}>
        <Text>Carregando o conteúdo...</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      {pageInfo && pageInfo?.content?.length ? (
        <>
          {pageInfo?.content?.map((contentItem) => {
            const categories = contentItem.properties.categories;
            const contents = categories.flatMap((category) => {
              return posts.filter((post) => post.category === category);
            });

            return (
              <View key={contentItem.title} style={styles["content-type-view"]}>
                <Text style={styles["content-type-title"]}>
                  {contentItem.title}
                </Text>
                <View>
                  {contents.map((item, index) => (
                    <View key={item.title} style={styles["content-type-flex"]}>
                      <FontAwesome name="bank" size={16} color="#000" />
                      <Text style={styles["content-type-text"]}>
                        {item.title}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            );
          })}
        </>
      ) : (
        <View style={styles["centered-container"]}>
          <Text>Esta página não possui conteúdo</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 102,
    marginTop: getStatusBarHeight(),
    backgroundColor: '#FFF',
  },
  "content-type-view": {
    marginTop: 24,
    width: "100%",
  },
  "content-type-title": {
    padding: 8,
    backgroundColor: "#F8F8F8",
    width: "100%",
    textAlign: "center",
    fontSize: 16,
  },
  "content-type-flex": {
    marginTop: 8,
    marginHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  "content-type-text": {
    marginLeft: 12,
  },
  "centered-container": {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
